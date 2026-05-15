'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ContactForm } from '@/components/contact-form';
import { SuccessModal } from '@/components/success-modal';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Rólunk
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Fedezd fel az amerikai futball szépségét és komplexitását velünk.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Az Amerikai Futball Missziónk
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Az amerikai futball egy lenyűgöző sport, amely egyesíti a fizikai erőt, a mentális élességet és a csapatmunkát. Célunk, hogy bárki, kezdő vagy tapasztalt rajongó, megérthesse és szeresse ezt a csodálatos sportot.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                Világszerte az emberek milliói követik az NFL-t és más amerikai futball ligákat. A sport fejlődésével és növekedésével magyarázat és információ szükséges ahhoz, hogy mindenki gyönyörködhessen ebben az izgalomban.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Ezen a weboldalon modern, érdekes és hozzáférhető tartalmat adunk az összes szintű amerikai futball szerelmeseihez.
              </p>
            </div>

            {/* Visual */}
            <div className="hidden lg:flex items-center justify-center">
              <div className="relative w-96 h-96 rounded-3xl overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="Amerikai futball csapat"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20 border-y border-border">
            {[
              {
                title: 'Átfogó Ismeretek',
                description: 'Az alapoktól a profi szintig, minden tudást megtalálsz.',
              },
              {
                title: 'Modern Tartalom',
                description: 'Érdekes és felkeltő cikkek az amerikai futball világáról.',
              },
              {
                title: 'Szabályok Magyarázata',
                description: 'Érdd meg az összes szabályt és a játék dinamikáját.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <div className="text-2xl font-bold text-accent">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Kapcsolatba Lépes Velünk</h2>
            <p className="text-xl text-foreground/70 mb-8">
              Van kérdésed vagy javaslatod? Szívesen hallunk tőled! Töltsd ki az alábbi űrlapot és hamarosan felvesszük veled a kapcsolatot.
            </p>
            <div className="bg-background border border-border rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold text-foreground mb-2">Email:</p>
              <a 
                href="mailto:contact@hungaryamericanfutball.com" 
                className="text-accent hover:underline text-xl font-bold"
              >
                contact@hungaryamericanfutball.com
              </a>
            </div>
          </div>

          <ContactForm onSuccess={handleFormSuccess} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Készen állsz arra, hogy felfedezz?</h3>
          <a
            href="/blog"
            className="inline-block px-8 py-4 bg-accent text-accent-foreground font-bold rounded-lg hover:opacity-90 transition-opacity text-lg"
          >
            Megyek a Blog-hoz
          </a>
        </div>
      </section>

      <Footer />

      {/* Success Modal */}
      <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />
    </main>
  );
}
