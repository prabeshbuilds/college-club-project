import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — Sungava IT Club",
  description:
    "Meet the current tenure team of Sungava IT Club and the people leading workshops, events, and student projects.",
};
const members = [
  {
    name: "Prabesh Khatiwada",
    role: "President",
    focus: "Strategic Leadership & External Partnerships",
    image: "/pra.jpeg",
  },
  {
    name: "Khushi Aryal",
    role: "Vice President",
    focus: "Member Development & Program Coordination",
    image: "/khusi.jpg",
  },
  {
    name: "Ramishan Thakur",
    role: "Secretary",
    focus: "Administration & Documentation",
    image: "/ramishan.JPG",
  },
  {
    name: "Sachin Bartula",
    role: "Design Lead",
    focus: "Brand Identity & Creative Design",
    image: "/sachin.jpg",
  },
  {
    name: "Sarthak Pandey",
    role: "Program Lead",
    focus: "Events, Workshops & Technical Programs",
    image: "/sarthak.jpeg",
  },
  {
    name: "Suprem Nepal",
    role: "Operations Lead",
    focus: "Club Operations & Event Logistics",
    image: "/suprem.png",
  },
  {
    name: "Bishal Pandey",
    role: "PR Lead",
    focus: "Public Relations & Community Engagement",
    image: "/bishal.jpeg",
  },
  {
    name: "Nirjala Sedhai",
    role: "Documentation Lead",
    focus: "Content, Reports & Record Management",
    image: "/nirjala.jpeg",
  },
  {
    name: "Prashanna Kharel",
    role: "Executive Lead",
    focus: "Team Coordination & Strategic Initiatives",
    image: "/prassana.jpeg",
  },
];
export default function Team() {
  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-4">// team</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-3xl leading-[1.08]">
            Meet the people driving this tenure of Sungava IT Club.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-paper-dim">
            This page highlights the current leadership and core contributors behind the workshops, events, projects, and campus tech support that make the club active every semester.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14 sm:py-18">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { value: "4+", label: "core contributors in this tenure" },
              { value: "100%", label: "student-led club operations" },
              { value: "all year", label: "workshop and event support" },
            ].map((item) => (
              <div key={item.label} className="rounded-md border border-line bg-surface p-6">
                <p className="font-display text-2xl font-semibold text-gold">{item.value}</p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <div className="mb-10">
            <p className="font-mono text-xs text-gold mb-3">// current roster</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
              Current tenure members 2026/27
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {members.map((member) => (
              <div key={member.name} className="rounded-md border border-line bg-ink p-6">
                <div className="mb-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border border-line bg-surface">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  ) : (
                    <span className="font-display text-lg font-semibold text-paper">
                      {member.initials}
                    </span>
                  )}
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-crimson">
                  {member.role}
                </p>
                <h3 className="mt-2 font-display text-lg text-paper">{member.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
