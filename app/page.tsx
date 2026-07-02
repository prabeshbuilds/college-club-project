import Link from "next/link";
import Terminal from "@/components/Terminal";

const stats = [
  { value: "70", label: "BCA seats / intake" },
  { value: "4 yrs", label: "BCA programme, TU-affiliated" },
  { value: "12+", label: "workshops run to date" },
  { value: "2081", label: "founded, B.S." },
];

const log = [
  {
    date: "2025-05-23",
    title: "BCA & BBS Result Publication Support Desk",
    tag: "academics",
    desc: "Club volunteers ran a help desk for students checking BCA and BBS semester results and next-step guidance.",
  },
  {
    date: "2025-04-25",
    title: "Freshers' & Farewell Program",
    tag: "campus life",
    desc: "IT Club handled AV, streaming and the tech setup for the college-wide freshers' and farewell event.",
  },
  {
    date: "2025-01-29",
    title: "Workshop on AI & Machine Learning",
    tag: "workshop",
    desc: "A hands-on session for IT students covering ML fundamentals, from data prep to a first trained model.",
  },
  {
    date: "2024-04-30",
    title: "Python & Django Workshop",
    tag: "workshop",
    desc: "BCA students built and deployed a small web app across a weekend, from models to a live route.",
  },
  {
    date: "2024-12-25",
    title: "Drishya v6.0 — Sungava Science & Tech Fest",
    tag: "fest",
    desc: "The club's flagship annual fest: project exhibitions, coding contests and talks from industry guests.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-mono text-xs text-gold mb-5">
              // sungava college · khairahani-5, chitwan
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-semibold leading-[1.08] text-paper">
              Where BCA students at Sungava College
              <span className="text-crimson"> actually build things.</span>
            </h1>
            <p className="mt-6 text-[15px] sm:text-base text-paper-dim leading-relaxed max-w-lg">
              Sungava IT Club is the student-run technology community of
              Sungava College — a college of technology and management known
              for strong academics and an even stronger workshop culture.
              Hackathons, Python & Django sessions, AI/ML labs, and the
              annual Drishya tech fest all start here.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 font-mono text-sm">
              <Link
                href="/join"
                className="rounded-sm bg-crimson px-5 py-3 text-paper hover:bg-crimson-dim transition-colors"
              >
                join_club →
              </Link>
              <Link
                href="/about"
                className="rounded-sm border border-line px-5 py-3 text-paper-dim hover:text-paper hover:border-paper-dim transition-colors"
              >
                ./about
              </Link>
            </div>
          </div>
          <Terminal />
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line border-x border-line">
            {stats.map((s) => (
              <div key={s.label} className="px-5 py-8">
                <p className="font-display text-2xl sm:text-3xl font-semibold text-gold">
                  {s.value}
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid md:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <p className="font-mono text-xs text-gold mb-3">// why we exist</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Best academics.
              <br />
              Best IT college in Chitwan.
            </h2>
          </div>
          <div className="space-y-4 text-paper-dim text-[15px] leading-relaxed">
            <p>
              Sungava College pairs a strong BCA programme with real
              industry exposure — and the IT Club is where that exposure
              happens. We run the workshops, manage the tech behind campus
              events, and give first-year students a shortcut past the
              usual &ldquo;where do I even start&rdquo; problem.
            </p>
            <p>
              Whether it&rsquo;s your first line of code or your third
              hackathon, there&rsquo;s a seat for you at the next session.
            </p>
            <Link
              href="/about"
              className="inline-flex font-mono text-sm text-crimson hover:text-gold transition-colors"
            >
              read the full story →
            </Link>
          </div>
        </div>
      </section>

      {/* Event log */}
      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-3">
            <div>
              <p className="font-mono text-xs text-gold mb-3">
                // events.log
              </p>
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
                Workshops & events
              </h2>
            </div>
            <p className="font-mono text-xs text-muted">
              most recent first
            </p>
          </div>

          <div className="border-t border-line">
            {log.map((e) => (
              <div
                key={e.title}
                className="grid sm:grid-cols-[110px_1fr_auto] gap-3 sm:gap-6 py-6 border-b border-line group"
              >
                <p className="font-mono text-xs text-muted pt-0.5">
                  {e.date}
                </p>
                <div>
                  <h3 className="font-display text-lg text-paper group-hover:text-gold transition-colors">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-paper-dim leading-relaxed max-w-xl">
                    {e.desc}
                  </p>
                </div>
                <span className="font-mono text-[11px] text-crimson h-fit whitespace-nowrap">
                  [{e.tag}]
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 text-center">
          <p className="font-mono text-xs text-gold mb-4">
            // ready when you are
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-paper max-w-2xl mx-auto">
            Bring your laptop. Bring your questions. We&rsquo;ll take it from there.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3 justify-center font-mono text-sm">
            <Link
              href="/join"
              className="rounded-sm bg-crimson px-6 py-3 text-paper hover:bg-crimson-dim transition-colors"
            >
              get in touch →
            </Link>
            <Link
              href="/feedback"
              className="rounded-sm border border-line px-6 py-3 text-paper-dim hover:text-paper hover:border-paper-dim transition-colors"
            >
              read student feedback
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
