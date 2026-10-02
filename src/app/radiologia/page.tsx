import Image from 'next/image';
import Link from 'next/link';

export default function RadiologiaPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-28 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">

         
        </div>
      </section>


      {/* WSTĘP */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* LEWA - TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Diagnostyka
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Dokładny obraz pomaga zaplanować leczenie
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Diagnostyka radiologiczna jest ważnym elementem współczesnej
                  stomatologii. Zdjęcia RTG pozwalają lekarzowi zobaczyć
                  struktury niewidoczne podczas standardowego badania jamy
                  ustnej.
                </p>

                <p>
                  W zależności od sytuacji klinicznej można wykonać zdjęcie
                  pojedynczego zęba, zdjęcie panoramiczne całego uzębienia
                  lub tomografię komputerową 3D.
                </p>

                <ol className="space-y-2 pl-5 text-[#1A252F]">
                  <li className="pl-2">
                    <span className="font-medium">1.</span> Rentgen punktowy
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">2.</span> Rentgen panoramiczny
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">3.</span> Tomografia 3D
                  </li>
                </ol>

                <p>
                  Odpowiednie badanie radiologiczne może być wykorzystywane
                  między innymi podczas leczenia zachowawczego, endodoncji,
                  chirurgii stomatologicznej, protetyki, ortodoncji
                  i implantologii.
                </p>

              </div>

            </div>


       {/* PRAWA - ZDJĘCIE */}
{/* PRAWA - ZDJĘCIE */}
<div className="relative h-[500px] overflow-hidden bg-slate-100 md:h-[600px]">
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


      {/* RENTGEN PUNKTOWY */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEWA - ZDJĘCIE */}
            <div className="relative h-[400px] overflow-hidden bg-slate-100 md:h-[500px]">
              <Image
                src="/rtg1.jpg"
                alt="Rentgen punktowy pojedynczego zęba"
                fill
                className="object-cover"
              />
            </div>


            {/* PRAWA - TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                RTG punktowe
              </p>

              <h2 className="mb-8 font-serif text-3xl font-light md:text-4xl">
                Rentgen punktowy
              </h2>

              <div className="space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Rentgen punktowy pozwala szybko wykonać zdjęcie RTG
                  pojedynczego zęba. Dzięki niewielkiemu polu obrazowania
                  badanie charakteryzuje się wysoką szczegółowością obrazu.
                </p>

                <p>
                  Zdjęcia wewnątrzustne są wykorzystywane między innymi
                  podczas diagnostyki przed ekstrakcją zęba oraz w trakcie
                  leczenia kanałowego.
                </p>

                <p>
                  Badanie może być również pomocne w diagnostyce próchnicy
                  na powierzchniach stycznych, stanów zapalnych miazgi
                  oraz tkanek znajdujących się w okolicy wierzchołków
                  korzeni zębów.
                </p>

                <p>
                  Zdjęcie pozwala ocenić przebieg korzeni, liczbę kanałów
                  oraz ich kształt i stopień zakrzywienia. Jest to szczególnie
                  przydatne podczas planowania i kontroli leczenia
                  endodontycznego.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* RODZAJE DIAGNOSTYKI */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Badania radiologiczne
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Diagnostyka dopasowana do potrzeb
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Rodzaj wykonywanego badania zależy od celu diagnostycznego
              oraz zakresu informacji potrzebnych lekarzowi do zaplanowania
              dalszego leczenia.
            </p>

          </div>


          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">

            {/* PUNKTOWE */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                RTG punktowe
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Szczegółowy obraz pojedynczego zęba, jego korzeni
                oraz struktur znajdujących się w jego bezpośrednim
                otoczeniu.
              </p>

            </div>


          {/* PANORAMICZNE */}
<div className="grid overflow-hidden bg-white md:grid-cols-[1fr_0.9fr]">

  {/* LEWA - TREŚĆ */}
  <div className="p-8 md:p-10">

    <span className="text-2xl font-light text-blue-700">
      02
    </span>

    <h3 className="mt-6 font-serif text-2xl font-light">
      RTG panoramiczne
    </h3>

    <p className="mt-5 text-sm leading-7 text-slate-500">
      Szeroki obraz szczęki, żuchwy, łuków zębowych oraz
      otaczających je struktur. Pomaga w ocenie ogólnego
      stanu uzębienia.
    </p>

  </div>
</div>


            {/* TOMOGRAFIA */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Tomografia 3D
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Trójwymiarowe obrazowanie struktur anatomicznych
                pozwalające na ich szczegółową analizę oraz dokładne
                planowanie leczenia.
              </p>

            </div>

          </div>

        </div>
      </section>


     {/* RENTGEN PANORAMICZNY */}
<section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
  <div className="mx-auto max-w-6xl">

    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

      {/* LEWA - TEKST */}
      <div>

        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
          Pantomografia
        </p>

        <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
          Rentgen panoramiczny
        </h2>

        <div className="mt-7 space-y-5 text-sm leading-7 text-white/60">

          <p>
            Rentgen panoramiczny, czyli pantomografia, pozwala uzyskać
            szeroki obraz szczęki, żuchwy, łuków zębowych oraz struktur
            znajdujących się w ich otoczeniu.
          </p>

          <p>
            Badanie jest wykorzystywane w wielu dziedzinach
            stomatologii. Może być pomocne między innymi w diagnostyce
            ogólnego stanu uzębienia, planowaniu leczenia
            ortodontycznego, protetycznego i chirurgicznego.
          </p>

          <p>
            Zdjęcie panoramiczne może również dostarczyć informacji
            potrzebnych przed usunięciem niewyrośniętych zębów,
            w diagnostyce chorób przyzębia oraz podczas planowania
            leczenia implantologicznego.
          </p>

          <p>
            Na podstawie wykonanego zdjęcia lekarz może zdecydować,
            czy konieczne jest przeprowadzenie bardziej szczegółowej
            diagnostyki.
          </p>

        </div>

      </div>

      {/* PRAWA - ZDJĘCIE */}
      <div className="relative h-[420px] overflow-hidden bg-slate-800 md:h-[520px]">
        <Image
          src="/foto2.png"
          alt="Rentgen panoramiczny zębów"
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

    </div>

  </div>
</section>


      {/* ZASTOSOWANIE PANORAMY */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Zastosowanie
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Kiedy wykonuje się zdjęcie panoramiczne?
            </h2>

          </div>


          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">

            <div className="bg-white p-7">

              <span className="text-xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em]">
                Ortodoncja
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Ocena uzębienia przed rozpoczęciem leczenia
                ortodontycznego.
              </p>

            </div>


            <div className="bg-white p-7">

              <span className="text-xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em]">
                Chirurgia
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Pomoc w ocenie położenia zębów wymagających
                leczenia chirurgicznego.
              </p>

            </div>


            <div className="bg-white p-7">

              <span className="text-xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em]">
                Implantologia
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Wstępna ocena struktur kostnych przed planowaniem
                leczenia implantologicznego.
              </p>

            </div>


            <div className="bg-white p-7">

              <span className="text-xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em]">
                Protetyka
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Dodatkowe informacje pomocne przy planowaniu
                leczenia protetycznego.
              </p>

            </div>

          </div>

        </div>
      </section>

   


      {/* ZASTOSOWANIE TOMOGRAFII */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Tomografia
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Precyzyjna diagnostyka w trzech wymiarach
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Obrazowanie 3D dostarcza szczegółowych informacji, które mogą
              być pomocne przy planowaniu bardziej złożonych procedur
              stomatologicznych.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            <article className="border border-slate-200 bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Planowanie implantów
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Tomografia pozwala dokładnie ocenić warunki anatomiczne
                w miejscu planowanego wszczepienia implantu i ułatwia
                przygotowanie odpowiedniego planu leczenia.
              </p>

            </article>


            <article className="border border-slate-200 bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Chirurgia stomatologiczna
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Trójwymiarowy obraz pozwala dokładniej zobrazować położenie
                zębów oraz ich relację względem ważnych struktur
                anatomicznych.
              </p>

            </article>


            <article className="border border-slate-200 bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Endodoncja
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                W wybranych przypadkach obrazowanie 3D może pomóc
                w dokładniejszej ocenie anatomii kanałów korzeniowych
                oraz zmian w okolicy wierzchołków korzeni.
              </p>

            </article>


            <article className="border border-slate-200 bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Złożone przypadki
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Szczegółowe obrazowanie może być pomocne wtedy, gdy
                standardowe zdjęcia nie pozwalają uzyskać wszystkich
                informacji potrzebnych do postawienia diagnozy.
              </p>

            </article>

          </div>

        </div>
      </section>
      {/* ZDJĘCIE + TEKST */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid overflow-hidden bg-white lg:grid-cols-2">

            <div className="relative min-h-[400px]">
              <Image
                src="/rtg3.jpg"
                alt="Tomografia 3D Dental Centrum"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 md:p-12 lg:p-16">

              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                  Diagnostyka Dental Centrum
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
                  Odpowiednie badanie dla właściwej diagnozy
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Zakres diagnostyki radiologicznej dobierany jest
                  odpowiednio do sytuacji klinicznej. Zdjęcie punktowe,
                  panoramiczne lub tomografia 3D dostarczają różnych
                  informacji potrzebnych podczas planowania leczenia.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Dokładna diagnostyka pozwala lekarzowi lepiej ocenić
                  stan uzębienia i otaczających struktur oraz zaplanować
                  kolejne etapy postępowania.
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
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
            Dental Centrum · Gdańsk
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
            Precyzyjna diagnostyka stomatologiczna
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Dowiedz się, jakie badanie radiologiczne może być potrzebne
            do dokładnej oceny stanu zdrowia jamy ustnej i zaplanowania
            dalszego leczenia.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
          >
            Umów konsultację
          </Link>

        </div>
      </section>

    </main>
  );
}