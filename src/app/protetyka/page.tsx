import Image from 'next/image';
import Link from 'next/link';

export default function ProtetykaPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-28 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
        </div>
      </section>

      {/* WSTĘP */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">

            {/* LEWA - TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Wstęp
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Przywracamy funkcję
                <br />
                i estetykę uśmiechu
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Protetyka jest działem stomatologii zajmującym się
                  odbudową ubytków zębowych oraz przywracaniem prawidłowych
                  warunków zgryzu.
                </p>

                <p>
                  Przyczyny braków w uzębieniu mogą mieć charakter
                  fizjologiczny, być następstwem urazu lub wynikać
                  z konieczności wcześniejszego usunięcia zęba
                  zniszczonego procesem chorobowym.
                </p>

                <p>
                  W Dental Centrum dysponujemy własną pracownią
                  protetyczną, laboratorium oraz doświadczonym personelem,
                  który od wielu lat zajmuje się wykonywaniem
                  nowoczesnych uzupełnień protetycznych.
                </p>

                <p>
                  Podczas konsultacji ustalamy indywidualny plan leczenia
                  oraz przedstawiamy dostępne możliwości i związane z nimi
                  koszty. Pozwala to dobrać rozwiązanie odpowiednie
                  zarówno pod względem funkcjonalnym, jak i estetycznym.
                </p>

              </div>

            </div>

            {/* PRAWA - ZDJĘCIE */}
            <div className="relative h-[500px] overflow-hidden bg-slate-100 md:h-[620px]">
              <Image
                src="/den1.jpg"
                alt="Protetyka stomatologiczna Dental Centrum"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* TECHNOLOGIA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEWA - INFORMACJA */}
            <div className="border border-white/10 bg-white/5 p-8 md:p-12">

              <span className="text-4xl font-light text-blue-400">
                5 μm
              </span>

              <p className="mt-6 text-sm leading-7 text-white/60">
                Nowoczesne technologie cyfrowe pozwalają na bardzo
                dokładne odwzorowanie struktur anatomicznych uzębienia
                pacjenta.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
                CAD / CAM · CNC
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Własne zaplecze technologiczne pozwala na precyzyjne
                projektowanie i wykonywanie prac protetycznych.
              </p>

            </div>

            {/* PRAWA - TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
                Technologia
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight text-white md:text-4xl">
                Precyzja dzięki
                <br />
                technologii CAD/CAM
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-white/60">

                <p>
                  Posiadamy nowoczesne urządzenia CAD/CAM oraz obrabiarki
                  CNC, które umożliwiają cyfrowe projektowanie i wykonywanie
                  uzupełnień protetycznych.
                </p>

                <p>
                  Technologia pozwala na trójwymiarowe skanowanie modelu
                  oraz bardzo dokładne odwzorowanie struktur anatomicznych
                  uzębienia pacjenta.
                </p>

                <p>
                  Wysoka precyzja wykonania ma znaczenie nie tylko
                  dla estetyki pracy, ale również dla jej dopasowania
                  i prawidłowego funkcjonowania w jamie ustnej.
                </p>

                <p>
                  Połączenie nowoczesnego zaplecza technologicznego,
                  własnej pracowni protetycznej oraz doświadczenia zespołu
                  pozwala na sprawną realizację kolejnych etapów leczenia.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* USŁUGI */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Protetyka
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Zakres usług
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Każdy etap leczenia protetycznego konsultujemy z pacjentem.
              Wspólnie dobieramy rozwiązanie odpowiadające jego potrzebom,
              oczekiwaniom oraz warunkom anatomicznym.
            </p>

          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">

            {/* 01 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Wkłady koronowo-korzeniowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Rozwiązania stosowane przy odbudowie zębów wymagających
                dodatkowego wzmocnienia przed wykonaniem korony.
              </p>
            </div>

            {/* 02 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Korony
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Odbudowa zębów uszkodzonych, pozwalająca przywrócić
                ich kształt, funkcję oraz estetykę.
              </p>
            </div>

            {/* 03 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Mosty
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Uzupełnienia umożliwiające odbudowę brakujących zębów
                poprzez połączenie kilku elementów protetycznych.
              </p>
            </div>

            {/* 04 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Inlay i onlay
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Precyzyjne uzupełnienia stosowane do odbudowy części
                zęba przy większych ubytkach.
              </p>
            </div>

            {/* 05 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                05
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Licówki
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Cienkie uzupełnienia pozwalające poprawić wygląd
                przednich powierzchni zębów.
              </p>
            </div>

            {/* 06 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                06
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Protezy akrylowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Ruchome uzupełnienia protetyczne stosowane przy
                częściowych lub całkowitych brakach w uzębieniu.
              </p>
            </div>

            {/* 07 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                07
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Protezy szkieletowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Stabilne rozwiązania protetyczne przeznaczone
                do uzupełniania częściowych braków zębowych.
              </p>
            </div>

            {/* 08 */}
            <div className="bg-white p-8">
              <span className="text-2xl font-light text-blue-700">
                08
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Protezy na implantach
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Uzupełnienia protetyczne oparte na implantach,
                zapewniające stabilne rozwiązanie przy brakach zębowych.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* INDYWIDUALNY PLAN */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid overflow-hidden bg-[#F8F9FA] lg:grid-cols-2">

            <div className="flex items-center p-8 md:p-12 lg:p-16">

              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                  Indywidualne podejście
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
                  Plan leczenia dopasowany
                  <br />
                  do Twoich potrzeb
                </h2>

                <div className="mt-6 space-y-5 text-sm leading-7 text-slate-500">

                  <p>
                    Każde leczenie protetyczne rozpoczynamy od konsultacji
                    i dokładnej oceny stanu uzębienia pacjenta.
                  </p>

                  <p>
                    Na tej podstawie możemy określić możliwe rozwiązania,
                    zaplanować kolejne etapy leczenia oraz przedstawić
                    przewidywane koszty.
                  </p>

                  <p>
                    Pacjent aktywnie uczestniczy w procesie leczenia,
                    dzięki czemu wspólnie możemy wybrać rozwiązanie
                    odpowiadające jego oczekiwaniom.
                  </p>

                </div>

                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
                >
                  Umów konsultację
                </Link>

              </div>

            </div>

            <div className="relative min-h-[450px]">
              <Image
                src="/den1.jpg"
                alt="Pracownia protetyczna Dental Centrum"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* DIAGNOSTYKA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="max-w-3xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
              Diagnostyka
            </p>

            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Kompleksowa diagnostyka
              <br />
              w jednym miejscu
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/60">
              W klinice możemy wykonać niezbędną diagnostykę obrazową,
              która pozwala dokładniej zaplanować leczenie protetyczne
              i ocenić warunki anatomiczne pacjenta.
            </p>

          </div>

          <div className="mt-12 grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">

            <div className="bg-[#1A252F] p-8">
              <span className="text-2xl font-light text-blue-400">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light text-white">
                RTG punktowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Szczegółowa diagnostyka wybranych obszarów uzębienia
                przydatna podczas planowania leczenia.
              </p>
            </div>

            <div className="bg-[#1A252F] p-8">
              <span className="text-2xl font-light text-blue-400">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light text-white">
                RTG panoramiczne
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Obraz całego uzębienia pozwalający uzyskać szerszy obraz
                sytuacji stomatologicznej pacjenta.
              </p>
            </div>

            <div className="bg-[#1A252F] p-8">
              <span className="text-2xl font-light text-blue-400">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light text-white">
                Tomografia CBCT
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Trójwymiarowa diagnostyka struktur kostnych i zębowych
                stosowana w sytuacjach wymagających dokładniejszej oceny.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* WŁASNA PRACOWNIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Dental Centrum · Gdańsk
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl font-serif text-3xl font-light md:text-4xl">
              Własna pracownia protetyczna
              <br />
              i nowoczesne zaplecze
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500">
              Połączenie gabinetu stomatologicznego z własną pracownią
              protetyczną pozwala na sprawną współpracę pomiędzy lekarzem
              a personelem technicznym oraz lepszą kontrolę nad kolejnymi
              etapami wykonywania uzupełnienia.
            </p>

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
            Zaplanuj swój uśmiech
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Umów konsultację protetyczną i poznaj możliwości odbudowy
            brakujących lub uszkodzonych zębów.
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