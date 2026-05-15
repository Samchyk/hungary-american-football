import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export const metadata = {
  title: 'Cookie Szabályzat - Amerikai Futball',
  description: 'Az Amerikai Futball weboldalának cookie szabályzata.',
};

export default function CookiePage() {
  return (
    <main>
      <Header />

      {/* Header */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Cookie Szabályzat</h1>
            <p className="text-lg text-foreground/70">
              Utolsó módosítás: {new Date().getFullYear()}
            </p>
          </div>
          <div className="hidden lg:block flex-1 relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/cookies-hero.jpg"
              alt="Cookie szabályzat"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">Mi a Cookie?</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  A cookie kisméretű szövegfájlok, amelyeket a webszerver a felhasználó számítógépén tárol. Ezek a fájlok információkat tartalmaznak a felhasználó böngészési szokásairól és preferenciáiról.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Milyen Sütiket Használunk?</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Szükséges Sütik</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Ezek a sütik a weboldal alapvető funkcióinak működéséhez szükségesek, például a bejelentkezéshez vagy a biztonsági funkciókat végzik el.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">Elemzési Sütik</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Ezek segítenek megérteni, hogyan használnak az emberek a weboldalunkat. Az adatok aggregáltak, személyazonosságot nem lehet belőlük azonosítani.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">Előkészítési Sütik</h3>
                    <p className="text-lg text-foreground/70 leading-relaxed">
                      Ezek a sütik információt tárolnak az Ön preferenciáiról, hogy személyre szabhassuk az élményt.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Sütik Kezelése</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  A legtöbb böngészőben módosíthatja a sütikkel kapcsolatos beállításokat:
                </p>
                <ul className="list-disc list-inside text-lg text-foreground/70 space-y-2 ml-4">
                  <li>Chrome: Beállítások → Adatvédelem és Biztonság → Sütik</li>
                  <li>Firefox: Beállítások → Adatvédelem és Biztonság → Sütik</li>
                  <li>Safari: Beállítások → Adatvédelem → Cookie kezelése</li>
                  <li>Edge: Beállítások → Adatvédelem → Sütik kezelése</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Harmadik Fél Sütik</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Weboldalunk tartalmazhat harmadik fél szükségleteit, amelyek saját sütiket használhatnak. Ezek a harmadik felek saját adatvédelmi szabályzata alapján kezelik az adatokat.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Sütik Tiltása</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Ha letiltod az összes sütit, néhány weboldal funkciója nem fog megfelelően működni. Az elemzési és előkészítési sütik letiltása után továbbra is használhatod a weboldalat, de a tapasztalat lehet, hogy nem lesz egyénre szabott.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Elérhetőség</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Ha kérdéseid vannak a sütikről vagy az adatvédelemről, kérjük, vedd fel velünk a kapcsolatot az&nbsp;
                  <a href="/about" className="text-accent hover:opacity-80 transition-opacity font-semibold">
                    kapcsolatfelvételi formon
                  </a>
                  &nbsp;keresztül.
                </p>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
