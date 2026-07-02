import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Sungava IT Club",
  description:
    "About Sungava IT Club, the student-run technology community of Sungava College, Khairahani-5, Chitwan.",
};

const activities = [
  {
    tag: "codefest",
    title: "National-level hackathons & codefests",
    desc: "Organized under club president Prabesh Khatiwada with CodeForChange, these events bring national student teams together for high-impact coding challenges.",
  },
  {
    tag: "workshops",
    title: "Hands-on technical workshops",
    desc: "Python & Django, web development, AI/ML fundamentals, and Git/GitHub sessions run every semester for BCA and +2 Science students.",
  },
  {
    tag: "events",
    title: "Drishya — Sungava Science & Tech Fest",
    desc: "Our flagship annual fest featuring project exhibitions, coding contests, quiz competitions and talks from industry guests.",
  },
  {
    tag: "mentorship",
    title: "Peer mentorship",
    desc: "Senior BCA students pair with juniors on real project work — from first HTML page to a deployed final-year project.",
  },
  {
    tag: "campus tech",
    title: "Campus event support",
    desc: "Sound, streaming, registration systems and displays for college functions — Freshers' Week, Farewell, and Sports Fest — are run by the club.",
  },
];

const values = [
  {
    k: "01",
    t: "Learn by building",
    d: "Every session ends with something working — a script, a page, a small app — not just slides.",
  },
  {
    k: "02",
    t: "Open door",
    d: "You don't need prior coding experience to join. Half our current core team started with zero background.",
  },
  {
    k: "03",
    t: "Tie back to the classroom",
    d: "Workshops are timed to complement the BCA syllabus, so what you learn here shows up in your semester work too.",
  },
];

export default function About() {
  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-4">// about</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-2xl leading-[1.1]">
            The IT community behind Sungava College&rsquo;s tech culture
          </h1>
          <p className="mt-6 text-paper-dim max-w-2xl leading-relaxed">
            Sungava College is a college of technology and management in
            Khairahani, Chitwan, offering BCA, BBS, and +2 Science,
            Management and Hotel Management under Tribhuvan University and
            NEB. Sungava IT Club is its official student-run technology
            society, based at the Khairahani-5 campus, built by and for
            students in the BCA and IT stream.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-10">
          <div className="rounded-md border border-line bg-surface p-8">
            <p className="font-mono text-xs text-gold mb-3">// mission</p>
            <p className="font-display text-xl text-paper leading-snug">
              Give every BCA and IT student at Sungava College a practical,
              hands-on path into technology — beyond the syllabus.
            </p>
          </div>
          <div className="rounded-md border border-line bg-surface p-8">
            <p className="font-mono text-xs text-gold mb-3">// what we run</p>
            <p className="font-display text-xl text-paper leading-snug">
              Workshops, hackathons, the annual Drishya tech fest, and the
              technical backbone of campus life at Sungava College.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-3">// activities</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-10">
            What the club actually does
          </h2>
          <div className="grid sm:grid-cols-2 gap-px bg-line border border-line rounded-md overflow-hidden">
            {activities.map((a) => (
              <div key={a.title} className="bg-ink p-7">
                <span className="font-mono text-[11px] text-crimson">
                  [{a.tag}]
                </span>
                <h3 className="font-display text-lg text-paper mt-2 mb-2">
                  {a.title}
                </h3>
                <p className="text-sm text-paper-dim leading-relaxed">
                  {a.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-3">// how we work</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-10">
            Three things we don&rsquo;t compromise on
          </h2>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.k} className="border-t border-crimson pt-5">
                <p className="font-mono text-xs text-muted mb-3">{v.k}</p>
                <h3 className="font-display text-lg text-paper mb-2">
                  {v.t}
                </h3>
                <p className="text-sm text-paper-dim leading-relaxed">
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-3">// alumni & leadership</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper mb-10">
            Club alumni, former members, and presidents power our success
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-md border border-line bg-ink p-6">
              <p className="font-mono text-[11px] text-crimson mb-3">alumnus</p>
              <h3 className="font-display text-lg text-paper mb-3">
                Built by students, backed by alumni
              </h3>
              <p className="text-sm text-paper-dim leading-relaxed">
                Sungava IT Club alumni like Manjesh Rayamajhi and Prateek Gire
                remain involved through mentorship, workshops, and support
                for new club projects.
              </p>
            </div>

            <div className="rounded-md border border-line bg-ink p-6">
              <p className="font-mono text-[11px] text-crimson mb-3">previous member</p>
              <h3 className="font-display text-lg text-paper mb-3">
                Past members continue to contribute
              </h3>
              <p className="text-sm text-paper-dim leading-relaxed">
                Former members share experience from internships, college
                events, and real-world development work with the club.
              </p>
            </div>

            <div className="rounded-md border border-line bg-ink p-6">
              <p className="font-mono text-[11px] text-crimson mb-3">president</p>
              <h3 className="font-display text-lg text-paper mb-3">
                Led by Prabesh Khatiwada
              </h3>
              <p className="text-sm text-paper-dim leading-relaxed">
                Under president Prabesh Khatiwada, the club organizes
                national hackathons and codefests with CodeForChange.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="rounded-md border border-line bg-surface p-8 sm:p-10 grid sm:grid-cols-[1fr_auto] gap-6 items-center">
            <div>
              <p className="font-mono text-xs text-gold mb-3">// affiliation</p>
              <p className="text-paper-dim leading-relaxed max-w-xl">
                Sungava College is affiliated with Tribhuvan University
                (Faculty of Humanities and Social Sciences for BCA, Faculty
                of Management for BBS) and the National Examination Board
                for +2 programmes. Sungava IT Club operates as a recognised
                student society within the college.
              </p>
            </div>
            <a
              href="https://www.sungavacollege.edu.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm rounded-sm border border-line px-5 py-3 text-paper-dim hover:text-paper hover:border-paper-dim transition-colors whitespace-nowrap"
            >
              visit college site →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
