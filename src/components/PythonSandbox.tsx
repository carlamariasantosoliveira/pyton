import React, { useState } from 'react';
import { Terminal, Play, RotateCcw, ExternalLink, Copy, Check } from 'lucide-react';

interface CodePreset {
  id: string;
  name: string;
  code: string;
  description: string;
  inputs?: string[];
  simulatedOutput: (userInputs: string[]) => string[];
}

const PRESETS: CodePreset[] = [
  {
    id: 'hello_input',
    name: '1. Leitura e Escrita Básica (input / print)',
    description: 'Página 27: Leitura de um texto com input() e visualização com print().',
    inputs: ['Porto'],
    code: `# Programa simples de leitura e escrita
nome = input("Digite o teu nome: ")
print("Olá,", nome, "! Bem-vindo à aula de TIC.")
print("A programar em Python no 7º ano!")`,
    simulatedOutput: (inputs) => {
      const val = inputs[0] || 'Aluno';
      return [
        `Digite o teu nome: ${val}`,
        `Olá, ${val} ! Bem-vindo à aula de TIC.`,
        'A programar em Python no 7º ano!'
      ];
    }
  },
  {
    id: 'ex1_soma',
    name: '2. EX 1: Soma com float()',
    description: 'Página 29: Lê dois números reais (com vírgula) e calcula a sua soma.',
    inputs: ['12.5', '7.5'],
    code: `# EX 1 - Ler dois números reais e somar
a = float(input("Digite um número real="))
b = float(input("Digite outro número real="))
print("A soma dos números=", a + b)`,
    simulatedOutput: (inputs) => {
      const a = parseFloat(inputs[0] || '12.5');
      const b = parseFloat(inputs[1] || '7.5');
      return [
        `Digite um número real= ${a}`,
        `Digite outro número real= ${b}`,
        `A soma dos números= ${a + b}`
      ];
    }
  },
  {
    id: 'ex7_if',
    name: '3. EX 7: Decisão Se a == 23',
    description: 'Página 32: Verifica se o número inteiro introduzido é igual a 23.',
    inputs: ['23'],
    code: `# EX 7 - Decisão simples
a = int(input("Digite um número inteiro="))
if a == 23:
    print("válido")
else:
    print("inválido")`,
    simulatedOutput: (inputs) => {
      const val = parseInt(inputs[0] || '23', 10);
      return [
        `Digite um número inteiro= ${val}`,
        val === 23 ? 'válido' : 'inválido'
      ];
    }
  },
  {
    id: 'ex12_for',
    name: '4. EX 12: Ciclo for com range(1, 6)',
    description: 'Página 34: Apresenta a sequência de 1 a 5.',
    inputs: [],
    code: `# EX 12 - Repetição com ciclo for
print("--- Início do Ciclo ---")
for a in range(1, 6):
    print(a)
print("--- Fim do Ciclo ---")`,
    simulatedOutput: () => [
      '--- Início do Ciclo ---',
      '1',
      '2',
      '3',
      '4',
      '5',
      '--- Fim do Ciclo ---'
    ]
  },
  {
    id: 'ex17_count',
    name: '5. EX 17: Listas e método count()',
    description: 'Páginas 39-40: Cria uma lista de números e conta quantas vezes o 10 aparece.',
    inputs: [],
    code: `# EX 17 - Listas e método count
tab = [10, 5, 20, 10, 8, 10, 3]
print("Conteúdo da lista:", tab)
print("Número total de elementos:", len(tab))
print("Quantidade de vezes que o 10 aparece:", tab.count(10))`,
    simulatedOutput: () => [
      'Conteúdo da lista: [10, 5, 20, 10, 8, 10, 3]',
      'Número total de elementos: 7',
      'Quantidade de vezes que o 10 aparece: 3'
    ]
  },
  {
    id: 'ex19_sort',
    name: '6. EX 19: Ordenar Lista com sort()',
    description: 'Página 41: Ordena os elementos por ordem crescente.',
    inputs: [],
    code: `# EX 19 - Ordenação crescente com sort()
tab = [45, 12, 89, 23, 7, 94]
print("Lista desordenada:", tab)
tab.sort()
print("Lista após tab.sort():", tab)
print("O menor elemento é:", tab[0])
print("O maior elemento é:", tab[len(tab) - 1])`,
    simulatedOutput: () => [
      'Lista desordenada: [45, 12, 89, 23, 7, 94]',
      'Lista após tab.sort(): [7, 12, 23, 45, 89, 94]',
      'O menor elemento é: 7',
      'O maior elemento é: 94'
    ]
  }
];

