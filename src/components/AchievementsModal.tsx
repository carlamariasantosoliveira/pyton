import React from 'react';
import { StudentScore } from '../types';
import { Trophy, Lock, X, Sparkles } from 'lucide-react';

interface AchievementsModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: StudentScore;
}

interface BadgeDef {
  id: string;
  name: string;
  desc: string;
  pointsRequired: number;
  icon: string;
}

const BADGES: BadgeDef[] = [
  {
    id: 'b1',
    name: 'Primeiros Passos',
    desc: 'Ganhaste os teus primeiros 20 pontos a estudar ou jogar!',
    pointsRequired: 20,
    icon: '🌱'
  },
  {
    id: 'b2',
    name: 'Explorador do Hardware',
    desc: 'Alcançaste 60 pontos em TIC!',
    pointsRequired: 60,
    icon: '💻'
  },
  {
    id: 'b3',
    name: 'Mestre dos Fluxogramas',
    desc: 'Chegaste aos 120 pontos dominando losangos e retângulos!',
    pointsRequired: 120,
    icon: '📐'
  },
  {
    id: 'b4',
    name: 'Domador do Python',
    desc: 'Ultrapassaste a marca dos 200 pontos!',
    pointsRequired: 200,
    icon: '🐍'
  },
  {
    id: 'b5',
    name: 'Ninja dos Algoritmos',
    desc: 'Atingiste os 300 pontos de pura mestria lógica!',
    pointsRequired: 300,
    icon: '⭐'
  },
  {
    id: 'b6',
    name: 'Génio de TIC do 7º Ano',
    desc: 'Completaste 450+ pontos! Um verdadeiro programador!',
    pointsRequired: 450,
    icon: '👑'
  }
];

export const AchievementsModal: React.FC<AchievementsModalProps> = ({
  isOpen,
  onClose,
  score
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6 transition-colors">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <Trophy className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            O Teu Progresso & Conquistas
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Joga, responde a perguntas e ganha medalhas de mérito em TIC!
          </p>
        </div>

        {/* Points Banner */}
        <div className="p-4 bg-gradient-to-r from-amber-500 to-indigo-600 text-white rounded-2xl flex items-center justify-between shadow-md">
          <div>
            <span className="text-xs opacity-90 block">Pontuação Total Acumulada</span>
            <span className="text-3xl font-extrabold font-mono tabular-nums tracking-tight">
              {score.totalPoints} pontos
            </span>
          </div>
          <Sparkles className="w-8 h-8 text-amber-200 animate-pulse" />
        </div>

        {/* Badges List */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          {BADGES.map((b) => {
            const isUnlocked = score.totalPoints >= b.pointsRequired;
            return (
              <div
                key={b.id}
                className={`p-3.5 rounded-xl border flex items-center gap-3.5 transition-all ${
                  isUnlocked
                    ? 'bg-amber-50/70 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800/70 text-amber-950 dark:text-amber-200'
                    : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60'
                }`}
              >
                <div className="text-2xl shrink-0">{b.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold leading-tight truncate text-slate-900 dark:text-white">
                      {b.name}
                    </h4>
                    {isUnlocked ? (
                      <span className="px-1.5 py-0.2 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold rounded">
                        Desbloqueado!
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-0.5">
                        <Lock className="w-3 h-3 inline" /> {b.pointsRequired} pts
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {b.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="w-full py-3 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
          >
            Continuar a Jogar e Aprender
          </button>
        </div>
      </div>
    </div>
  );
};
