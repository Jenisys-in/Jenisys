import clientPromise from "../../lib/mongodb";
import { mailOptions, transporter } from "../../config/nodemailer";
import formidable from "formidable";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const generateAdminEmailContent = (data) => {
  const resumeLink = data.resumeUrl
    ? `<a href="${data.resumeUrl}" target="_blank">View Resume</a>`
    : "Not provided";
  const html = `
    <h1>New Talent Pool Submission</h1>
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong> ${data.message || "N/A"}</p>
    <p><strong>Resume:</strong> ${resumeLink}</p>
  `;
  return {
    html,
    text: `New Talent Pool Submission: Name: ${data.name}, Email: ${
      data.email
    }, Message: ${data.message || "N/A"}, Resume: ${
      data.resumeUrl || "Not provided"
    }`,
  };
};

const generateApplicantEmailContent = (data) => {
  const html = `
    <h1>Thank You for Joining the Jenisys Talent Pool!</h1>
    <p>Hi ${data.name},</p>
    <p>We've received your submission and will keep your details on file. We'll reach out if a suitable role opens up.</p>
    <p>Best,</p>
    <p>The Jenisys Team</p>
  `;
  return {
    html,
    text: `Hi ${data.name},\n\nThank you for joining the Jenisys Talent Pool! We've received your submission and will keep your details on file. We'll reach out if a suitable role opens up.\n\nBest,\nThe Jenisys Team`,
  };
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable({});

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Error parsing form:", err);
        return res.status(500).json({ message: "Error parsing form data." });
      }

      const name = fields.name?.[0];
      const email = fields.email?.[0];
      const message = fields.message?.[0];
      const resume = files.resume?.[0];

      if (!name || !email) {
        return res.status(400).json({ message: "Missing required fields." });
      }

      try {
        let resumeUrl = null;
        if (resume) {
          const uploadResponse = await cloudinary.uploader.upload(
            resume.filepath,
            {
              resource_type: "auto",
              folder: "resumes",
            }
          );
          resumeUrl = uploadResponse.secure_url;
        }

        const client = await clientPromise;
        const db = client.db("jenisys");

        const talent = await db.collection("talent-pool").insertOne({
          name,
          email,
          message,
          resumeUrl,
          createdAt: new Date(),
        });

        // Send email to admin
        await transporter.sendMail({
          ...mailOptions,
          ...generateAdminEmailContent({
            name,
            email,
            message,
            resumeUrl,
          }),
          subject: "New Talent Pool Submission",
        });

        // Send confirmation email to applicant
        await transporter.sendMail({
          ...mailOptions,
          to: email, // Override the 'to' field to send to the applicant
          ...generateApplicantEmailContent({ name }),
          subject: "Thank You for Joining Our Talent Pool!",
        });

        res
          .status(201)
          .json({ message: "Successfully joined talent pool.", talent });
      } catch (error) {
        console.error("Error submitting to talent pool:", error);
        res.status(500).json({ message: "Error submitting to talent pool." });
      }
    });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
