import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-sm bg-crimson text-paper font-mono text-xs">
                S_
              </span>
              <span className="font-display text-sm font-semibold text-paper">
                Sungava IT Club
              </span>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              The official IT community of Sungava College a college of
              technology and management in Khairahani, Chitwan.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-gold mb-3">// navigate</p>
            <ul className="space-y-2 text-sm text-muted">
              <li><Link href="/" className="hover:text-paper transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-paper transition-colors">About the club</Link></li>
              <li><Link href="/projects" className="hover:text-paper transition-colors">Projects</Link></li>
              <li><Link href="/join" className="hover:text-paper transition-colors">Join the club</Link></li>
              <li><Link href="/contact" className="hover:text-paper transition-colors">Contact</Link></li>
              <li><Link href="/feedback" className="hover:text-paper transition-colors">Student feedback</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-gold mb-3">// college</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>Sungava College</li>
              <li>Khairahani-5, Chitwan, Nepal</li>
              <li>Affiliated to Tribhuvan University</li>
              <li>
                <a
                  href="https://www.sungavacollege.edu.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors underline underline-offset-4 decoration-line"
                >
                  sungavacollege.edu.np
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-gold mb-3">// reach us</p>
            <ul className="space-y-2 text-sm text-muted">
              <li>Khairahani-5, Chitwan, Nepal</li>
              <li>+977-56-582611</li>
              <li>
                <a
                  href="https://github.com/sungavaitclub-jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper transition-colors underline underline-offset-4 decoration-line"
                >
                  github.com/sungavaitclub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-xs text-muted">
            © {new Date().getFullYear()} Sungava IT Club · Sungava College, Chitwan
          </p>
          <p className="font-mono text-xs text-muted">
            built_by=students / status=active
          </p>
        </div>
      </div>
    </footer>
  );
}
