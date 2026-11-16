import { NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { mailOptions, transporter } from "../../../../config/nodemailer";

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

export async function POST(req) {
  const data = await req.json().catch(() => ({}));

  if (!data.name || !data.email || typeof data.name !== "string" || typeof data.email !== "string") {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }
  if (data.name.length > 50 || data.email.length > 100) {
    return NextResponse.json({ message: "Input too long" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
  }

  // 1. Store first. The address is safe even if the notification email fails.
  const { error } = await getSupabase()
    .from("newsletter_subscribers")
    .upsert({ name: data.name.trim(), email: data.email.trim().toLowerCase(), source: "footer" }, { onConflict: "email" });
  if (error) {
    console.error("Newsletter insert failed:", error.message);
    return NextResponse.json({ message: "Could not save your sign-up. Please try again." }, { status: 500 });
  }

  // 2. Notify the team. Non-fatal: a mail problem must not turn a saved sign-up into an error.
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: "New newsletter subscriber",
      text: `Name: ${data.name}\nEmail: ${data.email}`,
      html: `<p><strong>Name:</strong> ${esc(data.name)}</p><p><strong>Email:</strong> ${esc(data.email)}</p>`,
    });
  } catch (mailErr) {
    console.error("Newsletter notification email failed:", mailErr?.message);
  }

  return NextResponse.json({ success: true });
}
