
import Image from "next/image";
import Link from "next/link";
import styles from "./WspolpracaB2BPage.module.css";

const partners = [
  {
    number: "01",
    title: "Gabinety stomatologiczne",
    text: "Dla gabinetów, które szukają pracowni zapewniającej partnerską współpracę i staranną realizację prac protetycznych.",
    tag: "Stała współpraca",
  },
  {
    number: "02",
    title: "Kliniki dentystyczne",
    text: "Dla zespołów stomatologicznych, które potrzebują sprawnej organizacji zleceń i indywidualnego podejścia.",
    tag: "Wspólne projekty",
  },
  {
    number: "03",
    title: "Lekarze dentyści",
    text: "Dla lekarzy zainteresowanych bezpośrednim kontaktem z pracownią i wspólnym omawianiem przypadków.",
    tag: "Indywidualne podejście",
  },
];

const cooperation = [
  {
    number: "01",
    title: "Rozpoznanie potrzeb",
    text: "Poznajemy specyfikę gabinetu, oczekiwania oraz zakres planowanej współpracy.",
  },
  {
    number: "02",
    title: "Ustalenie zasad",
    text: "Omawiamy rodzaj prac, sposób przekazywania zleceń i najważniejsze kwestie organizacyjne.",
  },
  {
    number: "03",
    title: "Realizacja zleceń",
    text: "Przystępujemy do pracy zgodnie z wcześniejszymi ustaleniami i przekazaną dokumentacją.",
  },
  {
    number: "04",
    title: "Dalsze partnerstwo",
    text: "Pozostajemy w kontakcie i rozwijamy współpracę w oparciu o doświadczenia obu stron.",
  },
];

const advantages = [
  {
    number: "01",
    title: "Indywidualne podejście",
    text: "Uwzględniamy charakter zlecenia, potrzeby lekarza i specyfikę konkretnego przypadku.",
  },
  {
    number: "02",
    title: "Bezpośrednia komunikacja",
    text: "Stawiamy na jasne ustalenia i kontakt na kolejnych etapach realizacji.",
  },
  {
    number: "03",
    title: "Staranność wykonania",
    text: "Zwracamy uwagę na szczegóły i wymagania przekazane przez lekarza.",
  },
  {
    number: "04",
    title: "Długofalowe relacje",
    text: "Zależy nam na współpracy opartej na wzajemnym zrozumieniu i zaufaniu.",
  },
];

