export default function Footer() {
  return (
    <footer className="bg-[#ffffff] text-black pt-20 pb-8 border-t border-slate-100">
      <div className="container mx-auto px-6 lg:px-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-serif tracking-tight">
                DENTAL CENTRUM
              </h3>

              <div className="w-10 h-[2px] bg-blue-700 mt-4" />
            </div>

            <p className="text-slate-600 text-sm leading-relaxed font-light max-w-xs">
              Profesjonalna opieka stomatologiczna,
              nowoczesne rozwiązania i kompleksowe
              podejście do zdrowia Twojego uśmiechu.
            </p>

            <a
              href="https://www.facebook.com/profile.php?id=100063661112248"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[10px] tracking-[0.25em] uppercase font-bold text-slate-800 hover:text-blue-700 transition"
            >
              <span className="flex items-center justify-center w-8 h-8 border border-slate-200 rounded-full text-sm">
                f
              </span>
              Facebook
            </a>
          </div>

          {/* Address */}
          <div className="space-y-6">
            <h4 className="text-[11px] tracking-[0.35em] uppercase font-bold text-blue-700">
              Znajdź nas
            </h4>

            <div className="text-slate-600 text-sm font-light leading-relaxed">
              <p className="text-black font-medium mb-2">
                Dental Centrum s.c.
              </p>

              <p>
                ul. Inżynierska 19
                <br />
                80-298 Gdańsk
                <br />
                Polska
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dental+Centrum+Inżynierska+19+Gdańsk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase font-bold text-black hover:text-blue-700 transition"
            >
              Wyznacz trasę
              <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-[11px] tracking-[0.35em] uppercase font-bold text-blue-700">
              Kontakt
            </h4>

            <div className="space-y-4 text-sm font-light">

              <a
                href="mailto:biuro@dentalcentrum.net"
                className="block text-slate-600 hover:text-black transition"
              >
                biuro@dentalcentrum.net
              </a>

              <div className="space-y-2">
                <a
                  href="tel:+48883000830"
                  className="block text-black hover:text-blue-700 transition"
                >
                  +48 883 000 830
                </a>
                <a
                  href="tel:+48583019780"
                  className="block text-black hover:text-blue-700 transition"
                >
                  +48 (58) 301 97 80
                </a>
              </div>

            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <h4 className="text-[11px] tracking-[0.35em] uppercase font-bold text-blue-700 mb-6">
                Dental Centrum
              </h4>

              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Skontaktuj się z nami i dowiedz się więcej
                o możliwościach leczenia.
              </p>
            </div>

            <div className="flex flex-col gap-3">

<a
  href="tel:+48883000830"
  className="group flex items-center justify-between bg-black text-white px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-blue-700 transition-all"
>
  <span>Zadzwoń do nas</span>
  <span className="group-hover:translate-x-1 transition-transform">
    →
  </span>
</a>

              <a
                href="https://www.facebook.com/profile.php?id=100063661112248"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-slate-200 text-black px-6 py-4 text-[10px] tracking-[0.2em] uppercase font-bold hover:border-blue-700 hover:text-blue-700 transition-all"
              >
                <span>Odwiedź Facebook</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </a>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-7 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[9px] tracking-[0.25em] text-slate-500 uppercase text-center md:text-left">
            © 2026 Dental Centrum s.c.
          </p>

          <div className="flex items-center gap-6 text-[9px] tracking-[0.25em] text-slate-500 uppercase">
            <span>Gdańsk</span>
            <span className="w-1 h-1 rounded-full bg-blue-700" />
            <span>Inżynierska 19</span>
          </div>

        </div>

      </div>
    </footer>
  );
}