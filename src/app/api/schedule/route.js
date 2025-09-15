import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import connectMongoose from "../../../../lib/mongoose";
import Meeting from "../../../models/Meeting";

// Google Calendar API setup
const SCOPES = ["https://www.googleapis.com/auth/calendar"];
const { OAuth2 } = google.auth;
const oAuth2Client = new OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.REDIRECT_URI
);

oAuth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
});

const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(req) {
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
    const { eventType, time, timezone, user } = await req.json();

    // The `time` parameter from the client contains the full date and time info.
    const startDateTime = new Date(time);

    const endDateTime = new Date(
      startDateTime.getTime() + eventType.duration * 60000
    );

    const event = {
      summary: `${eventType.name} with ${user.name}`,
      description: `
        Event Details:
        - Type: ${eventType.name}
        - Name: ${user.name}
        - Email: ${user.email}
        - Phone: ${user.phone || "Not provided"}
        - Company: ${user.company || "Not provided"}
        - Notes: ${user.notes || "None"}
      `,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: timezone,
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: timezone,
      },
      attendees: [{ email: user.email }],
      conferenceData: {
        createRequest: {
          requestId: `jenisys-meeting-${Date.now()}`,
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
        },
      },
    };

    const calendarResponse = await calendar.events.insert({
      calendarId: "primary",
      resource: event,
      conferenceDataVersion: 1,
    });

    const meetLink = calendarResponse.data.hangoutLink;
    const googleCalendarEventId = calendarResponse.data.id;

    await connectMongoose();
    await Meeting.create({
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phone,
      userCompany: user.company,
      userNotes: user.notes,
      eventType: eventType.name,
      eventDuration: eventType.duration,
      eventDescription: eventType.description,
      startTime: startDateTime,
      endTime: endDateTime,
      timezone: timezone,
      googleCalendarEventId: googleCalendarEventId,
      meetingLink: meetLink,
    });

    // Send confirmation email
    await transporter.sendMail({
      from: `"Jenisys" <${process.env.EMAIL}>`,
      to: user.email,
      subject: `Confirmation: Your ${eventType.name} is scheduled!`,
      html: `
        <h1>Booking Confirmed!</h1>
        <p>Hi ${user.name},</p>
        <p>Your ${eventType.name} has been scheduled successfully.</p>
        <p><strong>Time:</strong> ${startDateTime.toLocaleString()} (${timezone})</p>
        <p><strong>Google Meet Link:</strong> <a href="${meetLink}">${meetLink}</a></p>
        <p>We look forward to speaking with you!</p>
      `,
    });

    return NextResponse.json({
      message: "Booking successful!",
      meetLink,
    });
  } catch (error) {
    console.error("Error in schedule API:", error);
    return NextResponse.json(
      { message: "Failed to create event", error: error.message },
      { status: 500 }
    );
  }
}
