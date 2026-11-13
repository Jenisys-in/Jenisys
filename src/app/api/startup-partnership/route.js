import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { insertRow } from "@/lib/supabase-server";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const formData = await req.formData();
    const pitchDeck = formData.get("pitchDeck");

    let pitchDeckUrl = "";
    if (pitchDeck && pitchDeck.size > 0) {
      const fileBuffer = await pitchDeck.arrayBuffer();
      const mimeType = pitchDeck.type;
      const encoding = "base64";
      const base64Data = Buffer.from(fileBuffer).toString("base64");
      const fileUri = "data:" + mimeType + ";" + encoding + "," + base64Data;

      const result = await cloudinary.uploader.upload(fileUri, {
        folder: "startup_pitch_decks",
        resource_type: "auto",
      });
      pitchDeckUrl = result.secure_url;
    }

    const extractedFormData = {};
    for (const [key, value] of formData.entries()) {
      if (key !== "pitchDeck") {
        extractedFormData[key] = value;
      }
    }

    await insertRow("startup_partnerships", {
      email: typeof extractedFormData.email === "string" ? extractedFormData.email : null,
      pitch_deck_url: pitchDeckUrl || null,
      payload: extractedFormData,
    });

    return NextResponse.json({
      message: "Application submitted successfully!",
    });
  } catch (error) {
    console.error("Error submitting application:", error);
    return NextResponse.json(
      { message: "Error submitting application" },
      { status: 500 }
    );
  }
}
