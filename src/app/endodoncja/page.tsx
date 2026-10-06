import Image from 'next/image';
import Link from 'next/link';

export default function EndodoncjaPage() {
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
                Zachowanie naturalnego zęba
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Endodoncja to dział stomatologii zajmujący się leczeniem
                  chorób miazgi zęba. To właśnie w niej znajdują się nerwy
                  i naczynia krwionośne, które odpowiadają za jego żywotność.
                </p>

                <p>
                  Leczenie kanałowe bywa jedyną możliwością zachowania zęba
                  i uniknięcia jego ekstrakcji. Choć często wymaga
                  precyzji, czasu i odpowiedniego przygotowania, pozwala
                  zachować własny ząb oraz uniknąć bardziej skomplikowanych
                  zabiegów stomatologicznych.
                </p>

                <p>
                  Prawidłowo przeprowadzone leczenie endodontyczne pozwala
                  na długotrwałe użytkowanie zęba przy odpowiedniej
                  higienie i regularnych kontrolach. Wyleczony ząb może
                  również stanowić solidną podstawę pod koronę lub filar
                  mostu w leczeniu protetycznym.
                </p>

                <p>
                  Istotą leczenia kanałowego jest usunięcie chorej miazgi
                  z komory i kanałów korzeniowych, ich mechaniczne
                  opracowanie, dokładne odkażenie oraz szczelne wypełnienie
                  odpowiednimi materiałami.
                </p>

                <p>
                  Aby zapewnić pacjentowi komfort oraz odpowiednie warunki
                  do przeprowadzenia zabiegu, leczenie wykonywane jest
                  w znieczuleniu miejscowym.
                </p>

              </div>

            </div>

            {/* PRAWA - ZDJĘCIE */}
            <div className="relative h-[500px] overflow-hidden bg-slate-100 md:h-[620px]">
              <Image
                src="/end1.jpg"
                alt="Leczenie endodontyczne zęba"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* NA CZYM POLEGA LECZENIE */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Leczenie endodontyczne
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Na czym polega leczenie kanałowe?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Celem leczenia jest dokładne oczyszczenie systemu kanałów
              korzeniowych, jego odkażenie oraz szczelne zabezpieczenie
              przed ponownym rozwojem infekcji.
            </p>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">

            <div className="bg-[#F8F9FA] p-7 md:p-8">
              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Opracowanie
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Usunięcie chorej miazgi oraz mechaniczne opracowanie
                komory i kanałów korzeniowych.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-7 md:p-8">
              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Oczyszczenie
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Dokładne oczyszczenie kanałów oraz przygotowanie ich
                do dalszego etapu leczenia.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-7 md:p-8">
              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Odkażenie
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Zastosowanie odpowiednich procedur mających na celu
                ograniczenie obecności bakterii w systemie kanałowym.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-7 md:p-8">
              <span className="text-2xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Wypełnienie
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Szczelne wypełnienie opracowanych kanałów specjalnymi
                materiałami endodontycznymi.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* TECHNOLOGIA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEWA - ZDJĘCIE */}
            <div className="relative h-[450px] overflow-hidden bg-white/5 md:h-[580px]">
              <Image
                src="/end2.jpg"
                alt="Leczenie kanałowe pod mikroskopem"
                fill
                className="object-cover"
              />
            </div>

            {/* PRAWA - TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
                Technologia
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight text-white md:text-4xl">
                Precyzja leczenia
                <br />
                pod mikroskopem
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-white/60">

                <p>
                  Do szczegółowego opracowania wszystkich kanałów często
                  konieczne jest zastosowanie mikroskopu. Sam zabieg
                  nie różni się zasadniczo od metod konwencjonalnych,
                  jednak zastosowanie powiększenia znacząco zwiększa
                  możliwości diagnostyczne i precyzję pracy.
                </p>

                <p>
                  Mikroskop pozwala dokładniej ocenić anatomię zęba
                  oraz wykryć nietypowy przebieg kanałów i zmiany
                  chorobowe miazgi zębowej.
                </p>

                <p>
                  Leczenie pod mikroskopem może być szczególnie pomocne
                  w przypadku wąskich lub zarośniętych kanałów,
                  zakrzywionych korzeni oraz nietypowej anatomii zęba.
                </p>

                <p>
                  Jest również bardzo pomocne podczas leczenia powikłań,
                  takich jak złamanie narzędzia endodontycznego czy
                  perforacja, czyli przebicie ściany zęba.
                </p>

                <p>
                  Zastosowanie mikroskopu zwiększa możliwości precyzyjnego
                  przeprowadzenia leczenia i w wielu przypadkach pozwala
                  podjąć próbę zachowania zębów, które wcześniej mogły
                  być przeznaczone do ekstrakcji.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WSKAZANIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Wskazania
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Kiedy leczenie kanałowe może być konieczne?
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Decyzja o rozpoczęciu leczenia endodontycznego podejmowana
              jest na podstawie badania stomatologicznego oraz odpowiedniej
              diagnostyki.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <article className="border border-slate-200 bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Choroby miazgi
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Leczenie może być konieczne w przypadku nieodwracalnych
                zmian chorobowych miazgi, które uniemożliwiają zachowanie
                jej prawidłowego funkcjonowania.
              </p>
            </article>

            <article className="border border-slate-200 bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Stan zapalny tkanek
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Zmiany zapalne dotyczące tkanek znajdujących się wokół
                korzenia mogą wymagać leczenia źródła infekcji
                znajdującego się wewnątrz zęba.
              </p>
            </article>

            <article className="border border-slate-200 bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Powtórne leczenie
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                W niektórych przypadkach konieczne jest ponowne leczenie
                kanałowe wcześniej leczonego zęba, między innymi gdy
                doszło do ponownego rozwoju zmian zapalnych.
              </p>
            </article>

            <article className="border border-slate-200 bg-white p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Trudna anatomia
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Nietypowy przebieg kanałów, ich zwężenie, zakrzywienie
                lub inne uwarunkowania anatomiczne mogą wymagać
                zastosowania leczenia z wykorzystaniem mikroskopu.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* MIKROSKOP - INFORMACJA */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid overflow-hidden bg-[#F8F9FA] lg:grid-cols-2">

            <div className="relative min-h-[420px]">
              <Image
                src="/end3.jpg"
                alt="Nowoczesne leczenie endodontyczne"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 md:p-12 lg:p-16">

              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                  Nowoczesna endodoncja
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
                  Precyzyjne leczenie
                  <br />
                  w komfortowych warunkach
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  W Dental Centrum oferujemy pełny zakres leczenia
                  kanałowego z wykorzystaniem nowoczesnego sprzętu
                  optycznego. Odpowiednio dobrane technologie pozwalają
                  na dokładniejszą ocenę anatomii zęba oraz precyzyjne
                  przeprowadzenie poszczególnych etapów leczenia.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Leczenie przeprowadzane jest w znieczuleniu miejscowym,
                  z uwzględnieniem indywidualnych potrzeb pacjenta.
                  Celem jest nie tylko skuteczne przeprowadzenie zabiegu,
                  ale przede wszystkim zachowanie naturalnego zęba
                  na możliwie długi czas.
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

      {/* GALERIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="relative h-[520px] overflow-hidden bg-slate-100 md:h-[660px]">
              <Image
                src="/end4.jpg"
                alt="Gabinet stomatologiczny - leczenie endodontyczne"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[520px] overflow-hidden bg-slate-100 md:h-[660px]">
              <Image
                src="/end5.jpg"
                alt="Nowoczesna endodoncja"
                fill
                className="object-cover"
              />
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
            Zadbaj o swój naturalny ząb
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Skontaktuj się z Dental Centrum i dowiedz się, jakie
            rozwiązanie będzie odpowiednie w Twoim przypadku.
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