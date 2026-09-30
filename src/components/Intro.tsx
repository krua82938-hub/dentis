import Image from 'next/image';

export default function Intro() {
  return (
    <section className="bg-[#999999] py-32 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left: Text Content */}
          <div className="lg:w-[54%] text-left space-y-6 z-20">
            <span className="text-blue-800 text-[10px] tracking-[0.5em] font-bold uppercase">
              O nas
            </span>

            <h2 className="text-white text-4xl md:text-6xl font-serif leading-tight">
              Profesjonalizm <br /> i pełne zaangażowanie
            </h2>

            <p className="text-white text-lg font-light leading-relaxed max-w-xl">
              Przyświeca nam jedna podstawowa zasada – jeśli się czegoś
              podejmujemy, robimy to profesjonalnie i z pełnym zaangażowaniem.
            </p>

            <p className="text-white/90 text-base font-light leading-relaxed max-w-xl">
              Klinika powstała w 2011 roku jako efekt wieloletniej pracy
              w branży stomatologicznej. Nasza historia rozpoczęła się jednak
              znacznie wcześniej – od prowadzenia pracowni protetycznej.
            </p>

            <p className="text-white/90 text-base font-light leading-relaxed max-w-xl">
              Dziś z dumą możemy powiedzieć, że jesteśmy jedną z największych
              i najlepiej wyposażonych klinik dentystycznych w Polsce.
              Łączymy wieloletnie doświadczenie z nowoczesną technologią
              i indywidualnym podejściem do każdego pacjenta.
            </p>

            <div className="pt-4">

            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:w-[46%] relative flex justify-center lg:-ml-10">
            <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />

            <div className="relative z-10 w-full max-w-xl aspect-square">
              <Image
                src="/tooth-render.jpg"
                alt="Nowoczesna klinika stomatologiczna"
                fill
                className="object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}