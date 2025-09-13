import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import connectMongoose from "../../../../../lib/mongoose";
import Meeting from "../../../../models/Meeting";

// Google Calendar API setup
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS;
const CREDENTIALS = GOOGLE_CREDENTIALS ? JSON.parse(GOOGLE_CREDENTIALS) : null;

const auth = CREDENTIALS
  ? new google.auth.JWT(
      CREDENTIALS.client_email,
      null,
      CREDENTIALS.private_key,
      SCOPES
    )
  : null;

const calendar = auth ? google.calendar({ version: "v3", auth }) : null;

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function PUT(req, { params }) {
  try {
    if (!calendar) {
      console.error(
        "Google Calendar API not initialized. Check GOOGLE_CREDENTIALS."
      );
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.NEXT_PUBLIC_ADMIN_API_KEY) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;
    const { startTime, endTime } = await req.json();

    await connectMongoose();

    const meeting = await Meeting.findById(id);
    if (!meeting) {
      return NextResponse.json(
        { message: "Meeting not found" },
        { status: 404 }
      );
    }

    // Update Google Calendar event
    await calendar.events.patch({
      calendarId: "primary",
      eventId: meeting.googleCalendarEventId,
      resource: {
        start: { dateTime: new Date(startTime).toISOString() },
        end: { dateTime: new Date(endTime).toISOString() },
      },
    });

    // Update meeting in database
    meeting.startTime = startTime;
    meeting.endTime = endTime;
    meeting.status = "Rescheduled";
    await meeting.save();

    // Send reschedule confirmation email
    await transporter.sendMail({
      from: `"Jenisys" <${process.env.EMAIL_USER}>`,
      to: meeting.userEmail,
      subject: `Rescheduled: Your ${meeting.eventType} is now at a new time!`,
      html: `
        <h1>Meeting Rescheduled!</h1>
        <p>Hi ${meeting.userName},</p>
        <p>Your ${meeting.eventType} has been successfully rescheduled.</p>
        <p><strong>New Time:</strong> ${new Date(
          startTime
        ).toLocaleString()} (${meeting.timezone})</p>
        <p><strong>Google Meet Link:</strong> <a href="${
          meeting.meetingLink
        }">${meeting.meetingLink}</a></p>
        <p>We look forward to speaking with you!</p>
      `,
    });

    return NextResponse.json({
      message: "Meeting rescheduled successfully",
      meeting,
    });
  } catch (error) {
    console.error("Error rescheduling meeting:", error);
    return NextResponse.json(
      { message: "Failed to reschedule meeting", error: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    if (!calendar) {
      console.error(
        "Google Calendar API not initialized. Check GOOGLE_CREDENTIALS."
      );
      return NextResponse.json(
        { message: "Internal Server Error" },
        { status: 500 }
      );
    }
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.NEXT_PUBLIC_ADMIN_API_KEY) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = params;

    await connectMongoose();

    const meeting = await Meeting.findById(id);
    if (!meeting) {
      return NextResponse.json(
        { message: "Meeting not found" },
        { status: 404 }
      );
    }

    // Delete Google Calendar event
    await calendar.events.delete({
      calendarId: "primary",
      eventId: meeting.googleCalendarEventId,
    });

    // Update meeting status in database
    meeting.status = "Cancelled";
    await meeting.save();

    // Send cancellation email
    await transporter.sendMail({
      from: `"Jenisys" <${process.env.EMAIL_USER}>`,
      to: meeting.userEmail,
      subject: `Cancelled: Your ${meeting.eventType}`,
      html: `
        <h1>Meeting Cancelled</h1>
        <p>Hi ${meeting.userName},</p>
        <p>Your ${meeting.eventType} scheduled for ${new Date(
        meeting.startTime
      ).toLocaleString()} has been cancelled.</p>
        <p>If this was a mistake, please feel free to schedule a new meeting.</p>
      `,
    });

    return NextResponse.json({ message: "Meeting cancelled successfully" });
  } catch (error) {
    console.error("Error cancelling meeting:", error);
    return NextResponse.json(
      { message: "Failed to cancel meeting", error: error.message },
      { status: 500 }
    );
  }
}
