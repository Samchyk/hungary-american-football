import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-6 text-balance">
              Amerikai
              <br />
              <span className="text-accent">Futball</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-lg">
              Fedezd fel a világ legdinamikusabb sportjának faszinálóan világát. Tanulj az alapoktól a profi szintig.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                href="/blog"
                className="px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
              >
                Fedezz fel
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 border-2 border-accent text-accent font-bold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors text-lg"
              >
                Tudj meg többet
              </Link>
            </div>
          </div>

          {/* Right side - Visual element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
              <Image
                src="/images/hero-football.jpg"
                alt="Amerikai futball"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
