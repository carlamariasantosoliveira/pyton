import React, { useState } from 'react';
import { CURRICULUM_MODULES } from '../data/curriculumData';
import {
  Cpu,
  Layers,
  GitFork,
  Variable,
  Network,
  Terminal,
  CheckCircle2,
  XCircle,
  Sparkles,
  Calculator,
  RefreshCw,
  Plus,
  Trash2
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Cpu: <Cpu className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  GitFork: <GitFork className="w-5 h-5" />,
  Variable: <Variable className="w-5 h-5" />,
  Network: <Network className="w-5 h-5" />,
  Terminal: <Terminal className="w-5 h-5" />
};

export const TheorySection: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState<string>(CURRICULUM_MODULES[0].id);

  // Interactive tool states
  const [memoryValue, setMemoryValue] = useState<number>(2);
  const [memoryUnit, setMemoryUnit] = useState<'GB' | 'MB' | 'TB'>('GB');

  // Variable name tester
  const [testVarName, setTestVarName] = useState<string>('idade_aluno');

  // Logic operator playground
  const [logicA, setLogicA] = useState<boolean>(true);
  const [logicB, setLogicB] = useState<boolean>(false);

  // Interactive list playground (Python)
  const [demoList, setDemoList] = useState<number[]>([12, 34, 5]);
  const [demoItemInput, setDemoItemInput] = useState<number>(20);

  const activeModule = CURRICULUM_MODULES.find((m) => m.id === activeModuleId) || CURRICULUM_MODULES[0];

  const validateVariableName = (name: string) => {
    if (!name || name.trim() === '') {
      return { valid: false, message: 'Escreve um nome para testar!' };
    }
    if (/^\d/.test(name)) {
      return {
        valid: false,
        message: 'Inválido! As variáveis nunca podem começar por um algarismo.'
      };
    }
    if (/\s/.test(name)) {
      return {
        valid: false,
        message: 'Inválido! Não pode conter espaços no meio do nome.'
      };
    }
    if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(name)) {
      return {
        valid: false,
        message: 'Inválido! Apenas são permitidas letras, números e o caracter underscore (_).'
      };
    }
    return {
      valid: true,
      message: `Excelente! "${name}" é um nome de variável válido em Python!`
    };
  };

  const varValidation = validateVariableName(testVarName);

  return (
    <div className="space-y-8">
      {/* Module Selector Bar */}
      <div>
        <div className="text-center md:text-left mb-4">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Módulos de Aprendizagem Teórica
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Explora os apontamentos de TIC adaptados ao 7º ano com explicações claras e simuladores visuais.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {CURRICULUM_MODULES.map((m) => {
            const isSelected = m.id === activeModuleId;
            return (
              <button
                key={m.id}
                onClick={() => setActiveModuleId(m.id)}
                className={`flex flex-col items-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-md scale-102 font-semibold'
                    : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800'
                }`}
              >
                <div className={`p-2 rounded-lg mb-1.5 ${isSelected ? 'bg-indigo-700 dark:bg-indigo-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-indigo-400'}`}>
                  {ICON_MAP[m.icon]}
                </div>
                <span className="text-[10px] font-mono tracking-wider opacity-80 uppercase block">
                  Módulo {m.number}
                </span>
                <span className="text-xs font-bold leading-tight line-clamp-2 mt-0.5">
                  {m.title.split(':')[0]}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Module Details */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-8 transition-colors">
        {/* Module Header */}
        <div className="border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <span>Módulo {activeModule.number}</span>
            <span>·</span>
            <span>TIC 7º Ano</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {activeModule.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mt-2 text-base">
            {activeModule.summary}
          </p>
        </div>

        {/* INTERACTIVE MODULE-SPECIFIC VISUAL LABS */}
        {activeModule.id === 'hardware-software' && (
          <div className="space-y-6">
            {/* Interactive Hardware Architecture Diagram */}
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Como o Computador Funciona (Diagrama da Arquitetura)</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mb-6">
                Clica nos blocos para ver o papel de cada componente no ciclo de processamento da informação:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                {/* Input block */}
                <div className="p-4 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 rounded-xl text-center shadow-xs">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-300 block uppercase">1. Dispositivos de Entrada</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">Teclado, Rato, Microfone</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 block">Enviam dados para o computador</span>
                  <div className="mt-3 inline-flex items-center text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Dados ➔
                  </div>
                </div>

                {/* Central CPU and RAM block */}
                <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 border-2 border-indigo-400 dark:border-indigo-600 rounded-xl text-center shadow-sm relative">
                  <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 block uppercase">2. O Coração & Cérebro</span>
                  <div className="my-2 p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <span className="font-bold text-slate-900 dark:text-white text-sm block">CPU (Processador)</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Executa as contas à velocidade de GHz (Hertz)</span>
                  </div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold my-1">↕ Troca de Instruções ↕</div>
                  <div className="p-2 bg-white dark:bg-slate-800 rounded-lg border border-indigo-200 dark:border-indigo-800">
                    <span className="font-bold text-slate-900 dark:text-white text-sm block">Memória RAM</span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400">Guarda dados temporários dos programas ativos</span>
                  </div>
                </div>

                {/* Output block */}
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-xl text-center shadow-xs">
                  <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 block uppercase">3. Dispositivos de Saída</span>
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">Monitor, Colunas, Impressora</p>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-2 block">Apresentam o resultado ao utilizador</span>
                  <div className="mt-3 inline-flex items-center text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    ➔ Resultados
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Memory Converter */}
            <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 rounded-2xl border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-amber-400" />
                    <span>Calculadora de Unidades de Memória</span>
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Experimenta mudar os valores para ver quanto equivale em MB, KB, Bytes e bits!
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    max="1000"
                    value={memoryValue}
                    onChange={(e) => setMemoryValue(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-20 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-center text-sm"
                  />
                  <select
                    value={memoryUnit}
                    onChange={(e) => setMemoryUnit(e.target.value as any)}
                    className="px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-sm cursor-pointer"
                  >
                    <option value="TB">TB (Terabyte)</option>
                    <option value="GB">GB (Gigabyte)</option>
                    <option value="MB">MB (Megabyte)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Equivalente em GB</span>
                  <span className="text-base font-bold font-mono text-amber-400">
                    {memoryUnit === 'TB' ? memoryValue * 1000 : memoryUnit === 'GB' ? memoryValue : (memoryValue / 1000).toFixed(2)} GB
                  </span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Equivalente em MB</span>
                  <span className="text-base font-bold font-mono text-indigo-400">
                    {memoryUnit === 'TB' ? (memoryValue * 1000000).toLocaleString('pt-PT') : memoryUnit === 'GB' ? (memoryValue * 1000).toLocaleString('pt-PT') : memoryValue} MB
                  </span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Equivalente em KB</span>
                  <span className="text-base font-bold font-mono text-cyan-400">
                    {memoryUnit === 'TB'
                      ? (memoryValue * 1000000000).toLocaleString('pt-PT')
                      : memoryUnit === 'GB'
                      ? (memoryValue * 1000000).toLocaleString('pt-PT')
                      : (memoryValue * 1000).toLocaleString('pt-PT')}{' '}
                    KB
                  </span>
                </div>
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <span className="text-[11px] text-slate-400 block">Bits correspondentes</span>
                  <span className="text-xs font-bold font-mono text-emerald-400 break-all">
                    8 bits × Bytes
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INTERACTIVE MODULE 4: Variable name tester & Truth table */}
        {activeModule.id === 'dados-variaveis-operadores' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Variable tester */}
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Variable className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Testador de Nomes de Variáveis</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Escreve um nome para testares se cumpre as regras do teu manual:
              </p>
              <div className="space-y-3">
                <input
                  type="text"
                  value={testVarName}
                  onChange={(e) => setTestVarName(e.target.value)}
                  placeholder="Ex: nota1, a, xp_25, 2nome..."
                  className="w-full px-3.5 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg text-sm font-mono focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                />
                <div
                  className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                    varValidation.valid
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/60 text-rose-800 dark:text-rose-300'
                  }`}
                >
                  {varValidation.valid ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <span>{varValidation.message}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
                  <p className="font-semibold text-slate-700 dark:text-slate-300">Lembra-te das 3 regras:</p>
                  <p>1. Começar sempre por uma letra.</p>
                  <p>2. Não ter espaços.</p>
                  <p>3. Só pode conter letras, algarismos e o caracter underscore (_).</p>
                  <p className="text-indigo-600 dark:text-indigo-400 font-medium">Nota: O Python faz distinção entre Maiúsculas e Minúsculas (case-sensitive)!</p>
                </div>
              </div>
            </div>

            {/* Interactive Logic Truth Table */}
            <div className="p-5 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Simulador de Operadores Lógicos</span>
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                Altera os botões abaixo e vê o resultado de NOT, AND e OR:
              </p>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Valor 1:</span>
                  <button
                    onClick={() => setLogicA(!logicA)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      logicA ? 'bg-emerald-600 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {logicA ? 'Verdadeiro' : 'Falso'}
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Valor 2:</span>
                  <button
                    onClick={() => setLogicB(!logicB)}
                    className={`px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                      logicB ? 'bg-emerald-600 text-white' : 'bg-slate-300 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {logicB ? 'Verdadeiro' : 'Falso'}
                  </button>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-slate-700 dark:text-slate-300">NOT Valor 1 (Negar)</span>
                  <span className={`font-bold px-2 py-0.5 rounded ${!logicA ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'}`}>
                    {!logicA ? 'Verdadeiro' : 'Falso'}
                  </span>
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-slate-700 dark:text-slate-300">Valor 1 AND Valor 2 (E)</span>
                  <span className={`font-bold px-2 py-0.5 rounded ${logicA && logicB ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'}`}>
                    {logicA && logicB ? 'Verdadeiro' : 'Falso'}
                  </span>
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-mono text-slate-700 dark:text-slate-300">Valor 1 OR Valor 2 (OU)</span>
                  <span className={`font-bold px-2 py-0.5 rounded ${logicA || logicB ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' : 'bg-rose-100 dark:bg-rose-950 text-rose-800 dark:text-rose-300'}`}>
                    {logicA || logicB ? 'Verdadeiro' : 'Falso'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INTERACTIVE MODULE 5: Visual Flowchart shapes */}
        {activeModule.id === 'fluxogramas-pseudocodigo' && (
          <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <Network className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <span>Símbolos Oficiais de Fluxograma (Desenho Gráfico)</span>
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Em programação gráfica, cada forma geométrica tem um significado estrito:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Oval */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-between">
                <svg className="w-24 h-12 my-2" viewBox="0 0 100 50">
                  <rect x="5" y="10" width="90" height="30" rx="15" fill="#EEF2FF" stroke="#4F46E5" strokeWidth="2" />
                  <text x="50" y="30" textAnchor="middle" fontSize="11" fill="#312E81" fontWeight="bold">Início / Fim</text>
                </svg>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">Oval / Elipse</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Começo ou termo do algoritmo</span>
                </div>
              </div>

              {/* Parallelogram */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-between">
                <svg className="w-24 h-12 my-2" viewBox="0 0 100 50">
                  <polygon points="20,10 95,10 80,40 5,40" fill="#F0FDF4" stroke="#16A34A" strokeWidth="2" />
                  <text x="50" y="30" textAnchor="middle" fontSize="10" fill="#14532D" fontWeight="bold">Ler / Escrever</text>
                </svg>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">Paralelogramo</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Entrada ou Saída de dados</span>
                </div>
              </div>

              {/* Rectangle */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-between">
                <svg className="w-24 h-12 my-2" viewBox="0 0 100 50">
                  <rect x="10" y="10" width="80" height="30" fill="#F8FAFC" stroke="#0284C7" strokeWidth="2" />
                  <text x="50" y="30" textAnchor="middle" fontSize="10" fill="#0369A1" fontWeight="bold">Processo / Contas</text>
                </svg>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">Retângulo</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Cálculos e atribuições</span>
                </div>
              </div>

              {/* Diamond / Losango */}
              <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 text-center flex flex-col items-center justify-between">
                <svg className="w-24 h-14 my-1" viewBox="0 0 100 60">
                  <polygon points="50,5 95,30 50,55 5,30" fill="#FFFBEB" stroke="#D97706" strokeWidth="2" />
                  <text x="50" y="34" textAnchor="middle" fontSize="10" fill="#78350F" fontWeight="bold">Condição ?</text>
                </svg>
                <div>
                  <span className="text-xs font-bold text-slate-900 dark:text-white block">Losango</span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400">Decisão lógica (True / False)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* INTERACTIVE MODULE 6: Visual Python List Box */}
        {activeModule.id === 'python-e-listas' && (
          <div className="p-6 bg-slate-900 dark:bg-slate-950 text-white rounded-2xl border border-slate-800">
            <h4 className="text-base font-bold text-white mb-1 flex items-center gap-2">
              <Terminal className="w-5 h-5 text-indigo-400" />
              <span>Simulador Visual de Listas em Python</span>
            </h4>
            <p className="text-xs text-slate-400 mb-6">
              Em Python, os índices começam sempre no 0 até ao tamanho menos 1. Experimenta os métodos:
            </p>

            {/* Visual cells with indices */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {demoList.map((val, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <span className="text-[10px] font-mono text-indigo-300 font-bold mb-1">
                    tab[{idx}]
                  </span>
                  <div className="w-14 h-14 bg-indigo-600/30 border-2 border-indigo-500 rounded-xl flex items-center justify-center font-mono font-bold text-white text-base shadow-sm">
                    {val}
                  </div>
                  <span className="text-[9px] text-slate-400 mt-1">índice {idx}</span>
                </div>
              ))}
              {demoList.length === 0 && (
                <div className="p-4 rounded-xl border border-dashed border-slate-700 text-slate-400 text-xs">
                  A lista está vazia! tab = []
                </div>
              )}
            </div>

            {/* List control action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={demoItemInput}
                  onChange={(e) => setDemoItemInput(parseInt(e.target.value) || 0)}
                  className="w-16 px-2.5 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white font-mono text-center text-xs"
                />
                <button
                  onClick={() => setDemoList([...demoList, demoItemInput])}
                  className="flex items-center gap-1 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>tab.append({demoItemInput})</span>
                </button>
              </div>

              <button
                onClick={() => {
                  const sorted = [...demoList].sort((a, b) => a - b);
                  setDemoList(sorted);
                }}
                disabled={demoList.length <= 1}
                className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-200 rounded-lg text-xs font-semibold border border-slate-700 transition-colors cursor-pointer"
              >
                tab.sort()
              </button>

              <button
                onClick={() => {
                  if (demoList.length > 0) {
                    setDemoList(demoList.slice(0, demoList.length - 1));
                  }
                }}
                disabled={demoList.length === 0}
                className="flex items-center gap-1 px-3 py-1.5 bg-rose-900/60 hover:bg-rose-800 text-rose-200 rounded-lg text-xs font-semibold border border-rose-800/50 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>tab.pop()</span>
              </button>

              <button
                onClick={() => setDemoList([12, 34, 5])}
                className="flex items-center gap-1 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors cursor-pointer ml-auto"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Repor [12, 34, 5]</span>
              </button>

              <div className="w-full text-xs font-mono text-slate-400 mt-1">
                Tamanho atual: <span className="text-amber-400 font-bold">len(tab) = {demoList.length}</span>
              </div>
            </div>
          </div>
        )}

        {/* Regular Sections within the Module */}
        <div className="space-y-8 pt-4">
          {activeModule.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-bold flex items-center justify-center">
                  {idx + 1}
                </span>
                <span>{section.heading}</span>
              </h4>

              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                {section.content}
              </p>

              {/* Tips or Bullet Items */}
              {section.tips && (
                <ul className="space-y-2 pl-2">
                  {section.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Code Example block */}
              {section.example && (
                <div className="bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-xl p-4 font-mono text-xs overflow-x-auto border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-[11px] mb-2 pb-2 border-b border-slate-800 font-sans">
                    <span className="font-semibold text-amber-400">{section.example.title}</span>
                    <span>Python 3</span>
                  </div>
                  {section.example.code && (
                    <pre className="text-emerald-400 whitespace-pre leading-relaxed">
                      {section.example.code}
                    </pre>
                  )}
                  <p className="mt-2 text-slate-300 font-sans text-xs italic">
                    💡 {section.example.explanation}
                  </p>
                </div>
              )}

              {/* Table rendering if exists */}
              {section.table && (
                <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-800/40'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300 font-medium">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
