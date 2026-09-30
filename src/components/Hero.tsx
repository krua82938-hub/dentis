'use client';

import Image from 'next/image';
import { useState } from 'react';
import { X, Phone } from 'lucide-react';

export default function Hero() {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <>
      <section className="relative h-screen min-h-[700px] w-full flex items-center justify-center overflow-hidden">

        {/* Background */}
        <Image
          src="/1.png"
          alt="Nowoczesny gabinet stomatologiczny"
          fill
          priority
          quality={90}
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Subtle Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-black/50 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 w-full max-w-4xl px-6 text-center">

          {/* Small Label */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <span className="w-10 h-px bg-white/60" />

            <p className="text-white/85 text-[10px] md:text-xs tracking-[0.4em] uppercase font-light">
              Nowoczesna stomatologia
            </p>

            <span className="w-10 h-px bg-white/60" />
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif leading-[0.95] tracking-tight mb-8">
            Twój uśmiech.
            <br />
            <span className="italic font-normal">
              Nasza troska.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto text-white/75 text-sm md:text-base leading-relaxed font-light max-w-xl mb-10">
            Kompleksowa opieka stomatologiczna,
            nowoczesna diagnostyka oraz indywidualne
            podejście do każdego pacjenta.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">

            {/* Primary CTA */}
            <button
              type="button"
              onClick={() => setShowPhone(true)}
              className="group inline-flex items-center justify-center gap-8 px-8 py-4 bg-white text-black text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-blue-700 hover:text-white transition-all duration-300"
            >
              <span>Umów wizytę</span>

              <span className="text-base group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>

            {/* Secondary CTA */}
            <a
              href="#uslugi"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 bg-white/5 backdrop-blur-sm text-white text-[10px] tracking-[0.25em] uppercase font-semibold hover:bg-white hover:text-black transition-all duration-300"
            >
              Poznaj nasze usługi
            </a>

          </div>

        </div>

        {/* Bottom Information */}
        <div className="absolute bottom-8 left-6 lg:left-10 right-6 lg:right-10 z-20 flex flex-col md:flex-row justify-between items-center gap-4">

          <div className="flex items-center gap-4 text-white/60">
            <span className="w-8 h-px bg-white/30" />

            <span className="text-[9px] tracking-[0.3em] uppercase">
              Inżynierska 19 · 80-298 Gdańsk
            </span>
          </div>

        </div>

      </section>

      {/* Phone Popup */}
      {showPhone && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowPhone(false)}
        >
          <div
            className="relative w-full max-w-md bg-white p-8 md:p-10 text-center shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Close */}
            <button
              type="button"
              onClick={() => setShowPhone(false)}
              aria-label="Zamknij"
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-black transition-colors"
            >
              <X size={20} />
            </button>

            {/* Icon */}
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center bg-blue-700 text-white">
              <Phone size={24} />
            </div>

            <p className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3">
              Umów wizytę
            </p>

            <h2 className="text-2xl md:text-3xl font-serif text-gray-900 mb-3">
              Skontaktuj się z nami
            </h2>

            <p className="text-sm text-gray-500 mb-7">
              Zadzwoń do naszego gabinetu i umów dogodny termin wizyty.
            </p>

            <a
              href="tel:+48572512543"
              className="inline-flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 text-white px-6 py-4 transition-colors"
            >
              <Phone size={18} />

              <span className="text-lg font-medium tracking-wide">
                +48 572 512 543
              </span>
            </a>

            <button
              type="button"
              onClick={() => setShowPhone(false)}
              className="mt-4 text-[10px] tracking-[0.25em] uppercase text-gray-400 hover:text-black transition-colors"
            >
              Zamknij
            </button>

          </div>
        </div>
      )}
    </>
  );
}