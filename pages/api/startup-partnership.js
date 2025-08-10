import { v2 as cloudinary } from "cloudinary";
import { MongoClient } from "mongodb";
import multiparty from "multiparty";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const form = new multiparty.Form();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ message: "Error parsing form data" });
    }

    try {
      await client.connect();
      const database = client.db("jenisys");
      const collection = database.collection("startup_partnerships");

      let pitchDeckUrl = "";
      if (files.pitchDeck) {
        const pitchDeck = files.pitchDeck[0];
        const result = await cloudinary.uploader.upload(pitchDeck.path, {
          folder: "startup_pitch_decks",
          resource_type: "auto",
        });
        pitchDeckUrl = result.secure_url;
      }

      const formData = {};
      for (const key in fields) {
        formData[key] = fields[key][0];
      }
      formData.pitchDeckUrl = pitchDeckUrl;
      formData.createdAt = new Date();

      await collection.insertOne(formData);

      res.status(200).json({ message: "Application submitted successfully!" });
    } catch (error) {
      console.error("Error submitting application:", error);
      res.status(500).json({ message: "Error submitting application" });
    } finally {
      await client.close();
    }
  });
}
