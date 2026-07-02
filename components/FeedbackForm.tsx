"use client";

import { useState, FormEvent } from "react";

const ratings = [1, 2, 3, 4, 5];

export default function FeedbackForm() {
  const [rating, setRating] = useState(5);
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name) return;
    // No backend wired up — connect this to an API route or form service
    // to actually collect and store responses.
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-md border border-line bg-surface p-8 text-center">
        <p className="font-mono text-xs text-gold mb-3">✓ feedback received</p>
        <p className="font-display text-xl text-paper">
          Thanks for the input, {name.split(" ")[0]}.
        </p>
        <p className="mt-2 text-sm text-paper-dim">
          The core team reads every response before planning the next
          session.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-md border border-line bg-surface p-7 sm:p-8 space-y-5"
    >
      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          name
        </label>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          programme
        </label>
        <select
          className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-paper focus:outline-none focus:border-crimson"
          defaultValue="BCA"
        >
          <option>BCA</option>
          <option>BBS</option>
          <option>+2 Science</option>
          <option>+2 Management</option>
          <option>+2 Hotel Management</option>
        </select>
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          rating
        </label>
        <div className="flex gap-2">
          {ratings.map((r) => (
            <button
              type="button"
              key={r}
              onClick={() => setRating(r)}
              className={`h-10 w-10 rounded-sm border font-mono text-sm transition-colors ${
                r <= rating
                  ? "bg-gold text-ink border-gold"
                  : "border-line text-muted hover:border-paper-dim"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="font-mono text-xs text-muted block mb-2">
          your feedback
        </label>
        <textarea
          required
          rows={4}
          placeholder="What worked, what didn't, what should we run next?"
          className="w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto rounded-sm bg-crimson px-6 py-3 font-mono text-sm text-paper hover:bg-crimson-dim transition-colors"
      >
        submit_feedback →
      </button>
    </form>
  );
}
