export interface BlogArticle {
  title: string;
  excerpt: string;
  content: string;
  category: 'Edzés' | 'Történet' | 'Típusok' | 'Tények' | 'Felszerelés' | 'Szabályok';
  image: string;
}

export const blogArticles: BlogArticle[] = [
  {
    title: 'Az amerikai futball alapjai kezdőknek',
    excerpt: 'Tanuld meg az amerikai futball alapvető szabályait és játékstílusát.',
    content: `Az amerikai futball egy dinamikus sport, amely stratégia, fizikai erő és csapatmunka kombinációja. 
    
A játék célja a labda ellenfél zónájára juttatása. Minden csapat 11 játékosból áll a pályán, és különbséget tesznek támadó és védekező szerepek között.

Az alap pozíciók: quarterback (QB), futó, vevő, valamint a védekezési vonal. Minden pozíciónak specifikus feladata van a csapat sikere érdekében.

A labda előrehaladása generációkon keresztül azonban az embereket szerte a világon lenyűgözve meghálózott.`,
    category: 'Szabályok',
    image: '/images/fundamentals.jpg',
  },
  {
    title: 'Quarterback készségek fejlesztése',
    excerpt: 'Mesterséges módszerek a quarterback pozíció tökéletesítésére.',
    content: `A quarterback az amerikai futball szíve. Ő felel a támadás irányításáért és a labda eldobásáért.

Kulcsfontosságú készségek:
- Pontos eldobás technika
- Gyors döntéshozatal
- Tereppálya tudatosság
- Erős fizikai állapot

Az edzésben fontos a labda markolásának gyakorlása, a láb pozicionálása és a feldolgozási sebesség fejlesztése. Professzionális játékosok napi több órát töltsenek ezzel az edzéssel.`,
    category: 'Edzés',
    image: '/images/qb-training.jpg',
  },
  {
    title: 'Az NFL története és fejlődése',
    excerpt: 'Fedezd fel az NFL létrejöttét és evolúcióját az 1920-as évektől napjainkig.',
    content: `Az NFL (National Football League) 1920-ban alapult az Amerikai Egyesült Államokban. 

Az első professzionális szezont rendkívüli egyszerűséggel játszották. Az 1930-as és 1940-es évek során az NFL sokat fejlődött, és más ligákkal való versenynek köszönhetően erősödött.

Az 1950-es évektől kezdve az NFL robbanásszerű növekedésnek indult. A televízió közvetítéseknek, valamint az olyan legendás játékosoknak, mint a Joe Montana és az Lawrence Taylor köszönhetően, az NFL világszerte ismertté vált.

Ma az NFL a világ legismertebb és legnyereségesebb sportligája, évente milliárdok nézik meg a meccseket.`,
    category: 'Történet',
    image: '/images/nfl-history.jpg',
  },
  {
    title: 'Futás vs. Passzolás: Stratégiai egyensúly',
    excerpt: 'Megérteni a támadás alapvető stratégiáit az amerikai futballban.',
    content: `Az amerikai futballban a siker az támadási stratégia megfelelő kiegyensúlyozásán alapul.

A futó támadás: Erős és stabil, amely nagyobb terület-nyer lehetőséget biztosít. Azonban meglehetősen előre jelezhető lehet.

A passzolás támadás: Gyorsabb, kockázatosabb, de lehetőséget ad nagyobb távolságok legyőzésére. Az intercepciónak azonban magas a kockázata.

A legjobb csapatok tudják, hogyan kell dinamikusan vált ezek között az alapján, mit tesz az ellenfél.`,
    category: 'Stratégia',
    image: '/images/strategy.jpg',
  },
  {
    title: 'Védekezési formációk megértése',
    excerpt: 'Az amerikai futball alapvető védekezési szerkezete és taktikái.',
    content: `A védekezés egyformán fontos, mint a támadás az amerikai futballban.

Alapvető védekezési formációk:
- 4-3 formáció: 4 védekezési lináló és 3 linebacker
- 3-4 formáció: 3 lineman és 4 linebacker
- Nickel formáció: Extra kiegészítő a közepes távolságú passzolás ellen

Minden formáció más erősségekkel és gyengeségekkel rendelkezik, amelyet az ellenféllel szemben kell alkalmazni.`,
    category: 'Szabályok',
    image: '/images/defense.jpg',
  },
  {
    title: 'Amerikaifutball felszerelés útmutatója',
    excerpt: 'Teljes útmutató az amerikai futballhoz szükséges felszereléshez és biztonsághoz.',
    content: `Az amerikai futball a legkeményebb kontakt sportok közé tartozik, ezért a megfelelő felszerelés kritikus a biztonság szempontjából.

Alapvető felszerelés:
- Sisak: Fejvédelem a legszilárdabb ütések ellen
- Vállkabát: Mellkasi és vállvédelem
- Könyök- és térdrögzítők: Végtagvédelem
- Lábvédelem: Térd és sípcsont védelemhez
- Mouthguard: Fog- és szájvédelem

A modern felszerelés anyagai kifejlesztése a biomechanika és az anyagtudományok segítségével történik, hogy maximalizálja a védelmet a mozgékonyság megőrzésével.`,
    category: 'Felszerelés',
    image: '/images/equipment.jpg',
  },
  {
    title: 'A touchdownok értékelésének megértése',
    excerpt: 'Milyen pontokat lehet szerezni az amerikai futballban és hogyan.',
    content: `Az amerikai futballban több módon lehet pontokat szerezni:

Touchdown (6 pont): A labda az ellenfél zónájában kerül, az vagy a fogadás vagy a futás révén.

Konverzió (2 vagy 1 pont): Después de a touchdown után lehetőség van további pontokra a kapuból (1 pont) vagy a zónon belüli touchdown (2 pont) révén.

Field Goal (3 pont): A labda átrepül az ellenfél csapatának kapujain keresztül a számított távolságról.

Safety (2 pont): A támadó csapat a saját zónájában térítik meg a labdát.`,
    category: 'Szabályok',
    image: '/images/scoring.jpg',
  },
  {
    title: 'Híres NFL játékosok és örökségük',
    excerpt: 'Az NFL történetét alakító legendás játékosok.',
    content: `Az NFL számos játékosa elhagyta a sport örökérvényű lábnyomát.

Joe Montana: A legsokoldalúbb quarterback, aki 4 Super Bowl-t nyert a San Francisco 49ers-szel. Híresült volt pontosságáról és a nyomás alatt nyújtott teljesítménnyéről.

Lawrence Taylor: Talán a legjobb védekezési játékos valaha. Teljesen megváltoztatta a linebacker pozícióját, és megmutatta, hogy a védekezés lehet olyan elektrizáló, mint a támadás.

Tom Brady: A legidősebb quarterback a ligában, aki működteti az NFL-t az utolsó 20 év alatt. 7 Super Bowl győzelemmel rendelkezik.`,
    category: 'Történet',
    image: '/images/legends.jpg',
  },
  {
    title: 'A wide receiver készségei és technikái',
    excerpt: 'Hogyan lehet profi szintű wide receiver az amerikai futballban.',
    content: `A wide receiver pozíció az egyik legfontosabb az amerikai futballban. Ők felelősek a passzok fogadásáért és az első lehetőség letöréséért.

Szükséges készségek:
- Remek kéz-szem koordináció
- Gyorsaság és gyorsulás
- Útvonal futási pontosság
- Fizikai játék képessége
- Terepszituáció tudatosság

A modern NFL-ben az alacsony, közép és felső szinten kell tudni fogadni, valamint meg kell tudni felvenni a labdát, miközben a védekezők nyomása alatt állnak.`,
    category: 'Edzés',
    image: '/images/wr-training.jpg',
  },
  {
    title: 'A futball pozícióira vonatkozó alapvető útmutató',
    excerpt: 'Az amerikai futball összes fő pozíciójának megértése és azok szerepei.',
    content: `Az amerikai futballban számos pozíció van, mindegyiknek saját felelőssége és követelménye.

Támadási pozíciók:
- Quarterback (QB): Az támadást irányító játékos
- Running Back (RB): Futó, amely előreviszi a labdát
- Wide Receiver (WR): Passzfogadó
- Tight End (TE): Hibrid szerepű játékos
- Offensive Lineman: Az anális támogatók védelme

Védekezési pozíciók:
- Defensive Lineman: A támadó vonal ellen védelem
- Linebacker: Középfokú védekezés
- Cornerback: Külső játékosok jelölése
- Safety: Utolsó védőcsoport

Mindegyik pozíciónak speciális ismereteire és fizikai attribútumaira van szükség.`,
    category: 'Típusok',
    image: '/images/positions.jpg',
  },
  {
    title: 'Az amerikai futball faszinálóan statisztikai világa',
    excerpt: 'Tanuld meg az amerikai futball elemzéshez szükséges legfontosabb statisztikákat.',
    content: `Az amerikai futball egy adatvezérelt sport. A statisztikák döntő szerepet játszanak az értékelésben.

Fontos támadási statisztikák:
- Passer Rating: A quarterback teljesítménye
- Rushing Yards: A futás során megtett távolság
- Receiving Yards: A fogadók összteljesítménye
- Turnovers: Labdavesztések

Fontos védekezési statisztikák:
- Tackles: Az ellenfél leütése
- Sacks: Az ellenfél mögött végzett plakátolás
- Interceptions: Ellopott passzok
- Forced Fumbles: Kicsikarás

A modern NFL magas fokú analitikát használ a játékosok kiválasztásához és stratégiai döntésekhez.`,
    category: 'Tények',
    image: '/images/stats.jpg',
  },
  {
    title: 'Super Bowl: Az amerikai futball végső célja',
    excerpt: 'Megérteni az NFL legfontosabb eseményét és annak jelentőségét.',
    content: `A Super Bowl az NFL szezont lezáró végső mérkőzése, amely az amerikai futball legnagyobb eseménye.

A Super Bowl története 1967-ben kezdődött, és azóta egy kulturális eseménnyé nőtte ki magát az Egyesült Államokban és szerte a világon.

Érdekes tények a Super Bowl-ról:
- Az amerikai tévé legsokkal nézett eseménye
- Rekordértékű hirdetési díjak (több millió dollár egy 30 másodperces reklámért)
- Félidős show-val rendelkezik, amely nemzetközi fellépőket vonz
- Az egész nap ünnepnappá vált az Egyesült Államokban

A győztes csapat nagy megvásárlásokra törekszik és feltöltésre kerül a szobbá, végtelen csapatgyűlésekre és nyilvános ünnepségekre.`,
    category: 'Történet',
    image: '/images/superbowl.jpg',
  },
  {
    title: 'Sérülések megelőzése az amerikai futballban',
    excerpt: 'Hogyan lehet csökkenteni a sérülések kockázatát az amerikai futballban.',
    content: `Az amerikai futball egy kontakt sport, de számos módszer van a sérülések megelőzésére és minimalizálására.

Kulcsfontosságú sérülésmegelőzési taktikák:
- Megfelelő felszerelés használata
- Megfelelő bemelegítés és nyújtás
- Helyes technika tanítása és gyakorlása
- Erő- és kondicionálási programok
- Megfelelő helyreállítás az edzések között
- Orvosi felügyelet és gyors ellátás

A modern NFL és college futballban fokozott hangsúlyt helyeznek az agyrázkódás megelőzésére és a hosszú múltú sérülések kezelésére. A kutatás folyamatosan fejleszti az ezekben a terjedelmekben.`,
    category: 'Edzés',
    image: '/images/injury-prevention.jpg',
  },
  {
    title: 'A játékvezetés szabályai és jelzéseik',
    excerpt: 'Megérteni az amerikai futball hivatalos jelzéseit és azok jelentését.',
    content: `A játékvezetők döntő szerepet játszanak az amerikai futball szabályainak érvénytartásában.

A főbb sérelmek és jelzéseik:
- Holding: Az ellenfél törvénytelen megtartása
- False Start: A támadó játékos mozgása a lejátszás előtt
- Offsides: A védekezés az ütésvonalba kerülése
- Pass Interference: Az átadás fogadójának törvénytelen blokkolása
- Roughing the Passer: A quarterbacknek való erőszak az ütés után
- Unsportsmanlike Conduct: Nem sportszerű viselkedés

Minden megsértéshez fegyelmezés tartozik, amely büntetési yardok formájában jelenik meg.`,
    category: 'Szabályok',
    image: '/images/officials.jpg',
  },
  {
    title: 'Az amerikai futball nemzetközi terjeszkedése',
    excerpt: 'Hogyan terjed az amerikai futball világszerte és új piacok felé.',
    content: `Az amerikai futball hagyományosan az Egyesült Államokra korlátozódott, de a legutóbbi évtizedben világszerte terjeszkedik.

Nemzetközi fejlesztések:
- Az NFL játékokat játszik Mexikóban és Kanadában
- Európai ligák fejlesztése: German Football League, Liga Brasileira
- Az NCAA futball népszerűsítése világszerte
- Fiatalabb generációk érdeklődésének ösztönzése más országokban

Az NFL International Series lehetővé tette az emberek számára Európában és más helyeken, hogy élőben lássák az NFL mérkőzéseket. Ez új rajongók generációját szül meg világszerte.`,
    category: 'Tények',
    image: '/images/international.jpg',
  },
  {
    title: 'Az edzéscamp felkészülés és taktikák',
    excerpt: 'Megérteni, hogyan készülnek az NFL csapatok az új szezonra.',
    content: `Az edzéscamp az NFL szezont megelőző intenzív felkészülési időszak.

Az edzéscamp alatt:
- A játékosok gyakorlatokkal felépítik az erőt és rezisztenciát
- Az új játékosok megismerkednek a csapat játékstílusával és stratégiájával
- A csapat a 53 fős listára redukálja a játékosokat
- Az alapcsapat meghatározódik az egyes pozícióknál
- A taktikai ismeretek szilárd alapot kapnak

Ez egy fizikailag és mentálisan igényes időszak, ahol meghatározódik az évad kimenetele. Az edzéscamp alatt a csapat egy család formájában működik, és a gyengébb játékosok elhagyják a szervezetet.`,
    category: 'Edzés',
    image: '/images/training-camp.jpg',
  },
];
