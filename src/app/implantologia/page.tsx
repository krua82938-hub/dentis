import Image from 'next/image';
import Link from 'next/link';

export default function ImplantologiaPage() {
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

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Implantologia
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Brak zęba można skutecznie uzupełnić
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Brak pojedynczego zęba lub większej liczby zębów może
                  wpływać nie tylko na estetykę uśmiechu, ale również na
                  komfort podczas jedzenia i funkcjonowanie całego układu
                  stomatognatycznego.
                </p>

                <p>
                  Implantologia jest dziedziną stomatologii zajmującą się
                  uzupełnianiem braków zębowych przy wykorzystaniu implantów
                  umieszczanych w kości szczęki lub żuchwy.
                </p>

                <p>
                  Implant może pełnić funkcję podstawy dla pojedynczej korony,
                  mostu lub innego uzupełnienia protetycznego. Ostateczny
                  sposób leczenia dobierany jest indywidualnie po badaniu
                  pacjenta oraz odpowiedniej diagnostyce.
                </p>

              </div>

            </div>

            {/* ZDJĘCIA */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div className="relative h-[320px] overflow-hidden bg-slate-200">
                <Image
                  src="/implant1.jpg"
                  alt="Implantologia stomatologiczna"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[320px] overflow-hidden bg-slate-200">
                <Image
                  src="/implant2.jpg"
                  alt="Leczenie implantologiczne"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* CZYM JEST IMPLANT */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Podstawa leczenia
              </p>

              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Czym jest implant zębowy?
              </h2>

            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-500">

              <p>
                Implant zębowy jest niewielkim elementem, który umieszcza się
                w kości szczęki lub żuchwy w miejscu brakującego zęba.
                Jego zadaniem jest zastąpienie korzenia naturalnego zęba
                i stworzenie stabilnej podstawy dla odbudowy protetycznej.
              </p>

              <p>
                Po okresie gojenia na implancie można wykonać odpowiednią
                odbudowę protetyczną. W przypadku pojedynczego braku może
                być nią korona, natomiast przy większej liczbie brakujących
                zębów możliwe są również inne rozwiązania protetyczne.
              </p>

              <p>
                Rodzaj zastosowanego rozwiązania zależy między innymi od
                warunków anatomicznych, liczby brakujących zębów, stanu
                kości oraz oczekiwań pacjenta.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ETAPY */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Leczenie krok po kroku
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Jak wygląda leczenie implantologiczne?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Leczenie implantologiczne składa się z kilku etapów. Ich zakres
              oraz kolejność mogą różnić się w zależności od indywidualnej
              sytuacji pacjenta.
            </p>

          </div>


          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">

            {/* 01 */}
            <div className="bg-white p-8 md:p-9">

              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Konsultacja
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Pierwszym etapem jest konsultacja oraz ocena stanu jamy
                ustnej. Lekarz analizuje brak zębowy i przedstawia możliwe
                rozwiązania leczenia.
              </p>

            </div>


            {/* 02 */}
            <div className="bg-white p-8 md:p-9">

              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Diagnostyka
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                W zależności od potrzeb wykonywana jest odpowiednia
                diagnostyka obrazowa, która pozwala ocenić warunki
                anatomiczne i zaplanować zabieg.
              </p>

            </div>


            {/* 03 */}
            <div className="bg-white p-8 md:p-9">

              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Zabieg
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Implant zostaje umieszczony w kości w miejscu brakującego
                zęba. Zabieg wykonywany jest w znieczuleniu miejscowym.
              </p>

            </div>


            {/* 04 */}
            <div className="bg-white p-8 md:p-9">

              <span className="text-2xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Odbudowa
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Po odpowiednim okresie gojenia wykonywana jest odbudowa
                protetyczna, której zadaniem jest przywrócenie funkcji
                i estetyki brakującego zęba.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* DIAGNOSTYKA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
                Planowanie leczenia
              </p>

              <h2 className="font-serif text-3xl font-light text-white md:text-5xl">
                Dokładna diagnostyka przed zabiegiem
              </h2>

            </div>

            <div className="space-y-5 text-sm leading-7 text-white/60">

              <p>
                Prawidłowe zaplanowanie leczenia implantologicznego wymaga
                dokładnej oceny warunków panujących w jamie ustnej.
              </p>

              <p>
                W zależności od sytuacji klinicznej lekarz może zalecić
                wykonanie badań obrazowych, w tym tomografii komputerowej 3D.
                Pozwala ona dokładniej ocenić między innymi ilość i jakość
                dostępnej tkanki kostnej oraz położenie ważnych struktur
                anatomicznych.
              </p>

              <p>
                Na podstawie badania klinicznego i diagnostyki lekarz może
                zaplanować odpowiedni sposób postępowania.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* DLA KOGO */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Możliwości leczenia
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Kiedy rozważa się implant?
            </h2>

          </div>


          <div className="grid gap-6 md:grid-cols-3">

            <article className="border border-slate-200 bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Pojedynczy brak
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Implant może stanowić podstawę dla korony zastępującej
                pojedynczy brakujący ząb.
              </p>

            </article>


            <article className="border border-slate-200 bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Większe braki
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Przy większej liczbie brakujących zębów implanty mogą być
                wykorzystane jako element podparcia odpowiedniej odbudowy
                protetycznej.
              </p>

            </article>


            <article className="border border-slate-200 bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Komfort i estetyka
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Celem leczenia jest stworzenie stabilnego uzupełnienia,
                które pozwala poprawić funkcję i estetykę uśmiechu.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* ZDJĘCIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[500px]">
              <Image
                src="/implant3.jpg"
                alt="Zabieg implantologiczny"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[500px]">
              <Image
                src="/implant4.jpg"
                alt="Nowoczesna implantologia stomatologiczna"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* ODBUDOWA */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Etap protetyczny
              </p>

              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Odbudowa protetyczna
              </h2>

            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-500">

              <p>
                Sam implant zastępuje korzeń brakującego zęba. Aby przywrócić
                jego funkcję i wygląd, konieczne jest wykonanie odpowiedniej
                odbudowy protetycznej.
              </p>

              <p>
                W przypadku pojedynczego braku może być to korona oparta
                na implancie. Przy większych brakach lekarz może zaproponować
                inne rozwiązanie dostosowane do indywidualnej sytuacji.
              </p>

              <p>
                Ostateczny rodzaj odbudowy oraz jej zakres ustalany jest
                podczas planowania leczenia.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* CENNIK */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Koszt leczenia
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Implantologia — cennik
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Koszt leczenia jest ustalany indywidualnie i zależy między
              innymi od zakresu zabiegu oraz rodzaju planowanej odbudowy.
            </p>

          </div>


          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">

            <div className="bg-white p-8 md:p-10">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                Etap 01
              </span>

              <h3 className="mt-4 font-serif text-2xl font-light">
                Zabieg chirurgiczny
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Zabieg chirurgiczny związany z implantacją.
              </p>

              <p className="mt-6 text-2xl font-light text-[#1A252F]">
                2500–4000 zł
              </p>

            </div>


            <div className="bg-white p-8 md:p-10">

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700">
                Etap 02
              </span>

              <h3 className="mt-4 font-serif text-2xl font-light">
                Odbudowa protetyczna
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Odbudowa protetyczna wykonywana po etapie chirurgicznym.
              </p>

              <p className="mt-6 text-2xl font-light text-[#1A252F]">
                2000–3000 zł
              </p>

            </div>

          </div>

          <p className="mt-6 text-xs leading-6 text-slate-400">
            Podane ceny mają charakter informacyjny. Ostateczny koszt leczenia
            zależy od indywidualnego planu leczenia.
          </p>

        </div>
      </section>


      {/* ZDJĘCIE + TEKST */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid overflow-hidden bg-white lg:grid-cols-2">

            <div className="relative min-h-[420px]">
              <Image
                src="/implant2.jpg"
                alt="Implantologia Dental Centrum Gdańsk"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 md:p-12 lg:p-16">

              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                  Dental Centrum · Gdańsk
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
                  Indywidualny plan leczenia
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Każdy przypadek implantologiczny wymaga indywidualnej oceny.
                  Podczas konsultacji lekarz analizuje stan jamy ustnej,
                  dostępne badania diagnostyczne oraz możliwości leczenia.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Na tej podstawie można zaplanować kolejne etapy leczenia
                  i dobrać rozwiązanie odpowiadające potrzebom pacjenta.
                </p>

                <Link
                  href="/kontakt"
                  className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
                >
                  Umów konsultację
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
            Implantologia · Dental Centrum
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
            Rozpocznij planowanie leczenia
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Umów konsultację implantologiczną i poznaj możliwości
            uzupełnienia braków zębowych.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
          >
            Skontaktuj się z nami
          </Link>

        </div>
      </section>

    </main>
  );
}