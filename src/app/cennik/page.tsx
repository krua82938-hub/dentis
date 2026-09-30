import Link from 'next/link';

const priceSections = [
  {
    title: 'Konsultacje i profilaktyka',
    items: [
      {
        title: 'Przegląd i wizyta kontrolna',
        price: '50 zł',
      },
      {
        title: 'Konsultacja wstępna z pisemnym planem leczenia',
        price: '90 zł',
      },
      {
        title: 'Przegląd i kontrola dla stałych klientów',
        price: 'Bezpłatnie',
      },
      {
        title: 'Fluoryzacja',
        price: '100 zł',
      },
      {
        title: 'Scaling',
        price: '170 zł',
      },
      {
        title: 'Piaskowanie',
        price: '200 zł',
      },
      {
        title: 'Scaling + piaskowanie',
        price: '350 zł',
      },
      {
        title: 'Wybielanie nakładkowe – 1 łuk',
        price: '800 zł',
      },
      {
        title: 'Wybielanie nakładkowe – 2 łuki',
        price: '1200 zł',
      },
    ],
  },
  {
    title: 'Diagnostyka i RTG',
    items: [
      {
        title: 'Zdjęcie RTG punktowe',
        price: '40 zł',
      },
      {
        title: 'Zdjęcie RTG pantograficzne',
        price: '100 zł',
      },
      {
        title: 'Zdjęcie RTG cefalometryczne',
        price: '100 zł',
      },
      {
        title: 'Zdjęcie RTG zatok szczękowych',
        price: '100 zł',
      },
      {
        title: 'Zdjęcie RTG stawów skroniowo-żuchwowych',
        price: '100 zł',
      },
      {
        title: 'Zdjęcia tomograficzne 3D',
        description: 'W zależności od pola obrazowania',
        price: '300–450 zł',
      },
    ],
  },
  {
    title: 'Stomatologia zachowawcza',
    items: [
      {
        title: 'Znieczulenie miejscowe',
        price: 'Bezpłatnie',
      },
      {
        title: 'Wypełnienie światłoutwardzalne małe / estetyczne – 1 pow.',
        price: '180 zł',
      },
      {
        title: 'Wypełnienie światłoutwardzalne średnie / estetyczne – 2–3 pow.',
        price: '250 zł',
      },
      {
        title: 'Wypełnienie światłoutwardzalne duże / estetyczne – 4 pow.',
        price: '380 zł',
      },
    ],
  },
  {
    title: 'Endodoncja',
    items: [
      {
        title: 'Leczenie – ząb 1-kanałowy',
        price: '400 zł',
      },
      {
        title: 'Leczenie – ząb 2-kanałowy',
        price: '600 zł',
      },
      {
        title: 'Leczenie – ząb 3-kanałowy',
        price: '900 zł',
      },
      {
        title: 'Leczenie – ząb 4-kanałowy',
        price: '1100 zł',
      },
      {
        title: 'Leczenie pod mikroskopem',
        price: '150–300 zł',
      },
      {
        title: 'Usunięcie złamanego narzędzia',
        price: '500 zł',
      },
      {
        title: 'Usunięcie złamanego wkładu koronowo-korzeniowego',
        price: '350–550 zł',
      },
    ],
  },
  {
    title: 'Protetyka – konsultacje i uzupełnienia',
    items: [
      {
        title: 'Konsultacja protetyczna z planem leczenia',
        price: '80 zł',
      },
      {
        title: 'Naprawa protezy',
        price: 'od 100 zł',
      },
      {
        title: 'Wkład koronowy – ceramika',
        description: 'Cena odbudowy dodatkowo',
        price: '500 zł + cena odbudowy',
      },
      {
        title: 'Wkład koronowy – chrom/kobalt',
        price: '500 zł',
      },
      {
        title: 'Wkład koronowy – złoto',
        description: 'Dodatkowo według gramatury złota',
        price: '500 zł + gramatura złota',
      },
      {
        title: 'Wkład koronowy – srebro/pallad',
        description: 'Dodatkowo według gramatury srebra/palladu',
        price: '500 zł + gramatura',
      },
      {
        title: 'Endokorona',
        price: '800 zł',
      },
      {
        title: 'Brzeg pełnoceramiczny w koronie',
        price: '50 zł',
      },
      {
        title: 'Korona tymczasowa',
        price: 'Wycena w klinice',
      },
    ],
  },
  {
    title: 'Korony',
    items: [
      {
        title: 'Korona porcelanowa na metalu',
        price: '950 zł',
      },
      {
        title: 'Korona porcelanowa na tytanie',
        price: '1000 zł',
      },
      {
        title: 'Korona porcelanowa na złocie',
        price: '1000 zł + gramatura złota',
      },
      {
        title: 'Korona cyrkonowa',
        price: '1500 zł',
      },
    ],
  },
  {
    title: 'Protezy',
    items: [
      {
        title: 'Proteza akrylowa',
        price: '1000 zł',
      },
      {
        title: 'Proteza szkieletowa',
        price: '2000 zł',
      },
      {
        title: 'Proteza na zatrzaskach, zasuwach, teleskopach',
        price: 'Wycena w klinice',
      },
      {
        title: 'Siatka wzmacniająca standardowa – 1 szt.',
        price: '150 zł',
      },
      {
        title: 'Siatka wzmacniająca odlewana – 1 szt.',
        price: '250 zł',
      },
      {
        title: 'Zęby kompozytowe – 1 łuk',
        price: '500 zł',
      },
      {
        title: 'Akryl wtryskowy – 1 szt.',
        price: '300 zł',
      },
    ],
  },
  {
    title: 'Implantologia',
    items: [
      {
        title: 'Zabieg chirurgiczny',
        price: '2500–4000 zł',
      },
      {
        title: 'Odbudowa protetyczna',
        price: '2000–3000 zł',
      },
    ],
  },
];

