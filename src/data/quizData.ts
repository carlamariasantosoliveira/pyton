import {
  MatchCategory,
  TrueFalseQuestion,
  MultipleChoiceQuestion,
  AlgorithmSequence
} from '../types';

export const MATCHING_GAMES: MatchCategory[] = [
  {
    id: 'perifericos',
    title: 'Periféricos do Computador',
    description: 'Classifica cada periférico conforme a direção da informação (Entrada, Saída ou Entrada/Saída).',
    categories: [
      { id: 'entrada', label: 'Dispositivo de Entrada (Input)', color: 'blue' },
      { id: 'saida', label: 'Dispositivo de Saída (Output)', color: 'emerald' },
      { id: 'ambos', label: 'Dispositivo Misto (Entrada / Saída)', color: 'amber' }
    ],
    pairs: [
      { id: 'p1', item: 'Teclado', category: 'entrada', explanation: 'O teclado envia as letras que digitas para o CPU.' },
      { id: 'p2', item: 'Rato', category: 'entrada', explanation: 'O rato envia os cliques e o movimento do cursor para o computador.' },
      { id: 'p3', item: 'Microfone', category: 'entrada', explanation: 'O microfone capta o som do ambiente e envia para o computador.' },
      { id: 'p4', item: 'Câmara Web', category: 'entrada', explanation: 'A câmara envia a tua imagem em vídeo para o sistema.' },
      { id: 'p5', item: 'Scanner', category: 'entrada', explanation: 'O scanner digitaliza documentos e fotos para o computador.' },
      { id: 'p6', item: 'Monitor', category: 'saida', explanation: 'O monitor mostra as imagens e textos gerados pelo computador.' },
      { id: 'p7', item: 'Colunas de Som', category: 'saida', explanation: 'As colunas reproduzem os sons que saem do computador.' },
      { id: 'p8', item: 'Projetor', category: 'saida', explanation: 'O projetor emite imagem para uma tela ou parede.' },
      { id: 'p9', item: 'Impressora normal', category: 'saida', explanation: 'Passa a informação digital para papel.' },
      { id: 'p10', item: 'Impressora Multifunções', category: 'ambos', explanation: 'Imprime (saída) e digitaliza folhas com scanner (entrada).' },
      { id: 'p11', item: 'Monitor Touch (Ecrã Tátil)', category: 'ambos', explanation: 'Mostra a imagem (saída) e recebe toques dos teus dedos (entrada).' },
      { id: 'p12', item: 'Pen USB / Disco Externo', category: 'ambos', explanation: 'Podes ler ficheiros (entrada) e gravar novos ficheiros (saída).' }
    ]
  },
  {
    id: 'simbolos_fluxograma',
    title: 'Símbolos do Fluxograma',
    description: 'Associa cada forma geométrica ao seu significado oficial na criação de algoritmos.',
    categories: [
      { id: 'inicio_fim', label: 'Início ou Fim do Algoritmo', color: 'purple' },
      { id: 'leitura_escrita', label: 'Entrada ou Saída de Dados', color: 'blue' },
      { id: 'processamento', label: 'Processo ou Operação (Cálculos)', color: 'emerald' },
      { id: 'decisao', label: 'Decisão ou Comparação Lógica', color: 'amber' }
    ],
    pairs: [
      { id: 'f1', item: 'Oval / Elipse', category: 'inicio_fim', explanation: 'Coloca-se sempre no topo (Início) e na base (Fim).' },
      { id: 'f2', item: 'Paralelogramo', category: 'leitura_escrita', explanation: 'Usa-se para Ler(x) ou Escrever(resultado).' },
      { id: 'f3', item: 'Retângulo normal', category: 'processamento', explanation: 'Usa-se para contas e atribuições como a = b + 1.' },
      { id: 'f4', item: 'Losango', category: 'decisao', explanation: 'Avalia uma condição (ex: idade >= 18) com saídas True e False.' },
      { id: 'f5', item: 'Comando Ler(a, b)', category: 'leitura_escrita', explanation: 'É uma operação de leitura representada no paralelogramo.' },
      { id: 'f6', item: 'Expressão: c = a * 2', category: 'processamento', explanation: 'É um cálculo matemático, logo vai dentro de um retângulo.' }
    ]
  },
  {
    id: 'tipos_python',
    title: 'Tipos de Dados em Python',
    description: 'Associa cada valor ao seu tipo de dados correto em Python (int, float, bool ou str).',
    categories: [
      { id: 'int', label: 'int (Número Inteiro)', color: 'blue' },
      { id: 'float', label: 'float (Número Real / Decimal)', color: 'emerald' },
      { id: 'str', label: 'str (Texto / String)', color: 'purple' },
      { id: 'bool', label: 'bool (Booleano)', color: 'amber' }
    ],
    pairs: [
      { id: 't1', item: '1029', category: 'int', explanation: 'Número sem casas decimais é int.' },
      { id: 't2', item: '3.14', category: 'float', explanation: 'Número com casas decimais (ponto) é float.' },
      { id: 't3', item: '"Bom dia"', category: 'str', explanation: 'Qualquer texto entre aspas é str.' },
      { id: 't4', item: 'True', category: 'bool', explanation: 'Verdadeiro ou Falso é bool.' },
      { id: 't5', item: '-15', category: 'int', explanation: 'Inteiro negativo continua a ser int.' },
      { id: 't6', item: '0.3', category: 'float', explanation: 'Tem casas decimais, logo é float.' },
      { id: 't7', item: '"7"', category: 'str', explanation: 'Está entre aspas, logo o Python vê-o como texto e não como número!' },
      { id: 't8', item: 'False', category: 'bool', explanation: 'Valor lógico Falso em Python.' }
    ]
  },
  {
    id: 'metodos_listas',
    title: 'Métodos de Listas em Python',
    description: 'Liga cada método de lista ao que ele realmente faz.',
    categories: [
      { id: 'adicionar', label: 'Adiciona ou Insere', color: 'blue' },
      { id: 'remover', label: 'Remove da Lista', color: 'rose' },
      { id: 'consultar_organizar', label: 'Consulta ou Ordena', color: 'emerald' }
    ],
    pairs: [
      { id: 'm1', item: 'tab.append(valor)', category: 'adicionar', explanation: 'Acrescenta o elemento no fim da lista.' },
      { id: 'm2', item: 'tab.pop(pos)', category: 'remover', explanation: 'Retira o elemento da posição indicada e a lista diminui de tamanho.' },
      { id: 'm3', item: 'tab.insert(pos, valor)', category: 'adicionar', explanation: 'Coloca o valor exatamente na posição pretendida.' },
      { id: 'm4', item: 'len(tab)', category: 'consultar_organizar', explanation: 'Indica a quantidade total de elementos que a lista tem.' },
      { id: 'm5', item: 'tab.sort()', category: 'consultar_organizar', explanation: 'Ordena todos os itens por ordem crescente.' },
      { id: 'm6', item: 'tab.count(10)', category: 'consultar_organizar', explanation: 'Diz quantas vezes o número 10 aparece na lista.' }
    ]
  }
];

