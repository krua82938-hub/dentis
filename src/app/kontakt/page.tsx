"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Check,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="min-h-screen bg-[#F7F8F9] text-[#17232D]">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#17232D] px-6 pb-24 pt-36 md:px-12 md:pb-32 md:pt-44">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl font-light leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Porozmawiajmy
              <br />
              <span className="text-white/40">
                o Twoim uśmiechu.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Umów konsultację, zadaj pytanie lub zostaw nam wiadomość.
              Skontaktujemy się z Tobą tak szybko, jak to możliwe.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          {/* LEFT SIDE */}
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-700">
              Kontakt
            </p>

            <h2 className="font-serif text-4xl font-light leading-tight md:text-5xl">
              Jesteśmy
              <br />
              tutaj dla Ciebie.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-500">
              Masz pytania dotyczące leczenia? Chcesz poznać możliwości
              współczesnej stomatologii? Napisz lub zadzwoń.
            </p>

{/* CONTACT DETAILS */}
<div className="mt-12 space-y-7">

  {/* Telefony */}
<div className="flex items-center gap-5">
  <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-slate-200 bg-white">
    <Phone size={17} strokeWidth={1.3} />
  </div>

  <div>
    <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-slate-400">
      Telefony
    </p>

    <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
      <a
        href="tel:+48883000830"
        className="text-sm font-medium transition hover:text-blue-700"
      >
        +48 883 000 830
      </a>

      <span className="text-slate-300">|</span>

      <a
        href="tel:+48583019780"
        className="text-sm font-medium transition hover:text-blue-700"
      >
        +48 (58) 301 97 80
      </a>
    </div>
  </div>
</div>

  {/* E-mail */}
  <a
    href="mailto:kontakt@dentalcentrum.net"
    className="group flex items-center gap-5"
  >
    <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white transition group-hover:border-[#17232D]">
      <Mail size={17} strokeWidth={1.3} />
    </div>

    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-slate-400">
        E-mail
      </p>

      <p className="text-sm font-medium">
        kontakt@dentalcentrum.net
      </p>
    </div>

    <ArrowUpRight
      size={16}
      className="ml-auto text-slate-300 transition group-hover:text-[#17232D]"
    />
  </a>

  {/* Adres */}
  <a
    href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x46fd759380246623:0x8d62a0073a0feecc?sa=X&ved=1t:8290&ictx=111"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center gap-5"
  >
    <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white transition group-hover:border-[#17232D]">
      <MapPin size={17} strokeWidth={1.3} />
    </div>

    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-slate-400">
        Adres
      </p>

      <p className="text-sm font-medium">
        Inżynierska 19
        <br />
        80-298 Gdańsk
      </p>
    </div>

    <ArrowUpRight
      size={16}
      className="ml-auto text-slate-300 transition group-hover:text-[#17232D]"
    />
  </a>

  {/* Godziny */}
  <div className="flex items-center gap-5">
    <div className="flex h-12 w-12 items-center justify-center border border-slate-200 bg-white">
      <Clock size={17} strokeWidth={1.3} />
    </div>

    <div>
      <p className="mb-1 text-[9px] uppercase tracking-[0.2em] text-slate-400">
        Godziny otwarcia
      </p>

      <p className="text-sm font-medium">
        Pon. – Pt. · 08:00 – 18:00
      </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white p-7 shadow-[0_20px_70px_rgba(20,30,40,0.06)] md:p-10 lg:p-12">
            {!sent ? (
              <>
                <div className="mb-10">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-700">
                    Napisz do nas
                  </p>

                  <h2 className="mt-3 font-serif text-3xl font-light md:text-4xl">
                    Umów kontakt
                  </h2>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-7"
                >
                  <div className="grid gap-7 md:grid-cols-2">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder=" "
                        className="peer w-full border-0 border-b border-slate-200 bg-transparent px-0 pb-3 pt-4 text-sm outline-none transition focus:border-[#17232D]"
                      />

                      <label className="pointer-events-none absolute left-0 top-4 text-sm text-slate-400 transition-all peer-focus:-top-1 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-blue-700 peer-valid:-top-1 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.15em]">
                        Imię i nazwisko
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder=" "
                        className="peer w-full border-0 border-b border-slate-200 bg-transparent px-0 pb-3 pt-4 text-sm outline-none transition focus:border-[#17232D]"
                      />

                      <label className="pointer-events-none absolute left-0 top-4 text-sm text-slate-400 transition-all peer-focus:-top-1 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-blue-700 peer-valid:-top-1 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.15em]">
                        Telefon
                      </label>
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder=" "
                      className="peer w-full border-0 border-b border-slate-200 bg-transparent px-0 pb-3 pt-4 text-sm outline-none transition focus:border-[#17232D]"
                    />

                    <label className="pointer-events-none absolute left-0 top-4 text-sm text-slate-400 transition-all peer-focus:-top-1 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-blue-700 peer-valid:-top-1 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.15em]">
                      Adres e-mail
                    </label>
                  </div>

                  <div>
                    <label className="mb-3 block text-[9px] uppercase tracking-[0.2em] text-slate-400">
                      Temat
                    </label>

                    <select
                      name="subject"
                      className="w-full border-b border-slate-200 bg-transparent pb-3 text-sm text-slate-700 outline-none focus:border-[#17232D]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Wybierz temat
                      </option>

                      <option value="konsultacja">
                        Konsultacja
                      </option>

                      <option value="leczenie">
                        Leczenie
                      </option>

                      <option value="implantologia">
                        Implantologia
                      </option>

                      <option value="protetyka">
                        Protetyka
                      </option>

                      <option value="inne">
                        Inne
                      </option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder=" "
                      className="peer w-full resize-none border-0 border-b border-slate-200 bg-transparent px-0 pb-3 pt-4 text-sm outline-none transition focus:border-[#17232D]"
                    />

                    <label className="pointer-events-none absolute left-0 top-4 text-sm text-slate-400 transition-all peer-focus:-top-1 peer-focus:text-[9px] peer-focus:uppercase peer-focus:tracking-[0.15em] peer-focus:text-blue-700 peer-valid:-top-1 peer-valid:text-[9px] peer-valid:uppercase peer-valid:tracking-[0.15em]">
                      Wiadomość
                    </label>
                  </div>

                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 accent-[#17232D]"
                    />

                    <span className="text-[11px] leading-5 text-slate-400">
                      Wyrażam zgodę na kontakt w celu odpowiedzi na moje
                      zapytanie.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 bg-[#17232D] px-8 py-5 text-[10px] font-bold uppercase tracking-[0.25em] text-white transition hover:bg-blue-700"
                  >
                    Wyślij wiadomość

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </form>
              </>
            ) : (
              <div className="flex min-h-[550px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#17232D] text-white">
                  <Check size={25} strokeWidth={1.5} />
                </div>

                <h2 className="mt-7 font-serif text-3xl font-light">
                  Dziękujemy.
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-slate-500">
                  Twoja wiadomość została przygotowana. Skontaktujemy się
                  z Tobą tak szybko, jak to możliwe.
                </p>

                <button
                  onClick={() => setSent(false)}
                  className="mt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-700 hover:text-[#17232D]"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

   {/* MAP / LOCATION */}
<section className="px-6 pb-20 md:px-12 md:pb-28">
  <div className="mx-auto max-w-7xl">
    <div className="overflow-hidden bg-white shadow-[0_20px_70px_rgba(20,30,40,0.06)]">
      <iframe
        src="https://www.google.com/maps?q=Klinika%20Stomatologiczna%20Dental%20Centrum%2C%20In%C5%BCynierska%2019%2C%2080-298%20Gda%C5%84sk&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        title="Dental Centrum - mapa dojazdu"
      />
    </div>
  </div>
</section>
    </main>
  );
}