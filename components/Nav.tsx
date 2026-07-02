"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", cmd: "~" },
  { href: "/about", label: "About", cmd: "about" },
  { href: "/workshop", label: "Workshop", cmd: "workshop" },
  { href: "/join", label: "Join", cmd: "join" },
  { href: "/contact", label: "Contact", cmd: "contact" },
  { href: "/feedback", label: "Feedback", cmd: "feedback" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo.jpg" alt="Sungava College logo" className="h-12 w-12 rounded-lg border border-line bg-ink p-1 object-cover" />
            <span className="font-display text-base sm:text-[16px] font-semibold tracking-tight text-paper">
              Sungava IT Club
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 font-mono text-[13px]">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 rounded-sm transition-colors ${
                    active
                      ? "text-gold"
                      : "text-muted hover:text-paper"
                  }`}
                >
                  <span className="text-crimson-dim">/</span>
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-3 rounded-sm bg-crimson px-3.5 py-1.5 text-paper hover:bg-crimson-dim transition-colors"
            >
              join_club →
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden font-mono text-sm text-paper border border-line rounded-sm px-3 py-1.5"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-surface font-mono text-sm">
          <div className="mx-auto max-w-6xl px-5 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`py-2 ${
                  pathname === l.href ? "text-gold" : "text-muted"
                }`}
              >
                <span className="text-crimson-dim">/</span>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
