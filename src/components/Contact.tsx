export default function Contact() {
  return (
    <section id="booking" className="bg-[#1A252F] py-32 border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-20">

          {/* Left: Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <span className="text-blue-400 text-[10px] tracking-[0.5em] font-bold uppercase">
              Umów wizytę
            </span>

            <h2 className="text-white text-5xl md:text-6xl font-serif leading-tight">
              Zadbaj o swój
              <br />
              uśmiech już
              <br />
              dziś.
            </h2>

            <p className="text-slate-400 text-lg font-light leading-relaxed max-w-md">
              Skontaktuj się z nami i umów wizytę w dogodnym dla Ciebie
              terminie. Nasz zespół odpowie na Twoją wiadomość i pomoże
              dobrać odpowiednią formę leczenia.
            </p>

            <div className="pt-4 text-slate-500 text-sm font-light">
              <p>Odpowiadamy na wiadomości możliwie szybko.</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="lg:w-1/2 bg-white/5 p-8 md:p-10 backdrop-blur-sm border border-white/10">
            <form className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Imię i nazwisko
                  </label>

                  <input
                    type="text"
                    placeholder="Jan Kowalski"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 outline-none transition-colors font-light"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    Numer telefonu
                  </label>

                  <input
                    type="tel"
                    placeholder="123 456 789"
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 outline-none transition-colors font-light"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Wybierz usługę
                </label>

                <select
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:border-blue-500 outline-none transition-colors font-light appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#1A252F]">
                    Wybierz usługę
                  </option>

                  <option className="bg-[#1A252F]">
                    Konsultacja stomatologiczna
                  </option>

                  <option className="bg-[#1A252F]">
                    Stomatologia zachowawcza
                  </option>

                  <option className="bg-[#1A252F]">
                    Protetyka
                  </option>

                  <option className="bg-[#1A252F]">
                    Implantologia
                  </option>

                  <option className="bg-[#1A252F]">
                    Higienizacja
                  </option>

                  <option className="bg-[#1A252F]">
                    Inne
                  </option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                  Wiadomość
                </label>

                <textarea
                  rows={4}
                  placeholder="Napisz, w czym możemy Ci pomóc..."
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-slate-600 focus:border-blue-500 outline-none transition-colors font-light resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-5 text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-blue-500 hover:text-white transition-all duration-500 mt-4"
              >
                Wyślij zapytanie
              </button>

              <p className="text-[10px] text-slate-500 leading-relaxed">
                Wysyłając formularz, wyrażasz zgodę na kontakt w celu
                odpowiedzi na przesłane zapytanie.
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}