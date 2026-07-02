import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Projects — Sungava IT Club",
  description:
    "Showcase of student projects built by the Sungava IT Club and BCA students at Sungava College.",
};

const projects = [
  {
    title: "Campus Noticeboard App",
    subtitle: "React + Firebase",
    desc: "A mobile-friendly app for students to browse announcements, submit event requests, and receive campus alerts in real time.",
    authors: "BCA 6th semester team",
    badge: "featured",
  },
  {
    title: "Workshop Scheduler",
    subtitle: "Next.js + Tailwind",
    desc: "A club tool to display upcoming sessions, collect signups, and track attendance for workshops and training events.",
    authors: "BCA 4th semester",
    badge: "live",
  },
  {
    title: "AI Career Guide",
    subtitle: "Python + Streamlit",
    desc: "A guided recommendation system that helps students choose elective courses and career paths based on their interests and skills.",
    authors: "Machine Learning study group",
    badge: "new",
  },
];

const highlights = [
  "Student-led projects built for real campus needs.",
  "Project mentorship from seniors and faculty.",
  "Open to all BCA students — no prior coding required.",
  "Hands-on experience in UI, backend, and deployment.",
];

export default function ProjectsPage() {
  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-4">// student projects</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-3xl leading-[1.1]">
            Showcase of student work from Sungava IT Club.
          </h1>
          <p className="mt-6 text-paper-dim max-w-2xl leading-relaxed">
            Explore recent projects created by BCA students and club members, all designed to solve real campus problems and help fellow students learn by building.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="space-y-6">
            {projects.map((project) => (
              <article
                key={project.title}
                className="rounded-2xl border border-line bg-surface p-8 hover:border-crimson transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] text-crimson uppercase tracking-[0.24em]">
                      {project.subtitle}
                    </p>
                    <h2 className="font-display text-2xl text-paper mt-3">
                      {project.title}
                    </h2>
                  </div>
                  <span className="rounded-full border border-line bg-ink px-4 py-2 text-[11px] font-mono uppercase text-muted">
                    {project.badge}
                  </span>
                </div>

                <p className="mt-6 text-sm text-paper-dim leading-relaxed">
                  {project.desc}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
                    authors
                  </span>
                  <span>{project.authors}</span>
                </div>
              </article>
            ))}
          </div>

          <aside className="rounded-2xl border border-line bg-ink p-8">
            <p className="font-mono text-xs text-gold mb-3">// why showcase</p>
            <h2 className="font-display text-2xl text-paper mb-4">
              Let students show what they can build.
            </h2>
            <ul className="space-y-4 text-sm text-paper-dim leading-relaxed">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-mono text-gold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 border-t border-line pt-8">
              <p className="font-mono text-xs text-gold mb-3">// get involved</p>
              <p className="text-sm text-paper-dim leading-relaxed">
                Want your project here? Join the IT Club, attend our sessions, and pitch your idea to the project team.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
