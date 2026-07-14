# Sungava IT Club — Website

This repository contains the official website for Sungava IT Club, the
student-run technology community at Sungava College, Khairahani-5,
Chitwan, Nepal.

The site is built with Next.js 16, React 19, and Tailwind CSS 4.

## Features

- Responsive landing page with club overview, stats, and event highlights
- About page with alumni, leadership, and club achievements
- Contact page with location details and a message form
- Feedback page with student testimonials and a feedback form
- Dedicated join page with club application form
- Server-side API route for join submissions (`/api/join`)
- Email + Google Sheets integration for application handling




## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Production build

```bash
npm run build
npm run start
```

## Project structure

- `app/` — Next.js App Router pages and API routes
- `components/` — Shared UI components and form widgets
- `public/` — Static assets and logo images
- `app/api/join/route.ts` — Backend handler for join form submissions

## Important environment variables

The join and workshop backends use email and Google Sheets services.
Copy [`.env.example`](.env.example) to `.env` and fill in the values below:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-smtp-user
SMTP_PASS=your-smtp-password
EMAIL_TO=sungavaitclub@gmail.com
EMAIL_FROM=your-smtp-user
GOOGLE_SHEETS_CLIENT_EMAIL=your-service-account-email
GOOGLE_SHEETS_PRIVATE_KEY="your-private-key"
GOOGLE_SHEETS_SPREADSHEET_ID=your-spreadsheet-id
GOOGLE_SHEETS_RANGE_JOIN=Sheet1!A:F
GOOGLE_SHEETS_RANGE_WORKSHOP=Workshop!A:F
```

> Note: `GOOGLE_SHEETS_PRIVATE_KEY` should preserve newlines as `\n`.

To connect the site to a Google Sheet:

1. Create a Google Cloud service account and enable the Google Sheets API.
2. Share your spreadsheet with the service account email address.
3. Use the spreadsheet ID from the URL and set the correct tab/range such as `Sheet1!A:F`.
4. Restart the app after updating `.env`.

## Routes

- `/` — Home
- `/about` — About the club
- `/contact` — Contact details and contact form
- `/feedback` — Student feedback and feedback form
- `/join` — Join club application form
- `/api/join` — API endpoint for join form submissions

## Notes

- Update club contact details in `components/Footer.tsx` and `app/contact/page.tsx`
- The join form backend is fully wired if the environment variables are set
- The feedback form is currently client-side only

## License

This project is provided as-is for Sungava IT Club. Update the license or
add one if you plan to publish it publicly.
