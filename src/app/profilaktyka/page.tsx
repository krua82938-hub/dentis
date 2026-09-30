import Image from 'next/image';
import Link from 'next/link';

export default function ProfilaktykaPage() {
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
                Wstęp
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Zdrowy uśmiech zaczyna się od profilaktyki
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  W stomatologii profilaktyka obejmuje między innymi zabiegi,
                  których celem jest usuwanie osadów i złogów nazębnych,
                  ochrona szkliwa oraz ograniczenie ryzyka rozwoju próchnicy
                  i chorób przyzębia.
                </p>

                <p>
                  Do najważniejszych zabiegów profilaktycznych należą:
                </p>

                <ol className="space-y-2 pl-5 text-[#1A252F]">
                  <li className="pl-2">
                    <span className="font-medium">1.</span> Usuwanie kamienia nazębnego
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">2.</span> Piaskowanie
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">3.</span> Polerowanie
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">4.</span> Lakowanie
                  </li>
                  <li className="pl-2">
                    <span className="font-medium">5.</span> Fluoryzacja
                  </li>
                </ol>

                <p>
                  Regularne wykonywanie zabiegów higienizacyjnych pozwala
                  utrzymać zęby w dobrej kondycji, ograniczyć ilość
                  szkodliwych bakterii w jamie ustnej oraz zadbać o estetykę
                  uśmiechu.
                </p>

              </div>

            </div>

            {/* PRAWA - ZDJĘCIA */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

              <div className="relative h-[280px] overflow-hidden bg-slate-200 md:h-[320px]">
                <Image
                  src="/pro1.jpg"
                  alt="Profesjonalna profilaktyka stomatologiczna"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[280px] overflow-hidden bg-slate-200 md:h-[320px]">
                <Image
                  src="/pro2.jpg"
                  alt="Zabiegi profilaktyczne w gabinecie stomatologicznym"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* KAMIEŃ NAZĘBNY */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            {/* LEWA */}
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Skaling
              </p>

              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Usuwanie kamienia nazębnego
              </h2>
            </div>

            {/* PRAWA */}
            <div className="space-y-5 text-sm leading-7 text-slate-500">

              <p>
                Kamień nazębny to zmineralizowana warstwa płytki nazębnej.
                Osadza się nie tylko na powierzchni zębów, ale również pod
                dziąsłami, głównie w okolicach szyjek zębowych.
              </p>

              <p>
                Zabieg polegający na usuwaniu kamienia nazębnego nazywamy
                skalingiem. Jest to ważny element profesjonalnej higienizacji,
                ponieważ nagromadzony kamień stanowi miejsce, w którym mogą
                rozwijać się bakterie odpowiedzialne między innymi za choroby
                dziąseł i przyzębia.
              </p>

              <p>
                Długotrwałe gromadzenie się kamienia może prowadzić do
                podrażnienia i stanu zapalnego dziąseł, obniżania się ich
                poziomu, odsłaniania szyjek zębowych oraz zaniku tkanek
                podtrzymujących zęby. Nieleczone choroby przyzębia mogą
                z czasem prowadzić do rozchwiania zębów i ich utraty.
              </p>

              <p>
                Regularne profesjonalne oczyszczanie zębów pozwala ograniczyć
                ilość złogów i ułatwia utrzymanie prawidłowej higieny jamy
                ustnej w domu.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* RODZAJE SKALINGU */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Rodzaje zabiegu
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Skaling naddziąsłowy i poddziąsłowy
            </h2>
          </div>

          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">

            {/* NADZIĄSŁOWY */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Skaling naddziąsłowy
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Skaling naddziąsłowy polega na usunięciu kamienia nazębnego
                z powierzchni korony zęba. Jest to najpopularniejsza forma
                zabiegu wykonywana u bardzo wielu pacjentów w ramach
                profesjonalnej higienizacji.
              </p>

            </div>

            {/* PODDZIĄSŁOWY */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-2xl font-light">
                Skaling poddziąsłowy
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Skaling poddziąsłowy jest bardziej skomplikowanym i
                czasochłonnym zabiegiem. Polega na usunięciu kamienia
                z okolic szyjek zębowych oraz trudno dostępnych miejsc
                znajdujących się poniżej linii dziąseł.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* METODY USUWANIA KAMIENIA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Metody
            </p>

            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Metody usuwania kamienia
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              W zależności od rodzaju i lokalizacji złogów stosowane mogą być
              różne techniki ich usuwania.
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">

            <div className="bg-[#1A252F] p-7">
              <span className="text-xl font-light text-blue-400">01</span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Metoda tradycyjna
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Z wykorzystaniem skalerów ręcznych. Metoda stosowana
                w określonych sytuacjach klinicznych.
              </p>
            </div>

            <div className="bg-[#1A252F] p-7">
              <span className="text-xl font-light text-blue-400">02</span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Metoda mechaniczna
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Wykorzystuje odpowiednio dobrane narzędzia mechaniczne
                do usuwania złogów.
              </p>
            </div>

            <div className="bg-[#1A252F] p-7">
              <span className="text-xl font-light text-blue-400">03</span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Metoda chemiczna
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Wykorzystuje odpowiednie preparaty wspomagające usuwanie
                osadów nazębnych.
              </p>
            </div>

            <div className="bg-[#1A252F] p-7">
              <span className="text-xl font-light text-blue-400">04</span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Metoda laserowa
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                W określonych przypadkach może być wykorzystywana technologia
                laserowa do pracy w obrębie złogów.
              </p>
            </div>

            <div className="bg-[#1A252F] p-7 md:col-span-2 lg:col-span-1">
              <span className="text-xl font-light text-blue-400">05</span>

              <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Metoda ultradźwiękowa
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/50">
                Z wykorzystaniem skalera ultradźwiękowego, który pozwala
                skutecznie usuwać zmineralizowane złogi.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GALERIA - 2 ZDJĘCIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[460px]">
              <Image
                src="/pro3.jpg"
                alt="Profesjonalne oczyszczanie zębów"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[460px]">
              <Image
                src="/pro4.jpg"
                alt="Profilaktyka i higienizacja jamy ustnej"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>

      {/* USŁUGI */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Profilaktyka
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Usługi
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Profesjonalna higienizacja obejmuje kilka uzupełniających się
              zabiegów, których zakres może zostać dobrany indywidualnie
              do potrzeb pacjenta.
            </p>

          </div>

          <div className="space-y-6">

            {/* PIASKOWANIE */}
            <article className="border border-slate-200 bg-[#F8F9FA] p-7 md:p-10">

              <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

                <div>
                  <span className="text-2xl font-light text-blue-700">
                    01
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-light">
                    Piaskowanie
                  </h3>

                </div>

                <div className="text-sm leading-7 text-slate-500">

                  <p>
                    Zabieg polega na usunięciu z powierzchni zębów osadu
                    i przebarwień pochodzących między innymi z herbaty,
                    kawy, papierosów lub innych substancji barwiących.
                  </p>

                  <p className="mt-4">
                    Do piaskowania wykorzystuje się specjalne urządzenie,
                    które kieruje na powierzchnię zębów strumień powietrza,
                    wody oraz drobin czyszczących. Pozwala to skutecznie
                    oczyścić powierzchnie zębów oraz trudno dostępne miejsca.
                  </p>

                  <p className="mt-4">
                    Piaskowanie wykonuje się u pacjentów mających problem
                    z osadami nazębnymi, a także jako uzupełnienie skalingu
                    w celu dokładnego oczyszczenia powierzchni zębów.
                  </p>

                </div>

              </div>

            </article>

            {/* POLEROWANIE */}
            <article className="border border-slate-200 bg-[#F8F9FA] p-7 md:p-10">

              <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

                <div>
                  <span className="text-2xl font-light text-blue-700">
                    02
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-light">
                    Polerowanie
                  </h3>
                </div>

                <div className="text-sm leading-7 text-slate-500">

                  <p>
                    Polerowanie ma na celu wygładzenie powierzchni zębów
                    oraz usunięcie nalotów, osadów, przebarwień i miękkich
                    złogów.
                  </p>

                  <p className="mt-4">
                    Zabieg jest często wykonywany po skalingu, aby dokładnie
                    oczyścić szkliwo z pozostałości osadów oraz wygładzić
                    powierzchnię zębów.
                  </p>

                  <p className="mt-4">
                    Do polerowania wykorzystuje się specjalne szczotki,
                    gumki i gąbki oraz pasty polerskie o odpowiednio dobranej
                    ziarnistości, dostosowanej do potrzeb pacjenta.
                  </p>

                </div>

              </div>

            </article>

            {/* LAKOWANIE */}
            <article className="border border-slate-200 bg-[#F8F9FA] p-7 md:p-10">

              <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

                <div>
                  <span className="text-2xl font-light text-blue-700">
                    03
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-light">
                    Lakowanie
                  </h3>
                </div>

                <div className="text-sm leading-7 text-slate-500">

                  <p>
                    Zęby trzonowe i przedtrzonowe ze względu na swoją budowę
                    anatomiczną mają często głębokie bruzdy na powierzchniach
                    żujących. Mogą one stanowić miejsce zalegania resztek
                    pokarmowych i płytki bakteryjnej.
                  </p>

                  <p className="mt-4">
                    Lakowanie polega na zabezpieczeniu bruzd specjalnym
                    materiałem, który ogranicza możliwość zalegania
                    zanieczyszczeń i ułatwia utrzymanie prawidłowej higieny.
                  </p>

                  <p className="mt-4">
                    Zabieg jest szczególnie często stosowany u dzieci
                    i młodzieży jako element profilaktyki próchnicy.
                  </p>

                </div>

              </div>

            </article>

            {/* FLUORYZACJA */}
            <article className="border border-slate-200 bg-[#F8F9FA] p-7 md:p-10">

              <div className="grid gap-8 lg:grid-cols-[180px_1fr]">

                <div>
                  <span className="text-2xl font-light text-blue-700">
                    04
                  </span>

                  <h3 className="mt-4 font-serif text-2xl font-light">
                    Fluoryzacja
                  </h3>
                </div>

                <div className="text-sm leading-7 text-slate-500">

                  <p>
                    Fluoryzacja polega na zastosowaniu preparatu z fluorem,
                    którego zadaniem jest wspomaganie mineralizacji i ochrony
                    szkliwa oraz zwiększenie jego odporności na działanie
                    kwasów produkowanych przez bakterie próchnicowe.
                  </p>

                  <p className="mt-4">
                    Profesjonalna fluoryzacja w gabinecie stomatologicznym
                    wykorzystuje preparaty o odpowiednio dobranym stężeniu
                    fluoru, dostosowanym do wieku i potrzeb pacjenta.
                  </p>

                  <p className="mt-4">
                    Fluoryzację często wykonuje się po profesjonalnym
                    oczyszczaniu zębów, ponieważ oczyszczona powierzchnia
                    szkliwa pozwala na skuteczne zastosowanie preparatu.
                  </p>

                  <p className="mt-4">
                    O częstotliwości zabiegów decyduje lekarz lub higienistka
                    stomatologiczna, uwzględniając między innymi wiek,
                    stan uzębienia oraz indywidualne ryzyko próchnicy.
                  </p>

                </div>

              </div>

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
                src="/pro2.jpg"
                alt="Profilaktyka stomatologiczna Dental Centrum"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center p-8 md:p-12 lg:p-16">

              <div>

                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                  Zdrowie jamy ustnej
                </p>

                <h2 className="mt-4 font-serif text-3xl font-light md:text-4xl">
                  Regularna profilaktyka ma znaczenie
                </h2>

                <p className="mt-5 text-sm leading-7 text-slate-500">
                  Profesjonalna higienizacja oraz regularne kontrole
                  stomatologiczne są ważnym elementem dbania o zdrowie
                  zębów i dziąseł. Odpowiednio dobrane zabiegi pomagają
                  usuwać osady, ograniczać powstawanie kamienia i wspierać
                  codzienną higienę jamy ustnej.
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-500">
                  Zakres oraz częstotliwość zabiegów profilaktycznych warto
                  ustalać indywidualnie podczas wizyty, uwzględniając stan
                  zdrowia jamy ustnej i potrzeby pacjenta.
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
            Zadbaj o zdrowie swojego uśmiechu
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Umów wizytę w Dental Centrum i dowiedz się, jakie zabiegi
            profilaktyczne będą odpowiednie dla Twoich potrzeb.
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