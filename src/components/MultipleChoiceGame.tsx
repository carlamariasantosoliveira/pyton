import React, { useState } from 'react';
import { MULTIPLE_CHOICE_QUESTIONS } from '../data/quizData';
import { MultipleChoiceQuestion } from '../types';
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MultipleChoiceGameProps {
  onScoreEarned: (points: number) => void;
}

export const MultipleChoiceGame: React.FC<MultipleChoiceGameProps> = ({ onScoreEarned }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState<boolean>(false);

  const currentQ: MultipleChoiceQuestion = MULTIPLE_CHOICE_QUESTIONS[currentIndex];
  const hasAnsweredCurrent = selectedAnswers[currentQ.id] !== undefined;
  const selectedOptionIndex = selectedAnswers[currentQ.id];
  const isCorrect = selectedOptionIndex === currentQ.correctIndex;

  const handleSelectOption = (optIndex: number) => {
    if (hasAnsweredCurrent || isFinished) return;

    const newAnswers = { ...selectedAnswers, [currentQ.id]: optIndex };
    setSelectedAnswers(newAnswers);

    if (optIndex === currentQ.correctIndex) {
      onScoreEarned(20);
    }
  };

  const handleNext = () => {
    if (currentIndex < MULTIPLE_CHOICE_QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // ignore
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers({});
    setIsFinished(false);
  };

  const totalCorrect = MULTIPLE_CHOICE_QUESTIONS.filter(
    (q) => selectedAnswers[q.id] === q.correctIndex
  ).length;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
            Quiz de TIC 7º Ano
          </span>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">
            Perguntas de Escolha Múltipla
          </h3>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="px-3 py-1.5 bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold rounded-lg border border-indigo-100 dark:border-indigo-800/60">
            Pergunta {currentIndex + 1} de {MULTIPLE_CHOICE_QUESTIONS.length}
          </span>
        </div>
      </div>

      {!isFinished ? (
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
            <div
              className="bg-indigo-600 dark:bg-indigo-500 h-full transition-all duration-300"
              style={{
                width: `${((currentIndex + 1) / MULTIPLE_CHOICE_QUESTIONS.length) * 100}%`
              }}
            />
          </div>

          {/* Question Box */}
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300">
                {currentQ.topic}
              </span>
            </div>

            <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
              {currentQ.question}
            </h4>

            {currentQ.codeSnippet && (
              <pre className="p-3 bg-slate-900 dark:bg-slate-950 text-emerald-400 font-mono text-xs rounded-xl overflow-x-auto border border-slate-800">
                {currentQ.codeSnippet}
              </pre>
            )}

            {/* 4 Options Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQ.options.map((option, optIdx) => {
                const isSelected = selectedOptionIndex === optIdx;
                const isOptionCorrect = optIdx === currentQ.correctIndex;

                let btnStyle = 'bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';

                if (hasAnsweredCurrent) {
                  if (isOptionCorrect) {
                    btnStyle = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-400 dark:border-emerald-600 text-emerald-950 dark:text-emerald-200 font-bold';
                  } else if (isSelected) {
                    btnStyle = 'bg-rose-50 dark:bg-rose-950/50 border-rose-400 dark:border-rose-600 text-rose-950 dark:text-rose-200';
                  } else {
                    btnStyle = 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={hasAnsweredCurrent}
                    className={`flex items-start gap-3 p-4 rounded-xl border text-left transition-all cursor-pointer ${btnStyle} ${
                      !hasAnsweredCurrent ? 'hover:scale-101 hover:border-indigo-300 dark:hover:border-indigo-600' : ''
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-md text-xs font-bold font-mono flex items-center justify-center shrink-0 ${
                        hasAnsweredCurrent && isOptionCorrect
                          ? 'bg-emerald-600 text-white'
                          : hasAnsweredCurrent && isSelected
                          ? 'bg-rose-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      {String.fromCharCode(65 + optIdx)}
                    </span>
                    <span className="text-xs sm:text-sm font-medium mt-0.5">{option}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation box */}
            {hasAnsweredCurrent && (
              <div
                className={`p-4 rounded-xl border flex items-start gap-3 mt-4 text-xs sm:text-sm animate-in fade-in duration-200 ${
                  isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200'
                    : 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900/60 text-rose-900 dark:text-rose-200'
                }`}
              >
                {isCorrect ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <div className="font-bold">
                    {isCorrect ? 'Resposta Correta! (+20 pontos)' : 'Resposta Errada!'}
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
                <span>{currentIndex < MULTIPLE_CHOICE_QUESTIONS.length - 1 ? 'Seguinte Pergunta' : 'Ver Classificação'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Score Summary */
        <div className="p-8 text-center space-y-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
          <div className="w-16 h-16 bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Award className="w-8 h-8" />
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Quiz Concluído com Sucesso!
          </h4>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Conseguiste <strong className="text-indigo-600 dark:text-indigo-400">{totalCorrect}</strong> respostas certas em{' '}
            <strong>{MULTIPLE_CHOICE_QUESTIONS.length}</strong> perguntas!
          </p>

          <div className="max-w-xs mx-auto p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-mono">
            Classificação final: <strong className="text-emerald-600 dark:text-emerald-400 text-sm">{Math.round((totalCorrect / MULTIPLE_CHOICE_QUESTIONS.length) * 100)}%</strong>
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-500 dark:hover:bg-indigo-400 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Repetir Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
};
