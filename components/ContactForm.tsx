"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!values.name || !values.email || !values.message) return;
    // No backend is wired up yet — this simply confirms receipt client-side.
    // Swap this for a real API route / form service when you're ready to
    // receive submissions.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-surface p-8">
        <p className="font-mono text-xs text-gold mb-3">✓ message queued</p>
        <p className="font-display text-xl text-paper mb-2">
          Thanks, {values.name.split(" ")[0]}.
        </p>
        <p className="text-sm text-paper-dim leading-relaxed">
          We&rsquo;ll get back to you at {values.email}. If it&rsquo;s
          urgent, call +977-56-582611 or message us on Facebook.
        </p>
        <button
          onClick={() => {
            setValues({ name: "", email: "", message: "" });
            setStatus("idle");
          }}
          className="mt-6 font-mono text-xs text-crimson hover:text-gold transition-colors"
        >
          ← send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          name
        </label>
        <input
          required
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder="Your full name"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>
      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          email
        </label>
        <input
          required
          type="email"
          value={values.email}
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          placeholder="you@example.com"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>
      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          message
        </label>
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Tell us what you're looking for — joining the club, a workshop idea, a partnership..."
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto rounded-sm bg-crimson px-6 py-3 font-mono text-sm text-paper hover:bg-crimson-dim transition-colors"
      >
        send_message →
      </button>
    </form>
  );
}
