import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join Sungava IT Club",
  description:
    "Apply to join Sungava IT Club at Sungava College with our student application form.",
};

const benefits = [
  "Learn practical software and web development skills.",
  "Take part in workshops, hackathons, and college tech events.",
  "Work with senior students and faculty on real club projects.",
  "Build your portfolio while studying BCA and related programmes.",
];

export default function JoinPage() {
  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-4">// join the club</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-3xl leading-[1.1]">
            Apply now to become part of Sungava IT Club.
          </h1>
          <p className="mt-6 text-paper-dim max-w-2xl leading-relaxed">
            Fill out the application below and tell us why you want to join. Our team will review your interest and contact you with the next steps.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-14">
          <div className="space-y-6">
            <div>
              <p className="font-mono text-xs text-gold mb-2">// why join</p>
              <h2 className="font-display text-3xl font-semibold text-paper">
                Become a club member and build your skills with peers.
              </h2>
            </div>
            <ul className="space-y-4 text-sm text-paper-dim leading-relaxed">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span className="font-mono text-gold">•</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="rounded-md border border-line bg-surface p-8">
              <p className="font-mono text-xs text-gold mb-5">// application form</p>
              <JoinForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