export const PythonSandbox: React.FC = () => {
  const [selectedPresetId, setSelectedPresetId] = useState<string>(PRESETS[0].id);
  const activePreset = PRESETS.find((p) => p.id === selectedPresetId) || PRESETS[0];

  const [code, setCode] = useState<string>(activePreset.code);
  const [inputs, setInputs] = useState<string[]>(activePreset.inputs || []);
  const [terminalOutput, setTerminalOutput] = useState<string[] | null>(null);
  const [hasCopied, setHasCopied] = useState<boolean>(false);

  const handleSelectPreset = (p: CodePreset) => {
    setSelectedPresetId(p.id);
    setCode(p.code);
    setInputs(p.inputs || []);
    setTerminalOutput(null);
  };

  const handleRunCode = () => {
    const result = activePreset.simulatedOutput(inputs);
    setTerminalOutput(result);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Laboratório Interativo Python 3
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Experimenta o código dos teus apontamentos diretamente no navegador ou copia para o compilador online.
          </p>
        </div>

        {/* Link to Programiz Compiler mentioned in PDF page 26 */}
        <a
          href="https://www.programiz.com/python-programming/online-compiler/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 dark:bg-slate-800 hover:bg-slate-700 dark:hover:bg-slate-700 text-white text-xs font-semibold rounded-xl transition-colors shrink-0 border border-slate-700"
        >
          <span>Abrir Programiz Compiler (PDF pág. 26)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Preset template cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => handleSelectPreset(p)}
            className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer ${
              p.id === activePreset.id
                ? 'bg-indigo-600 dark:bg-indigo-500 text-white border-indigo-600 dark:border-indigo-500 shadow-xs'
                : 'bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
            }`}
          >
            <span className="text-[11px] font-bold block leading-tight line-clamp-2">
              {p.name}
            </span>
          </button>
        ))}
      </div>

      {/* Code Editor and Virtual Terminal Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Editor (Left) */}
        <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-4">
          <div className="flex items-center justify-between text-slate-400 text-xs pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-slate-300 font-semibold">main.py</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-[11px] cursor-pointer"
                title="Copiar código para a área de transferência"
              >
                {hasCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{hasCopied ? 'Copiado!' : 'Copiar'}</span>
              </button>
              <span className="text-[11px] text-slate-500">Python 3.12</span>
            </div>
          </div>

          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={12}
            className="w-full bg-transparent text-emerald-400 font-mono text-xs sm:text-sm leading-relaxed focus:outline-none resize-none"
            spellCheck={false}
          />

          {/* Interactive inputs if required */}
          {activePreset.inputs && activePreset.inputs.length > 0 && (
            <div className="pt-3 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 block mb-2">
                ⌨️ Valores para os comandos input():
              </span>
              <div className="flex flex-wrap gap-2">
                {inputs.map((inp, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-slate-400">input #{idx + 1}:</span>
                    <input
                      type="text"
                      value={inp}
                      onChange={(e) => {
                        const copy = [...inputs];
                        copy[idx] = e.target.value;
                        setInputs(copy);
                      }}
                      className="w-24 px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-white font-mono focus:border-indigo-500 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Run button */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleRunCode}
              className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Play className="w-4 h-4" />
              <span>Executar no Terminal Virtual</span>
            </button>

            <button
              onClick={() => handleSelectPreset(activePreset)}
              className="flex items-center gap-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-xl text-xs transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repor Código Original</span>
            </button>
          </div>
        </div>

        {/* Output Console (Right) */}
        <div className="lg:col-span-5 bg-slate-900 rounded-2xl border border-slate-800 p-5 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-400 text-xs pb-3 border-b border-slate-800">
              <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-indigo-400" />
                <span>Consola Virtual de Saída</span>
              </span>
              {terminalOutput && (
                <span className="text-emerald-400 text-[11px] font-bold">● Pronto</span>
              )}
            </div>

            <div className="mt-4 font-mono text-xs space-y-2 min-h-[160px]">
              {terminalOutput ? (
                terminalOutput.map((line, lIdx) => (
                  <div key={lIdx} className="text-slate-100 leading-relaxed">
                    <span className="text-slate-500 select-none mr-2">&gt;</span>
                    {line}
                  </div>
                ))
              ) : (
                <div className="text-slate-500 text-xs italic py-8 text-center">
                  Clica em &quot;Executar no Terminal Virtual&quot; para ver o resultado do teu código Python!
                </div>
              )}
            </div>
          </div>

          <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-[11px] text-slate-300 space-y-1">
            <span className="font-bold text-amber-400 block">💡 Sabias que?</span>
            <p>
              Em Python, a função <code>print()</code> mostra as coisas no ecrã. Para juntares texto com contas podes usar uma vírgula: <code>print(&quot;Soma=&quot;, a + b)</code>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
