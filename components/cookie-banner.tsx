'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'cookie-consent-accepted';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasConsent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!hasConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          {/* Text Content */}
          <div className="flex-1">
            <h3 className="text-lg font-bold mb-2">Sütik és Adatvédelem</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
              A weboldalunk sütiket használ a felhasználói élmény javítása és az elemzés céljából. Az adatvédelem irányt erős elkötelezettsége van. 
              <span className="ml-1">
                <Link href="/privacy" className="text-accent hover:opacity-80 transition-opacity font-semibold">
                  Adatvédelem
                </Link>
                {' • '}
                <Link href="/cookies" className="text-accent hover:opacity-80 transition-opacity font-semibold">
                  Cookie Szabályzat
                </Link>
              </span>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={() => setIsVisible(false)}
              className="px-4 py-2 border border-border rounded-lg hover:bg-secondary transition-colors text-sm font-semibold whitespace-nowrap"
            >
              Ablak bezárása
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-semibold whitespace-nowrap"
            >
              Elfogadás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
