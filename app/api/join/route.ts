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

async function appendApplicationToSheet(values: {
  name: string;
  email: string;
  programme: string;
  year: string;
  why: string;
}) {
  const auth = getSheetsAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const sheetRange =
    process.env.GOOGLE_SHEETS_RANGE_JOIN ||
    process.env.GOOGLE_SHEETS_RANGE ||
    "Sheet1!A:F";

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
          values.programme,
          values.year,
          values.why,
        ],
      ],
    },
  });
}

async function sendApplicationEmail(values: {
  name: string;
  email: string;
  programme: string;
  year: string;
  why: string;
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
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const message = {
    from: emailFrom,
    to: emailTo,
    subject: `New club application from ${values.name}`,
    text: `New Sungava IT Club application:\n\nName: ${values.name}\nEmail: ${values.email}\nProgramme: ${values.programme}\nYear: ${values.year}\nWhy: ${values.why}`,
    html: `<p>New Sungava IT Club application:</p>
      <ul>
        <li><strong>Name:</strong> ${values.name}</li>
        <li><strong>Email:</strong> ${values.email}</li>
        <li><strong>Programme:</strong> ${values.programme}</li>
        <li><strong>Year:</strong> ${values.year}</li>
        <li><strong>Why:</strong> ${values.why}</li>
      </ul>`,
  };

  await transporter.sendMail(message);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, programme, year, why } = body ?? {};

    if (!name || !email || !programme || !year || !why) {
      return NextResponse.json(
        { error: "All form fields are required." },
        { status: 400 }
      );
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
            "Server is not configured to accept applications. Provide SMTP_USER/SMTP_PASS for Gmail SMTP or Google Sheets service account credentials.",
        },
        { status: 500 }
      );
    }

    const results: { sheet?: string; email?: string } = {};

    if (hasSheets) {
      try {
        await appendApplicationToSheet({ name, email, programme, year, why });
        results.sheet = "ok";
      } catch (err) {
        console.error("Append to sheet failed:", err);
        results.sheet = `error: ${err instanceof Error ? err.message : String(err)}`;
      }
    }

    if (hasSmtp) {
      try {
        await sendApplicationEmail({ name, email, programme, year, why });
        results.email = "ok";
      } catch (err) {
        console.error("Send email failed:", err);
        results.email = `error: ${err instanceof Error ? err.message : String(err)}`;
      }
    }

    const attempted = [results.sheet, results.email].filter(Boolean);
    const failures = attempted.filter((r) => String(r).startsWith("error"));

    if (attempted.length > 0 && failures.length === attempted.length) {
      return NextResponse.json({ error: "Both sheet append and email sending failed.", details: results }, { status: 500 });
    }

    return NextResponse.json({ success: true, details: results });
  } catch (error) {
    console.error("Join API error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
