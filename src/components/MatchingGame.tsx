import React, { useState } from 'react';
import { MATCHING_GAMES } from '../data/quizData';
import { MatchCategory } from '../types';
import { Check, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MatchingGameProps {
  onScoreEarned: (points: number) => void;
}

export const MatchingGame: React.FC<MatchingGameProps> = ({ onScoreEarned }) => {
  const [selectedGameId, setSelectedGameId] = useState<string>(MATCHING_GAMES[0].id);
  const activeGame: MatchCategory =
    MATCHING_GAMES.find((g) => g.id === selectedGameId) || MATCHING_GAMES[0];

  // Mapping of item ID -> matched category ID
  const [userMatches, setUserMatches] = useState<Record<string, string>>({});
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const [, setIsCompleted] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectGame = (gameId: string) => {
    setSelectedGameId(gameId);
    setUserMatches({});
    setSelectedItem(null);
    setIsCompleted(false);
    setShowResults(false);
  };

  const handleSelectItem = (itemId: string) => {
    if (showResults) return;
    setSelectedItem(itemId === selectedItem ? null : itemId);
  };

  const handleAssignCategory = (catId: string) => {
    if (!selectedItem || showResults) return;
    const newMatches = { ...userMatches, [selectedItem]: catId };
    setUserMatches(newMatches);
    setSelectedItem(null);

    if (Object.keys(newMatches).length === activeGame.pairs.length) {
      setIsCompleted(true);
    }
  };

  const handleCheckAnswers = () => {
    setShowResults(true);
    let correctCount = 0;
    activeGame.pairs.forEach((pair) => {
      if (userMatches[pair.id] === pair.category) {
        correctCount++;
      }
    });

    const points = correctCount * 15;
    onScoreEarned(points);

    if (correctCount === activeGame.pairs.length) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Confetti fallback
      }
    }
  };

  const handleReset = () => {
    setUserMatches({});
    setSelectedItem(null);
    setIsCompleted(false);
    setShowResults(false);
  };

  const correctMatchesCount = activeGame.pairs.filter(
    (p) => userMatches[p.id] === p.category
  ).length;

  return (
    <div className="space-y-6">
      {/* Category selector */}
      <div className="flex flex-wrap gap-2">
        {MATCHING_GAMES.map((game) => (
          <button
            key={game.id}
            onClick={() => handleSelectGame(game.id)}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              game.id === activeGame.id
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800'
            }`}
          >
            {game.title}
          </button>
        ))}
      </div>

      {/* Game Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors">
        <div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white">{activeGame.title}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{activeGame.description}</p>
          <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mt-2">
            💡 Instrução: Clica num item e depois clica na categoria correspondente.
          </div>
        </div>

        {/* Categories Targets */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Categorias de Destino (Clica para associar o item selecionado)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {activeGame.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleAssignCategory(cat.id)}
                disabled={!selectedItem || showResults}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                  selectedItem && !showResults
                    ? 'border-indigo-400 dark:border-indigo-500 bg-indigo-50/70 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 hover:scale-102 ring-2 ring-indigo-300 dark:ring-indigo-700'
                    : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span className="text-xs font-bold block text-slate-900 dark:text-white">{cat.label}</span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-1">
                  {selectedItem && !showResults
                    ? '➔ Clica aqui para associar!'
                    : `${Object.values(userMatches).filter((c) => c === cat.id).length} itens associados`}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Items to match */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
            Itens a Associar ({Object.keys(userMatches).length} / {activeGame.pairs.length})
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {activeGame.pairs.map((pair) => {
              const matchedCatId = userMatches[pair.id];
              const matchedCat = activeGame.categories.find((c) => c.id === matchedCatId);
              const isSelected = selectedItem === pair.id;
              const isCorrect = matchedCatId === pair.category;

              return (
                <div
                  key={pair.id}
                  onClick={() => handleSelectItem(pair.id)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    showResults
                      ? isCorrect
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                        : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-950 dark:text-rose-200'
                      : isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 shadow-md scale-102'
                      : matchedCat
                      ? 'bg-slate-100 dark:bg-slate-800 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                      : 'bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-750 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm">{pair.item}</span>
                    {showResults && (
                      <span className="text-xs font-bold">
                        {isCorrect ? '✓ Certo' : '✗ Errado'}
                      </span>
                    )}
                  </div>

                  {matchedCat && !showResults && (
                    <div className="mt-2 text-[11px] font-semibold text-indigo-700 dark:text-indigo-300 bg-white/80 dark:bg-slate-900/80 px-2 py-0.5 rounded inline-block">
                      {matchedCat.label}
                    </div>
                  )}

                  {showResults && (
                    <div className="mt-2 text-[11px] space-y-1">
                      <div className="font-medium">
                        A tua resposta: <span className="font-bold">{matchedCat?.label || 'Nenhuma'}</span>
                      </div>
                      {!isCorrect && (
                        <div className="text-rose-700 dark:text-rose-400 font-bold">
                          Correto:{' '}
                          {activeGame.categories.find((c) => c.id === pair.category)?.label}
                        </div>
                      )}
                      {pair.explanation && (
                        <div className="text-slate-600 dark:text-slate-400 text-[10px] italic pt-1 border-t border-slate-200 dark:border-slate-800">
                          {pair.explanation}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            {!showResults ? (
              <button
                onClick={handleCheckAnswers}
                disabled={Object.keys(userMatches).length === 0}
                className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-xs transition-all cursor-pointer"
              >
                <Check className="w-4 h-4" />
                <span>Verificar Respostas</span>
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex items-center gap-2 px-4 py-2.5 bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white font-semibold text-xs rounded-xl transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Jogar Novamente</span>
              </button>
            )}

            <button
              onClick={handleReset}
              className="px-3 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-xs font-semibold cursor-pointer"
            >
              Limpar Seleções
            </button>
          </div>

          {showResults && (
            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="text-slate-500 dark:text-slate-400">Pontuação:</span>
              <span className="px-2.5 py-1 bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 font-bold rounded-lg border border-amber-200 dark:border-amber-800/60">
                {correctMatchesCount} / {activeGame.pairs.length} Acertos (+{correctMatchesCount * 15} pts)
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
