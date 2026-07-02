# Sungava IT Club — Website

Official website for Sungava IT Club, the student-run IT community of
Sungava College (Khairahani-5, Chitwan, Nepal).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Pages

- `/` — Home (hero, stats, events log, CTA)
- `/about` — About the club and the college
- `/contact` — Contact details, map, and a message form
- `/feedback` — Student testimonials and a feedback form

## Notes

- The contact and feedback forms are front-end only right now (no backend).
  To actually receive submissions, wire them up to an API route (e.g.
  `app/api/contact/route.ts`) that emails you or writes to a database, or
  point them at a form service like Formspree.
- Update the email address, phone number, and social links in
  `components/Footer.tsx` and `app/contact/page.tsx` with your real ones.
- Fonts (Space Grotesk, Inter, JetBrains Mono) load from Google Fonts via
  `app/globals.css`.
# club-website
