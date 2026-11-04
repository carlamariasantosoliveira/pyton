import React, { useState } from 'react';
import { EXERCISES_DATA } from '../data/exercisesData';
import { ExerciseItem } from '../types';
import {
  Code,
  GitBranch,
  Terminal,
  Play,
  RotateCcw,
  CheckCircle,
  FileText,
  Layers,
  ArrowDown
} from 'lucide-react';

export const ExercisesExplorer: React.FC = () => {
  const [selectedExId, setSelectedExId] = useState<number>(1);
  const [activeViewTab, setActiveViewTab] = useState<'pseudocodigo' | 'fluxograma' | 'python' | 'simulador'>('python');
  const [categoryFilter, setCategoryFilter] = useState<'todos' | 'sequencial' | 'decisao' | 'repeticao' | 'listas'>('todos');

  const selectedExercise: ExerciseItem =
    EXERCISES_DATA.find((ex) => ex.id === selectedExId) || EXERCISES_DATA[0];

  // Simulator input values
  const [simInputs, setSimInputs] = useState<Record<string, any>>(() => {
    const initial: Record<string, any> = {};
    selectedExercise.sampleInputs.forEach((inp) => {
      initial[inp.label] = inp.defaultValue;
    });
    return initial;
  });

  const [simResult, setSimResult] = useState<{ output: string[]; variables: Record<string, any> } | null>(null);

  const handleSelectExercise = (ex: ExerciseItem) => {
    setSelectedExId(ex.id);
    const initial: Record<string, any> = {};
    ex.sampleInputs.forEach((inp) => {
      initial[inp.label] = inp.defaultValue;
    });
    setSimInputs(initial);
    setSimResult(null);
  };

  const handleInputChange = (label: string, value: any) => {
    setSimInputs((prev) => ({
      ...prev,
      [label]: value
    }));
  };

  const runSimulation = () => {
    try {
      const res = selectedExercise.runSimulation(simInputs);
      setSimResult(res);
    } catch (err: any) {
      setSimResult({
        output: [`Erro na execução: ${err.message}`],
        variables: {}
      });
    }
  };

  const filteredExercises = EXERCISES_DATA.filter((ex) => {
    if (categoryFilter === 'todos') return true;
    return ex.category === categoryFilter;
  });

  return (
    <div className="space-y-6">
      {/* Title & Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Exercícios do Manual (1 a 23)
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Compara a mesma resolução em Pseudocódigo, Fluxograma gráfico e Python 3, e testa no simulador.
          </p>
        </div>

        {/* Category Filter segmented tabs */}
        <div className="flex items-center gap-1 p-1 bg-slate-200/80 dark:bg-slate-800 rounded-xl overflow-x-auto text-xs font-semibold text-slate-700 dark:text-slate-300">
          <button
            onClick={() => setCategoryFilter('todos')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryFilter === 'todos' ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Todos ({EXERCISES_DATA.length})
          </button>
          <button
            onClick={() => setCategoryFilter('sequencial')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryFilter === 'sequencial' ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Sequenciais (EX 1-6)
          </button>
          <button
            onClick={() => setCategoryFilter('decisao')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryFilter === 'decisao' ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Decisão / Se (EX 7-11)
          </button>
          <button
            onClick={() => setCategoryFilter('repeticao')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryFilter === 'repeticao' ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Ciclos / For / While (EX 12-14)
          </button>
          <button
            onClick={() => setCategoryFilter('listas')}
            className={`px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              categoryFilter === 'listas' ? 'bg-white dark:bg-slate-700 text-indigo-700 dark:text-indigo-300 shadow-xs' : 'hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Listas / Vetores (EX 15-23)
          </button>
        </div>
      </div>

      {/* Main Split Layout: Exercise List Sidebar & Exercise Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Exercise Items Carousel / List */}
        <div className="lg:col-span-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 shadow-xs max-h-[750px] overflow-y-auto space-y-2 transition-colors">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 px-2 py-1">
            Escolhe um Exercício
          </div>
          {filteredExercises.map((ex) => {
            const isSelected = ex.id === selectedExercise.id;
            return (
              <button
                key={ex.id}
                onClick={() => handleSelectExercise(ex)}
                className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                  isSelected
                    ? 'bg-indigo-50/80 dark:bg-indigo-950/60 border-indigo-400 dark:border-indigo-600 text-indigo-950 dark:text-indigo-200 shadow-xs'
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                }`}
              >
                <span
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 ${
                    isSelected
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {ex.id}
                </span>
                <div className="min-w-0 flex-1">
                  <h4 className="text-xs font-bold leading-tight truncate">
                    {ex.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                    {ex.description}
                  </p>
                  <div className="flex items-center gap-2 mt-1.5 text-[10px] text-slate-400 dark:text-slate-500">
                    <span className="capitalize">{ex.category}</span>
                    <span>·</span>
                    <span>PDF pág. {ex.id <= 6 ? 10 + ex.id - 1 : ex.id <= 11 ? 16 + ex.id - 7 : ex.id <= 14 ? 22 + ex.id - 12 : 35 + ex.id - 15}</span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Active Exercise Workspace */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-6 transition-colors">
          {/* Exercise Heading */}
          <div className="border-b border-slate-100 dark:border-slate-800 pb-5">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <span>Exercício {selectedExercise.id}</span>
              <span>·</span>
              <span className="capitalize">{selectedExercise.category}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {selectedExercise.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              {selectedExercise.description}
            </p>

            {(selectedExercise.inputDescription || selectedExercise.outputDescription) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                {selectedExercise.inputDescription && (
                  <div className="p-2.5 bg-blue-50/60 dark:bg-blue-950/40 rounded-lg border border-blue-100 dark:border-blue-900/50">
                    <span className="font-bold text-blue-900 dark:text-blue-300 block">📥 Dados de Entrada:</span>
                    <span className="text-blue-800 dark:text-blue-200">{selectedExercise.inputDescription}</span>
                  </div>
                )}
                {selectedExercise.outputDescription && (
                  <div className="p-2.5 bg-emerald-50/60 dark:bg-emerald-950/40 rounded-lg border border-emerald-100 dark:border-emerald-900/50">
                    <span className="font-bold text-emerald-900 dark:text-emerald-300 block">📤 Dados de Saída:</span>
                    <span className="text-emerald-800 dark:text-emerald-200">{selectedExercise.outputDescription}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* View Mode Tabs (Pseudocódigo / Fluxograma / Python / Simulador) */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-2 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveViewTab('python')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeViewTab === 'python'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>Código Python 3</span>
            </button>

            <button
              onClick={() => setActiveViewTab('pseudocodigo')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeViewTab === 'pseudocodigo'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Pseudocódigo</span>
            </button>

            <button
              onClick={() => setActiveViewTab('fluxograma')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeViewTab === 'fluxograma'
                  ? 'bg-indigo-600 dark:bg-indigo-500 text-white font-bold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <GitBranch className="w-4 h-4" />
              <span>Fluxograma Visual</span>
            </button>

            <button
              onClick={() => setActiveViewTab('simulador')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                activeViewTab === 'simulador'
                  ? 'bg-emerald-600 dark:bg-emerald-500 text-white font-bold'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800/60'
              }`}
            >
              <Play className="w-4 h-4" />
              <span>Simulador Interativo</span>
            </button>
          </div>

          {/* VIEW: Python Code */}
          {activeViewTab === 'python' && (
            <div className="space-y-4">
              <div className="bg-slate-950 text-slate-100 rounded-xl p-5 font-mono text-xs sm:text-sm border border-slate-800 shadow-inner relative overflow-x-auto">
                <div className="flex items-center justify-between text-slate-400 text-xs pb-3 mb-3 border-b border-slate-800 font-sans">
                  <span className="font-semibold text-indigo-400">programa_ex{selectedExercise.id}.py</span>
                  <span className="text-[11px] bg-slate-800 px-2 py-0.5 rounded text-slate-300">Python 3</span>
                </div>
                <pre className="text-emerald-400 leading-relaxed font-mono">
                  {selectedExercise.pythonCode}
                </pre>
              </div>

              {selectedExercise.alternativePythonCode && (
                <div className="bg-slate-900 text-slate-200 rounded-xl p-4 font-mono text-xs border border-slate-800">
                  <span className="text-[11px] text-amber-400 font-sans font-semibold block mb-2">
                    Versão Alternativa no PDF:
                  </span>
                  <pre className="text-amber-300 whitespace-pre">
                    {selectedExercise.alternativePythonCode}
                  </pre>
                </div>
              )}

              <div className="p-3 bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 rounded-xl text-xs text-indigo-900 dark:text-indigo-200">
                💡 <strong>Dica para 7º Ano:</strong> Repara que todas as linhas dentro de estruturas <code>if</code>, <code>for</code> ou <code>while</code> começam com um avanço (tecla TAB). No Python, isso chama-se <strong>indentação</strong>!
              </div>
            </div>
          )}

          {/* VIEW: Pseudocódigo */}
          {activeViewTab === 'pseudocodigo' && (
            <div className="space-y-4">
              <div className="bg-slate-900 text-slate-100 rounded-xl p-5 font-mono text-xs sm:text-sm border border-slate-800 shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between text-slate-400 text-xs pb-3 mb-3 border-b border-slate-800 font-sans">
                  <span className="font-semibold text-cyan-400">Pseudocódigo Normalizado</span>
                  <span className="text-[11px] text-slate-400">Linguagem Estruturada</span>
                </div>
                <pre className="text-cyan-300 leading-relaxed whitespace-pre font-mono">
                  {selectedExercise.pseudocode}
                </pre>
              </div>

              {selectedExercise.alternativePseudocode && (
                <div className="bg-slate-800 text-slate-200 rounded-xl p-4 font-mono text-xs border border-slate-700">
                  <pre className="text-amber-300 whitespace-pre font-mono">
                    {selectedExercise.alternativePseudocode}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* VIEW: Fluxograma Visual */}
          {activeViewTab === 'fluxograma' && (
            <div className="p-6 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col items-center space-y-3">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">
                Fluxo de Execução Visual (Passo a Passo)
              </div>

              {selectedExercise.flowchartSteps.map((step, idx) => (
                <React.Fragment key={idx}>
                  {/* Shape Node */}
                  {step.shape === 'start_end' && (
                    <div className="px-6 py-2 bg-indigo-100 dark:bg-indigo-950/70 border-2 border-indigo-600 dark:border-indigo-500 rounded-full text-indigo-900 dark:text-indigo-200 font-bold text-xs shadow-xs text-center min-w-[140px]">
                      {step.text}
                    </div>
                  )}

                  {step.shape === 'input_output' && (
                    <div className="relative px-6 py-2.5 bg-emerald-50 dark:bg-emerald-950/60 border-2 border-emerald-600 dark:border-emerald-500 rounded-lg text-emerald-900 dark:text-emerald-200 font-semibold text-xs shadow-xs text-center min-w-[160px] transform -skew-x-12">
                      <div className="transform skew-x-12">{step.text}</div>
                    </div>
                  )}

                  {step.shape === 'process' && (
                    <div className="px-5 py-2.5 bg-blue-50 dark:bg-blue-950/60 border-2 border-blue-600 dark:border-blue-500 rounded-md text-blue-900 dark:text-blue-200 font-mono font-medium text-xs shadow-xs text-center min-w-[160px]">
                      {step.text}
                    </div>
                  )}

                  {step.shape === 'decision' && (
                    <div className="relative p-4 bg-amber-50 dark:bg-amber-950/60 border-2 border-amber-600 dark:border-amber-500 rounded-xl text-amber-950 dark:text-amber-200 font-bold text-xs shadow-xs text-center min-w-[200px]">
                      <div className="mb-1 text-amber-800 dark:text-amber-300">Decisão: {step.text}</div>
                      {step.conditionTrue && (
                        <div className="text-[11px] text-emerald-700 dark:text-emerald-300 bg-emerald-100/70 dark:bg-emerald-900/40 p-1.5 rounded mt-1 font-normal">
                          ✓ Se Verdade: {step.conditionTrue}
                        </div>
                      )}
                      {step.conditionFalse && (
                        <div className="text-[11px] text-rose-700 dark:text-rose-300 bg-rose-100/70 dark:bg-rose-900/40 p-1.5 rounded mt-1 font-normal">
                          ✗ Se Falso: {step.conditionFalse}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Flow Arrow */}
                  {idx < selectedExercise.flowchartSteps.length - 1 && (
                    <div className="flex flex-col items-center text-slate-400 dark:text-slate-600">
                      <div className="w-0.5 h-4 bg-slate-300 dark:bg-slate-700" />
                      <ArrowDown className="w-4 h-4 text-slate-400 dark:text-slate-600 -mt-1" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* VIEW: Interactive Simulator */}
          {activeViewTab === 'simulador' && (
            <div className="space-y-6">
              <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Play className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span>Insere os teus dados de teste:</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedExercise.sampleInputs.map((inputDef) => (
                    <div key={inputDef.label} className="space-y-1">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block">
                        {inputDef.label}
                      </label>
                      <input
                        type={typeof inputDef.defaultValue === 'number' ? 'number' : 'text'}
                        value={simInputs[inputDef.label] ?? ''}
                        onChange={(e) => handleInputChange(inputDef.label, e.target.value)}
                        className="w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg text-xs font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    onClick={runSimulation}
                    className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <Play className="w-4 h-4" />
                    <span>Executar Algoritmo</span>
                  </button>

                  <button
                    onClick={() => {
                      const initial: Record<string, any> = {};
                      selectedExercise.sampleInputs.forEach((inp) => {
                        initial[inp.label] = inp.defaultValue;
                      });
                      setSimInputs(initial);
                      setSimResult(null);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Repor Valores</span>
                  </button>
                </div>
              </div>

              {/* Simulation Output Console */}
              {simResult && (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div className="bg-slate-950 text-slate-100 rounded-xl p-5 border border-slate-800 shadow-inner font-mono text-xs">
                    <div className="flex items-center justify-between text-slate-400 text-xs pb-2 mb-3 border-b border-slate-800 font-sans">
                      <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                        <Terminal className="w-4 h-4" />
                        <span>Consola de Saída (print)</span>
                      </span>
                      <span className="text-emerald-500 font-bold">● Sucesso</span>
                    </div>

                    <div className="space-y-1.5">
                      {simResult.output.map((line, lIdx) => (
                        <div key={lIdx} className="text-emerald-300">
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Variables Memory Box */}
                  <div className="p-4 bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 rounded-xl">
                    <span className="text-xs font-bold text-indigo-950 dark:text-indigo-200 block mb-2">
                      🧠 Estado da Memória RAM (Variáveis criadas):
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(simResult.variables).map(([k, v]) => (
                        <div
                          key={k}
                          className="px-3 py-1.5 bg-white dark:bg-slate-800 border border-indigo-200 dark:border-indigo-800 rounded-lg text-xs font-mono shadow-2xs"
                        >
                          <span className="text-indigo-600 dark:text-indigo-400 font-semibold">{k}</span>
                          <span className="text-slate-400 mx-1">=</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            {typeof v === 'object' ? JSON.stringify(v) : String(v)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
