import React from 'react';
import { SectionTab } from '../types';
import { BookOpen, Gamepad2, ArrowRight, Laptop, Sparkles, FileDown } from 'lucide-react';

interface HeroProps {
  onSelectTab: (tab: SectionTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectTab }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-950 text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 rounded-3xl shadow-xl border border-indigo-800/40 my-6">
      {/* Background visual accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold tracking-wide border border-indigo-400/20">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>TIC · 7º Ano do Ensino Básico · 1º Período</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Aprende Programação, <br className="hidden sm:inline" />
          Algoritmos e Python a Brincar!
        </h1>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          O teu guia interativo completo para a disciplina de TIC: desde o interior do computador (CPU e RAM) até aos fluxogramas e códigos Python reais com jogos didáticos.
        </p>

        {/* Primary CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onSelectTab('aprender')}
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 hover:scale-102 cursor-pointer text-sm sm:text-base"
          >
            <BookOpen className="w-5 h-5" />
            <span>Começar a Aprender</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onSelectTab('jogos')}
            className="flex items-center gap-2 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-102 cursor-pointer text-sm sm:text-base"
          >
            <Gamepad2 className="w-5 h-5" />
            <span>Jogar os Desafios</span>
          </button>

          <button
            onClick={() => onSelectTab('exercicios')}
            className="flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium rounded-xl border border-slate-700 transition-colors cursor-pointer text-sm sm:text-base"
          >
            <Laptop className="w-5 h-5 text-indigo-400" />
            <span>23 Exercícios Resolvidos</span>
          </button>

          <a
            href="./assets/aistudio/Apontamentos_Python_8aaa311c.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white font-medium rounded-xl border border-slate-700 transition-colors text-sm sm:text-base"
            title="Descarregar Apontamentos em PDF"
          >
            <FileDown className="w-4 h-4 text-rose-400" />
            <span>Ver PDF Original</span>
          </a>
        </div>

        {/* Topic Pill Grid */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xs">
            <span className="text-xs text-indigo-300 font-semibold block">Computador</span>
            <span className="text-sm font-bold text-white">Hardware & Software</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xs">
            <span className="text-xs text-cyan-300 font-semibold block">Raciocínio</span>
            <span className="text-sm font-bold text-white">Algoritmos & Fluxos</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xs">
            <span className="text-xs text-emerald-300 font-semibold block">Código Real</span>
            <span className="text-sm font-bold text-white">Python & Condições</span>
          </div>
          <div className="p-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-xs">
            <span className="text-xs text-amber-300 font-semibold block">Coleções</span>
            <span className="text-sm font-bold text-white">Listas & Vetores</span>
          </div>
        </div>
      </div>
    </div>
  );
};
