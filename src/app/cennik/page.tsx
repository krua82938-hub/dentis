import Link from 'next/link';

const prices = [
  {
    title: 'Konsultacja stomatologiczna',
    description: 'Kompleksowa ocena stanu zdrowia jamy ustnej.',
    price: 'od 150 zł',
  },
  {
    title: 'Profilaktyka',
    description: 'Profesjonalne zabiegi higienizacyjne i profilaktyczne.',
    price: 'od 250 zł',
  },
  {
    title: 'Stomatologia zachowawcza',
    description: 'Leczenie ubytków oraz odbudowa zębów.',
    price: 'od 250 zł',
  },
  {
    title: 'Endodoncja',
    description: 'Leczenie kanałowe z wykorzystaniem nowoczesnych metod.',
    price: 'od 800 zł',
  },
  {
    title: 'Protetyka',
    description: 'Korony, mosty oraz inne rozwiązania protetyczne.',
    price: 'od 1200 zł',
  },
  {
    title: 'Implantologia',
    description: 'Kompleksowe leczenie implantologiczne.',
    price: 'od 2500 zł',
  },
];

export default function CennikPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
            Dental Centrum · Gdańsk
          </p>

          <h1 className="font-serif text-5xl font-light tracking-tight text-white md:text-7xl">
            Cennik
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Zapoznaj się z orientacyjnymi cenami wybranych usług
            stomatologicznych. Dokładny koszt leczenia ustalany jest
            indywidualnie podczas konsultacji.
          </p>

        </div>
      </section>

      {/* CENNIK */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-blue-700">
              Nasze usługi
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Ceny zabiegów
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2">

            {prices.map((item) => (
              <div
                key={item.title}
                className="bg-white p-7 transition hover:bg-slate-50 md:p-9"
              >
                <div className="flex items-start justify-between gap-6">

                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#1A252F]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>

                  <span className="whitespace-nowrap text-sm font-medium text-blue-700">
                    {item.price}
                  </span>

                </div>
              </div>
            ))}

          </div>

          {/* INFORMACJA */}
          <div className="mt-10 border-l-2 border-blue-700 bg-white p-6">
            <p className="text-sm leading-6 text-slate-600">
              Podane ceny mają charakter orientacyjny. Ostateczna cena
              zależy od zakresu leczenia, zastosowanych materiałów oraz
              indywidualnych potrzeb pacjenta.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-700">
            Masz pytania?
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light text-[#1A252F] md:text-4xl">
            Umów konsultację
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Podczas wizyty lekarz oceni stan uzębienia i przedstawi
            proponowany plan leczenia wraz z dokładnym kosztorysem.
          </p>

          <Link
            href="/kontakt"
            className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
          >
            Umów wizytę
          </Link>

        </div>
      </section>

    </main>
  );
}