export const TRUE_FALSE_QUESTIONS: TrueFalseQuestion[] = [
  {
    id: 1,
    statement: 'O Hardware é a parte física do computador que podemos ver e tocar.',
    isTrue: true,
    explanation: 'Correto! O hardware são todos os componentes físicos (rato, teclado, monitor, circuitos, etc.).',
    topic: 'Hardware e Software'
  },
  {
    id: 2,
    statement: 'A memória RAM perde todas as instruções e dados quando o computador é desligado.',
    isTrue: true,
    explanation: 'Verdadeiro! A RAM é uma memória volátil e serve apenas para guardar os dados dos programas enquanto estão abertos.',
    topic: 'Memória'
  },
  {
    id: 3,
    statement: 'O rato e o teclado são exemplos de Dispositivos de Saída.',
    isTrue: false,
    explanation: 'Falso! O rato e o teclado são Dispositivos de Entrada (Input), pois servem para enviar ordens para dentro do computador.',
    topic: 'Periféricos'
  },
  {
    id: 4,
    statement: '1 Byte é composto por um conjunto de 8 bits.',
    isTrue: true,
    explanation: 'Correto! 1 Byte = 8 bits, o que permite representar 256 valores diferentes (2^8).',
    topic: 'Unidades de Medida'
  },
  {
    id: 5,
    statement: 'A velocidade do processador (CPU) é medida em Gigabytes (GB).',
    isTrue: false,
    explanation: 'Falso! A velocidade do CPU mede-se em Hertz (Hz, MHz, GHz). Os Gigabytes (GB) medem a capacidade de armazenamento de memória!',
    topic: 'CPU'
  },
  {
    id: 6,
    statement: 'O Windows, Linux e Android são exemplos de Software de Aplicação.',
    isTrue: false,
    explanation: 'Falso! O Windows, Linux e Android são Sistemas Operativos, logo pertencem ao Software de Sistema.',
    topic: 'Software'
  },
  {
    id: 7,
    statement: 'Uma linguagem formal, como a matemática ou uma linguagem de programação, não tem ambiguidades.',
    isTrue: true,
    explanation: 'Exato! As linguagens formais foram criadas para terem regras rigorosas e um significado sem duplos sentidos.',
    topic: 'Linguagens'
  },
  {
    id: 8,
    statement: 'Em Python, o nome de uma variável pode começar por um número, por exemplo: 2nota.',
    isTrue: false,
    explanation: 'Falso! Uma regra de ouro das variáveis é que têm de começar OBRIGATORIAMENTE por uma letra (ex: nota2 ou n2).',
    topic: 'Variáveis'
  },
  {
    id: 9,
    statement: 'A linguagem Python é case-sensitive, o que significa que "Idade" e "idade" são duas variáveis completamente diferentes.',
    isTrue: true,
    explanation: 'Verdadeiro! O Python distingue maiúsculas de minúsculas. Por isso, Escola, escola e ESCOLA são 3 variáveis diferentes.',
    topic: 'Variáveis'
  },
  {
    id: 10,
    statement: 'No fluxograma, o Losango é o símbolo que representa o Início e o Fim do algoritmo.',
    isTrue: false,
    explanation: 'Falso! O Losango representa uma Decisão / Comparação. O Início e o Fim são desenhados numa forma Oval (Elipse).',
    topic: 'Fluxogramas'
  },
  {
    id: 11,
    statement: 'Com o operador lógico E (AND), a condição só é Verdadeira se TODAS as partes forem verdadeiras.',
    isTrue: true,
    explanation: 'Correto! No E (AND), basta que uma das partes seja falsa para que o resultado final seja Falso.',
    topic: 'Operadores Lógicos'
  },
  {
    id: 12,
    statement: 'A função input() em Python devolve sempre um número inteiro por defeito.',
    isTrue: false,
    explanation: 'Falso! A função input() devolve sempre texto (string). Para termos um número temos de usar int() ou float().',
    topic: 'Python'
  },
  {
    id: 13,
    statement: 'Numa lista em Python com 5 elementos, o primeiro elemento encontra-se na posição de índice 0.',
    isTrue: true,
    explanation: 'Verdadeiro! Os índices das listas em Python e em programação começam sempre no 0 (vão de 0 a dimensão - 1).',
    topic: 'Listas em Python'
  },
  {
    id: 14,
    statement: 'O comando range(1, 6) no ciclo for vai percorrer os números: 1, 2, 3, 4, 5 e 6.',
    isTrue: false,
    explanation: 'Falso! O range(1, 6) para antes do 6! Percorre apenas: 1, 2, 3, 4 e 5.',
    topic: 'Ciclos em Python'
  },
  {
    id: 15,
    statement: 'O método tab.append(valor) coloca o novo elemento no início da lista.',
    isTrue: false,
    explanation: 'Falso! O método append() adiciona o elemento no FINAL da lista. Para inserir numa posição específica usa-se tab.insert(pos, valor).',
    topic: 'Listas em Python'
  }
];