export default function WspolpracaB2BPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}

      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Protetyka, która
              <span> wspiera Twoją praktykę.</span>
            </h1>

            <p className={styles.heroText}>
              Współpracujemy z gabinetami stomatologicznymi i lekarzami,
              którzy cenią precyzję, dobrą komunikację oraz przemyślane
              rozwiązania protetyczne.
            </p>

            <p className={styles.heroSubtext}>
              Poznaj pracownię, w której profesjonalne podejście do
              każdego zlecenia idzie w parze z partnerską relacją.
            </p>

            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.primaryButton}>
                Porozmawiajmy
                <span>↗</span>
              </Link>

              <a href="#zakres" className={styles.textButton}>
                Poznaj zakres współpracy
                <span>↓</span>
              </a>
            </div>

            <div className={styles.heroSignature}>
              <span className={styles.signatureMark}>DC</span>
              <div>
              </div>
            </div>

          </div>

          <div className={styles.heroVisual}>

            <div className={styles.heroImage}>
              <Image
                src="/8080.png"
                alt="Rozwiązania protetyczne Dental Centrum"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 52vw"
                className={styles.image}
              />
            </div>

            <div className={styles.imageLabel}>
              <span>01 / 04</span>
              <div />
              <p>Precyzja w każdym detalu</p>
            </div>

            <span className={styles.heroDecoration}>D</span>

          </div>

        </div>

        <div className={styles.heroBottom}>
          <span>01 — WSPÓŁPRACA</span>
          <span>GDAŃSK · DENTAL CENTRUM</span>
        </div>
      </section>


      {/* WPROWADZENIE */}

      <section className={styles.intro}>
        <div className={styles.sectionContainer}>

          <div className={styles.introTop}>
            <span className={styles.sectionLabel}>NASZE PODEJŚCIE / 01</span>

            <h2 className={styles.introTitle}>
              Dobra współpraca
              <em> zaczyna się od zrozumienia.</em>
            </h2>
          </div>

          <div className={styles.introBottom}>
            <div className={styles.introAccent}>
              <span>DC</span>
              <div />
              <p>Wspólny cel.<br />Przemyślane działanie.</p>
            </div>

            <div className={styles.introDescription}>
              <p>
                Wiemy, jak ważna w codziennej pracy gabinetu jest
                współpraca z zaufaną pracownią protetyczną. Dlatego
                stawiamy na indywidualne ustalenia, dobrą organizację
                i uważne podejście do każdego przypadku.
              </p>

              <p>
                Nie ograniczamy relacji do przyjmowania i realizowania
                zleceń. Zależy nam na poznaniu potrzeb naszych partnerów
                oraz wypracowaniu sposobu współpracy, który będzie
                odpowiadał obu stronom.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* DLA KOGO */}

      <section className={styles.partners}>
        <div className={styles.sectionContainer}>

          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>NASI PARTNERZY / 02</span>
              <h2 className={styles.sectionTitle}>
                Pracujemy z ludźmi,
                <em> którzy dbają o jakość.</em>
              </h2>
            </div>

            <p className={styles.headingDescription}>
              Zapraszamy do współpracy specjalistów i placówki,
              dla których liczy się profesjonalizm oraz dobra
              organizacja procesu leczenia.
            </p>
          </div>

          <div className={styles.partnerGrid}>
            {partners.map((partner) => (
              <article className={styles.partnerCard} key={partner.number}>

                <div className={styles.partnerTop}>
                  <span>{partner.number}</span>
                  <span className={styles.partnerArrow}>↗</span>
                </div>

                <h3>{partner.title}</h3>

                <p>{partner.text}</p>

                <div className={styles.partnerTag}>
                  <span />
                  {partner.tag}
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>


      {/* ZESPÓŁ DENTAL CENTRUM */}

      <section className="w-full bg-[#fbfaf7] py-20 md:py-28">
        <div className={styles.sectionContainer}>

          {/* NAGŁÓWEK */}

          <div className="mb-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <span className={styles.sectionLabel}>
                DENTAL CENTRUM / NASZ ZESPÓŁ
              </span>

              <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight text-[#233b38] md:text-5xl lg:text-6xl">
                Doświadczenie i zaangażowanie,
                <em className="block text-[#ad795e]">
                  które budują zaufanie.
                </em>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[#77736d] lg:justify-self-end">
              Dental Centrum tworzą osoby, które łączą wieloletnie
              doświadczenie, profesjonalizm i zaangażowanie w rozwój
              nowoczesnej opieki stomatologicznej. Każda z nich wnosi
              do działalności placówki inne kompetencje, wspólnie
              budując miejsce oparte na jakości, zaufaniu i dobrej
              organizacji.
            </p>
          </div>

          {/* KARTY ZESPOŁU */}

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

            {/* RAFAŁ RACHUBKA */}

            <article className="overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">

                {/* ZDJĘCIE */}

                <div className="relative h-[420px] overflow-hidden bg-[#e9e6df] md:h-[520px]">
                  <Image
                    src="/lekarz1.jpg"
                    alt="Rafał Rachubka – Dental Centrum"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* OPIS */}

                <div className="flex flex-col p-7 md:p-8">

                  <span className="text-xs tracking-[0.2em] text-[#ad795e]">
                    DENTAL CENTRUM
                  </span>

                  <h3 className="mt-5 font-serif text-3xl font-light leading-tight text-[#233b38]">
                    Rafał Rachubka
                  </h3>

                  <p className="mt-3 text-sm leading-6 tracking-wide text-[#ad795e]">
                    Technik dentystyczny · Protetyka stomatologiczna
                  </p>

                  <div className="mt-7 h-px w-12 bg-[#ad795e]" />

                  <h4 className="mt-7 font-serif text-xl leading-snug text-[#233b38]">
                    Ponad 30 lat doświadczenia w protetyce stomatologicznej
                  </h4>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-[#77736d]">

                    {/* WIDOCZNY FRAGMENT */}

                    <p>
                      Ponad trzy dekady doświadczenia zawodowego to wiedza,
                      umiejętności i praktyka, które stanowią fundament
                      jego codziennej pracy.
                    </p>

                    {/* ROZWIJANA CZĘŚĆ */}

                    <details className="group">
                      <div className="space-y-4 pt-4">

                        <p>
                          Rafał Rachubka od ponad 30 lat związany jest z techniką
                          dentystyczną i protetyką stomatologiczną. Przez lata
                          zdobywał doświadczenie, rozwijał swoje umiejętności
                          i doskonalił warsztat, łącząc precyzję tradycyjnego
                          rzemiosła z możliwościami nowoczesnej technologii.
                        </p>

                        <p>
                          W swojej pracy wykorzystuje również rozwiązania
                          cyfrowe, w tym technologię CAD/CAM, która pozwala
                          na precyzyjne projektowanie i wykonywanie
                          uzupełnień protetycznych.
                        </p>

                        <p>
                          Szczególną wagę przywiązuje do jakości, estetyki
                          i funkcjonalności wykonywanych prac. Ceni bezpośrednią
                          współpracę z lekarzami stomatologami, indywidualne
                          podejście do każdego przypadku oraz dbałość
                          o najdrobniejsze szczegóły.
                        </p>

                        <p className="border-l border-[#ad795e] pl-4 font-serif text-lg leading-relaxed text-[#233b38]">
                          Jego doświadczenie, wiedza i zaangażowanie stanowią
                          ważny filar Dental Centrum.
                        </p>

                      </div>

                      <summary className="mt-4 inline-flex cursor-pointer list-none items-center gap-2 font-semibold text-[#9b7548] transition-colors hover:text-[#765735] [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">Czytaj więcej</span>
                        <span className="hidden group-open:inline">Zwiń opis</span>
                        <span className="transition-transform duration-200 group-open:rotate-180">
                          ↓
                        </span>
                      </summary>
                    </details>

                  </div>

                  {/* KONTAKT – ZAWSZE WIDOCZNY */}

                  <div className="mt-8 border-t border-[#eeeae3] pt-6">
                    <p className="text-xs tracking-[0.16em] text-[#99938a]">
                      KONTAKT
                    </p>

                    <a
                      href="tel:+48792481555"
                      className="mt-3 inline-block text-sm text-[#233b38] transition hover:text-[#ad795e]"
                    >
                      +48 792 481 555
                    </a>
                  </div>

                </div>
              </div>
            </article>


            {/* ALEKSANDRA RACHUBKA */}

            <article className="overflow-hidden bg-white">
              <div className="grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr]">

                {/* ZDJĘCIE */}

                <div className="relative h-[420px] overflow-hidden bg-[#e9e6df] md:h-[520px]">
                  <Image
                    src="/lekarz4.png"
                    alt="Aleksandra Rachubka – Dental Centrum"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* OPIS */}

                <div className="flex flex-col p-7 md:p-8">

                  <span className="text-xs tracking-[0.2em] text-[#ad795e]">
                    DENTAL CENTRUM
                  </span>

                  <h3 className="mt-5 font-serif text-3xl font-light leading-tight text-[#233b38]">
                    Aleksandra Rachubka
                  </h3>

                  <p className="mt-3 text-sm leading-6 tracking-wide text-[#ad795e]">
                    Współwłaścicielka · Menedżerka
                  </p>

                  <div className="mt-7 h-px w-12 bg-[#ad795e]" />

                  <h4 className="mt-7 font-serif text-xl leading-snug text-[#233b38]">
                    Organizacja, relacje i rozwój Dental Centrum
                  </h4>

                  <div className="mt-5 space-y-4 text-sm leading-7 text-[#77736d]">

                    {/* WIDOCZNY FRAGMENT */}

                    <p>
                      Za sprawnym funkcjonowaniem Dental Centrum stoi
                      nie tylko wiedza medyczna i doświadczenie, ale również
                      dobra organizacja, zaangażowanie i przemyślane
                      zarządzanie.
                    </p>

                    {/* ROZWIJANA CZĘŚĆ */}

                    <details className="group">
                      <div className="space-y-4 pt-4">

                        <p>
                          Aleksandra Rachubka jako współwłaścicielka i menedżerka
                          Dental Centrum odpowiada za organizację i koordynację
                          codziennego funkcjonowania placówki. Dba o sprawny
                          przebieg procesów, wysoką jakość obsługi oraz budowanie
                          dobrych relacji z pacjentami i partnerami biznesowymi.
                        </p>

                        <p>
                          W swojej pracy stawia na profesjonalizm, komunikację
                          i indywidualne podejście. Ważne jest dla niej tworzenie
                          miejsca, w którym kompetencje zespołu idą w parze
                          z przyjazną atmosferą, dobrą organizacją i troską
                          o potrzeby pacjentów.
                        </p>

                        <p>
                          Aktywnie uczestniczy w rozwoju Dental Centrum,
                          dbając o to, aby placówka konsekwentnie realizowała
                          swoje cele i utrzymywała wysokie standardy
                          funkcjonowania.
                        </p>

                        <p className="border-l border-[#ad795e] pl-4 font-serif text-lg leading-relaxed text-[#233b38]">
                          Jej zaangażowanie i umiejętności organizacyjne są
                          ważną częścią wspólnego rozwoju Dental Centrum.
                        </p>

                      </div>

                      <summary className="mt-4 inline-flex cursor-pointer list-none items-center gap-2 font-semibold text-[#9b7548] transition-colors hover:text-[#765735] [&::-webkit-details-marker]:hidden">
                        <span className="group-open:hidden">Czytaj więcej</span>
                        <span className="hidden group-open:inline">Zwiń opis</span>
                        <span className="transition-transform duration-200 group-open:rotate-180">
                          ↓
                        </span>
                      </summary>
                    </details>

                  </div>

                  {/* KONTAKT – ZAWSZE WIDOCZNY */}

                  <div className="mt-8 border-t border-[#eeeae3] pt-6">
                    <p className="text-xs tracking-[0.16em] text-[#99938a]">
                      KONTAKT
                    </p>

                    <a
                      href="tel:+48792667335"
                      className="mt-3 inline-block text-sm text-[#233b38] transition hover:text-[#ad795e]"
                    >
                      +48 792 667 335
                    </a>
                  </div>

                </div>
              </div>
            </article>

          </div>
        </div>
      </section>


      {/* ZAKRES WSPÓŁPRACY */}

      <section className={styles.scope} id="zakres">
        <div className={styles.sectionContainer}>

          <div className={styles.scopeGrid}>

            <div className={styles.scopeVisual}>
              <Image
                src="/sss2.png"
                alt="Praca w pracowni protetycznej"
                fill
                sizes="(max-width: 900px) 100vw, 48vw"
                className={styles.image}
              />

              <div className={styles.scopeImageCaption}>
                <span>02 / PRACOWNIA</span>
                <p>Wiedza, doświadczenie i dokładność.</p>
              </div>
            </div>

            <div className={styles.scopeContent}>

              <span className={styles.sectionLabel}>
                MOŻLIWOŚCI / 03
              </span>

              <h2 className={styles.sectionTitle}>
                Wsparcie dopasowane
                <em> do potrzeb gabinetu.</em>
              </h2>

              <p className={styles.scopeLead}>
                Zakres współpracy ustalamy indywidualnie,
                biorąc pod uwagę rodzaj wykonywanych prac
                i organizację funkcjonowania gabinetu.
              </p>

              <div className={styles.scopeList}>
                {[
                  "Ustalenie zakresu i rodzaju prac protetycznych",
                  "Dobór rozwiązań do konkretnego przypadku",
                  "Konsultacje dotyczące realizowanych zleceń",
                  "Uzgodnienie terminów i sposobu przekazywania prac",
                  "Kontakt podczas realizacji zamówienia",
                ].map((item, index) => (
                  <div className={styles.scopeItem} key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                    <span className={styles.scopeCheck}>↗</span>
                  </div>
                ))}
              </div>

              <Link href="/kontakt" className={styles.inlineLink}>
                Zapytaj o współpracę <span>→</span>
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* DLACZEGO MY */}

      <section className={styles.values}>
        <div className={styles.sectionContainer}>

          <div className={styles.valuesHeader}>
            <span className={styles.sectionLabel}>
              STANDARD WSPÓŁPRACY / 04
            </span>

            <h2 className={styles.valuesTitle}>
              Relacja, na której
              <em> można polegać.</em>
            </h2>

            <p>
              Wartość współpracy budują nie tylko wykonane prace,
              ale również sposób komunikacji, wzajemne zrozumienie
              i dbałość o wspólne ustalenia.
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {advantages.map((item) => (
              <article className={styles.valueItem} key={item.number}>
                <span className={styles.valueNumber}>{item.number}</span>
                <div className={styles.valueLine} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className={styles.valuesFooter}>
            <span>NASZA FILOZOFIA</span>
            <p>Jakość buduje się wspólnie.</p>
          </div>

        </div>
      </section>


      {/* PROCES WSPÓŁPRACY */}

      <section className={styles.process}>
        <div className={styles.sectionContainer}>

          <div className={styles.processHeading}>
            <span className={styles.sectionLabel}>JAK DZIAŁAMY / 05</span>

            <h2 className={styles.sectionTitle}>
              Od pierwszej rozmowy
              <em> do stałej współpracy.</em>
            </h2>

            <p>
              Stawiamy na przejrzyste zasady, dlatego każdy
              etap rozpoczynamy od rozmowy i wzajemnych ustaleń.
            </p>
          </div>

          <div className={styles.processGrid}>
            {cooperation.map((step) => (
              <article className={styles.processItem} key={step.number}>
                <span className={styles.processNumber}>{step.number}</span>
                <div className={styles.processConnector} />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

        </div>
      </section>


      {/* TECHNOLOGIA */}

      <section className={styles.technology}>
        <div className={styles.sectionContainer}>

          <div className={styles.technologyGrid}>

            <div className={styles.technologyVisual}>
              <Image
                src="/8090.png"
                alt="Technologia wykorzystywana w pracowni protetycznej"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                className={styles.image}
              />
              <span>03 / TECHNOLOGIA</span>
            </div>

            <div className={styles.technologyContent}>
              <span className={styles.sectionLabel}>
                WSPÓLNA PERSPEKTYWA / 06
              </span>

              <h2 className={styles.sectionTitle}>
                Każdy szczegół
                <em> ma znaczenie.</em>
              </h2>

              <p>
                Współpraca lekarza i technika dentystycznego
                jest istotnym elementem procesu powstawania
                uzupełnień protetycznych.
              </p>

              <p>
                Dlatego zwracamy uwagę na przekazane informacje,
                oczekiwania oraz wymagania dotyczące konkretnego
                zlecenia. Zależy nam na sprawnym przepływie informacji
                i dobrej organizacji wspólnej pracy.
              </p>

              <div className={styles.technologyNote}>
                <span>DC / B2B</span>
                <p>
                  Profesjonalna relacja zaczyna się od dobrej rozmowy.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* KOŃCOWE CTA */}

      <section className={styles.contact}>
        <div className={styles.contactInner}>

          <div className={styles.contactDecoration}>DC</div>

          <span className={styles.sectionLabel}>
            ZRÓBMY PIERWSZY KROK / 07
          </span>

          <h2>
            Porozmawiajmy
            <em> o możliwościach współpracy.</em>
          </h2>

          <p>
            Opowiedz nam o swoim gabinecie i potrzebach.
            Chętnie poznamy Twoje oczekiwania oraz przedstawimy
            możliwości współpracy z Dental Centrum.
          </p>

          <Link href="/kontakt" className={styles.contactButton}>
            Skontaktuj się z nami
            <span>↗</span>
          </Link>

          <span className={styles.contactFootnote}>
            DENTAL CENTRUM · STOMATOLOGIA · GDAŃSK
          </span>

        </div>
      </section>

    </main>
  );
}
