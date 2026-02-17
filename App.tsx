
import React, { useState, useEffect } from 'react';
import Barometer from './components/Barometer';
import ResultView from './components/ResultView';
import { TRUST_PARTNERS, FAQS, REGIONS, TESTIMONIALS } from './constants';

const TEAM_QUOTES = [
  {
    quote: '«Wir bieten fachlich perfekte Arbeit dank erfahrener Fachleute.»',
    author: 'Nathalie Aufranc',
    role: 'Geschäftsleitung tuttifix',
    image: 'https://www.tuttifix.ch/wp-content/storage5k/picture/2018/10/aufranc-wimmer_dsc3737-851x569.webp?oext=jpg&media_id=1715&source_id=59'
  },
  {
    quote: '«Wir sorgen dafür, dass Sie sich wieder wohlfühlen und der Mief und die Wanzen sich verziehen.»',
    author: 'Thomas Wimmer',
    role: '',
    image: 'https://www.tuttifix.ch/wp-content/storage5k/picture/2018/10/wimmer_dsc3918-zuschnitt-851x568.webp?oext=jpg&media_id=1718&source_id=83'
  },
  {
    quote: '«Unsere Kunden erhalten kompetenten Service und einwandfreie Arbeit.»',
    author: 'Alain Aufranc',
    role: 'Geschäftsführer tuttifix',
    image: 'https://www.tuttifix.ch/wp-content/storage5k/picture/2018/10/alain_aufranc_dsc8256-2-1-851x568.webp?oext=jpg&media_id=1716&source_id=133'
  },
  {
    quote: '«Wir vertreiben unliebsame Gäste, und zwar gekonnt und möglichst schonend.»',
    author: 'Raphael Müller',
    role: '',
    image: 'https://www.tuttifix.ch/wp-content/storage5k/picture/2018/10/mueller_dsc3889-zuschnitt-851x569.webp?oext=jpg&media_id=1717&source_id=79'
  }
];

