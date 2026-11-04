import React, { useState, useEffect } from 'react';
import { SectionTab, StudentScore } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TheorySection } from './components/TheorySection';
import { ExercisesExplorer } from './components/ExercisesExplorer';
import { GamesSection } from './components/GamesSection';
import { PythonSandbox } from './components/PythonSandbox';
import { AchievementsModal } from './components/AchievementsModal';
import { Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('aprender');
  const [isAchievementsOpen, setIsAchievementsOpen] = useState<boolean>(false);

  // Theme state persisted in localStorage
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const savedTheme = localStorage.getItem('tic_theme');
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  });

  // Apply theme to document.documentElement
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    try {
      localStorage.setItem('tic_theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Student score saved in localStorage
  const [score, setScore] = useState<StudentScore>(() => {
    try {
      const saved = localStorage.getItem('tic_7ano_score');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      // fallback
    }
    return {
      totalPoints: 0,
      matchesCompleted: 0,
      tfAnswered: 0,
      tfCorrect: 0,
      mcAnswered: 0,
      mcCorrect: 0,
      algorithmsSolved: 0,
      unlockedBadges: []
    };
  });

  useEffect(() => {
    try {
      localStorage.setItem('tic_7ano_score', JSON.stringify(score));
    } catch (e) {}
  }, [score]);

  const handleScoreEarned = (points: number) => {
    setScore((prev) => ({
      ...prev,
      totalPoints: prev.totalPoints + points
    }));
  };

  const handleTabChange = (tab: SectionTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans antialiased transition-colors">
      {/* Top Bar with theme switch */}
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        score={score}
        onOpenAchievements={() => setIsAchievementsOpen(true)}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        {/* Hero Banner */}
        <Hero onSelectTab={handleTabChange} />

        {/* Dynamic section tabs */}
        <div className="pt-2">
          {activeTab === 'aprender' && <TheorySection />}
          {activeTab === 'exercicios' && <ExercisesExplorer />}
          {activeTab === 'jogos' && (
            <GamesSection onScoreEarned={handleScoreEarned} />
          )}
          {activeTab === 'laboratorio' && <PythonSandbox />}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 text-xs text-slate-500 dark:text-slate-400 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-bold text-slate-700 dark:text-slate-300">
              TIC 7º Ano · Introdução à Programação & Python
            </p>
            <p className="text-[11px]">
              Baseado nos apontamentos da disciplina de Tecnologias da Informação e Comunicação (1º Período).
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <button
              onClick={() => setIsAchievementsOpen(true)}
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Award className="w-3.5 h-3.5 text-amber-500" />
              <span>Ver Medalhas</span>
            </button>
            <span>·</span>
            <button
              onClick={() => {
                if (window.confirm('Queres mesmo reiniciar os teus pontos para 0?')) {
                  setScore({
                    totalPoints: 0,
                    matchesCompleted: 0,
                    tfAnswered: 0,
                    tfCorrect: 0,
                    mcAnswered: 0,
                    mcCorrect: 0,
                    algorithmsSolved: 0,
                    unlockedBadges: []
                  });
                }
              }}
              className="text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer"
            >
              Reiniciar Pontos
            </button>
          </div>
        </div>
      </footer>

      {/* Achievements modal */}
      <AchievementsModal
        isOpen={isAchievementsOpen}
        onClose={() => setIsAchievementsOpen(false)}
        score={score}
      />
    </div>
  );
}
