import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";
import { getMeeting, updateMeeting, isAdmin } from "@/lib/meetings";

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
    if (!isAdmin(req)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;
    const { startTime, endTime } = await req.json();

    const meeting = await getMeeting(id);
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
    await updateMeeting(id, {
      start_time: new Date(startTime).toISOString(),
      end_time: new Date(endTime).toISOString(),
      status: "Rescheduled",
    });
    meeting.startTime = startTime;
    meeting.endTime = endTime;
    meeting.status = "Rescheduled";

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
    if (!isAdmin(req)) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { id } = await params;

    const meeting = await getMeeting(id);
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
    await updateMeeting(id, { status: "Cancelled" });
    meeting.status = "Cancelled";

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
