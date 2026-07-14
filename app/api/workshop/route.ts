import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { google } from "googleapis";

const sheetsScopes = [
  "https://www.googleapis.com/auth/spreadsheets",
];

function getSheetsAuth() {
  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google Sheets credentials are not configured.");
  }

  return new google.auth.JWT(clientEmail, undefined, privateKey, sheetsScopes);
}

async function appendWorkshopToSheet(values: {
  name: string;
  email: string;
  phone: string;
  workshop: string;
  notes?: string;
}) {
  const auth = getSheetsAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const sheetRange =
    process.env.GOOGLE_SHEETS_RANGE_WORKSHOP ||
    process.env.GOOGLE_SHEETS_RANGE ||
    "Workshop!A:F";

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID || "",
    range: sheetRange,
    valueInputOption: "RAW",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          values.name,
          values.email,
          values.phone,
          values.workshop,
          values.notes || "",
        ],
      ],
    },
  });
}

async function sendWorkshopEmail(values: {
  name: string;
  email: string;
  phone: string;
  workshop: string;
  notes?: string;
}) {
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const emailTo = process.env.EMAIL_TO || "sungavaitclub@gmail.com";
  const emailFrom = process.env.EMAIL_FROM || smtpUser;

  if (!smtpUser || !smtpPass || !emailFrom) {
    throw new Error("SMTP credentials are not configured.");
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: true,
    auth: { user: smtpUser, pass: smtpPass },
  });

  const message = {
    from: emailFrom,
    to: emailTo,
    subject: `Workshop registration: ${values.name} — ${values.workshop}`,
    text: `Workshop registration:\n\nName: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nWorkshop: ${values.workshop}\nNotes: ${values.notes || ""}`,
    html: `<p>New workshop registration:</p><ul><li><strong>Name:</strong> ${values.name}</li><li><strong>Email:</strong> ${values.email}</li><li><strong>Phone:</strong> ${values.phone}</li><li><strong>Workshop:</strong> ${values.workshop}</li><li><strong>Notes:</strong> ${values.notes || ""}</li></ul>`,
  };

  await transporter.sendMail(message);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, workshop, notes } = body ?? {};

    if (!name || !email || !phone || !workshop) {
      return NextResponse.json({ error: "name, email, phone and workshop are required." }, { status: 400 });
    }

    const hasSheets = !!(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL &&
      process.env.GOOGLE_SHEETS_PRIVATE_KEY &&
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID
    );
    const hasSmtp = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

    if (!hasSheets && !hasSmtp) {
      return NextResponse.json(
        {
          error:
            "Server is not configured to accept registrations. Provide SMTP_USER/SMTP_PASS for Gmail SMTP or Google Sheets service account credentials.",
        },
        { status: 500 }
      );
    }

    const results: { sheet?: string; email?: string } = {};

    if (hasSheets) {
      try {
        await appendWorkshopToSheet({ name, email, phone, workshop, notes });
        results.sheet = "ok";
      } catch (err) {
        console.error("Append to sheet failed:", err);
        results.sheet = `error: ${err instanceof Error ? err.message : String(err)}`;
      }
    }

    if (hasSmtp) {
      try {
        await sendWorkshopEmail({ name, email, phone, workshop, notes });
        results.email = "ok";
      } catch (err) {
        console.error("Send email failed:", err);
        results.email = `error: ${err instanceof Error ? err.message : String(err)}`;
      }
    }

    // If both methods attempted and both failed, return 500
    const attempted = [results.sheet, results.email].filter(Boolean);
    const failures = attempted.filter((r) => String(r).startsWith("error"));

    if (attempted.length > 0 && failures.length === attempted.length) {
      return NextResponse.json({ error: "Both sheet append and email sending failed.", details: results }, { status: 500 });
    }

    return NextResponse.json({ success: true, details: results });
  } catch (error) {
    console.error("Workshop API error:", error);
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unknown error" }, { status: 500 });
  }
}
