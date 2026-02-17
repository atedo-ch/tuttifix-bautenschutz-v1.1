
import React from 'react';

interface ResultViewProps {
  score: number;
}

const ResultView: React.FC<ResultViewProps> = ({ score }) => {
  const isRed = score <= 2;
  const isYellow = score === 3 || score === 4;

  let colorClass = "bg-[#d51030]"; // Brand Red
  let title = "Hohes Risiko";
  let desc = "Es fehlt meist nicht an Massnahmen, sondern an Struktur und Nachweisbarkeit.";
  let recommendation = "Klären Sie die drei grössten Lücken und priorisieren Sie die schnellste Risikoreduktion.";

  if (isYellow) {
    colorClass = "bg-[#f59e0b]"; // Amber/Yellow
    title = "Erhöhtes Risiko";
    desc = "Solide Basis. Einzelne Lücken können im Ernstfall jedoch teuer werden.";
    recommendation = "Schliessen Sie die fehlenden Nachweise und definieren Sie einen stabilen Zyklus.";
  } else if (score >= 5) {
    colorClass = "bg-[#10b981]"; // Green
    title = "Geringes Risiko";
    desc = "Guter Standard. Jetzt zählt Effizienz: weniger Aufwand, gleiche Sicherheit.";
    recommendation = "Optimieren Sie Zyklen und Eskalationswege, damit der Aufwand sinkt.";
  }

  return (
    <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-brand-lightBlue">
      <div className={`${colorClass} p-8 text-white flex items-center justify-between`}>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80 mb-1">Ihr Ergebnis</p>
          <h2 className="font-h1 uppercase">{title}</h2>
        </div>
        <div className="font-h1 opacity-30 text-5xl">{score}/6</div>
      </div>
      
      <div className="p-8 md:p-10 bg-brand-lightGray/20">
        <div className="mb-8 border-b border-brand-lightBlue pb-6">
          <h4 className="font-h3 text-brand-dark mb-2 uppercase text-sm tracking-widest">Einschätzung</h4>
          <p className="text-brand-dark/80 text-sm leading-relaxed">{desc}</p>
        </div>
        
        <div className="mb-10 p-5 bg-white border border-brand-lightBlue rounded-sm">
          <h4 className="font-h3 text-brand-dark mb-2 uppercase text-sm tracking-widest">Empfehlung</h4>
          <p className="text-brand-dark leading-relaxed text-sm font-medium">{recommendation}</p>
        </div>

        <div className="flex flex-col gap-4">
          {isRed ? (
            <>
              <button className="w-full py-5 bg-brand-dark text-white font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-[0.15em] shadow-lg">
                Ergebnis besprechen (15–20 Min)
              </button>
              <button className="w-full py-4 bg-white text-brand-dark border border-brand-lightBlue font-bold rounded-sm hover:bg-brand-lightGray transition-all uppercase tracking-widest text-xs">
                Playbook erhalten (per E-Mail)
              </button>
              <p className="text-center text-[10px] text-brand-midBlue font-bold uppercase tracking-tight">
                Outcome: 3 konkrete Massnahmen & Aufwandsschätzung.
              </p>
            </>
          ) : (
            <>
              <button className="w-full py-5 bg-brand-red text-white font-bold rounded-sm hover:bg-opacity-90 transition-all uppercase tracking-[0.15em] shadow-lg">
                Playbook downloaden
              </button>
              <button className="w-full py-4 bg-transparent text-brand-dark font-bold rounded-sm hover:underline transition-all uppercase tracking-widest text-[10px] decoration-brand-red underline-offset-4">
                Ergebnis im Termin besprechen
              </button>
              <p className="text-center text-[10px] text-brand-midBlue font-bold uppercase tracking-tight">
                Inkl. Checklisten für Verwaltung & Reporting.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultView;
