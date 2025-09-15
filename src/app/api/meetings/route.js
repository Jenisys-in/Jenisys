import { NextResponse } from "next/server";
import connectMongoose from "../../../../lib/mongoose";
import Meeting from "../../../models/Meeting";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const date = searchParams.get("date");

    await connectMongoose();

    let query = {};
    if (date) {
      // Treat the incoming date as UTC
      const startOfDay = new Date(`${date}T00:00:00.000Z`);
      const endOfDay = new Date(`${date}T23:59:59.999Z`);

      query = {
        startTime: {
          $gte: startOfDay,
          $lt: endOfDay,
        },
      };
    }

    const meetings = await Meeting.find(query).sort({ startTime: 1 });

    return NextResponse.json({ meetings });
  } catch (error) {
    console.error("Error fetching meetings:", error);
    return NextResponse.json(
      { message: "Failed to fetch meetings", error: error.message },
      { status: 500 }
    );
  }
}
