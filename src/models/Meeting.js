import mongoose, { Schema } from "mongoose";

const meetingSchema = new Schema(
  {
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPhone: { type: String },
    userCompany: { type: String },
    userNotes: { type: String },
    eventType: { type: String, required: true },
    eventDuration: { type: Number, required: true },
    eventDescription: { type: String },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    timezone: { type: String, required: true },
    status: {
      type: String,
      enum: ["Scheduled", "Rescheduled", "Cancelled"],
      default: "Scheduled",
    },
    googleCalendarEventId: { type: String, required: true },
    meetingLink: { type: String, required: true },
  },
  { timestamps: true }
);

const Meeting =
  mongoose.models.Meeting || mongoose.model("Meeting", meetingSchema);

export default Meeting;
