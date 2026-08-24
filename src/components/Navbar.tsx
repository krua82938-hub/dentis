"use client";

import { Phone, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);
  const [mobileOfferOpen, setMobileOfferOpen] = useState(false);

  const offerLinks = [
    { name: 'MediRaty', href: 'https://dentalcentrum.net/about.html#' },
    { name: 'Profilaktyka', href: 'https://dentalcentrum.net/about.html#' },
    { name: 'Radiologia', href: 'https://dentalcentrum.net/about.html#' },
    { name: 'Tomografia', href: 'https://dentalcentrum.net/about.html#' },
    { name: 'Endodoncja', href: 'https://dentalcentrum.net/about.html#' },
    { name: 'Protetyka', href: 'https://dentalcentrum.net/about.html#' },
    { name: 'Implantologia', href: 'https://dentalcentrum.net/about.html#' },
  ];

  const mainLinks = [
    {
      name: 'O Firmie',
      href: 'https://dentalcentrum.net/about.html',
    },
    {
      name: 'Cennik',
      href: 'https://dentalcentrum.net/prices.html',
    },
    {
      name: 'Galeria',
      href: 'https://dentalcentrum.net/gallery.html',
    },
    {
      name: 'Kontakt',
      href: 'https://dentalcentrum.net/contact.html',
    },
    {
      name: 'Pracownia Protetyczna',
      href: 'https://dentalcentrum.net/work.html',
    },
  ];

  return (
    <nav className="absolute top-0 w-full z-50">

      {/* Top Utility Bar */}
      <div className="flex justify-end px-6 md:px-12 py-3 text-[10px] tracking-[0.25em] uppercase border-b border-white/10 backdrop-blur-md bg-black/5 font-medium text-white/90">
        <a
          href="tel:+48883000830"
          className="flex items-center gap-2 hover:text-white transition-colors"
        >
          <Phone size={12} strokeWidth={1.5} />
          +48 883 000 830
        </a>
      </div>

      {/* Main Navigation */}
      <div className="flex items-center justify-between px-6 md:px-12 py-6">

        {/* Logo */}
        <Link href="/" className="flex flex-col group z-50">
          <h1 className="text-2xl md:text-3xl font-serif tracking-tight leading-none text-white group-hover:opacity-80 transition-opacity">
            DENTAL CENTRUM
          </h1>

          <span className="text-[8px] md:text-[9px] tracking-[0.35em] uppercase text-white/60 font-bold mt-2">
            Stomatologia · Gdańsk
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-7">

          {/* O Firmie */}
          <a
            href="https://dentalcentrum.net/about.html"
            className="relative text-white/85 hover:text-white text-[10px] tracking-[0.18em] uppercase font-medium transition-colors group"
          >
            O Firmie
            <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
          </a>

          {/* Oferta Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOfferOpen(true)}
            onMouseLeave={() => setOfferOpen(false)}
          >
            <a
              href="https://dentalcentrum.net/prop.html#"
              className="flex items-center gap-1.5 text-white/85 hover:text-white text-[10px] tracking-[0.18em] uppercase font-medium transition-colors py-3"
            >
              Oferta
              <ChevronDown
                size={13}
                strokeWidth={1.5}
                className={`transition-transform duration-300 ${
                  offerOpen ? 'rotate-180' : ''
                }`}
              />
            </a>

            {/* Dropdown */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 ${
                offerOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible -translate-y-2'
              }`}
            >
              <div className="w-56 bg-white shadow-2xl border border-slate-100 py-2">

                {offerLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-5 py-3 text-[9px] tracking-[0.15em] uppercase text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
                  >
                    {item.name}
                  </a>
                ))}

              </div>
            </div>
          </div>

          {/* Other Links */}
          {mainLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-white/85 hover:text-white text-[10px] tracking-[0.18em] uppercase font-medium transition-colors group whitespace-nowrap"
            >
              {link.name}

              <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}

          {/* Appointment */}
          <a
            href="https://dentalcentrum.net/contact.html"
            className="ml-1 flex items-center gap-2 px-5 py-3 bg-white text-black text-[9px] tracking-[0.18em] uppercase font-bold hover:bg-blue-700 hover:text-white transition-all whitespace-nowrap"
          >
            <Calendar size={14} strokeWidth={1.5} />
            Umów wizytę
          </a>

        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-5 z-50">

          <a
            href="tel:+48883000830"
            className="text-white/90"
          >
            <Phone size={20} strokeWidth={1.3} />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X size={26} strokeWidth={1.2} />
            ) : (
              <Menu size={26} strokeWidth={1.2} />
            )}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#1A252F] text-white transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-3'
        }`}
      >

        <div className="px-6 py-6">

          {/* O Firmie */}
          <a
            href="https://dentalcentrum.net/about.html"
            onClick={() => setMobileOpen(false)}
            className="block py-4 border-b border-white/10 text-[10px] tracking-[0.25em] uppercase text-white/80 hover:text-white"
          >
            O Firmie
          </a>

          {/* Oferta */}
          <div className="border-b border-white/10">

            <button
              onClick={() => setMobileOfferOpen(!mobileOfferOpen)}
              className="w-full flex items-center justify-between py-4 text-[10px] tracking-[0.25em] uppercase text-white/80 hover:text-white"
            >
              <span>Oferta</span>

              <ChevronDown
                size={15}
                strokeWidth={1.5}
                className={`transition-transform duration-300 ${
                  mobileOfferOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Mobile Offer Items */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                mobileOfferOpen
                  ? 'max-h-[500px] opacity-100 pb-3'
                  : 'max-h-0 opacity-0'
              }`}
            >
              {offerLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 pl-4 text-[9px] tracking-[0.18em] uppercase text-white/50 hover:text-white transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

          </div>

          {/* Other Mobile Links */}
          {mainLinks.slice(1).map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-4 border-b border-white/10 text-[10px] tracking-[0.25em] uppercase text-white/80 hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Appointment */}
          <a
            href="https://dentalcentrum.net/contact.html"
            onClick={() => setMobileOpen(false)}
            className="mt-6 flex items-center justify-center gap-3 bg-white text-black py-4 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-blue-700 hover:text-white transition"
          >
            <Calendar size={15} strokeWidth={1.5} />
            Umów wizytę
          </a>

        </div>

      </div>

    </nav>
  );
}