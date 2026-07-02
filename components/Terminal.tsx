"use client";

import { useEffect, useState } from "react";

const lines = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: "sungava_it_club — Sungava College, Chitwan" },
  { prompt: "$", text: "cat mission.txt" },
  {
    prompt: ">",
    text: "build a community of curious, capable IT & BCA students",
  },
  { prompt: "$", text: "./run --workshops --hackathons --events" },
  { prompt: "✓", text: "club is live. new members welcome." },
];

export default function Terminal() {
  const [visible, setVisible] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const current = lines[visible].text;
    if (charCount < current.length) {
      const t = setTimeout(() => setCharCount((c) => c + 1), 18);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setVisible((v) => v + 1);
        setCharCount(0);
      }, 380);
      return () => clearTimeout(t);
    }
  }, [charCount, visible]);

  return (
    <div className="rounded-md border border-line bg-surface shadow-[0_0_0_1px_rgba(0,0,0,0.2)] overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-line bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-crimson-dim" />
        <span className="h-2.5 w-2.5 rounded-full bg-gold/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-paper-dim/40" />
        <span className="ml-3 font-mono text-[11px] text-muted">
          sungava-it-club — zsh
        </span>
      </div>
      <div className="px-5 py-6 font-mono text-[13px] sm:text-sm leading-7 min-h-[220px]">
        {lines.slice(0, visible).map((l, i) => (
          <div key={i} className={l.prompt === "✓" ? "text-gold" : "text-paper-dim"}>
            <span className="text-crimson mr-2">{l.prompt}</span>
            {l.text}
          </div>
        ))}
        {visible < lines.length && (
          <div className={lines[visible].prompt === "✓" ? "text-gold" : "text-paper-dim"}>
            <span className="text-crimson mr-2">{lines[visible].prompt}</span>
            {lines[visible].text.slice(0, charCount)}
            <span className="inline-block w-2 h-4 bg-gold/80 align-middle ml-0.5 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
