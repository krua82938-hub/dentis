import SmileSlider from './SmileSlider';

export default function OfficeTour() {
  return (
    <section className="bg-white py-24 overflow-hidden border-b border-slate-100">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-8">

            <span className="text-blue-500 text-[10px] tracking-[0.5em] font-bold uppercase">
              Efekty naszej pracy
            </span>

            <h2 className="text-slate-900 text-4xl md:text-5xl font-serif leading-tight">
              Twój uśmiech
              <br />
              w dobrych rękach
            </h2>

            <p className="text-slate-500 font-light leading-relaxed text-lg">
              Każde leczenie rozpoczynamy od dokładnej diagnostyki i
              indywidualnego planu. Zależy nam nie tylko na zdrowiu zębów,
              ale również na naturalnym i estetycznym efekcie końcowym.
            </p>

            <div className="pt-4 flex items-center gap-4">
              <div className="h-px w-12 bg-blue-500" />

              <p className="text-[10px] tracking-widest uppercase font-bold text-slate-400">
                Zobacz wybrane efekty
              </p>
            </div>

          </div>

          {/* Right: Smile Slider */}
          <div className="lg:w-1/2 w-full">
            <SmileSlider />
          </div>

        </div>
      </div>
    </section>
  );
}