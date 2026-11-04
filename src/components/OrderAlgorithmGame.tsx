import React, { useState } from 'react';
import { ALGORITHM_SEQUENCES } from '../data/quizData';
import { AlgorithmSequence } from '../types';
import { ArrowUp, ArrowDown, Check, RotateCcw, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface OrderAlgorithmGameProps {
  onScoreEarned: (points: number) => void;
}

export const OrderAlgorithmGame: React.FC<OrderAlgorithmGameProps> = ({ onScoreEarned }) => {
  const [selectedSeqId, setSelectedSeqId] = useState<string>(ALGORITHM_SEQUENCES[0].id);
  const activeSequence: AlgorithmSequence =
    ALGORITHM_SEQUENCES.find((s) => s.id === selectedSeqId) || ALGORITHM_SEQUENCES[0];

  const [currentSteps, setCurrentSteps] = useState(() => {
    return [...activeSequence.steps].sort(() => Math.random() - 0.5);
  });

  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const handleSelectSequence = (seqId: string) => {
    setSelectedSeqId(seqId);
    const seq = ALGORITHM_SEQUENCES.find((s) => s.id === seqId) || ALGORITHM_SEQUENCES[0];
    setCurrentSteps([...seq.steps].sort(() => Math.random() - 0.5));
    setIsVerified(false);
    setIsCorrect(false);
  };

  const moveStep = (index: number, direction: 'up' | 'down') => {
    if (isVerified) return;
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= currentSteps.length) return;

    const updated = [...currentSteps];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setCurrentSteps(updated);
  };

  const handleVerify = () => {
    setIsVerified(true);
    const allInOrder = currentSteps.every(
      (step, idx) => step.correctOrder === idx + 1
    );

    setIsCorrect(allInOrder);

    if (allInOrder) {
      onScoreEarned(30);
      try {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleReset = () => {
    setCurrentSteps([...activeSequence.steps].sort(() => Math.random() - 0.5));
    setIsVerified(false);
    setIsCorrect(false);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors">
      {/* Sequence Selector tabs */}
      <div className="flex flex-wrap gap-2">
        {ALGORITHM_SEQUENCES.map((seq) => (
          <button
            key={seq.id}
            onClick={() => handleSelectSequence(seq.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              seq.id === activeSequence.id
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {seq.title}
          </button>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{activeSequence.title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{activeSequence.description}</p>
        <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-1">💡 Dica: {activeSequence.hint}</p>
      </div>

      {/* Draggable/Reorderable Steps */}
      <div className="space-y-2">
        {currentSteps.map((step, idx) => {
          const isThisStepCorrect = isVerified && step.correctOrder === idx + 1;

          return (
            <div
              key={step.id}
              className={`flex items-center justify-between p-3.5 rounded-xl border transition-all ${
                isVerified
                  ? isThisStepCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-600'
              }`}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 ${
                    isVerified
                      ? isThisStepCorrect
                        ? 'bg-emerald-600 text-white'
                        : 'bg-rose-600 text-white'
                      : 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300'
                  }`}
                >
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-sm font-semibold">{step.text}</span>
              </div>

              {/* Order Controls */}
              {!isVerified && (
                <div className="flex items-center gap-1 shrink-0 ml-2">
                  <button
                    onClick={() => moveStep(idx, 'up')}
                    disabled={idx === 0}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 disabled:opacity-30 cursor-pointer"
                    title="Mover para cima"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => moveStep(idx, 'down')}
                    disabled={idx === currentSteps.length - 1}
                    className="p-1.5 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-300 hover:border-indigo-300 disabled:opacity-30 cursor-pointer"
                    title="Mover para baixo"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Verification Feedback */}
      {isVerified && (
        <div
          className={`p-4 rounded-xl border flex items-center gap-3 text-xs sm:text-sm ${
            isCorrect
              ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200'
          }`}
        >
          {isCorrect ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
          ) : (
            <Sparkles className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />
          )}
          <div>
            {isCorrect
              ? 'Espetacular! A sequência lógica do algoritmo está 100% perfeita! Ganhaste +30 pontos!'
              : 'Alguns passos ainda não estão no sítio correto. Clica em "Tentar Novamente" e ajusta as posições!'}
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        {!isVerified ? (
          <button
            onClick={handleVerify}
            className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Verificar Ordem Lógica</span>
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Tentar Novamente</span>
          </button>
        )}
      </div>
    </div>
  );
};
