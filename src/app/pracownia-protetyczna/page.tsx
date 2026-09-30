import Image from 'next/image';
import Link from 'next/link';

export default function PracowniaProtetycznaPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-28 md:px-12 md:py-24">
        <div className="mx-auto max-w-6xl">


        </div>
      </section>


      {/* INFORMACJA + ZDJĘCIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

            {/* TEKST */}
            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Informacja
              </p>

              <h2 className="font-serif text-3xl font-light leading-tight md:text-5xl">
                Doświadczenie, precyzja i indywidualne podejście
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  Nasza pracownia protetyczna powstała na długo wcześniej
                  niż sama klinika. Przez ponad 20 lat projektowania
                  i wykonywania prac protetycznych zebraliśmy ogromną wiedzę
                  i doświadczenie, które pozwalają nam optymalnie dobierać
                  metody oraz materiały do realizacji każdego zamówienia.
                </p>

                <p>
                  Każda praca rozpatrywana jest indywidualnie, ponieważ każdy
                  pacjent posiada odmienne warunki protetyczne oraz
                  indywidualne potrzeby i wymagania.
                </p>

                <p>
                  W projektowaniu prac protetycznych zwracamy uwagę nie tylko
                  na walory estetyczne zastosowanego rozwiązania, ale również
                  na jego funkcjonalność, trwałość oraz komfort użytkowania.
                </p>

                <p>
                  W przypadku wątpliwości chętnie służymy radą przy projekcie
                  prac oraz podczas konsultacji poszczególnych przypadków.
                </p>

              </div>

            </div>


            {/* ZDJĘCIA */}
            <div className="grid gap-5 sm:grid-cols-2">

              <div className="relative h-[300px] overflow-hidden bg-slate-200 md:h-[380px]">
                <Image
                  src="/prot1.jpg"
                  alt="Pracownia protetyczna Dental Centrum"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="relative h-[300px] overflow-hidden bg-slate-200 md:h-[380px]">
                <Image
                  src="/prot2.jpg"
                  alt="Laboratorium protetyczne Dental Centrum"
                  fill
                  className="object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ZAPLECZE */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">

            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Technologia
              </p>

              <h2 className="font-serif text-3xl font-light md:text-4xl">
                Nowoczesne zaplecze laboratoryjne
              </h2>

            </div>

            <div className="space-y-5 text-sm leading-7 text-slate-500">

              <p>
                Dysponujemy świetnie wyposażonym zapleczem sprzętowym
                i laboratoryjnym, które pozwala na precyzyjne wykonywanie
                szerokiego zakresu prac protetycznych.
              </p>

              <p>
                W pracowni wykorzystujemy między innymi nowoczesne urządzenia
                CAD/CAM oraz obrabiarki CNC. Technologie cyfrowe pozwalają
                na dokładne projektowanie oraz precyzyjną realizację
                przygotowanych prac.
              </p>

              <p>
                Połączenie doświadczenia zespołu z nowoczesnym wyposażeniem
                laboratoryjnym pozwala zachować wysoką jakość i powtarzalność
                wykonywanych prac.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* TECHNOLOGIA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-white/40">
              Możliwości pracowni
            </p>

            <h2 className="font-serif text-3xl font-light text-white md:text-4xl">
              Precyzja na każdym etapie
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Odpowiedni dobór materiałów, doświadczenie oraz wykorzystanie
              nowoczesnych technologii pozwalają nam realizować
              indywidualne projekty protetyczne.
            </p>

          </div>


          <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">

            <div className="bg-[#1A252F] p-8">

              <span className="text-2xl font-light text-blue-400">
                01
              </span>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Indywidualny projekt
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Każda praca jest analizowana indywidualnie z uwzględnieniem
                warunków protetycznych oraz oczekiwań pacjenta.
              </p>

            </div>


            <div className="bg-[#1A252F] p-8">

              <span className="text-2xl font-light text-blue-400">
                02
              </span>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                CAD / CAM
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Technologie cyfrowe umożliwiają dokładne projektowanie
                oraz przygotowanie prac protetycznych.
              </p>

            </div>


            <div className="bg-[#1A252F] p-8">

              <span className="text-2xl font-light text-blue-400">
                03
              </span>

              <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Precyzja wykonania
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                Nowoczesne wyposażenie laboratoryjne wspiera dokładność
                i wysoką jakość wykonywanych prac.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* OFERTA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12 max-w-2xl">

            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
              Oferta
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Oferujemy szeroki zakres usług
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Wykonujemy różnorodne prace protetyczne, dopasowane do
              indywidualnych potrzeb pacjenta oraz zaleceń lekarza.
            </p>

          </div>


          <div className="grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-4">

            {/* 01 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                01
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Wkłady koronowo-korzeniowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Indywidualne rozwiązania stosowane w odbudowie zębów
                wymagających odpowiedniego wzmocnienia.
              </p>

            </div>


            {/* 02 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                02
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Korony
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Odbudowy protetyczne pozwalające przywrócić funkcję
                i estetykę uszkodzonych zębów.
              </p>

            </div>


            {/* 03 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                03
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Mosty
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Rozwiązania umożliwiające uzupełnienie brakujących zębów
                z wykorzystaniem odpowiednio zaprojektowanej konstrukcji.
              </p>

            </div>


            {/* 04 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                04
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Inlay'e i onlay'e
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Indywidualnie wykonywane uzupełnienia stosowane przy
                odbudowie odpowiednio zakwalifikowanych zębów.
              </p>

            </div>


            {/* 05 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                05
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Licówki
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Cienkie uzupełnienia protetyczne wykonywane z myślą
                o poprawie wyglądu przednich powierzchni zębów.
              </p>

            </div>


            {/* 06 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                06
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Protezy akrylowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Indywidualnie dopasowywane protezy przeznaczone do
                uzupełniania braków zębowych.
              </p>

            </div>


            {/* 07 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                07
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Protezy szkieletowe
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Konstrukcje protetyczne wykorzystywane przy częściowych
                brakach zębowych.
              </p>

            </div>


            {/* 08 */}
            <div className="bg-white p-8">

              <span className="text-2xl font-light text-blue-700">
                08
              </span>

              <h3 className="mt-6 font-serif text-xl font-light">
                Protezy na implantach
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500">
                Rozwiązania protetyczne wykorzystujące implanty jako
                element podparcia lub stabilizacji.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* ZDJĘCIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-6 md:grid-cols-2">

            <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[500px]">
              <Image
                src="/prot3.jpg"
                alt="Prace protetyczne Dental Centrum"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[360px] overflow-hidden bg-slate-200 md:h-[500px]">
              <Image
                src="/prot4.jpg"
                alt="Laboratorium protetyczne"
                fill
                className="object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* WSPÓŁPRACA */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.3em] text-blue-700">
                Współpraca
              </p>

              <h2 className="font-serif text-3xl font-light md:text-5xl">
                Wsparcie dla lekarzy i gabinetów
              </h2>

              <div className="mt-7 space-y-5 text-sm leading-7 text-slate-500">

                <p>
                  W przypadku wątpliwości chętnie służymy pomocą przy
                  projekcie prac oraz konsultacji przypadków.
                </p>

                <p>
                  Doświadczenie zdobywane przez ponad 20 lat pozwala nam
                  wspierać lekarzy i gabinety przy doborze odpowiednich
                  rozwiązań protetycznych oraz materiałów.
                </p>

                <p>
                  Osoby oraz gabinety zainteresowane współpracą prosimy
                  o kontakt telefoniczny lub mailowy.
                </p>

              </div>

              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href="tel:+484132857114"
                  className="inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
                >
                  Zadzwoń do nas
                </a>

                <a
                  href="mailto:kontakt@dentalcentrum.net"
                  className="inline-flex border border-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A252F] transition hover:bg-[#1A252F] hover:text-white"
                >
                  Napisz wiadomość
                </a>

              </div>

            </div>


            <div className="relative min-h-[450px] overflow-hidden bg-slate-200">

              <Image
                src="/prot2.jpg"
                alt="Pracownia protetyczna Dental Centrum"
                fill
                className="object-cover"
              />

            </div>

          </div>

        </div>
      </section>


      {/* GWARANCJA */}
      <section className="bg-[#1A252F] px-6 py-20 md:px-12 md:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-400">
            Dental Centrum · Pracownia Protetyczna
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light text-white md:text-5xl">
            Solidne wykonanie i szybka realizacja
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/60">
            Łączymy wieloletnie doświadczenie z nowoczesnymi technologiami,
            aby realizować projekty z dbałością o jakość, precyzję
            i komfort użytkowania.
          </p>

          <a
            href="tel:+484132857114"
            className="mt-8 inline-flex bg-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A252F] transition hover:bg-blue-700 hover:text-white"
          >
            Skontaktuj się z pracownią
          </a>

        </div>
      </section>

    </main>
  );
}