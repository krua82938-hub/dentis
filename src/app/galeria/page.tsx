import Image from 'next/image';

const galleryItems = [
  {
    src: '/gallery/1.jpg',
    alt: 'Gabinet stomatologiczny',
  },
  {
    src: '/gallery/2.jpg',
    alt: 'Nowoczesny gabinet Dental Centrum',
  },
  {
    src: '/gallery/3.jpg',
    alt: 'Wyposażenie gabinetu',
  },
  {
    src: '/gallery/4.jpg',
    alt: 'Przestrzeń Dental Centrum',
  },
  {
    src: '/gallery/5.jpg',
    alt: 'Gabinet stomatologiczny',
  },
  {
    src: '/gallery/6.jpg',
    alt: 'Dental Centrum Gdańsk',
  },
];

export default function GaleriaPage() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] text-[#1A252F]">

      {/* HERO */}
      <section className="bg-[#1A252F] px-6 py-32 md:px-12 md:py-40">
        <div className="mx-auto max-w-6xl">

          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.35em] text-white/50">
            Dental Centrum · Gdańsk
          </p>

          <h1 className="font-serif text-5xl font-light tracking-tight text-white md:text-7xl">
            Galeria
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
            Zobacz nasze gabinety, wnętrza oraz przestrzeń Dental Centrum.
          </p>

        </div>
      </section>

      {/* GALERIA */}
      <section className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-6xl">

          <div className="mb-12">
            <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-blue-700">
              Dental Centrum
            </p>

            <h2 className="font-serif text-3xl font-light md:text-4xl">
              Nasza przestrzeń
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {galleryItems.map((item, index) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden bg-slate-200 ${
                  index === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
              >
                <div
                  className={`relative w-full ${
                    index === 0
                      ? 'aspect-[4/3] sm:h-full sm:min-h-[500px]'
                      : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes={
                      index === 0
                        ? '(max-width: 640px) 100vw, (max-width: 1024px) 66vw, 66vw'
                        : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
                    }
                  />

                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                  <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-black/70 to-transparent px-6 pb-5 pt-12 transition duration-500 group-hover:translate-y-0">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-white">
                      {item.alt}
                    </p>
                  </div>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-20 md:px-12">
        <div className="mx-auto max-w-6xl text-center">

          <p className="text-[10px] uppercase tracking-[0.3em] text-blue-700">
            Dental Centrum
          </p>

          <h2 className="mt-4 font-serif text-3xl font-light text-[#1A252F] md:text-4xl">
            Zapraszamy do naszego centrum
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500">
            Poznaj nasze gabinety i dowiedz się więcej o oferowanych
            usługach stomatologicznych.
          </p>

          <a
            href="tel:+48883000830"
            className="mt-8 inline-flex bg-[#1A252F] px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] text-white transition hover:bg-blue-700"
          >
            Zadzwoń · +48 883 000 830
          </a>

        </div>
      </section>

    </main>
  );
}