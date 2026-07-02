import WorkshopForm from "../../components/WorkshopForm";
import FreshersFarewellEntryForm from "../../components/FreshersFarewellEntryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Workshop Registration — Sungava IT Club",
  description: "Register for upcoming Workshops and Training sessions at Sungava IT Club.",
};

export default function WorkshopPage() {
  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-4">// workshop registration</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-2xl leading-[1.1]">
            Workshop training & short courses
          </h1>
          <p className="mt-6 text-paper-dim max-w-2xl leading-relaxed">
            Sign up for hands-on workshops run by Sungava IT Club practical
            sessions on Python, web development, AI/ML, Git and more. Fill the
            form and we&rsquo;ll reserve your seat.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid md:grid-cols-2 gap-10">
          <div className="rounded-md border border-line bg-surface p-8">
            <p className="font-mono text-xs text-gold mb-3">// register</p>
            <WorkshopForm />
          </div>

          <div className="rounded-md border border-line bg-surface p-8">
            <p className="font-mono text-xs text-gold mb-3">// info</p>
            <h3 className="font-display text-lg text-paper mb-3">What to expect</h3>
            <p className="text-sm text-paper-dim leading-relaxed">
              Interactive sessions, small groups, and a short project at the
              end. We provide course materials and a completion certificate.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-3">// freshers & farewell</p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-paper">
            Entry form for Freshers and Farewell
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-paper-dim leading-relaxed">
            Students can submit their details here for the annual Freshers&apos; Week or Farewell entry process, along with the payment screenshot for confirmation.
          </p>

          <div className="mt-8 rounded-md border border-line bg-ink p-8 sm:p-10">
            <p className="font-mono text-[11px] text-crimson mb-3">student entry form</p>
            <FreshersFarewellEntryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
