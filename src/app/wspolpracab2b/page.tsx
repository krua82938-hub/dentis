
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
