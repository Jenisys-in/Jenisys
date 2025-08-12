import { transporter, mailOptions } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.service || !data.details) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Quote Request",
        text: `You have a new quote request from ${data.name} (${data.email}).\n\nService: ${data.service}\nBudget: ${data.budget}\nCompany: ${data.company}\n\nDetails:\n${data.details}`,
        html: `<p>You have a new quote request from <strong>${data.name}</strong> (${data.email}).</p>
               <p><strong>Service:</strong> ${data.service}</p>
               <p><strong>Budget:</strong> ${data.budget}</p>
               <p><strong>Company:</strong> ${data.company}</p>
               <p><strong>Details:</strong></p>
               <p>${data.details}</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

export default handler;
