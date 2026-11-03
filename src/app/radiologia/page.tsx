
import Image from 'next/image';
import Link from 'next/link';

export default function RadiologiaPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-24 md:px-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mt-10 flex flex-wrap gap-4">
          </div>

        </div>
      </section>


      {/* WSTĘP */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Diagnostyka obrazowa
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Dokładny obraz pomaga zaplanować leczenie
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">
                <p>
                  Diagnostyka radiologiczna jest ważnym elementem
                  współczesnej stomatologii. Dzięki badaniom obrazowym
                  lekarz może ocenić struktury niewidoczne podczas
                  standardowego badania jamy ustnej.
                </p>

                <p>
                  W zależności od sytuacji klinicznej wykonywane są
                  zdjęcia pojedynczych zębów, zdjęcia panoramiczne
                  lub tomografia komputerowa CBCT, pozwalająca uzyskać
                  trójwymiarowy obraz wybranych struktur.
                </p>

                <p>
                  Rodzaj badania dobierany jest indywidualnie,
                  z uwzględnieniem wskazań klinicznych oraz informacji
                  potrzebnych do zaplanowania dalszego leczenia.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden md:h-[550px]">
              <Image
                src="/kkkk.png"
                alt="Diagnostyka radiologiczna w gabinecie stomatologicznym"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* RODZAJE BADAŃ */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Rodzaje badań
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Diagnostyka dopasowana do potrzeb
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Różne rodzaje badań radiologicznych dostarczają
              odmiennych informacji. Ich wybór zależy od celu
              diagnostycznego i planowanego leczenia.
            </p>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">01</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                RTG punktowe
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Szczegółowy obraz pojedynczego zęba, jego korzeni
                oraz struktur znajdujących się w bezpośrednim otoczeniu.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">02</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                RTG panoramiczne
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Szeroki obraz szczęki, żuchwy i łuków zębowych,
                wykorzystywany w ogólnej ocenie uzębienia.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">03</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Tomografia CBCT 3D
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Trójwymiarowe obrazowanie wybranych struktur
                anatomicznych, pomocne w planowaniu bardziej
                złożonych procedur stomatologicznych.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* RTG PUNKTOWE */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            <div className="relative h-[400px] overflow-hidden bg-slate-100 md:h-[500px]">
              <Image
                src="/rtg1.jpg"
                alt="Rentgen punktowy pojedynczego zęba"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                01 · RTG punktowe
              </p>

              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Szczegółowy obraz pojedynczego zęba
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">
                <p>
                  Rentgen punktowy pozwala uzyskać szczegółowy obraz
                  pojedynczego zęba oraz tkanek znajdujących się
                  w jego bezpośrednim otoczeniu.
                </p>

                <p>
                  Badanie jest wykorzystywane między innymi podczas
                  diagnostyki próchnicy, leczenia kanałowego oraz
                  oceny zmian w okolicy wierzchołków korzeni.
                </p>

                <p>
                  Zdjęcie może dostarczyć informacji o przebiegu
                  korzeni, anatomii kanałów oraz stanie tkanek
                  okołowierzchołkowych.
                </p>

                <p>
                  Jest również pomocne podczas kontroli wybranych
                  etapów leczenia endodontycznego.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* RTG PANORAMICZNE */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
                02 · Pantomografia
              </p>

              <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
                Szeroki obraz uzębienia
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-white/60">
                <p>
                  Rentgen panoramiczny, czyli pantomografia,
                  umożliwia uzyskanie szerokiego obrazu szczęki,
                  żuchwy, łuków zębowych oraz wybranych struktur
                  znajdujących się w ich otoczeniu.
                </p>

                <p>
                  Badanie może być pomocne w ocenie ogólnego stanu
                  uzębienia, diagnostyce zębów zatrzymanych oraz
                  planowaniu leczenia ortodontycznego i chirurgicznego.
                </p>

                <p>
                  Pantomografia dostarcza również informacji
                  wykorzystywanych podczas wstępnego planowania
                  leczenia implantologicznego i protetycznego.
                </p>

                <p>
                  W razie potrzeby lekarz może zalecić dodatkowe,
                  bardziej szczegółowe badanie obrazowe.
                </p>
              </div>
            </div>

            <div className="relative h-[400px] overflow-hidden bg-slate-800 md:h-[520px]">
              <Image
                src="/foto2.png"
                alt="Rentgen panoramiczny zębów"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

          </div>
        </div>
      </section>


      {/* TOMOGRAFIA 3D */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div className="relative h-[400px] overflow-hidden bg-slate-100 md:h-[520px]">
              <Image
                src="/rtg3.jpg"
                alt="Tomografia komputerowa CBCT 3D"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                03 · Tomografia CBCT
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Diagnostyka w trzech wymiarach
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">
                <p>
                  Tomografia komputerowa CBCT umożliwia uzyskanie
                  trójwymiarowego obrazu wybranych struktur
                  anatomicznych w obrębie jamy ustnej i twarzoczaszki.
                </p>

                <p>
                  W przeciwieństwie do klasycznych zdjęć
                  dwuwymiarowych pozwala analizować struktury
                  z różnych perspektyw i dokładniej oceniać
                  ich wzajemne położenie.
                </p>

                <p>
                  Badanie może być szczególnie przydatne w planowaniu
                  implantów, zabiegów chirurgicznych oraz w diagnostyce
                  wybranych złożonych przypadków endodontycznych.
                </p>

                <p>
                  Zakres obrazowania oraz wskazania do tomografii
                  ustalane są indywidualnie, zgodnie z potrzebami
                  diagnostycznymi pacjenta.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ZASTOSOWANIE TOMOGRAFII */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Zastosowanie CBCT
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Kiedy tomografia może być pomocna?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Trójwymiarowe obrazowanie dostarcza dodatkowych
              informacji, które mogą mieć znaczenie podczas
              planowania wybranych procedur stomatologicznych.
            </p>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">01</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Implantologia
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Ocena warunków kostnych i położenia ważnych struktur
                anatomicznych przed planowaniem wszczepienia implantu.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">02</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Chirurgia stomatologiczna
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Dokładniejsza analiza położenia zębów zatrzymanych
                oraz ich relacji względem struktur anatomicznych.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">03</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Endodoncja
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Dodatkowa ocena anatomii korzeni i kanałów
                w wybranych, bardziej złożonych przypadkach
                leczenia kanałowego.
              </p>
            </article>

            <article className="bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">04</span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Diagnostyka złożonych przypadków
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Szczegółowe obrazowanie w sytuacjach, w których
                standardowe badania nie dostarczają wystarczających
                informacji diagnostycznych.
              </p>
            </article>

          </div>
        </div>
      </section>


      {/* PODSUMOWANIE */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid overflow-hidden bg-white lg:grid-cols-2">

            <div className="relative min-h-[400px] bg-slate-100">
              <Image
                src="/kkkk.png"
                alt="Diagnostyka obrazowa Dental Centrum"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain"
              />
            </div>

            <div className="flex items-center p-8 md:p-12 lg:p-16">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                  Dental Centrum · Gdańsk
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
                  Odpowiednie badanie dla właściwej diagnozy
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Diagnostyka radiologiczna i tomografia stanowią
                  ważne wsparcie w planowaniu leczenia stomatologicznego.
                  Dobór odpowiedniego badania pozwala uzyskać
                  informacje niezbędne do oceny konkretnego problemu.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  O rodzaju diagnostyki decyduje lekarz,
                  uwzględniając wskazania kliniczne oraz
                  indywidualną sytuację pacjenta.
                </p>

                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
                >
                  Umów wizytę
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
            Dental Centrum · Gdańsk
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light text-white md:text-5xl">
            Precyzyjna diagnostyka stomatologiczna
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/60">
            Skontaktuj się z nami i dowiedz się, jakie badanie
            może być odpowiednie w Twojej sytuacji.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-flex bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A252F] transition hover:bg-blue-600 hover:text-white"
          >
            Umów konsultację
          </Link>

        </div>
      </section>

    </main>
  );
}
