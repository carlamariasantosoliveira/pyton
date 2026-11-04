import React, { useState } from 'react';
import { TRUE_FALSE_QUESTIONS } from '../data/quizData';
import { TrueFalseQuestion } from '../types';
import { Check, X, ArrowRight, RotateCcw, Award, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TrueFalseGameProps {
  onScoreEarned: (points: number) => void;
}

export const TrueFalseGame: React.FC<TrueFalseGameProps> = ({ onScoreEarned }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [streak, setStreak] = useState<number>(0);

  const currentQ: TrueFalseQuestion = TRUE_FALSE_QUESTIONS[currentIndex];
  const hasAnsweredCurrent = answers[currentQ.id] !== undefined;
  const isCurrentCorrect = answers[currentQ.id] === currentQ.isTrue;

  const handleAnswer = (choice: boolean) => {
    if (hasAnsweredCurrent || isFinished) return;

    const newAnswers = { ...answers, [currentQ.id]: choice };
    setAnswers(newAnswers);

    if (choice === currentQ.isTrue) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      const bonus = newStreak >= 3 ? 20 : 10;
      onScoreEarned(bonus);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    if (currentIndex < TRUE_FALSE_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setAnswers({});
    setIsFinished(false);
    setStreak(0);
  };

  const totalCorrect = TRUE_FALSE_QUESTIONS.filter(
    (q) => answers[q.id] === q.isTrue
  ).length;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
            Desafio Rápido
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Verdadeiro ou Falso? (V / F)
          </h3>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono">
          <div className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold rounded-lg border border-indigo-100 dark:border-indigo-800/60">
            Questão {currentIndex + 1} / {TRUE_FALSE_QUESTIONS.length}
          </div>
          {streak > 1 && (
            <div className="px-3 py-1.5 bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 font-bold rounded-lg border border-amber-200 dark:border-amber-800/60 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
              <span>Streak: {streak} seguidas!</span>
            </div>
          )}
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / TRUE_FALSE_QUESTIONS.length) * 100}%`
              }}
            />
          </div>

          {/* Question Card */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300">
                {currentQ.topic}
              </span>
            </div>

            <p className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.statement}
            </p>

            {/* Answer buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <button
                onClick={() => handleAnswer(true)}
                disabled={hasAnsweredCurrent}
                className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  hasAnsweredCurrent
                    ? currentQ.isTrue
                      ? 'bg-emerald-600 text-white shadow-md'
                      : answers[currentQ.id] === true
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 opacity-60'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border-2 border-emerald-300 dark:border-emerald-800/80 text-emerald-800 dark:text-emerald-300 hover:scale-102 shadow-xs'
                }`}
              >
                <Check className="w-5 h-5" />
                <span>Verdadeiro</span>
              </button>

              <button
                onClick={() => handleAnswer(false)}
                disabled={hasAnsweredCurrent}
                className={`flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm sm:text-base transition-all cursor-pointer ${
                  hasAnsweredCurrent
                    ? !currentQ.isTrue
                      ? 'bg-emerald-600 text-white shadow-md'
                      : answers[currentQ.id] === false
                      ? 'bg-rose-500 text-white'
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 opacity-60'
                    : 'bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 dark:hover:bg-rose-900/50 border-2 border-rose-300 dark:border-rose-800/80 text-rose-800 dark:text-rose-300 hover:scale-102 shadow-xs'
                }`}
              >
                <X className="w-5 h-5" />
                <span>Falso</span>
              </button>
            </div>

            {/* Pedagogical Explanation Reveal */}
            {hasAnsweredCurrent && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 mt-4 text-xs sm:text-sm animate-in fade-in duration-200 ${
                  isCurrentCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200'
                }`}
              >
                {isCurrentCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <div className="font-bold">
                    {isCurrentCorrect ? 'Parabéns, acertaste!' : 'Atenção, não era bem assim:'}
                  </div>
                  <div>{currentQ.explanation}</div>
                </div>
              </div>
            )}
          </div>

          {/* Next Button */}
          {hasAnsweredCurrent && (
            <div className="flex justify-end">
              <button
                onClick={handleNext}
                className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
              >
                <span>{currentIndex < TRUE_FALSE_QUESTIONS.length - 1 ? 'Seguinte Pergunta' : 'Ver Resultado Final'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Final Score Card */
        <div className="p-8 text-center space-y-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Fim do Desafio Verdadeiro ou Falso!
          </h4>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Acertaste em <strong className="text-indigo-600 dark:text-indigo-400">{totalCorrect}</strong> de{' '}
            <strong>{TRUE_FALSE_QUESTIONS.length}</strong> afirmações!
          </p>

          <div className="max-w-xs mx-auto p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono">
            Percentagem de sucesso: <strong className="text-emerald-600 dark:text-emerald-400 text-sm">{Math.round((totalCorrect / TRUE_FALSE_QUESTIONS.length) * 100)}%</strong>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir Desafio</span>
          </button>
        </div>
      )}
    </div>
  );
};
