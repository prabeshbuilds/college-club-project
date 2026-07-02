"use client";

import { ChangeEvent, FormEvent, useState } from "react";

export default function FreshersFarewellEntryForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");
  const [values, setValues] = useState({
    eventType: "Freshers",
    studentName: "",
    semester: "",
    paymentFile: "",
  });

  function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    setValues((prev) => ({
      ...prev,
      paymentFile: file ? file.name : "",
    }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!values.studentName || !values.semester) {
      return;
    }

    setStatus("submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      {status === "submitted" ? (
        <div className="rounded-sm border border-crimson/30 bg-crimson/10 px-4 py-3 text-sm text-paper">
          Thanks! Your submission details have been captured. We will review the entry request shortly.
        </div>
      ) : null}

      <div>
        <label className="mb-2 block font-mono text-xs text-muted">
          event type
        </label>
        <select
          value={values.eventType}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, eventType: e.target.value }))
          }
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper focus:outline-none focus:border-crimson"
        >
          <option>Freshers</option>
          <option>Farewell</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs text-muted">
          student name
        </label>
        <input
          required
          value={values.studentName}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, studentName: e.target.value }))
          }
          placeholder="Enter full name"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs text-muted">
          semester
        </label>
        <input
          required
          value={values.semester}
          onChange={(e) =>
            setValues((prev) => ({ ...prev, semester: e.target.value }))
          }
          placeholder="e.g. 1st semester"
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper placeholder:text-muted focus:outline-none focus:border-crimson"
        />
      </div>

      <div>
        <label className="mb-2 block font-mono text-xs text-muted">
          payment screenshot
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full rounded-sm border border-line bg-surface px-4 py-3 text-sm text-paper file:mr-4 file:rounded-sm file:border-0 file:bg-crimson file:px-3 file:py-2 file:font-mono file:text-xs file:text-paper hover:file:bg-crimson-dim"
        />
        {values.paymentFile ? (
          <p className="mt-2 text-xs text-paper-dim">Selected file: {values.paymentFile}</p>
        ) : null}
      </div>

      <button
        type="submit"
        className="w-full rounded-sm bg-crimson px-6 py-3 font-mono text-sm text-paper transition-colors hover:bg-crimson-dim"
      >
        submit entry →
      </button>
    </form>
  );
}
