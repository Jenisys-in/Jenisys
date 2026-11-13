import { NextResponse } from "next/server";
import { listMeetings, isAdmin } from "@/lib/meetings";

// Admin only: returns attendee names, emails and phone numbers.
export async function GET(req) {
  if (!isAdmin(req)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");
    const range = date && /^\d{4}-\d{2}-\d{2}$/.test(date)
      ? { from: `${date}T00:00:00.000Z`, to: `${date}T23:59:59.999Z` }
      : {};
    const meetings = await listMeetings(range);
    return NextResponse.json({ meetings });
  } catch (error) {
    console.error("Error fetching meetings:", error);
    return NextResponse.json({ message: "Failed to fetch meetings" }, { status: 500 });
  }
}
