'use client';

import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-4">Hungaryamericanfutball</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Fedezd fel az amerikai futball faszinálóan világát modern, interaktív tartalommal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Navigáció</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/70 hover:text-accent transition-colors">
                  Kezdőlap
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/70 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/70 hover:text-accent transition-colors">
                  Rólunk
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Jogi</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-foreground/70 hover:text-accent transition-colors">
                  Adatvédelmi Szabályzat
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-foreground/70 hover:text-accent transition-colors">
                  Cookie Szabályzat
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-foreground/60 text-sm">
            &copy; {currentYear} Amerikai Futball. Minden jog fenntartva.
          </p>
        </div>
      </div>
    </footer>
  );
}
