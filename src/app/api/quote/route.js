import { NextResponse } from "next/server";
import { transporter, mailOptions } from "../../../../config/nodemailer";

export async function POST(req) {
  const data = await req.json();
  if (!data.name || !data.email || !data.service || !data.details) {
    return NextResponse.json({ message: "Bad request" }, { status: 400 });
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
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
