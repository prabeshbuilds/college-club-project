"use client";

import { useState, FormEvent } from "react";

const programmes = [
  "BCA",
  "BBS",
  "+2 Science",
  "+2 Management",
  "+2 Hotel Management",
];

const years = ["1st year", "2nd year", "3rd year", "4th year"];

export default function JoinForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    programme: "BCA",
    year: "1st year",
    why: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!values.name || !values.email || !values.why) {
      setError("Please complete every field before sending.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to submit application.");
      }

      setStatus("sent");
    } catch (err) {
      setStatus("idle");
      setError(
        err instanceof Error
          ? err.message
          : "Unable to submit the application right now."
      );
    }
  }


  

  if (status === "sent") {
    return (
      <div className="rounded-md border border-line bg-surface p-8">
        <p className="font-mono text-xs text-gold mb-3">✓ application received</p>
        <p className="font-display text-xl text-paper mb-2">
          Thanks for applying, {values.name.split(" ")[0]}.
        </p>
        <p className="text-sm text-paper-dim leading-relaxed">
          We have your application for <span className="text-paper">{values.programme}</span>{" "}
          ({values.year}), and we&rsquo;ll contact you at {values.email} soon.
        </p>
        <button
          onClick={() => {
            setValues({
              name: "",
              email: "",
              programme: "BCA",
              year: "1st year",
              why: "",
            });
            setStatus("idle");
            setError(null);
          }}
          className="mt-6 font-mono text-xs text-crimson hover:text-gold transition-colors"
        >
          ← submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error ? (
        <p className="rounded-sm border border-red-400 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </p>
      ) : null}

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

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="font-mono text-xs text-muted block mb-2">
            programme
          </label>
          <select
            value={values.programme}
            onChange={(e) => setValues({ ...values, programme: e.target.value })}
            className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper focus:outline-none focus:border-crimson"
          >
            {programmes.map((programme) => (
              <option key={programme} value={programme}>
                {programme}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="font-mono text-xs text-muted block mb-2">
            year
          </label>
          <select
            value={values.year}
            onChange={(e) => setValues({ ...values, year: e.target.value })}
            className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper focus:outline-none focus:border-crimson"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          why do you want to join
        </label>
        <textarea
          required
          rows={5}
          value={values.why}
          onChange={(e) => setValues({ ...values, why: e.target.value })}
          placeholder="Tell us what interests you most and what you hope to learn or build."
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full sm:w-auto rounded-sm bg-crimson px-6 py-3 font-mono text-sm text-paper hover:bg-crimson-dim transition-colors disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "sending..." : "apply_to_join →"}
      </button>
    </form>
  );
}