export const MULTIPLE_CHOICE_QUESTIONS: MultipleChoiceQuestion[] = [
  {
    id: 1,
    question: 'Qual dos seguintes componentes é considerado o "cérebro" do computador?',
    options: ['Memória RAM', 'CPU (Processador)', 'Disco Rígido', 'Placa Gráfica'],
    correctIndex: 1,
    explanation: 'O CPU (Central Processing Unit) manipula os dados e executa as instruções dos programas.',
    topic: 'Hardware'
  },
  {
    id: 2,
    question: 'Quantos Megabytes (MB) tem 1 Gigabyte (GB)?',
    options: ['100 MB', '1000 MB', '10000 MB', '8 MB'],
    correctIndex: 1,
    explanation: 'De acordo com a escala do documento: 1 GB = 1000 MB (e 1 MB = 1000 KB).',
    topic: 'Unidades de Memória'
  },
  {
    id: 3,
    question: 'Qual destes periféricos é classificado como Dispositivo Misto (Entrada / Saída)?',
    options: ['Projetor', 'Teclado', 'Ecrã Tátil (Touchscreen)', 'Scanner'],
    correctIndex: 2,
    explanation: 'O ecrã tátil mostra informação aos teus olhos (saída) e deteta os toques dos teus dedos (entrada).',
    topic: 'Periféricos'
  },
  {
    id: 4,
    question: 'Qual é a primeira etapa obrigatória ao construir um algoritmo?',
    options: [
      'Escrever logo o código no computador',
      'Compreender o problema',
      'Identificar as variáveis do sistema',
      'Testar o algoritmo'
    ],
    correctIndex: 1,
    explanation: 'O 1º passo dos 6 passos é "Compreender o problema"! Não podemos resolver o que não entendemos.',
    topic: 'Algoritmos'
  },
  {
    id: 5,
    question: 'Qual destes nomes de variável é TOTALMENTE INVÁLIDO em programação?',
    options: ['nota_final', 'aluno1', '2idade', 'xp_25'],
    correctIndex: 2,
    explanation: 'O nome "2idade" é inválido porque as variáveis NUNCA podem começar por um algarismo!',
    topic: 'Variáveis'
  },
  {
    id: 6,
    question: 'Num fluxograma, para que serve a forma de Paralelogramo?',
    options: [
      'Para indicar o Início ou o Fim',
      'Para Entrada ou Saída de dados (Ler ou Escrever)',
      'Para fazer contas matemáticas',
      'Para tomar uma decisão Se/Senão'
    ],
    correctIndex: 1,
    explanation: 'O paralelogramo representa operações de Entrada e Saída (Ler e Escrever dados).',
    topic: 'Fluxogramas'
  },
  {
    id: 7,
    question: 'Qual é o operador relacional em Python para verificar se dois valores são IGUAIS?',
    options: ['=', '==', '===', '<>'],
    correctIndex: 1,
    explanation: 'Em Python usa-se "==" para comparar igualdade. O símbolo "=" sozinho serve apenas para atribuição!',
    topic: 'Operadores Python'
  },
  {
    id: 8,
    question: 'Se a = 5 e b = 10, qual é o resultado da expressão lógica: (a < 8) and (b == 10)?',
    options: ['True (Verdadeiro)', 'False (Falso)', 'Erro', '50'],
    correctIndex: 0,
    explanation: 'Como 5 < 8 é True e 10 == 10 também é True, o operador and com dois valores verdadeiros resulta em True!',
    topic: 'Lógica'
  },
  {
    id: 9,
    question: 'Que símbolo de comentário se utiliza no início de uma linha em Python?',
    options: ['//', '/*', '#', '<!--'],
    correctIndex: 2,
    explanation: 'Em Python usa-se o cardinal (#) no início da linha para escrever comentários ignorados pelo computador.',
    topic: 'Python'
  },
  {
    id: 10,
    question: 'Qual é o código correto para ler um número inteiro digitado pelo utilizador em Python?',
    options: [
      'a = ler("digite:")',
      'a = int(input("Digite um número: "))',
      'a = text(input("Digite:"))',
      'a = input_int()'
    ],
    correctIndex: 1,
    explanation: 'Usamos input() para ler o texto e int(...) para convertê-lo em número inteiro!',
    topic: 'Python'
  },
  {
    id: 11,
    question: 'Dada a lista tab = [12, 34, 5], que valor é devolvido por tab[1]?',
    options: ['12', '34', '5', 'Erro'],
    correctIndex: 1,
    explanation: 'Como os índices começam no 0: tab[0] é 12, tab[1] é 34 e tab[2] é 5!',
    topic: 'Listas'
  },
  {
    id: 12,
    question: 'Que método de listas em Python é usado para ordenar os números por ordem crescente?',
    options: ['tab.order()', 'tab.reverse()', 'tab.sort()', 'tab.arrange()'],
    correctIndex: 2,
    explanation: 'O método tab.sort() organiza os elementos por ordem crescente (do menor para o maior).',
    topic: 'Listas'
  }
];

