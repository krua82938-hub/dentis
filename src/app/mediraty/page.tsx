import Link from 'next/link';

export default function MediRatyPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-28 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">


        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">

            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Finansowanie leczenia
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Zadbaj o swój uśmiech
                <br className="hidden md:block" />
                bez odkładania leczenia.
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Szanowny Pacjencie, informujemy, że wszystkie komercyjne
                  usługi naszej placówki mogą być realizowane z możliwością
                  rozłożenia płatności na dogodne raty.
                </p>

                <p>
                  Takie rozwiązanie pozwala zaplanować leczenie stomatologiczne
                  w sposób dopasowany do indywidualnych możliwości finansowych.
                  Dzięki finansowaniu ratalnemu nie trzeba odkładać potrzebnych
                  zabiegów wyłącznie ze względu na konieczność jednorazowej
                  płatności.
                </p>

                <p>
                  Wysokość miesięcznej raty oraz szczegółowe warunki
                  finansowania można ustalić przed rozpoczęciem leczenia.
                  Osoby zainteresowane prosimy o kontakt z Rejestracją lub
                  o wypełnienie bezpłatnego formularza pacjenta.
                </p>

              </div>
            </div>

            {/* BOX */}
            <div className="border border-slate-200 bg-white p-8 md:p-10">

              <div className="flex h-14 w-14 items-center justify-center bg-[#1A252F] text-xl text-white">
                +
              </div>

              <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-700">
                MediRaty
              </p>

              <h3 className="mt-3 font-serif text-2xl font-light md:text-3xl">
                Leczenie w dogodnych ratach
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Poznaj możliwości finansowania swojego leczenia i wybierz
                rozwiązanie dopasowane do planowanego zakresu zabiegów.
              </p>

              <div className="mt-8 border-t border-slate-100 pt-6">

                <div className="flex items-start gap-4">
                  <span className="text-xl font-light text-blue-700">
                    01
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1A252F]">
                      Konsultacja
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Poznaj możliwości leczenia i jego zakres.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="text-xl font-light text-blue-700">
                    02
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1A252F]">
                      Plan leczenia
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Otrzymaj informacje dotyczące planowanych zabiegów
                      i ich kosztów.
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-4">
                  <span className="text-xl font-light text-blue-700">
                    03
                  </span>

                  <div>
                    <h4 className="text-sm font-semibold text-[#1A252F]">
                      Finansowanie
                    </h4>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      Sprawdź możliwości rozłożenia płatności na raty.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Dlaczego warto?
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Wygodne rozwiązanie dla pacjentów
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Finansowanie ratalne może ułatwić zaplanowanie zarówno
              pojedynczych zabiegów, jak i bardziej rozbudowanych etapów
              leczenia stomatologicznego.
            </p>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">

            <div className="bg-[#F8F9FA] p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Dogodne raty
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Koszt leczenia może zostać rozłożony na miesięczne raty
                zgodnie z dostępnymi warunkami finansowania.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Prosty proces
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Osoby zainteresowane mogą skontaktować się z Rejestracją
                lub skorzystać z bezpłatnego formularza pacjenta.
              </p>
            </div>

            <div className="bg-[#F8F9FA] p-8 md:p-10">
              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Większa elastyczność
              </h3>

              <p className="mt-4 text-sm leading-6 text-slate-500">
                Możliwość finansowania pozwala lepiej zaplanować wydatki
                związane z leczeniem stomatologicznym.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FORMULARZ PACJENTA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEWA */}
            <div className="bg-[#1A252F] p-8 md:p-12">

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/50">
                Bezpłatny formularz
              </p>

              <h2 className="mt-4 font-serif text-3xl font-light text-white md:text-4xl">
                Formularz pacjenta
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60">
                Osoby zainteresowane finansowaniem mogą wypełnić bezpłatny
                formularz pacjenta. Pozwala on w łatwy i szybki sposób
                rozpocząć proces ustalenia szczegółów finansowania.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/60">
                Po uzyskaniu niezbędnych informacji można przejść do kolejnych
                etapów procesu zgodnie z aktualnymi warunkami finansowania.
              </p>
<a
  href="https://mediraty.pl/formularz/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A252F] transition hover:bg-blue-700 hover:text-white"
>
  Wypełnij formularz
</a>

            </div>

            {/* PRAWA */}
            <div className="border border-slate-200 bg-white p-8 md:p-12">

              <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Rejestracja
              </p>

              <h3 className="mt-4 font-serif text-3xl font-light">
                Wolisz kontakt z nami?
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Jeżeli masz pytania dotyczące możliwości finansowania
                leczenia, możesz skontaktować się bezpośrednio z Rejestracją
                Dental Centrum.
              </p>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Nasi pracownicy przekażą Ci informacje dotyczące dalszego
                procesu i pomogą wskazać kolejne kroki.
              </p>

              <Link
                href="/kontakt"
                className="mt-8 inline-flex border border-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A252F] transition hover:bg-[#1A252F] hover:text-white"
              >
                Skontaktuj się z nami
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* INFORMACJA */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Najważniejsze informacje
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
              Finansowanie leczenia
            </h2>

          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">

            <div className="py-7">
              <h3 className="text-sm font-semibold">
                Czy wszystkie usługi można finansować w ratach?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Możliwość finansowania dotyczy komercyjnych usług naszej
                placówki, zgodnie z aktualnie dostępnymi warunkami
                finansowania.
              </p>
            </div>

            <div className="py-7">
              <h3 className="text-sm font-semibold">
                Jak rozpocząć proces?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Osoby zainteresowane prosimy o kontakt z Rejestracją lub
                o wypełnienie bezpłatnego formularza pacjenta.
              </p>
            </div>

            <div className="py-7">
              <h3 className="text-sm font-semibold">
                Czy można wcześniej poznać koszt leczenia?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Tak. Podczas konsultacji lekarz może przedstawić zakres
                proponowanego leczenia oraz związane z nim koszty.
              </p>
            </div>

            <div className="py-7">
              <h3 className="text-sm font-semibold">
                Czy finansowanie jest gwarantowane?
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                Ostateczna decyzja oraz warunki finansowania zależą od
                indywidualnej oceny przeprowadzanej przez instytucję
                finansującą.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F8F9FA] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
            Dental Centrum · Gdańsk
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
            Zaplanuj swoje leczenie
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Skontaktuj się z nami, poznaj możliwości leczenia oraz dowiedz się,
            jakie rozwiązania finansowania są dostępne dla Twojego planu
            leczenia.
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