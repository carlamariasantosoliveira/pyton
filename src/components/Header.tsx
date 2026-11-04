import React from 'react';
import { SectionTab, StudentScore } from '../types';
import { Terminal, Award, Sparkles, BookOpen, Gamepad2, Code, Play, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  activeTab: SectionTab;
  setActiveTab: (tab: SectionTab) => void;
  score: StudentScore;
  onOpenAchievements: () => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  score,
  onOpenAchievements,
  theme,
  toggleTheme
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Brand title, one line */}
          <button
            onClick={() => setActiveTab('aprender')}
            className="flex items-center gap-2.5 text-left text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white block leading-tight">
                TIC 7º Ano
              </span>
              <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400 block leading-none">
                Programação & Python
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 nav links, single-line */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            <button
              onClick={() => setActiveTab('aprender')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'aprender'
                  ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Aprender Teoria</span>
            </button>

            <button
              onClick={() => setActiveTab('exercicios')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'exercicios'
                  ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Exercícios PDF (1–23)</span>
            </button>

            <button
              onClick={() => setActiveTab('jogos')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'jogos'
                  ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Gamepad2 className="w-4 h-4" />
              <span>Jogos & Quizzes</span>
            </button>

            <button
              onClick={() => setActiveTab('laboratorio')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === 'laboratorio'
                  ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                  : 'hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Laboratório Python</span>
            </button>
          </nav>

          {/* Zone 3: Actions - Theme toggle switch + Points badge */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Dark / Light Mode Switch */}
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Mudar para modo claro' : 'Mudar para modo escuro'}
              title={theme === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
              className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Points / Achievements Button */}
            <button
              onClick={onOpenAchievements}
              className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-800 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/40 hover:bg-amber-100 dark:hover:bg-amber-900/50 border border-amber-200 dark:border-amber-800/60 rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer shadow-xs"
              title="Ver Pontos e Conquistas"
            >
              <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="font-mono tabular-nums text-amber-950 dark:text-amber-200 font-bold">
                {score.totalPoints} pts
              </span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin" />
            </button>
          </div>
        </div>

        {/* Mobile secondary navigation */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300 overflow-x-auto">
          <button
            onClick={() => setActiveTab('aprender')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
              activeTab === 'aprender'
                ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                : ''
            }`}
          >
            Aprender
          </button>
          <button
            onClick={() => setActiveTab('exercicios')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
              activeTab === 'exercicios'
                ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                : ''
            }`}
          >
            Exercícios PDF
          </button>
          <button
            onClick={() => setActiveTab('jogos')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
              activeTab === 'jogos'
                ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                : ''
            }`}
          >
            Jogos
          </button>
          <button
            onClick={() => setActiveTab('laboratorio')}
            className={`px-2.5 py-1 rounded-md whitespace-nowrap ${
              activeTab === 'laboratorio'
                ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                : ''
            }`}
          >
            Python
          </button>
        </div>
      </div>
    </header>
  );
};