const App: React.FC = () => {
  const [score, setScore] = useState<number | null>(null);
  const [activeTeamQuote, setActiveTeamQuote] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const startCheck = () => {
    const el = document.getElementById('barometer-anchor');
    if (el) {
      const offset = 80; // Offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextTeamQuote = () => {
    setActiveTeamQuote((prev) => (prev + 1) % TEAM_QUOTES.length);
  };

  const prevTeamQuote = () => {
    setActiveTeamQuote((prev) => (prev - 1 + TEAM_QUOTES.length) % TEAM_QUOTES.length);
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-slide effect for Team
  useEffect(() => {
    const timer = setInterval(() => {
      nextTeamQuote();
    }, 7000);
    return () => clearInterval(timer);
  }, [activeTeamQuote]);

  // Auto-slide effect for Testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 9500);
    return () => clearInterval(timer);
  }, [activeTestimonial]);

  return (
    <div className="min-h-screen selection:bg-brand-red selection:text-white flex flex-col overflow-x-hidden">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-brand-red shadow-md h-16 md:h-20">
        <div className="container mx-auto px-4 h-full relative flex justify-between items-center">
          <div className="absolute top-1 md:top-2 left-4 z-[60]">
            <div className="transform -rotate-1 transition-transform hover:rotate-0">
              <img 
                src="https://www.tuttifix.ch/wp-content/themes/tuttifix/images/logo.png" 
                alt="tuttifix logo" 
                className="h-14 md:h-28 w-auto block filter drop-shadow-md" 
              />
            </div>
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center">
            <button 
              onClick={startCheck}
              className="px-4 py-2 md:px-6 md:py-2.5 bg-white text-brand-red text-[11px] md:text-sm font-bold rounded-sm hover:bg-brand-lightGray transition-all shadow-sm uppercase tracking-wider"
            >
              Check starten
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-32 md:pb-28 overflow-hidden bg-brand-lightGray/30">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-lightBlue opacity-10 -skew-x-12 transform translate-x-1/2 -z-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <h1 className="font-h1 text-brand-dark mb-4 md:mb-6 leading-tight">
                Wie sicher ist Ihre <span className="text-brand-red underline decoration-brand-red underline-offset-4 md:underline-offset-8">Décharge</span> wirklich?
              </h1>
              <p className="text-base md:text-xl text-brand-dark leading-relaxed mb-6 md:mb-8 max-w-xl">
                Prüfen Sie in 60 Sekunden, ob Ihre Fassaden- und Unterhaltsdokumentation im Ernstfall (Art. 58 OR) standhält.
              </p>
              <div className="mb-8 md:mb-10 max-w-2xl">
                <h2 className="font-h2 text-brand-dark mb-3 md:mb-4">Dokumentation schlägt Aktion</h2>
                <div className="space-y-4 text-brand-dark leading-relaxed text-sm md:text-xl">
                  <p>
                    Viele Verwaltungen handeln korrekt – aber nicht immer nachweisbar. Im Schadenfall zählt nicht, was <span className="font-bold">«eigentlich gemacht wurde»</span>, sondern was Sie belegen können. Genau dort entstehen Lücken.
                  </p>
                  <p>
                    Einzelfälle werden zu Dauerbrennern. Wer erst reagiert, wenn Beschwerden eintreffen, verliert Planbarkeit – und erhöht <span className="text-brand-red font-bold">Haftungs- und Folgerisiken</span>.
                  </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 md:p-8 bg-white/50 border-l-4 border-brand-red rounded-r-sm backdrop-blur-sm shadow-sm">
                  <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden shadow-xl border-2 border-white flex-shrink-0">
                    <img 
                      src="https://www.tuttifix.ch/wp-content/storage5k/picture/2025/08/miriam-ganarin-851x568.webp?oext=jpg&media_id=2142&source_id=111" 
                      alt="Miriam Ganarin" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                  <div className="text-center sm:text-left">
                    <h4 className="font-h3 text-brand-dark text-lg md:text-2xl mb-1">Miriam Ganarin</h4>
                    <p className="text-[11px] md:text-sm font-bold text-brand-red uppercase tracking-widest mb-4">Bautenschutz-Koordinatorin</p>
                    <div className="space-y-3">
                      <a href="tel:0439317850" className="flex items-center justify-center sm:justify-start gap-2 text-sm md:text-lg font-medium text-brand-dark hover:text-brand-red transition-colors">
                        <span className="text-brand-red font-bold">T</span> 043 931 78 50
                      </a>
                      <a href="mailto:miriam.ganarin@tuttifix.ch" className="flex items-center justify-center sm:justify-start gap-2 text-sm md:text-lg font-medium text-brand-dark hover:text-brand-red transition-colors break-all">
                        miriam.ganarin@tuttifix.ch
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 mb-10 md:mb-12">
                <button onClick={startCheck} className="w-full sm:w-auto px-8 py-4 bg-brand-red text-white text-sm md:text-base font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-widest shadow-lg active:scale-95">
                  Mit Miriam sprechen
                </button>
                <button className="w-full sm:w-auto px-8 py-4 border-2 border-brand-dark text-brand-dark text-sm md:text-base font-bold rounded-sm hover:bg-brand-dark hover:text-white transition-all uppercase tracking-widest active:scale-95">
                  Playbook laden
                </button>
              </div>
              <div className="border-t border-brand-lightBlue pt-8 md:pt-12">
                <p className="text-[13px] md:text-[15px] font-bold text-brand-midBlue uppercase tracking-[0.25em] mb-4 md:mb-6">Referenzen & Standards</p>
                <div className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-3 md:gap-y-5 text-brand-dark/70 font-medium">
                  {TRUST_PARTNERS.map(p => (
                    <span key={p} className="text-sm md:text-lg uppercase tracking-tight font-bold">{p}</span>
                  ))}
                </div>
              </div>
            </div>
            <div id="barometer-anchor" className="lg:col-span-5 w-full">
              {score === null ? <Barometer onFinish={setScore} /> : <ResultView score={score} />}
            </div>
          </div>
        </div>
      </section>

      {/* Kundenreferenzen Slider Section (Single Card with mixed order) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden border-b border-brand-lightBlue/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <h2 className="font-h2 text-brand-dark mb-6">Das sagen unsere Kunden</h2>
            <p className="text-brand-dark/60 text-sm md:text-xl leading-relaxed italic max-w-xl mx-auto">
              Wir arbeiten eng mit Verwaltungen zusammen, um deren Haftungsrisiken messbar zu senken.
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Main Carousel Area */}
            <div className="relative min-h-[480px] sm:min-h-[380px] md:min-h-[340px]">
              {TESTIMONIALS.map((t, idx) => (
                <div 
                  key={idx} 
                  className={`absolute inset-0 transition-all duration-[800ms] cubic-bezier(0.4, 0, 0.2, 1) transform ${
                    idx === activeTestimonial 
                      ? 'opacity-100 translate-y-0 scale-100' 
                      : 'opacity-0 translate-y-12 scale-95 pointer-events-none'
                  }`}
                >
                  <div className="bg-brand-lightGray/10 p-10 md:p-16 rounded-sm border-l-[6px] border-brand-red shadow-sm flex flex-col h-full justify-center group">
                    <div className="mb-10 text-brand-red/10 group-hover:text-brand-red/20 transition-colors">
                      <svg width="60" height="45" viewBox="0 0 32 24" fill="currentColor">
                        <path d="M0 24V11.2C0 7.46667 0.933333 4.4 2.8 2C4.66667 -0.4 7.6 0 7.6 0L8.8 3.2C8.8 3.2 6.4 3.2 5.2 4.8C4 6.4 3.6 8.4 3.6 10.4H8.4V24H0ZM17.2 24V11.2C17.2 7.46667 18.1333 4.4 20 2C21.8667 -0.4 24.8 0 24.8 0L26 3.2C26 3.2 23.6 3.2 22.4 4.8C21.2 6.4 20.8 8.4 20.8 10.4H25.6V24H17.2Z"/>
                      </svg>
                    </div>
                    <blockquote className="text-brand-dark text-2xl md:text-3xl lg:text-4xl leading-snug font-medium mb-12 italic tracking-tight">
                      "{t.quote}"
                    </blockquote>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 border-t border-brand-lightBlue/50 pt-10">
                      <div>
                        <h5 className="font-h3 text-brand-dark text-xl mb-1.5">{t.author}</h5>
                        <p className="text-[11px] text-brand-midBlue font-bold uppercase tracking-[0.2em] leading-relaxed">
                          {t.role} <span className="mx-3 text-brand-red/40">|</span> <span className="text-brand-red">{t.company}</span>
                        </p>
                      </div>
                      {/* Stylized Logo Placeholder */}
                      <div className="flex items-center gap-3 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500">
                        <div className="w-8 h-8 rounded-full bg-brand-dark/10 flex items-center justify-center">
                          <span className="text-[10px] font-bold text-brand-dark">{t.company.charAt(0)}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-brand-dark">{t.company.split(' ')[0]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots & Controls */}
            <div className="flex items-center justify-between mt-12 px-2">
              <button 
                onClick={prevTestimonial}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-brand-lightBlue/60 text-brand-dark hover:bg-brand-red hover:border-brand-red hover:text-white transition-all shadow-sm active:scale-90 group"
                aria-label="Vorherige Referenz"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M15 18L9 12L15 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex gap-2.5">
                {TESTIMONIALS.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full ${idx === activeTestimonial ? 'bg-brand-red w-10' : 'bg-brand-lightBlue w-3 hover:bg-brand-midBlue'}`}
                    aria-label={`Gehe zu Referenz ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={nextTestimonial}
                className="w-14 h-14 flex items-center justify-center rounded-full border border-brand-lightBlue/60 text-brand-dark hover:bg-brand-red hover:border-brand-red hover:text-white transition-all shadow-sm active:scale-90 group"
                aria-label="Nächste Referenz"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M9 18L15 12L9 6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Slider Section */}
      <section className="py-16 md:py-24 bg-brand-lightGray/10 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="font-h2 text-brand-dark mb-10 md:mb-16">Ein Team für alle Fälle</h2>
          <div className="grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="lg:col-span-5">
              <div className="bg-brand-lightGray/30 rounded-sm overflow-hidden shadow-sm h-full flex flex-col">
                <img 
                  src="https://raw.githubusercontent.com/atedo-ch/tuttifix-brandassets/main/251017_montage_team2-1176x792.webp" 
                  alt="Das tuttifix Team" 
                  className="w-full h-64 md:h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                />
                <div className="p-4 bg-white">
                  <p className="text-[10px] text-brand-midBlue uppercase tracking-wider font-bold">Das tuttifix Einsatz-Team für Bautenschutz und Schädlingsbekämpfung</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div className="relative overflow-hidden flex-grow min-h-[360px] sm:min-h-[400px] lg:min-h-0">
                {TEAM_QUOTES.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-brand-lightGray p-6 sm:p-10 md:p-12 rounded-[16px] absolute inset-0 transition-all duration-700 ease-in-out flex flex-col justify-center ${idx === activeTeamQuote ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}
                  >
                    <div className="absolute top-8 left-0 w-1.5 h-12 md:h-16 bg-brand-red rounded-r-full"></div>
                    <div className="pl-4 md:pl-6 flex flex-col sm:flex-row gap-6 md:gap-8 items-center sm:items-center">
                      <div className="flex-grow text-center sm:text-left">
                        <p className="text-brand-dark text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight font-medium mb-6 md:mb-8 italic">
                          {item.quote}
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                          <div className="w-16 h-16 sm:hidden rounded-full overflow-hidden border-2 border-white shadow-md">
                             <img src={item.image} alt={item.author} className="w-full h-full object-cover" />
                          </div>
                          <div>
                            <p className="text-brand-dark font-bold text-sm md:text-lg uppercase tracking-widest">
                              – {item.author}
                            </p>
                            {item.role && <p className="text-brand-red font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mt-1">{item.role}</p>}
                          </div>
                        </div>
                      </div>
                      <div className="hidden sm:block w-36 md:w-44 lg:w-52 h-36 md:h-44 lg:h-52 flex-shrink-0 rounded-[12px] overflow-hidden shadow-xl border-4 border-white transition-transform hover:scale-105 duration-500">
                        <img src={item.image} alt={item.author} className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <button onClick={prevTeamQuote} className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-lightBlue text-brand-dark hover:bg-brand-red hover:border-brand-red hover:text-white transition-all shadow-sm active:scale-90" aria-label="Vorheriges Zitat">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="flex gap-3">
                  {TEAM_QUOTES.map((_, idx) => (
                    <button key={idx} onClick={() => setActiveTeamQuote(idx)} className={`w-3 h-3 rounded-full transition-all duration-300 ${idx === activeTeamQuote ? 'bg-brand-red w-8' : 'bg-brand-lightBlue hover:bg-brand-midBlue'}`} aria-label={`Gehe zu Zitat ${idx + 1}`} />
                  ))}
                </div>
                <button onClick={nextTeamQuote} className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-lightBlue text-brand-dark hover:bg-brand-red hover:border-brand-red hover:text-white transition-all shadow-sm active:scale-90" aria-label="Nächstes Zitat">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simplified Problem Context */}
      <section id="problem" className="py-16 md:py-24 bg-brand-lightGray/20 border-y border-brand-lightBlue/30">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <div className="inline-block px-3 py-1 bg-brand-lightGray text-brand-dark text-[10px] font-bold rounded-sm mb-6 uppercase tracking-[0.2em]">Haftungs-Prävention</div>
          <h2 className="font-h2 text-brand-dark mb-6">Planbarkeit durch Nachweisbarkeit</h2>
          <p className="text-sm md:text-base text-brand-dark/80 leading-relaxed max-w-2xl mx-auto">
            In der Immobilienbewirtschaftung ist Zeit das knappste Gut. Unser Ansatz zielt darauf ab, Dokumentationsprozesse fest in Zyklen zu verankern, um Lücken zu schliessen, bevor sie zum Problem werden.
          </p>
        </div>
      </section>

      {/* Solution: 3-Säulen-Modell */}
      <section id="loesung" className="py-16 md:py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-h2 mb-4">Der Bautenschutz-Standard</h2>
            <p className="text-brand-lightBlue max-w-xl mx-auto text-sm md:text-base opacity-80">Präventive Massnahmen verbunden mit einem Prozess, der dokumentierbar bleibt.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/[0.08] transition-all group">
              <div className="text-white font-h1 mb-4 opacity-20 group-hover:opacity-40 transition-opacity">01</div>
              <h3 className="font-h3 mb-3 uppercase tracking-wider">Bautenschutz</h3>
              <p className="text-brand-lightBlue text-sm leading-relaxed opacity-80">Stabilisierung des Objektzustands durch gezielte Prävention an Fassaden.</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/[0.08] transition-all group">
              <div className="text-white font-h1 mb-4 opacity-20 group-hover:opacity-40 transition-opacity">02</div>
              <h3 className="font-h3 mb-3 uppercase tracking-wider">Optik & Wirkung</h3>
              <p className="text-brand-lightBlue text-sm leading-relaxed opacity-80">Reduktion von Reklamationen durch gepflegte Gebäudehüllen.</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 rounded-sm hover:bg-white/[0.08] transition-all group">
              <div className="text-white font-h1 mb-4 opacity-20 group-hover:opacity-40 transition-opacity">03</div>
              <h3 className="font-h3 mb-3 uppercase tracking-wider">Nachweisbarkeit</h3>
              <p className="text-brand-lightBlue text-sm leading-relaxed opacity-80">Strukturierte Sorgfaltsnachweise, die intern und extern standhalten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-h2 text-center mb-12 md:mb-16 text-brand-dark">Prozess in 3 Schritten</h2>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              { step: '1', title: 'Assessment', text: 'Wir identifizieren Lücken and analysieren das Portfolio.' },
              { step: '2', title: 'Umsetzung', text: 'CH-konforme Verfahren werden präzise implementiert.' },
              { step: '3', title: 'Monitoring', text: 'Resultate werden in Protokollen für den Sorgfaltsnachweis fixiert.' }
            ].map((item, idx) => (
              <div key={idx} className="relative flex flex-col items-center text-center md:items-start md:text-left group">
                <div className="font-h1 text-brand-red opacity-10 text-6xl md:text-8xl absolute -top-8 md:-top-12 md:-left-4 group-hover:opacity-20 transition-opacity pointer-events-none">{item.step}</div>
                <h4 className="font-h3 mb-3 text-brand-dark uppercase tracking-wide relative z-10 pt-4">{item.title}</h4>
                <p className="text-brand-dark/70 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonial (Featured Miriam) */}
      <section className="py-16 md:py-24 bg-brand-lightGray/40">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-40 h-40 md:w-56 md:h-56 bg-brand-lightBlue rounded-sm flex-shrink-0 shadow-lg border-2 border-white overflow-hidden">
              <img 
                src="https://www.tuttifix.ch/wp-content/storage5k/picture/2025/08/miriam-ganarin-851x568.webp?oext=jpg&media_id=2142&source_id=111" 
                alt="Miriam Ganarin" 
                className="w-full h-full object-cover grayscale-[0.2]" 
              />
            </div>
            <div className="border-l-4 border-brand-red pl-6 md:pl-8">
              <p className="text-lg md:text-2xl font-medium text-brand-dark italic leading-relaxed mb-6">
                "tuttifix arbeitet verwaltungsnah: Planung, Umsetzung und Monitoring werden als Prozess begriffen, der Bewirtschafter im Alltag entlastet."
              </p>
              <div>
                <h5 className="font-h3 text-brand-dark text-lg md:text-xl">Miriam Ganarin</h5>
                <p className="text-[11px] md:text-sm font-bold uppercase tracking-widest text-brand-midBlue">Bautenschutz-Koordinatorin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-h2 text-center mb-10 md:mb-12">Procurement-Ready FAQ</h2>
          <div className="divide-y divide-brand-lightBlue border-t border-brand-lightBlue">
            {FAQS.map((faq, i) => (
              <details key={i} className="group py-5 px-1 hover:bg-brand-lightGray/10 transition-colors">
                <summary className="list-none flex justify-between items-center cursor-pointer select-none">
                  <span className="font-h3 text-brand-dark tracking-tight pr-6">{faq.q}</span>
                  <span className="text-brand-red font-bold text-2xl transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 text-sm md:text-base text-brand-dark/80 leading-relaxed bg-brand-lightGray/30 p-5 rounded-sm border-l-2 border-brand-red/20">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-32 bg-brand-red text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark/10 -z-10"></div>
        <div className="container mx-auto px-4 max-w-3xl relative z-10">
          <h2 className="font-h1 mb-6 md:mb-8 text-4xl md:text-6xl">Risiken nicht nur bearbeiten, sondern belegen.</h2>
          <p className="text-lg md:text-2xl mb-10 md:mb-12 opacity-90 max-w-xl mx-auto leading-relaxed">Starten Sie jetzt den Risiko-Check für Ihr Portfolio und minimieren Sie Ihre Haftung.</p>
          <button onClick={startCheck} className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-7 bg-white text-brand-red text-base md:text-xl font-bold rounded-sm hover:bg-brand-lightGray transition-all uppercase tracking-widest shadow-2xl active:scale-95">
            Check starten
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-dark text-white pt-12 pb-8 px-4 sm:px-8 lg:px-12 border-t border-white/5">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-y-10 gap-x-12 pb-12">
            <div className="flex items-center gap-4 group cursor-default self-start">
               <div className="w-1.5 h-8 bg-brand-red rounded-full transition-all group-hover:bg-white"></div>
               <span className="font-bold text-xl lg:text-2xl uppercase tracking-widest whitespace-nowrap">tuttifix gmbh</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 sm:gap-x-10 lg:gap-x-16 gap-y-4 justify-start sm:justify-center">
              {['Zürich', 'Baden', 'Rümlang', 'Basel'].map(loc => (
                <span key={loc} className="font-bold text-xs lg:text-base uppercase tracking-[0.2em] opacity-60 hover:opacity-100 hover:text-brand-red transition-all cursor-default">{loc}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-x-10 lg:gap-x-12 gap-y-6">
              <a href="tel:0439317850" className="flex items-center gap-3 font-bold text-base lg:text-xl uppercase tracking-widest hover:text-brand-red transition-all group">
                <span className="text-brand-red font-h1 text-2xl opacity-80 group-hover:opacity-100">T</span>
                <span className="whitespace-nowrap">043 931 78 50</span>
              </a>
              <a href="mailto:info@tuttifix.ch" className="flex items-center gap-3 font-bold text-base lg:text-xl uppercase tracking-widest hover:text-brand-red transition-all group border-b-2 border-transparent hover:border-brand-red pb-0.5">
                <span className="whitespace-nowrap">info@tuttifix.ch</span>
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-bold text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 opacity-40">
              <p>&copy; {new Date().getFullYear()} tuttifix Bautenschutz</p>
              <div className="hidden sm:block w-1.5 h-1.5 bg-white rounded-full"></div>
              <p className="italic">Professionelle Gebäude-Nachweisbarkeit</p>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12 opacity-50">
              <a href="#" className="hover:text-brand-red hover:opacity-100 transition-all border-b border-transparent hover:border-brand-red">Impressum</a>
              <a href="#" className="hover:text-brand-red hover:opacity-100 transition-all border-b border-transparent hover:border-brand-red">Datenschutz</a>
              <a href="#" className="hover:text-brand-red hover:opacity-100 transition-all border-b border-transparent hover:border-brand-red">AGB</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
