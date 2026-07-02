import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Sungava IT Club",
  description:
    "Get in touch with Sungava IT Club at Sungava College, Khairahani-5, Chitwan.",
};

const details = [
  { k: "Address", v: "Sungava College, Khairahani-5, Chitwan, Nepal" },
  { k: "Phone", v: "+977-56-582611" },
  { k: "Email", v: "sungavaitclub@gmail.com" },
  { k: "Facebook", v: "facebook.com/SungavaCollege" },
  { k: "Office Hours", v: "Sun–Fri, 10:00–16:00" },
];

export default function Contact() {
  return (
    <div>
      <section className="border-b border-line bg-noise">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20">
          <p className="font-mono text-xs text-gold mb-4">// contact</p>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-paper max-w-xl leading-[1.1]">
            Say hello, or just come find us on campus
          </h1>
          <p className="mt-6 text-paper-dim max-w-xl leading-relaxed">
            Sungava IT Club is based on the Sungava College campus at
            Khairahani-5, Chitwan. Drop by, call, or send a message below —
            we reply within a day or two during term.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 sm:py-20 grid lg:grid-cols-[1fr_1.3fr] gap-12">
          <div>
            <p className="font-mono text-xs text-gold mb-5">// details</p>
            <dl className="space-y-5 mb-10">
              {details.map((d) => (
                <div
                  key={d.k}
                  className="border-b border-line pb-4 flex flex-col gap-1"
                >
                  <dt className="font-mono text-[11px] text-muted">{d.k}</dt>
                  <dd className="text-paper text-sm">{d.v}</dd>
                </div>
              ))}
            </dl>

            <div className="rounded-md overflow-hidden border border-line aspect-[4/3]">
              <iframe
                title="Sungava College location map"
                src="https://www.google.com/maps?q=Khairahani-5,+Chitwan,+Nepal&output=embed"
                className="w-full h-full grayscale-[40%] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-gold mb-5">// send a message</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
