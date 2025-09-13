import { NextResponse } from "next/server";
import connectMongoose from "../../../../lib/mongoose";
import Meeting from "../../../models/Meeting";

export async function GET(req) {
  try {
    const apiKey = req.headers.get("x-api-key");
    if (apiKey !== process.env.ADMIN_API_KEY) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    await connectMongoose();
    const meetings = await Meeting.find().sort({ startTime: -1 });
    return NextResponse.json({ meetings });
  } catch (error) {
    console.error("Error fetching meetings:", error);
    return NextResponse.json(
      { message: "Failed to fetch meetings", error: error.message },
      { status: 500 }
    );
  }
}
