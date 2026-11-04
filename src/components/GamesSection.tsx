import React, { useState } from 'react';
import { GameType } from '../types';
import { MatchingGame } from './MatchingGame';
import { TrueFalseGame } from './TrueFalseGame';
import { MultipleChoiceGame } from './MultipleChoiceGame';
import { OrderAlgorithmGame } from './OrderAlgorithmGame';
import {
  CheckCircle,
  HelpCircle,
  ListOrdered,
  Shuffle
} from 'lucide-react';

interface GamesSectionProps {
  onScoreEarned: (points: number) => void;
}

export const GamesSection: React.FC<GamesSectionProps> = ({ onScoreEarned }) => {
  const [activeGame, setActiveGame] = useState<GameType>('correspondencia');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center md:text-left">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Zona de Jogos & Quizzes TIC
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Ganha pontos, acumula streaks e testa os teus conhecimentos com jogos interativos!
        </p>
      </div>

      {/* Game Mode Selector Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <button
          onClick={() => setActiveGame('correspondencia')}
          className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeGame === 'correspondencia'
              ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-md font-bold'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              activeGame === 'correspondencia'
                ? 'bg-indigo-700 dark:bg-indigo-600 text-white'
                : 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400'
            }`}
          >
            <Shuffle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-xs uppercase tracking-wider block opacity-80 leading-none">
              Jogo 1
            </span>
            <span className="text-xs sm:text-sm font-bold block leading-tight mt-0.5">
              Correspondência
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveGame('verdadeiro_falso')}
          className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeGame === 'verdadeiro_falso'
              ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-md font-bold'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              activeGame === 'verdadeiro_falso'
                ? 'bg-indigo-700 dark:bg-indigo-600 text-white'
                : 'bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400'
            }`}
          >
            <CheckCircle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-xs uppercase tracking-wider block opacity-80 leading-none">
              Jogo 2
            </span>
            <span className="text-xs sm:text-sm font-bold block leading-tight mt-0.5">
              Verdadeiro / Falso
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveGame('escolha_multipla')}
          className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeGame === 'escolha_multipla'
              ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-md font-bold'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              activeGame === 'escolha_multipla'
                ? 'bg-indigo-700 dark:bg-indigo-600 text-white'
                : 'bg-amber-50 dark:bg-amber-950/70 text-amber-600 dark:text-amber-400'
            }`}
          >
            <HelpCircle className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-xs uppercase tracking-wider block opacity-80 leading-none">
              Jogo 3
            </span>
            <span className="text-xs sm:text-sm font-bold block leading-tight mt-0.5">
              Escolha Múltipla
            </span>
          </div>
        </button>

        <button
          onClick={() => setActiveGame('ordenar_algoritmo')}
          className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all cursor-pointer ${
            activeGame === 'ordenar_algoritmo'
              ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-md font-bold'
              : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
              activeGame === 'ordenar_algoritmo'
                ? 'bg-indigo-700 dark:bg-indigo-600 text-white'
                : 'bg-purple-50 dark:bg-purple-950/70 text-purple-600 dark:text-purple-400'
            }`}
          >
            <ListOrdered className="w-5 h-5" />
          </div>
          <div className="text-left">
            <span className="text-xs uppercase tracking-wider block opacity-80 leading-none">
              Jogo 4
            </span>
            <span className="text-xs sm:text-sm font-bold block leading-tight mt-0.5">
              Monta o Algoritmo
            </span>
          </div>
        </button>
      </div>

      {/* Render Selected Game */}
      <div>
        {activeGame === 'correspondencia' && (
          <MatchingGame onScoreEarned={onScoreEarned} />
        )}
        {activeGame === 'verdadeiro_falso' && (
          <TrueFalseGame onScoreEarned={onScoreEarned} />
        )}
        {activeGame === 'escolha_multipla' && (
          <MultipleChoiceGame onScoreEarned={onScoreEarned} />
        )}
        {activeGame === 'ordenar_algoritmo' && (
          <OrderAlgorithmGame onScoreEarned={onScoreEarned} />
        )}
      </div>
    </div>
  );
};
