"use client";

import { useState, FormEvent } from "react";

const workshops = [
  "Python & Django",
  "AI & Machine Learning",
  "Web Development",
  "Git & GitHub",
];



export default function WorkshopForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    workshop: workshops[0],
    notes: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!values.name || !values.email || !values.phone) {
      setError("Please complete name, email and phone.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/workshop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to submit.");

      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Submission failed.");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-surface p-8">
        <p className="font-mono text-xs text-gold mb-3">✓ registration received</p>
        <p className="font-display text-xl text-paper mb-2">
          Thanks, {values.name.split(" ")[0]}.
        </p>
        <p className="text-sm text-paper-dim leading-relaxed">
          We received your registration for <span className="text-paper">{values.workshop}</span>. We will contact you at {values.email}.
        </p>
        <button
          onClick={() => {
            setValues({ name: "", email: "", phone: "", workshop: workshops[0], notes: "" });
            setStatus("idle");
            setError(null);
          }}
          className="mt-6 font-mono text-xs text-crimson hover:text-gold transition-colors"
        >
          ← register another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error ? (
        <p className="rounded-sm border border-red-400 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>
      ) : null}

      <div>
        <label className="font-mono text-xs text-muted block mb-2">name</label>
        <input
          required
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          placeholder="Full name"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">email</label>
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
        <label className="font-mono text-xs text-muted block mb-2">phone</label>
        <input
          required
          value={values.phone}
          onChange={(e) => setValues({ ...values, phone: e.target.value })}
          placeholder="Mobile number"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">workshop</label>
        <select
          value={values.workshop}
          onChange={(e) => setValues({ ...values, workshop: e.target.value })}
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper focus:outline-none focus:border-crimson"
        >
          {workshops.map((w) => (
            <option key={w} value={w}>{w}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">notes</label>
        <textarea
          rows={4}
          value={values.notes}
          onChange={(e) => setValues({ ...values, notes: e.target.value })}
          placeholder="Anything we should know — experience, topics you want covered"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto rounded-sm bg-crimson px-6 py-3 font-mono text-sm text-paper hover:bg-crimson-dim transition-colors disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "sending..." : "register →"}
      </button>
    </form>
  );
}
