// src/components/Services.tsx

import Link from 'next/link';
import {
  CreditCard,
  HeartPulse,
  Scan,
  Microscope,
  Crown,
  SmilePlus,
} from 'lucide-react';

const services = [
  {
    title: 'Tomografia',
    href: '/tomografia',
    icon: <CreditCard size={24} />,
    desc: 'Nowoczesna diagnostyka tomograficzna zapewniająca szczegółowy obraz struktur jamy ustnej.',
  },
  {
    title: 'Profilaktyka',
    href: '/profilaktyka',
    icon: <HeartPulse size={24} />,
    desc: 'Profilaktyka i higienizacja dla zdrowych zębów oraz pięknego uśmiechu.',
  },
  {
    title: 'Radiologia',
    href: '/radiologia',
    icon: <Scan size={24} />,
    desc: 'Nowoczesna diagnostyka obrazowa wspierająca precyzyjne planowanie leczenia.',
  },
  {
    title: 'Endodoncja',
    href: '/endodoncja',
    icon: <Microscope size={24} />,
    desc: 'Precyzyjne leczenie kanałowe, również z wykorzystaniem mikroskopu.',
  },
  {
    title: 'Protetyka',
    href: '/protetyka',
    icon: <Crown size={24} />,
    desc: 'Estetyczna i funkcjonalna odbudowa uzębienia dopasowana do potrzeb pacjenta.',
  },
  {
    title: 'Implantologia',
    href: '/implantologia',
    icon: <SmilePlus size={24} />,
    desc: 'Nowoczesne rozwiązania implantologiczne przywracające naturalny wygląd i funkcję zębów.',
  },
];

export default function Services() {
  return (
    <section
      id="uslugi"
      className="bg-[#F8FAFC] py-14 md:py-18 border-t border-slate-200"
    >
      <div className="container mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 text-[10px] tracking-[0.5em] font-bold uppercase">
              Nasze usługi
            </span>

            <h2 className="text-[#1A252F] text-4xl md:text-5xl lg:text-6xl font-serif mt-3 leading-tight">
              Kompleksowa opieka
              <br />
              stomatologiczna
            </h2>

            <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed mt-5 max-w-xl">
              Oferujemy kompleksowe leczenie stomatologiczne — od profilaktyki
              i precyzyjnej diagnostyki, przez leczenie endodontyczne i
              protetyczne, aż po nowoczesną implantologię.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="
                bg-white
                p-7 md:p-8 lg:p-9
                hover:bg-slate-50
                transition-all
                duration-300
                group
                block
                cursor-pointer
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-inset
              "
            >
              {/* Icon */}
              <div
                className="
                  w-11
                  h-11
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-50
                  text-blue-500
                  mb-6
                  group-hover:bg-blue-500
                  group-hover:text-white
                  group-hover:scale-110
                  transition-all
                  duration-300
                "
              >
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-[#1A252F] text-xl md:text-2xl font-serif mb-3 group-hover:text-blue-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-sm font-light leading-relaxed max-w-sm">
                {service.desc}
              </p>

              {/* Subtle accent */}
              <div
                className="
                  mt-6
                  w-8
                  h-px
                  bg-blue-200
                  group-hover:w-14
                  group-hover:bg-blue-500
                  transition-all
                  duration-500
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}