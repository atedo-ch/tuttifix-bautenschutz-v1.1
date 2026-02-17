
import React from 'react';
import { Question } from './types';

export const QUESTIONS: Question[] = [
  { id: 1, text: 'Haben Sie ein Inspektionsprotokoll der letzten 12 Monate (inkl. Fotos)?' },
  { id: 2, text: 'Gibt es einen festen Kontrollzyklus (z.B. nach SIA-469-Logik)?' },
  { id: 3, text: 'Ist die Vogelabwehr nachweislich lückenfrei (keine Öffnungen über ca. 4 cm)?' },
  { id: 4, text: 'Werden Dachrinnen präventiv mindestens 1× jährlich geprüft und gereinigt?' },
  { id: 5, text: 'Fordern Sie Dienstleister-Nachweise ein (z.B. EN 16636 / Verbandsstandards)?' },
  { id: 6, text: 'Gibt es definierte Reaktions- und Eskalationswege für Mieterreklamationen?' },
];

export const TRUST_PARTNERS = [
  'SBB', 'ETH Zürich', 'Kanton Zürich', 'Livit', 'Hälg',
  'CEPA / EN 16636', 'Verband Schweizerischer Schädlingsbekämpfer'
];

export const TESTIMONIALS = [
  {
    quote: "Was mir an tuttifix gefällt ist, dass sie genau hinschauen und auch bei komplizierten Fällen pragmatische Lösungen finden.",
    author: "Adrian Hurschler",
    role: "Senior Facility Manager Immobilien",
    company: "SBB AG"
  },
  {
    quote: "Die Zusammenarbeit mit tuttifix ist sehr persönlich. Man kennt die Personen dahinter und weiss, dass man sich auf sie verlassen kann.",
    author: "Nadine Pletscher",
    role: "Immobilienbewirtschafterin mit eidg. FA",
    company: "Sparhafen Immobilien AG"
  },
  {
    quote: "Ich mag die familiäre und sympathische Art von tuttifix. Kurze Wege, direkte Kontakte und die Sicherheit, dass man es mit erfahrenen Fachleuten zu tun hat.",
    author: "Marco Oehy",
    role: "Adjunkt Immobilien",
    company: "Sicherheitsdirektion, Kanton Zürich"
  },
  {
    quote: "tuttifix reagiert zuverlässig und behebt Probleme rasch. Diese Verbindlichkeit schätzen wir sehr.",
    author: "Patrik Marty",
    role: "Geschäftsführer",
    company: "CB Treuhand GmbH"
  },
  {
    quote: "Unser Vertrauen basiert auf langjähriger Erfahrung: tuttifix hat uns immer kompetent beraten und zuverlässig unterstützt.",
    author: "Simon Lippuner",
    role: "Geschäftsführer und Inhaber",
    company: "Lippuner Immobilien & Verwaltungen AG"
  },
  {
    quote: "Gerade bei schwierigen Rahmenbedingungen zeigt sich die Stärke von tuttifix: Sie analysieren die Situation sorgfältig und finden auch für scheinbar unmögliche Herausforderungen eine Lösung.",
    author: "Adrian Hurschler",
    role: "Facility Management Luzern",
    company: "SBB AG"
  },
  {
    quote: "Was mir bei tuttifix ein gutes Gefühl gibt, ist die familiäre Art. Man kennt die Leute und kann sich auf schnelle, kompetente Unterstützung verlassen.",
    author: "Marco Oehy",
    role: "Kantonales Sozialamt",
    company: "Kanton Zürich"
  },
  {
    quote: "An tuttifix schätzen wir besonders die unkomplizierte Kommunikation: kurze Wege, klare Zuständigkeiten und direkte, kompetente Ansprechpartner.",
    author: "Simon Lippuner",
    role: "Immobilien-Profi",
    company: "Lippuner Immobilien & Verwaltungen"
  },
  {
    quote: "Für mich steht tuttifix für Verlässlichkeit, Qualität und eine lösungsorientierte Haltung. Auch dann, wenn es kompliziert wird.",
    author: "Adrian Hurschler",
    role: "Immobilien-Management",
    company: "SBB AG"
  },
  {
    quote: "Der direkte Draht zu tuttifix gibt mir Vertrauen. Man kennt die zuständigen Personen und kann sich auf schnelle Unterstützung verlassen.",
    author: "Marco Oehy",
    role: "Immobilien-Verantwortung",
    company: "Kanton Zürich"
  },
  {
    quote: "Was wir an tuttifix besonders schätzen, ist die einfache Zusammenarbeit. Das heisst schnelle Rückmeldungen, kompetente Ansprechpartner und zuverlässiger Service.",
    author: "Simon Lippuner",
    role: "Inhaber",
    company: "Lippuner AG"
  }
];

export const REGIONS = ['Zürich', 'Aargau', 'Zentralschweiz', 'Ostschweiz'];

export const FAQS = [
  {
    q: 'Was genau sagt das Ampel-Resultat aus?',
    a: 'Es zeigt, wie belastbar Ihr Sorgfaltsnachweis ist: Protokolle, Zyklen, Standards und Reaktionswege.'
  },
  {
    q: 'Ist der Risiko-Check anonym?',
    a: 'Ja. Erst wenn Sie das Playbook wollen oder ein Debrief sinnvoll ist, geben Sie optional Kontaktdaten an.'
  },
  {
    q: 'Für welche Objekte ist das geeignet?',
    a: 'Für Wohn- und Gewerbeobjekte, insbesondere bei wiederkehrenden Hotspots und erhöhtem Stakeholder-Druck.'
  },
  {
    q: 'Arbeiten Sie mit Standards?',
    a: 'Ja. Wir orientieren uns an praxistauglichen Standards (z.B. SIA-Logik, EN 16636) und setzen CH-konforme Verfahren um.'
  }
];