export default function CennikPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">


      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-28 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">


        </div>
      </section>

      {/* CENNIK */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          {/* INTRO */}
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Oferta i ceny
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Ceny zabiegów stomatologicznych
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Poniżej przedstawiamy aktualny cennik usług Dental Centrum.
              W przypadku zabiegów zależnych od zakresu leczenia ostateczny
              koszt jest ustalany indywidualnie w klinice.
            </p>
          </div>

          {/* SEKCJE CENNIKA */}
          <div className="space-y-14">

            {priceSections.map((section) => (
              <section key={section.title}>

                {/* Nagłówek kategorii */}
                <div className="mb-5 flex items-end justify-between gap-6 border-b border-slate-200 pb-4">
                  <div>
                    <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-blue-700">
                      Dental Centrum
                    </p>

                    <h3 className="font-serif text-2xl font-light md:text-3xl">
                      {section.title}
                    </h3>
                  </div>

                  <span className="hidden text-[10px] uppercase tracking-[0.2em] text-slate-400 md:block">
                    Cennik
                  </span>
                </div>

                {/* Lista */}
                <div className="overflow-hidden border border-slate-200 bg-white">

                  {section.items.map((item, index) => (
                    <div
                      key={item.title}
                      className={`group flex flex-col gap-3 px-5 py-5 transition-colors hover:bg-slate-50 sm:flex-row sm:items-center sm:justify-between sm:px-7 ${
                        index !== section.items.length - 1
                          ? 'border-b border-slate-100'
                          : ''
                      }`}
                    >

                      <div className="min-w-0 pr-4">
                        <h4 className="text-sm font-medium leading-6 text-[#1A252F]">
                          {item.title}
                        </h4>

                        {item.description && (
                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {item.description}
                          </p>
                        )}
                      </div>

                      <div className="shrink-0 sm:text-right">
                        <span
                          className={`text-sm font-semibold ${
                            item.price === 'Bezpłatnie'
                              ? 'text-blue-700'
                              : 'text-[#1A252F]'
                          }`}
                        >
                          {item.price}
                        </span>
                      </div>

                    </div>
                  ))}

                </div>

              </section>
            ))}

          </div>

          {/* INFORMACJA */}
          <div className="mt-14 border-l-2 border-blue-700 bg-white p-6 md:p-8">
            <p className="text-sm font-medium text-[#1A252F]">
              Ważna informacja
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              Podane ceny mają charakter informacyjny. Ostateczny koszt
              leczenia może zależeć od zakresu zabiegu, zastosowanych
              materiałów oraz indywidualnych potrzeb pacjenta. W przypadku
              usług oznaczonych jako „wycena w klinice” cena ustalana jest
              podczas konsultacji.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">

          <div className="border border-slate-200 bg-[#F8F9FA] px-7 py-12 text-center md:px-12 md:py-16">

            <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Dental Centrum · Gdańsk
            </p>

            <h2 className="mt-4 font-serif text-3xl font-light text-[#1A252F] md:text-4xl">
              Potrzebujesz konsultacji?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
              Podczas wizyty lekarz oceni stan uzębienia, omówi dostępne
              możliwości leczenia i przedstawi indywidualny plan postępowania
              wraz z kosztami.
            </p>

            <Link
              href="/kontakt"
              className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
            >
              Umów wizytę
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}