export const ALGORITHM_SEQUENCES: AlgorithmSequence[] = [
  {
    id: 'jarro_eletrico',
    title: 'Exemplo do Jarro Elétrico',
    description: 'Ordena os passos para aquecer água no jarro elétrico pela sequência correta:',
    hint: 'Começa por pegar no jarro antes de colocar a água!',
    steps: [
      { id: 's1', text: 'Pegar no jarro', correctOrder: 1 },
      { id: 's2', text: 'Encher de água', correctOrder: 2 },
      { id: 's3', text: 'Pousar o jarro na base', correctOrder: 3 },
      { id: 's4', text: 'Ligar à tomada elétrica', correctOrder: 4 },
      { id: 's5', text: 'Ligar o botão de aquecimento', correctOrder: 5 }
    ]
  },
  {
    id: 'media_dois_numeros',
    title: 'Algoritmo da Média de Dois Números',
    description: 'Ordena as instruções do algoritmo para calcular a média de duas notas:',
    hint: 'Precisas primeiro de ler as notas antes de calcular a média!',
    steps: [
      { id: 'm1', text: 'Início do Algoritmo', correctOrder: 1 },
      { id: 'm2', text: 'Ler os valores de nota1 e nota2', correctOrder: 2 },
      { id: 'm3', text: 'Calcular: media = (nota1 + nota2) / 2', correctOrder: 3 },
      { id: 'm4', text: 'Escrever o resultado da média no ecrã', correctOrder: 4 },
      { id: 'm5', text: 'Fim do Algoritmo', correctOrder: 5 }
    ]
  },
  {
    id: 'troca_primeiro_ultimo',
    title: 'Troca da Primeira com a Última Posição (EX 21)',
    description: 'Ordena a sequência clássica de troca usando uma variável auxiliar (aux):',
    hint: 'Guarda primeiro o valor de tab[0] na caixa aux antes de o sobrescrever!',
    steps: [
      { id: 't1', text: 'aux = tab[0]  (guarda o primeiro valor temporariamente)', correctOrder: 1 },
      { id: 't2', text: 'tab[0] = tab[4]  (coloca o último valor na primeira posição)', correctOrder: 2 },
      { id: 't3', text: 'tab[4] = aux  (coloca o valor antigo do primeiro na última posição)', correctOrder: 3 },
      { id: 't4', text: 'Escrever a lista atualizada com os valores trocados', correctOrder: 4 }
    ]
  }
];
