"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home", cmd: "~" },
  { href: "/projects", label: "Projects", cmd: "projects" },
  { href: "/workshop", label: "Workshop", cmd: "workshop" },
  { href: "/join", label: "Join", cmd: "join" },
  { href: "/contact", label: "Contact", cmd: "contact" },
  { href: "/feedback", label: "Feedback", cmd: "feedback" },
];



export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5">
            <img
              src="/logo.jpg"
              alt="Sungava College logo"
              className="h-11 w-11 rounded-xl border border-line/80 bg-ink p-1 object-cover shadow-sm"
            />
            <span className="font-display text-sm font-semibold tracking-tight text-paper sm:text-[16px]">
              Sungava IT Club
            </span>
          </Link>

          <nav className="hidden items-center gap-1 font-mono text-[13px] md:flex">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-3 py-2 transition-all duration-200 ${
                    active
                      ? "bg-surface-2/80 text-gold shadow-[inset_0_0_0_1px_rgba(232,181,77,0.12)]"
                      : "text-muted hover:bg-surface-2/70 hover:text-paper"
                  }`}
                >
                  <span className="mr-1 text-crimson-dim">/</span>
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 rounded-full bg-gradient-to-r from-crimson to-crimson-dim px-3.5 py-2 text-paper shadow-lg shadow-crimson/20 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-crimson/35"
            >
              join_club →
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center rounded-full border border-line/80 bg-surface/80 px-3 py-2 font-mono text-sm text-paper transition-all duration-200 hover:border-gold hover:text-gold md:hidden"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line/70 bg-surface/95 font-mono text-sm backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-3 py-2 transition-colors ${
                  pathname === l.href
                    ? "bg-surface-2 text-gold"
                    : "text-muted hover:bg-surface-2/70 hover:text-paper"
                }`}
              >
                <span className="mr-1 text-crimson-dim">/</span>
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
