import { NextResponse, after } from "next/server";
import { getSupabase } from "@/lib/supabase-server";
import { syncContact } from "@/lib/leads-sync";
import { notify } from "@/lib/notify";
import { mailOptions, transporter } from "../../../../config/nodemailer";

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const short = (v, max) => (typeof v === "string" && v.trim() ? v.trim().slice(0, max) : undefined);

// First-touch attribution from the browser (only present with cookie consent). Bounded and typed.
function cleanAttribution(a) {
  if (!a || typeof a !== "object") return {};
  const utm = {};
  if (a.utm && typeof a.utm === "object") {
    for (const k of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const v = short(a.utm[k], 120);
      if (v) utm[k] = v;
    }
  }
  return { source: short(a.source, 200), referrer: short(a.referrer, 300), landing: short(a.landing, 300), utm, ref: short(a.ref, 12) };
}

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "E-Mail",
  number: "Contact No",
  company: "Company",
  projectType: "Project Type",
  budget: "Budget",
  timeline: "Timeline",
  msg: "Message",
};

const escapeHtml = (v) =>
  String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const generateEmailContent = (raw) => {
  const data = Object.fromEntries(
    Object.entries(raw).filter(([key, val]) => CONTACT_MESSAGE_FIELDS[key] && val !== "" && val != null)
  );
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ""
  );
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${escapeHtml(val)}</p>`);
  }, "");

  return {
    text: stringData,
    html: `<!DOCTYPE html><html> <head> <title></title> <meta charset="utf-8"/> <meta name="viewport" content="width=device-width, initial-scale=1"/> <meta http-equiv="X-UA-Compatible" content="IE=edge"/> <style type="text/css"> body, table, td, a{-webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;}table{border-collapse: collapse !important;}body{height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important;}@media screen and (max-width: 525px){.wrapper{width: 100% !important; max-width: 100% !important;}.responsive-table{width: 100% !important;}.padding{padding: 10px 5% 15px 5% !important;}.section-padding{padding: 0 15px 50px 15px !important;}}.form-container{margin-bottom: 24px; padding: 20px; border: 1px dashed #ccc;}.form-heading{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 400; text-align: left; line-height: 20px; font-size: 18px; margin: 0 0 8px; padding: 0;}.form-answer{color: #2a2a2a; font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif; font-weight: 300; text-align: left; line-height: 20px; font-size: 16px; margin: 0 0 24px; padding: 0;}div[style*="margin: 16px 0;"]{margin: 0 !important;}</style> </head> <body style="margin: 0 !important; padding: 0 !important; background: #fff"> <div style=" display: none; font-size: 1px; color: #fefefe; line-height: 1px;  max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; " ></div><table border="0" cellpadding="0" cellspacing="0" width="100%"> <tr> <td bgcolor="#ffffff" align="center" style="padding: 10px 15px 30px 15px" class="section-padding" > <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 500px" class="responsive-table" > <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0"> <tr> <td> <table width="100%" border="0" cellspacing="0" cellpadding="0" > <tr> <td style=" padding: 0 0 0 0; font-size: 16px; line-height: 25px; color: #232323; " class="padding message-content" > <h2>New Contact Message</h2> <div class="form-container">${htmlData}</div></td></tr></table> </td></tr></table> </td></tr></table> </td></tr></table> </body></html>`,
  };
};

export async function POST(req) {
  const data = await req.json().catch(() => null);
  if (!data || typeof data !== "object") {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }

  // Honeypot: a hidden field people never see. Bots that fill it get a normal-looking reply and nothing is stored.
  if (typeof data.website === "string" && data.website.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  // strict input validation
  const MAX_LENGTH = 1000;
  if (!data.name || !data.email || typeof data.name !== "string" || typeof data.email !== "string") {
    return NextResponse.json({ message: "Invalid input" }, { status: 400 });
  }
  if (data.name.length > 50 || data.email.length > 100 || (data.msg && String(data.msg).length > MAX_LENGTH)) {
    return NextResponse.json({ message: "Input too long" }, { status: 400 });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
  }

  const known = Object.fromEntries(
    Object.keys(CONTACT_MESSAGE_FIELDS)
      .filter((k) => data[k] !== undefined && data[k] !== null && data[k] !== "")
      .map((k) => [k, String(data[k]).slice(0, 2000)])
  );
  const visitorId = typeof data.visitorId === "string" && UUID.test(data.visitorId) ? data.visitorId.toLowerCase() : null;

  // 1. Store first. The lead is safe even if email, Telegram or the CRM fail afterwards.
  const { data: row, error } = await getSupabase()
    .from("contacts")
    .insert({
      name: known.name,
      email: known.email.trim().toLowerCase(),
      phone: known.number || null,
      company: known.company || null,
      project_type: known.projectType || null,
      budget: known.budget || null,
      timeline: known.timeline || null,
      message: known.msg || null,
      payload: known,
      visitor_id: visitorId,
      attribution: cleanAttribution(data.attribution),
    })
    .select("*")
    .single();
  if (error) {
    console.error("Contact insert failed:", error.message);
    return NextResponse.json({ message: "We could not save your brief. Please try again, or email contact@jenisys.in." }, { status: 500 });
  }

  // 2. After the reply is sent: link the visitor, push to the CRM, alert and email. None of this delays the visitor.
  after(async () => {
    if (visitorId) {
      await getSupabase().from("web_visitors").update({ email: row.email }).eq("id", visitorId);
    }
    const crm = await syncContact(row);
    const ref = crm?.ok ? crm.data?.lead?.ref : null;
    await notify(crm?.data?.status === "duplicate" ? "Repeat enquiry from the website" : "New enquiry from the website", [
      `${row.name}${row.company ? ` · ${row.company}` : ""} <${row.email}>`,
      row.budget && `Budget: ${row.budget}`,
      row.message && row.message.slice(0, 300),
      ref ? `In Jesper: ${ref}` : "Saved on the website; it will reach Jesper on the next sync.",
    ]);
    try {
      await transporter.sendMail({ ...mailOptions, ...generateEmailContent(data), subject: "New Contact Message" });
    } catch (mailErr) {
      console.error("Notification email failed:", mailErr?.message || mailErr);
    }
  });

  return NextResponse.json({ success: true });
}
