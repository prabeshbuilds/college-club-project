import type { Metadata } from "next";
import FeedbackForm from "@/components/FeedbackForm";

export const metadata: Metadata = {
  title: "Student Feedback — Sungava IT Club",
  description:
    "What Sungava College students say about the IT Club's workshops and events.",
};

const testimonials = [
  {
    name: "Sadish Panta",
    role: "BCA, 7th semester",
    rating: 5,
    quote:
      "The Django workshop was the first time a class felt genuinely hands-on. I deployed my first web app that weekend.",
  },
  {
    name: "Prasun Thapa",
    role: "BCA, 7rd semester",
    rating: 5,
    quote:
      "I joined with zero coding background. Two semesters later I'm mentoring first-years at the same sessions.",
  },
  {
    name: "Aadarsh Jha",
    role: "BCA, 7rd semester",
    rating: 4,
    quote:
      "Drishya was the highlight of my year — seeing BCA seniors present real projects pushed me to apply for BCA myself.",
  },
  {
    name: "Neerjala Sedhai",
    role: "BCA, 4th semester",
    rating: 5,
    quote:
      "The AI/ML workshop connected directly to what we were covering in class. It made the theory click.",
  },
  {
    name: "Khusi Aryal",
    role: "BCA, 6th semester",
    rating: 4,
    quote:
      "You don't need to be an IT student to attend. I came for the Git session and stayed for the community.",
  },
  {
    name: "Sanisha Sapkota",
    role: "BCA, 7st semester",
    rating: 5,
    quote:
      "Freshers' week felt overwhelming until the IT Club orientation. Made the whole college feel smaller and friendlier.",
  },
];

export default function Feedback() {
  const avg = (
    testimonials.reduce((a, t) => a + t.rating, 0) / testimonials.length
  ).toFixed(1);

  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div>
            <p className="font-mono text-xs text-gold mb-4">// feedback</p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-lg leading-[1.1]">
              What students actually say
            </h1>
            <p className="mt-6 text-paper-dim max-w-md leading-relaxed">
              Real responses from Sungava College students who&rsquo;ve been
              through our workshops, fests and mentorship sessions.
            </p>
          </div>
          <div className="font-mono text-left sm:text-right shrink-0">
            <p className="text-5xl font-display font-semibold text-gold">
              {avg}
              <span className="text-lg text-muted">/5</span>
            </p>
            <p className="text-xs text-muted mt-1">
              avg. rating · {testimonials.length} responses
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-md border border-line bg-surface p-6 flex flex-col"
              >
                <p className="font-mono text-xs text-gold mb-4">
                  {"★".repeat(t.rating)}
                  <span className="text-line">
                    {"★".repeat(5 - t.rating)}
                  </span>
                </p>
                <p className="text-[15px] text-paper leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-line">
                  <p className="text-sm text-paper font-medium">{t.name}</p>
                  <p className="font-mono text-[11px] text-muted mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <div>
            <p className="font-mono text-xs text-gold mb-3">
              // leave your own
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-4">
              Been to a session? Tell us how it went.
            </h2>
            <p className="text-sm text-paper-dim leading-relaxed max-w-sm">
              Good or critical, it all shapes what we run next. Takes under
              a minute.
            </p>
          </div>
          <FeedbackForm />
        </div>
      </section>
    </div>
  );
}
