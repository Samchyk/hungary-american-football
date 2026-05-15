import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';

export const metadata = {
  title: 'Adatvédelmi Szabályzat - Amerikai Futball',
  description: 'Az Amerikai Futball weboldalának adatvédelmi szabályzata.',
};

export default function PrivacyPage() {
  return (
    <main>
      <Header />

      {/* Header */}
      <section className="py-16 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Adatvédelmi Szabályzat</h1>
            <p className="text-lg text-foreground/70">
              Utolsó módosítás: {new Date().getFullYear()} január
            </p>
          </div>
          <div className="hidden lg:block flex-1 relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/images/privacy-hero.jpg"
              alt="Adatvédelem"
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
                <h2 className="text-3xl font-bold mb-4">Bevezetés</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Az Amerikai Futball weboldalunk (a továbbiakban: "Weboldal") az adatvédelem iránt elkötelezetett. Ez az adatvédelmi szabályzat ismerteti, hogyan gyűjtjük, használjuk és védjük a személyes adataidat.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Az Adatok Gyűjtése</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Személyes adatokat csak akkor gyűjtünk, ha Ön önként adja meg azokat, például az alábbi helyzetekben:
                </p>
                <ul className="list-disc list-inside text-lg text-foreground/70 space-y-2 ml-4">
                  <li>Kapcsolatfelvételi forma kitöltésekor</li>
                  <li>Hírlevélre való feliratkozáskor</li>
                  <li>Hozzászólások vagy kérdések feladásakor</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Az Adatok Felhasználása</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Az összegyűjtött adatokat a következő célokra használjuk:
                </p>
                <ul className="list-disc list-inside text-lg text-foreground/70 space-y-2 ml-4">
                  <li>Kérdésekre és észrevételekre való válaszadás</li>
                  <li>Weboldal fejlesztése és javítása</li>
                  <li>Hírlevél küldése (ha elfogadtad)</li>
                  <li>A weboldal biztonságának és üzemeltetésének fenntartása</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Adatok Védelme</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  A személyes adatok védelme nagyon fontos számunkra. Megfelelő technikai és szervezeti intézkedéseket teszünk az adatok jogosulatlan hozzáférése és módosítása ellen.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Harmadik Felek</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  A személyes adataidat nem adjuk át harmadik fél számára, kivéve ha jogszerű ok és megfelelő jogi háttér van rá, illetve ha Ön hozzájárult.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Sütik</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Weboldalunk sütiket használ a felhasználói élmény javítása érdekében. A sütikről részletesebben a Cookie Szabályzatban olvashat.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Az Ön Jogai</h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-4">
                  Az adatvédelmi törvények szerint jogosult:
                </p>
                <ul className="list-disc list-inside text-lg text-foreground/70 space-y-2 ml-4">
                  <li>Hozzáférni az Önről tárolt adatokhoz</li>
                  <li>Javítást kérni a helytelen adatokhoz</li>
                  <li>Törlést kérni az Ön adatainak</li>
                  <li>Tiltakozni az adatok feldolgozása ellen</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">Elérhetőség</h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Ha kérdéseid vannak az adatvédelemmel kapcsolatban, kérjük, vedd fel velünk a kapcsolatot az&nbsp;
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
