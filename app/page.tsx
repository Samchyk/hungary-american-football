import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { ContentSection } from '@/components/sections/content-section';
import { BlogPreview } from '@/components/sections/blog-preview';
import Image from 'next/image';

export default function Home() {
  const sections = [
    {
      title: 'Edzés és Gyakorlás',
      description: 'Felfedezd az alapvető és haladó edzési módszereket az amerikai futballban.',
      content: 'Az amerikai futball az egyik legösszetettebb sport, amely számos edzési módszert és készségfejlesztést igényel. Az edzés a futball szerves része, függetlenül attól, hogy amatőr vagy profi szinten játszol. A jó edzés nem csak fizikai felkészültséget jelent, hanem mentális erőt és csapatmunkát is.',
      category: 'Edzés',
      isReversed: false,
      image: '/images/training.jpg',
    },
    {
      title: 'Az Amerikai Futball Története',
      description: 'Ismerj meg az amerikai futball gazdag és faszináló múltját.',
      content: 'Az amerikai futball a 19. századi amerikai egyetemek futball közösségéből fejlődött ki. Az NFL (National Football League) alapítása 1920-ban volt egy fordulópont a sport történetében. Az elmúlt egy évszázad során az amerikai futball a világ egyik legpopulárisabb sportjává vált.',
      category: 'Történet',
      isReversed: true,
      image: '/images/history.jpg',
    },
    {
      title: 'Pozíciók és Szerepek',
      description: 'Megérteni az amerikai futball összes fő pozícióját és azok dinamikáját.',
      content: 'Az amerikai futballban minden pozíciónak egyedi szerepe és felelőssége van. A quarterback az egyik legfontosabb pozíció, aki az egész támadást irányítja. A futók, vevők, tight endek és az offensive line együttesen hozzák létre a sikeres támadást.',
      category: 'Típusok',
      isReversed: false,
      image: '/images/positions.jpg',
    },
    {
      title: 'Érdekes Tények és Statisztikák',
      description: 'Fedezz fel az amerikai futball világának érdekes adatait és rekordjait.',
      content: 'Az amerikai futball több tízmillió szurkolóval rendelkezik az Egyesült Államok szerte, és évről évre nő a nemzetközi rajongók száma. A Super Bowl az egyik legtöbb nézővel rendelkező sportesemény a világon, és egy kulturális eseménnyé vált.',
      category: 'Tények',
      isReversed: true,
      image: '/images/facts.jpg',
    },
    {
      title: 'Felszerelés és Biztonság',
      description: 'Ismerj meg az amerikai futballhoz szükséges felszereléseket és biztonságot.',
      content: 'Az amerikai futball az egyik legigazabb kontakt sportok, ezért a megfelelő felszerelés kritikus fontosságú. A sisak, vállkabát, könyökvédelem és egyéb védőfelszerelések védelmet nyújtanak a játékosoknak a súlyos sérülések ellen.',
      category: 'Felszerelés',
      isReversed: false,
      image: '/images/equipment.jpg',
    },
    {
      title: 'Szabályok és Fair Play',
      description: 'Tanulj az amerikai futball alapvető és haladó szabályairól.',
      content: 'Az amerikai futballnak szigorú szabályrendszere van, amelyet a játékvezetők, umpireok és más hivatalos személyek érvénytartanak. Ezek a szabályok biztosítják a fair playt, az igazságos versengést és a játékosok biztonságát.',
      category: 'Szabályok',
      isReversed: true,
      image: '/images/rules.jpg',
    },
  ];

  return (
    <main>
      <Header />
      <HeroSection />
      {sections.map((section, index) => (
        <ContentSection
          key={index}
          title={section.title}
          description={section.description}
          content={section.content}
          category={section.category}
          isReversed={section.isReversed}
          image={section.image}
        />
      ))}
      <BlogPreview />
      <Footer />
    </main>
  );
}
