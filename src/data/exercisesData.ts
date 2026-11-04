import { ExerciseItem } from '../types';

export const EXERCISES_DATA: ExerciseItem[] = [
  {
    id: 1,
    title: 'EX 1: Soma de Dois Números Reais',
    category: 'sequencial',
    description: 'Efetuar a leitura de dois valores reais e apresentar a soma deles.',
    inputDescription: '2 valores reais (com casas decimais)',
    outputDescription: '1 valor real com a soma',
    operationsDescription: 'somar os dois valores (a + b)',
    pseudocode: `Algoritmo ex1
Variáveis a, b, c: real
Início
   Ler ( a, b )
   c = a + b
   Escrever ( c )
Fim`,
    alternativePseudocode: `// Versão alternativa poupando uma variável:
Algoritmo ex1v2
Variáveis a, b: real
Início
   Ler (a, b)
   Escrever (a + b)
Fim`,
    pythonCode: `a = float(input("Digite um número real="))
b = float(input("Digite outro número real="))
print("A soma dos números=", a + b)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a, b )' },
      { shape: 'process', text: 'c = a + b' },
      { shape: 'input_output', text: 'Escrever ( c )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Número a', defaultValue: 12.5 },
      { label: 'Número b', defaultValue: 7.3 }
    ],
    runSimulation: (inputs) => {
      const a = parseFloat(inputs['Número a'] ?? 0);
      const b = parseFloat(inputs['Número b'] ?? 0);
      const c = Number((a + b).toFixed(2));
      return {
        output: [`A soma dos números = ${c}`],
        variables: { a, b, c }
      };
    }
  },
  {
    id: 2,
    title: 'EX 2: Média de Dois Números Inteiros',
    category: 'sequencial',
    description: 'Efetuar a leitura de dois valores inteiros e apresentar a média aritmética deles.',
    inputDescription: '2 valores inteiros',
    outputDescription: '1 valor com a média',
    operationsDescription: '(x + y) / 2',
    pseudocode: `Algoritmo ex2
Variáveis x, y: inteiro
Início
   Ler ( x, y )
   Escrever ( (x + y) / 2 )
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
b = int(input("Digite outro número inteiro="))
print("A média dos números=", (a + b) / 2)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( x, y )' },
      { shape: 'input_output', text: 'Escrever ( (x + y) / 2 )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Número x', defaultValue: 14 },
      { label: 'Número y', defaultValue: 18 }
    ],
    runSimulation: (inputs) => {
      const x = parseInt(inputs['Número x'] ?? 0, 10);
      const y = parseInt(inputs['Número y'] ?? 0, 10);
      const media = (x + y) / 2;
      return {
        output: [`A média dos números = ${media}`],
        variables: { x, y, media }
      };
    }
  },
  {
    id: 3,
    title: 'EX 3: Operações com Três Números Inteiros',
    category: 'sequencial',
    description: 'Ler três números inteiros e apresentar a soma do 1º com o 3º e a subtração do 2º pelo 3º.',
    inputDescription: '3 números inteiros (a, b, c)',
    outputDescription: 'Soma de a+c e subtração de b-c',
    pseudocode: `Algoritmo ex3
Variáveis a, b, c: inteiro
Início
   Ler ( a, b, c )
   Escrever ( a + c, b - c )
Fim`,
    pythonCode: `a = int(input("Primeiro número inteiro="))
b = int(input("Segundo número inteiro="))
c = int(input("Terceiro número inteiro="))
print("Soma do primeiro com o terceiro=", a + c)
print("Subtração do segundo pelo terceiro=", b - c)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a, b, c )' },
      { shape: 'input_output', text: 'Escrever ( a + c, b - c )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Primeiro (a)', defaultValue: 10 },
      { label: 'Segundo (b)', defaultValue: 25 },
      { label: 'Terceiro (c)', defaultValue: 5 }
    ],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Primeiro (a)'] ?? 0, 10);
      const b = parseInt(inputs['Segundo (b)'] ?? 0, 10);
      const c = parseInt(inputs['Terceiro (c)'] ?? 0, 10);
      const soma = a + c;
      const sub = b - c;
      return {
        output: [
          `Soma do primeiro com o terceiro = ${soma}`,
          `Subtração do segundo pelo terceiro = ${sub}`
        ],
        variables: { a, b, c, 'a+c': soma, 'b-c': sub }
      };
    }
  },
  {
    id: 4,
    title: 'EX 4: Ordem Inversa de Três Nomes',
    category: 'sequencial',
    description: 'Ler três nomes digitados pelo utilizador e apresentá-los pela ordem inversa à que foram recebidos.',
    inputDescription: '3 textos (a, b, c)',
    outputDescription: 'c, b, a',
    pseudocode: `Algoritmo ex4
Variáveis a, b, c: texto
Início
   Ler ( a, b, c )
   Escrever ( c, b, a )
Fim`,
    pythonCode: `a = input("Primeiro texto=")
b = input("Segundo texto=")
c = input("Terceiro texto=")
print(c, b, a)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a, b, c )' },
      { shape: 'input_output', text: 'Escrever ( c, b, a )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Primeiro nome', defaultValue: 'Ana' },
      { label: 'Segundo nome', defaultValue: 'Bruno' },
      { label: 'Terceiro nome', defaultValue: 'Carlos' }
    ],
    runSimulation: (inputs) => {
      const a = String(inputs['Primeiro nome'] ?? '');
      const b = String(inputs['Segundo nome'] ?? '');
      const c = String(inputs['Terceiro nome'] ?? '');
      return {
        output: [`Ordem inversa: ${c}, ${b}, ${a}`],
        variables: { a, b, c }
      };
    }
  },
  {
    id: 5,
    title: 'EX 5: Número e os Dois Seguintes',
    category: 'sequencial',
    description: 'Ler um número inteiro e apresentar o número e os dois seguintes (sucessores).',
    inputDescription: '1 número inteiro (a)',
    outputDescription: 'a, a+1, a+2',
    pseudocode: `Algoritmo ex5
Variáveis a: inteiro
Início
   Ler ( a )
   Escrever ( a, a + 1, a + 2 )
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
print(a, a + 1, a + 2)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a )' },
      { shape: 'input_output', text: 'Escrever ( a, a + 1, a + 2 )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Número inteiro (a)', defaultValue: 7 }],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Número inteiro (a)'] ?? 0, 10);
      return {
        output: [`Resultado: ${a}, ${a + 1}, ${a + 2}`],
        variables: { a, 'a+1': a + 1, 'a+2': a + 2 }
      };
    }
  },
  {
    id: 6,
    title: 'EX 6: Dobro, Triplo e Metade',
    category: 'sequencial',
    description: 'Ler um número e apresentar o seu dobro, o seu triplo e a sua metade.',
    inputDescription: '1 número (real ou inteiro)',
    outputDescription: 'a*2, a*3, a/2',
    pseudocode: `Algoritmo ex6
Variáveis a: real
Início
   Ler ( a )
   Escrever ( a * 2, a * 3, a / 2 )
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
print(a * 2, a * 3, a / 2)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a )' },
      { shape: 'input_output', text: 'Escrever ( a*2, a*3, a/2 )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Número (a)', defaultValue: 10 }],
    runSimulation: (inputs) => {
      const a = parseFloat(inputs['Número (a)'] ?? 0);
      return {
        output: [
          `Dobro (a * 2) = ${a * 2}`,
          `Triplo (a * 3) = ${a * 3}`,
          `Metade (a / 2) = ${a / 2}`
        ],
        variables: { a, dobro: a * 2, triplo: a * 3, metade: a / 2 }
      };
    }
  },
  {
    id: 7,
    title: 'EX 7: Decisão - Igual ou Diferente de 23',
    category: 'decisao',
    description: 'Ler um número inteiro e verificar se é igual ou diferente de 23.',
    pseudocode: `Algoritmo EX7
Variáveis a: inteiro
Início
   Ler ( a )
   Se a = 23 então
      Escrever ( "o número é igual a 23" )
   Senão
      Escrever ( "o número é diferente de 23" )
   Fim Se
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
if a == 23:
    print("válido")
else:
    print("inválido")`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a )' },
      {
        shape: 'decision',
        text: 'a == 23 ?',
        conditionTrue: 'Escrever ("válido")',
        conditionFalse: 'Escrever ("inválido")'
      },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Valor de a', defaultValue: 23 }],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Valor de a'] ?? 0, 10);
      const is23 = a === 23;
      return {
        output: [is23 ? 'Válido (o número é igual a 23)' : 'Inválido (o número é diferente de 23)'],
        variables: { a, 'a == 23': is23 }
      };
    }
  },
  {
    id: 8,
    title: 'EX 8: Dobro se >= 14, Senão Triplo',
    category: 'decisao',
    description: 'Se o número for maior ou igual a 14 apresenta o dobro, senão apresenta o triplo.',
    pseudocode: `Algoritmo EX8
Variáveis a: inteiro
Início
   Ler ( a )
   Se a >= 14 então
      Escrever ( a * 2 )
   Senão
      Escrever ( a * 3 )
   Fim Se
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
if a >= 14:
    print("Dobro=", 2 * a)
else:
    print("Triplo=", 3 * a)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a )' },
      {
        shape: 'decision',
        text: 'a >= 14 ?',
        conditionTrue: 'Escrever ( a * 2 )',
        conditionFalse: 'Escrever ( a * 3 )'
      },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Número (a)', defaultValue: 15 }],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Número (a)'] ?? 0, 10);
      if (a >= 14) {
        return {
          output: [`Condição Verdadeira (a >= 14): Dobro = ${2 * a}`],
          variables: { a, resultado: 2 * a, caminho: 'Dobro' }
        };
      } else {
        return {
          output: [`Condição Falsa (a < 14): Triplo = ${3 * a}`],
          variables: { a, resultado: 3 * a, caminho: 'Triplo' }
        };
      }
    }
  },
  {
    id: 9,
    title: 'EX 9: Qual é o Maior ou São Iguais?',
    category: 'decisao',
    description: 'Ler dois números inteiros e apresentar o maior deles ou informar se são iguais.',
    pseudocode: `Algoritmo EX9
Variáveis a, b: inteiro
Início
   Ler ( a, b )
   Se a > b então
      Escrever ( a )
   Senão Se b > a então
      Escrever ( b )
   Senão
      Escrever ( "os números são iguais" )
   Fim Se
Fim`,
    pythonCode: `a = int(input("Primeiro número inteiro="))
b = int(input("Segundo número inteiro="))
if a > b:
    print("Maior=", a)
elif b > a:
    print("Maior=", b)
else:
    print("São iguais")`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a, b )' },
      {
        shape: 'decision',
        text: 'a > b ?',
        conditionTrue: 'Escrever ( a )',
        conditionFalse: 'b > a ? -> Verdade: Escrever(b) | Falso: "iguais"'
      },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Número a', defaultValue: 15 },
      { label: 'Número b', defaultValue: 8 }
    ],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Número a'] ?? 0, 10);
      const b = parseInt(inputs['Número b'] ?? 0, 10);
      if (a > b) {
        return { output: [`O maior é o primeiro: ${a}`], variables: { a, b, maior: a } };
      } else if (b > a) {
        return { output: [`O maior é o segundo: ${b}`], variables: { a, b, maior: b } };
      } else {
        return { output: ['Os números são iguais!'], variables: { a, b, status: 'iguais' } };
      }
    }
  },
  {
    id: 10,
    title: 'EX 10: Número é Igual a 4 ou a 6 (Operador OR)',
    category: 'decisao',
    description: 'Ler um número inteiro e verificar se é igual a 4 ou igual a 6 usando o operador lógico "ou".',
    pseudocode: `Algoritmo EX10
Variáveis a: inteiro
Início
   Ler ( a )
   Se a = 4 ou a = 6 então
      Escrever ( "o número é 4 ou 6" )
   Senão
      Escrever ( "o número não é 4 ou 6" )
   Fim Se
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
if a == 4 or a == 6:
    print("Válido")
else:
    print("Inválido")`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a )' },
      {
        shape: 'decision',
        text: 'a == 4 ou a == 6 ?',
        conditionTrue: 'Escrever ("Válido")',
        conditionFalse: 'Escrever ("Inválido")'
      },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Número a', defaultValue: 6 }],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Número a'] ?? 0, 10);
      const valido = a === 4 || a === 6;
      return {
        output: [valido ? 'Válido: O número é 4 ou 6!' : 'Inválido: O número NÃO é 4 nem 6.'],
        variables: { a, 'a == 4 or a == 6': valido }
      };
    }
  },
  {
    id: 11,
    title: 'EX 11: Pertence ao Intervalo [100, 200] (Operador AND)',
    category: 'decisao',
    description: 'Verificar se o número digitado pertence ao intervalo fechado entre 100 e 200.',
    pseudocode: `Algoritmo EX11
Variáveis a: inteiro
Início
   Ler ( a )
   Se a >= 100 e a <= 200 então
      Escrever ( "o número pertence ao intervalo" )
   Senão
      Escrever ( "o número não pertence ao intervalo" )
   Fim Se
Fim`,
    pythonCode: `a = int(input("Digite um número inteiro="))
if a >= 100 and a <= 200:
    print("Dentro do intervalo")
else:
    print("Fora do intervalo")`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( a )' },
      {
        shape: 'decision',
        text: 'a >= 100 e a <= 200 ?',
        conditionTrue: 'Escrever ("Dentro do intervalo")',
        conditionFalse: 'Escrever ("Fora do intervalo")'
      },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Número a', defaultValue: 150 }],
    runSimulation: (inputs) => {
      const a = parseInt(inputs['Número a'] ?? 0, 10);
      const dentro = a >= 100 && a <= 200;
      return {
        output: [dentro ? 'Dentro do intervalo [100, 200]' : 'Fora do intervalo [100, 200]'],
        variables: { a, dentro }
      };
    }
  },
  {
    id: 12,
    title: 'EX 12: Sequência 1 a 5 com Ciclos (For e While)',
    category: 'repeticao',
    description: 'Apresentar a sequência: 1 2 3 4 5 usando ciclo PARA e ciclo ENQUANTO.',
    pseudocode: `// Versão 1: Ciclo PARA
Algoritmo EX12V1
Variáveis a: inteiro
Início
   Para a = 1 até 5 fazer
      Escrever ( a )
   Fim para
Fim

// Versão 2: Ciclo ENQUANTO
Algoritmo EX12V2
Variáveis a: inteiro
Início
   a = 1
   Enquanto a <= 5 fazer
      Escrever ( a )
      a = a + 1
   Fim enquanto
Fim`,
    pythonCode: `# Versão com FOR:
for a in range(1, 6):
    print(a)

# Versão com WHILE:
a = 1
while a <= 5:
    print(a)
    a = a + 1`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'a = 1' },
      { shape: 'decision', text: 'a <= 5 ?', conditionTrue: 'Escrever(a) -> a = a + 1 -> Volta' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Limite final', defaultValue: 5 }],
    runSimulation: (inputs) => {
      const limit = Math.min(Math.max(parseInt(inputs['Limite final'] ?? 5, 10), 1), 20);
      const seq: number[] = [];
      for (let i = 1; i <= limit; i++) {
        seq.push(i);
      }
      return {
        output: [`Sequência impressa: ${seq.join(' ')}`],
        variables: { 'a inicial': 1, 'a final': limit, total_iteracoes: seq.length }
      };
    }
  },
  {
    id: 13,
    title: 'EX 13: Sequência dos Pares (2 4 6 8 10 12) com Passo 2',
    category: 'repeticao',
    description: 'Apresentar a sequência com salto de 2 em 2 unidades usando ciclo PARA e ENQUANTO.',
    pseudocode: `// Ciclo PARA com PASSO 2
Algoritmo EX13V1
Variáveis a: inteiro
Início
   Para a = 2 até 12 fazer passo 2
      Escrever ( a )
   Fim para
Fim`,
    pythonCode: `# Com FOR e range com passo 2:
for a in range(2, 13, 2):
    print(a)

# Com WHILE:
a = 2
while a <= 12:
    print(a)
    a = a + 2`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'a = 2' },
      { shape: 'decision', text: 'a <= 12 ?', conditionTrue: 'Escrever(a) -> a = a + 2' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Valor final', defaultValue: 12 }],
    runSimulation: (inputs) => {
      const limit = Math.min(Math.max(parseInt(inputs['Valor final'] ?? 12, 10), 2), 50);
      const seq: number[] = [];
      for (let i = 2; i <= limit; i += 2) {
        seq.push(i);
      }
      return {
        output: [`Sequência impressa: ${seq.join(' ')}`],
        variables: { inicio: 2, passo: 2, limite: limit }
      };
    }
  },
  {
    id: 14,
    title: 'EX 14: Sequência Decrescente (10 9 8 7 6 5) com Passo -1',
    category: 'repeticao',
    description: 'Contagem decrescente de 10 até 5 com passo negativo (-1).',
    pseudocode: `Algoritmo EX14V1
Variáveis a: inteiro
Início
   Para a = 10 até 5 fazer passo -1
      Escrever ( a )
   Fim para
Fim`,
    pythonCode: `# Com FOR (início=10, fim exclusivo=4, passo=-1):
for a in range(10, 4, -1):
    print(a)

# Com WHILE:
a = 10
while a >= 5:
    print(a)
    a = a - 1`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'a = 10' },
      { shape: 'decision', text: 'a >= 5 ?', conditionTrue: 'Escrever(a) -> a = a - 1' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Início da contagem', defaultValue: 10 }],
    runSimulation: (inputs) => {
      const start = parseInt(inputs['Início da contagem'] ?? 10, 10);
      const seq: number[] = [];
      for (let i = start; i >= 5; i--) {
        seq.push(i);
      }
      return {
        output: [`Contagem regressiva: ${seq.join(' ')}`],
        variables: { inicio: start, fim: 5, passo: -1 }
      };
    }
  },
  {
    id: 15,
    title: 'EX 15: Preencher Vetor com o Valor 3',
    category: 'listas',
    description: 'Colocar todas as posições de uma lista de 10 inteiros com o valor 3 usando append.',
    pseudocode: `Algoritmo EX15
Variável Tab[10], a: inteiro
Início
   Para a = 0 até 9 fazer
      Tab[a] = 3
   Fim para
Fim`,
    pythonCode: `tab = []
for a in range(0, 10):
    tab.append(3)

# Para visualizar o conteúdo da lista:
for a in range(0, 10):
    print(tab[a])`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'tab = [], a = 0' },
      { shape: 'decision', text: 'a < 10 ?', conditionTrue: 'tab.append(3) -> a = a + 1' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Tamanho do vetor', defaultValue: 10 }],
    runSimulation: (inputs) => {
      const len = Math.min(Math.max(parseInt(inputs['Tamanho do vetor'] ?? 10, 10), 1), 15);
      const tab = Array(len).fill(3);
      return {
        output: [`Lista gerada com ${len} posições:`, `[ ${tab.join(', ')} ]`],
        variables: { tamanho: len, 'tab[0]': 3, 'tab[ultimo]': 3 }
      };
    }
  },
  {
    id: 17,
    title: 'EX 17: Contar Ocorrências do Número 10 (Ciclo vs count)',
    category: 'listas',
    description: 'Ler valores para um vetor e contar quantos números são iguais a 10.',
    pseudocode: `Algoritmo EX17
Variável Tab[15], a, contador: inteiro
Início
   Contador = 0
   Para a = 0 até 14 fazer
      Se Tab[a] = 10 então
         Contador = Contador + 1
      Fim se
   Fim para
   Escrever ( Contador )
Fim`,
    pythonCode: `# Versão 1: Com ciclo for
contador = 0
for a in range(0, 15):
    if tab[a] == 10:
        contador = contador + 1
print("Valores iguais a 10=", contador)

# Versão 2: Super rápida com método count()
print("Valores iguais a 10=", tab.count(10))`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'contador = 0, a = 0' },
      { shape: 'decision', text: 'tab[a] == 10 ?', conditionTrue: 'contador = contador + 1' },
      { shape: 'input_output', text: 'Escrever ( contador )' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Valores da lista (separados por vírgula)', defaultValue: '10, 5, 10, 20, 10, 3, 10, 7' }
    ],
    runSimulation: (inputs) => {
      const raw = String(inputs['Valores da lista (separados por vírgula)'] ?? '');
      const nums = raw.split(',').map((v) => parseInt(v.trim(), 10)).filter((n) => !isNaN(n));
      const count = nums.filter((n) => n === 10).length;
      return {
        output: [
          `Lista analisada: [${nums.join(', ')}]`,
          `Total de números 10 encontrados = ${count}`,
          `Comprovado com tab.count(10) -> ${count}`
        ],
        variables: { total_elementos: nums.length, contador: count }
      };
    }
  },
  {
    id: 18,
    title: 'EX 18: Duplicar Valores Entre 5 e 10',
    category: 'listas',
    description: 'Cada posição do vetor que tenha o seu valor entre 5 e 10 fica com o dobro desse valor.',
    pseudocode: `Para a = 0 até 7 fazer
   Se Tab[a] >= 5 e Tab[a] <= 10 então
      Tab[a] = Tab[a] * 2
   Fim se
Fim para`,
    pythonCode: `for a in range(0, len(tab)):
    if tab[a] >= 5 and tab[a] <= 10:
        tab[a] = tab[a] * 2
for a in tab:
    print(a)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'decision', text: 'tab[a] >= 5 e tab[a] <= 10 ?', conditionTrue: 'tab[a] = tab[a] * 2' },
      { shape: 'input_output', text: 'print(tab)' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Lista de valores', defaultValue: '3, 5, 8, 12, 10, 2' }
    ],
    runSimulation: (inputs) => {
      const raw = String(inputs['Lista de valores'] ?? '');
      const nums = raw.split(',').map((v) => parseInt(v.trim(), 10)).filter((n) => !isNaN(n));
      const original = [...nums];
      const altered = nums.map((n) => (n >= 5 && n <= 10 ? n * 2 : n));
      return {
        output: [
          `Original: [${original.join(', ')}]`,
          `Depois de duplicar os que estão entre 5 e 10:`,
          `Resultado: [${altered.join(', ')}]`
        ],
        variables: { antes: original, depois: altered }
      };
    }
  },
  {
    id: 19,
    title: 'EX 19: Maior Valor de um Vetor (com sort())',
    category: 'listas',
    description: 'Descobrir o maior valor inserido. O documento ensina o truque de usar tab.sort(), ficando o maior no último índice tab[9]!',
    pseudocode: `// Método tradicional comparando:
Maior = Tab[0]
Para a = 1 até 9 fazer
   Se Tab[a] > Maior então
      Maior = Tab[a]
   Fim se
Fim para
Escrever ( Maior )`,
    pythonCode: `tab = []
for a in range(0, 10):
    tab.append(int(input("Digite um valor=")))

tab.sort() # Ordena do menor para o maior
print("Maior valor=", tab[9]) # O último é o maior!`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'tab.sort()' },
      { shape: 'input_output', text: 'print("Maior=", tab[9])' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Números do vetor', defaultValue: '45, 12, 89, 23, 7, 94, 3, 56, 18, 62' }
    ],
    runSimulation: (inputs) => {
      const raw = String(inputs['Números do vetor'] ?? '');
      const nums = raw.split(',').map((v) => parseInt(v.trim(), 10)).filter((n) => !isNaN(n));
      const sorted = [...nums].sort((a, b) => a - b);
      const maior = sorted[sorted.length - 1];
      return {
        output: [
          `Vetor original: [${nums.join(', ')}]`,
          `Após tab.sort(): [${sorted.join(', ')}]`,
          `Maior valor (último elemento tab[${sorted.length - 1}]) = ${maior}`
        ],
        variables: { ordenado: sorted, maior }
      };
    }
  },
  {
    id: 21,
    title: 'EX 21: Trocar Primeira com a Última Posição (Variável Auxiliar)',
    category: 'listas',
    description: 'Trocar entre si os conteúdos da primeira e da última posição do vetor usando a variável aux.',
    pseudocode: `Aux = Tab[0]
Tab[0] = Tab[4]
Tab[4] = Aux
Para a = 0 até 4 fazer
   Escrever ( Tab[a] )
Fim para`,
    pythonCode: `aux = tab[0]
tab[0] = tab[4]
tab[4] = aux

for a in tab:
    print(a)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'aux = tab[0]' },
      { shape: 'process', text: 'tab[0] = tab[4]' },
      { shape: 'process', text: 'tab[4] = aux' },
      { shape: 'input_output', text: 'Escrever vetor' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: '5 valores da lista', defaultValue: '100, 20, 30, 40, 999' }
    ],
    runSimulation: (inputs) => {
      const raw = String(inputs['5 valores da lista'] ?? '');
      const nums = raw.split(',').map((v) => parseInt(v.trim(), 10)).filter((n) => !isNaN(n));
      const original = [...nums];
      if (nums.length >= 2) {
        const aux = nums[0];
        nums[0] = nums[nums.length - 1];
        nums[nums.length - 1] = aux;
      }
      return {
        output: [
          `Antes da troca: [${original.join(', ')}]`,
          `Variável aux guardou temporariamente o primeiro valor: ${original[0]}`,
          `Depois da troca: [${nums.join(', ')}]`
        ],
        variables: { original, trocado: nums }
      };
    }
  },
  {
    id: 22,
    title: 'EX 22: Inserir numa Posição com insert() e Validação',
    category: 'listas',
    description: 'Inserir um novo valor numa posição entre 0 e 4 com o método tab.insert(pos, valor).',
    pseudocode: `Enquanto pos < 0 ou pos > 4 fazer
   Escrever ( "Erro! Posição inválida" )
   Ler ( pos )
Fim enquanto
Inserir ( pos, valor )`,
    pythonCode: `pos = int(input("digite um valor entre 0 e 4="))
while pos < 0 or pos > 4:
    print("Erro!!! Digitou um valor inválido")
    pos = int(input("digite um valor entre 0 e 4="))

valor = int(input("digite um valor="))
tab.insert(pos, valor)
for a in tab:
    print(a)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'input_output', text: 'Ler ( pos )' },
      { shape: 'decision', text: 'pos < 0 ou pos > 4 ?', conditionTrue: 'Erro! Pede nova pos' },
      { shape: 'process', text: 'tab.insert(pos, valor)' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [
      { label: 'Posição (0 a 4)', defaultValue: 2 },
      { label: 'Novo valor a inserir', defaultValue: 777 }
    ],
    runSimulation: (inputs) => {
      const list = [10, 20, 30, 40, 50];
      const pos = parseInt(inputs['Posição (0 a 4)'] ?? 2, 10);
      const val = parseInt(inputs['Novo valor a inserir'] ?? 777, 10);
      if (pos < 0 || pos > 4) {
        return {
          output: ['Erro!!! Posição fora do intervalo 0 a 4! O Python não deixaria avançar sem corrigir.'],
          variables: { pos_invalida: pos }
        };
      }
      const before = [...list];
      list.splice(pos, 0, val);
      return {
        output: [
          `Lista antes: [${before.join(', ')}]`,
          `Executado: tab.insert(${pos}, ${val})`,
          `Lista resultante: [${list.join(', ')}]`,
          `Nota: Os elementos seguintes foram empurrados para a direita!`
        ],
        variables: { antes: before, depois: list, nova_dimensao: list.length }
      };
    }
  },
  {
    id: 23,
    title: 'EX 23: Remover de uma Posição com pop() e Ver len()',
    category: 'listas',
    description: 'Remover um elemento de uma posição com tab.pop(pos) e verificar como a lista encolhe com len(tab).',
    pseudocode: `Ler ( pos )
Remover ( pos )
Escrever ( "A lista ficou com ", len(tab), " elementos" )`,
    pythonCode: `pos = int(input("digite um valor entre 0 e 4="))
while pos < 0 or pos > 4:
    print("Erro!!! Digitou um valor inválido")
    pos = int(input("digite um valor entre 0 e 4="))

tab.pop(pos)
print("A lista ficou com ", len(tab), "elementos")
for a in tab:
    print(a)`,
    flowchartSteps: [
      { shape: 'start_end', text: 'Início' },
      { shape: 'process', text: 'tab.pop(pos)' },
      { shape: 'input_output', text: 'print("A lista ficou com ", len(tab))' },
      { shape: 'start_end', text: 'Fim' }
    ],
    sampleInputs: [{ label: 'Posição a remover (0 a 4)', defaultValue: 1 }],
    runSimulation: (inputs) => {
      const list = ['Porto', 'Lisboa', 'Coimbra', 'Faro', 'Braga'];
      const pos = parseInt(inputs['Posição a remover (0 a 4)'] ?? 1, 10);
      if (pos < 0 || pos > 4) {
        return {
          output: ['Erro! Posição inválida.'],
          variables: { pos }
        };
      }
      const before = [...list];
      const removed = list.splice(pos, 1)[0];
      return {
        output: [
          `Lista inicial: [${before.join(', ')}] (tamanho: ${before.length})`,
          `Executado: tab.pop(${pos}) -> removeu "${removed}"`,
          `A lista ficou com ${list.length} elementos: [${list.join(', ')}]`
        ],
        variables: { removido: removed, novo_len: list.length }
      };
    }
  }
];
