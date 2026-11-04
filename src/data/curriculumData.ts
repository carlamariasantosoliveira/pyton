export interface TopicModule {
  id: string;
  number: string;
  title: string;
  icon: string;
  summary: string;
  sections: {
    heading: string;
    content: string;
    tips?: string[];
    example?: {
      title: string;
      code?: string;
      explanation: string;
    };
    table?: {
      headers: string[];
      rows: string[][];
    };
  }[];
}

export const CURRICULUM_MODULES: TopicModule[] = [
  {
    id: 'hardware-software',
    number: '01',
    title: 'Computador: Hardware e Software',
    icon: 'Cpu',
    summary: 'Descobre como o computador funciona por dentro e a diferença entre o que podes tocar e os programas.',
    sections: [
      {
        heading: 'O que é Hardware e Software?',
        content:
          'Um computador é composto por duas grandes partes fundamentais que trabalham sempre em equipa:',
        tips: [
          'Hardware: é a parte física do computador, ou seja, tudo aquilo em que podes tocar (a torre, o teclado, o rato, o monitor, a impressora, etc.).',
          'Software: é a parte lógica do computador, isto é, as instruções e os programas que fazem o hardware funcionar (jogos, navegadores de internet, sistemas operativos).'
        ]
      },
      {
        heading: 'Como trabalha o Computador? (Arquitetura)',
        content:
          'O trabalho do computador é baseado num fluxo contínuo de informação entre quatro elementos principais: os Dispositivos de Entrada enviam dados para o CPU (processador), que comunica com a Memória RAM para processar os dados e depois envia os resultados para os Dispositivos de Saída.',
        table: {
          headers: ['Tipo de Periférico', 'O que faz?', 'Exemplos Práticos'],
          rows: [
            ['Dispositivos de Entrada (Input)', 'Enviam dados e ordens para dentro do computador.', 'Teclado, Rato, Microfone, Câmara Web, Scanner.'],
            ['Dispositivos de Saída (Output)', 'Mostram ou comunicam os resultados ao utilizador.', 'Monitor, Colunas de som, Projetor, Impressora.'],
            ['Dispositivos de Entrada / Saída (Mistos)', 'Podem receber e enviar informação ao mesmo tempo.', 'Monitor tátil (Touchscreen), Multifunções, Pen USB, Cartão de Memória, Disco Externo.']
          ]
        }
      },
      {
        heading: 'O Processador (CPU) e a Memória RAM',
        content:
          'O CPU (Central Processing Unit) é o "cérebro" do computador! Ele manipula os dados e executa as instruções que estão guardadas na Memória Principal (RAM - Random Access Memory).',
        tips: [
          'Velocidade do Processador: mede-se em Hertz (Hz), que representa o número de ciclos de trabalho por segundo.',
          '1 KHz = 1 000 Hz',
          '1 MHz = 1 000 000 Hz (1 000 KHz)',
          '1 GHz = 1 000 000 000 Hz (1 000 MHz) - os computadores modernos funcionam a vários GHz!'
        ]
      },
      {
        heading: 'Unidades de Medida de Informação',
        content:
          'No mundo digital, tudo é representado por eletricidade (ligado/desligado) usando apenas zeros e uns (sistema binário):',
        table: {
          headers: ['Unidade', 'Equivalência', 'Significado'],
          rows: [
            ['1 bit', '0 ou 1', 'A menor unidade de informação num computador.'],
            ['1 byte', '8 bits', 'Conjunto de 8 bits (permite 256 valores diferentes, ex: uma letra).'],
            ['1 KB (Kilobyte)', '1000 Bytes (ou 1024 Bytes)', 'Cerca de uma página de texto simples.'],
            ['1 MB (Megabyte)', '1000 KB', 'Uma fotografia de boa qualidade ou uma música MP3 curta.'],
            ['1 GB (Gigabyte)', '1000 MB', 'Um filme em alta definição ou um jogo médio.'],
            ['1 TB (Terabyte)', '1000 GB', 'Um disco com centenas de jogos e vídeos!']
          ]
        },
        tips: [
          'Suportes de Armazenamento de Dados: Pen USB, Cartão de Memória, Disco Externo e a Nuvem (Cloud).'
        ]
      }
    ]
  },
  {
    id: 'tipos-software-linguagens',
    number: '02',
    title: 'Software e Linguagens',
    icon: 'Layers',
    summary: 'Aprende a distinguir o software que usas para tarefas e o que controla a máquina, bem como as línguas que os computadores entendem.',
    sections: [
      {
        heading: 'Tipos de Software',
        content: 'Existem duas grandes categorias de software no teu dia a dia:',
        tips: [
          'Software de Aplicação: programas instalados para o utilizador realizar tarefas específicas. Exemplos: Processador de texto (Word), Browser de Internet (Chrome, Edge), Folha de Cálculo (Excel), Apresentações (PowerPoint), Jogos e Editores de Imagem.',
          'Software de Sistema: responsável por gerir diretamente o hardware, coordenar a memória, o processador e os periféricos. Exemplos: Windows, Linux, Android, iOS e macOS.'
        ]
      },
      {
        heading: 'Linguagens Naturais vs. Linguagens Formais',
        content:
          'Uma linguagem é uma forma de comunicar que utiliza símbolos e regras pré-definidas.',
        tips: [
          'Linguagem Natural: é a linguagem falada ou escrita pelos seres humanos (ex: Português, Inglês, Chinês). É rica, mas tem ambiguidades e duplos sentidos.',
          'Linguagem Formal: é uma linguagem projetada rigorosamente para um fim específico (ex: a Matemática e as Linguagens de Programação). Não tem ambiguidades!'
        ]
      },
      {
        heading: 'O que é um Programa de Computador?',
        content:
          'Um programa de computador é constituído por uma sucessão ordenada de instruções que permitem à máquina realizar ações sobre um conjunto de dados. Para isso, o programador escreve o código numa linguagem de programação.',
        tips: [
          'Exemplos de linguagens de programação: Python, BASIC, Visual Basic, C, C++, C#, Java, Pascal, SQL, HTML, Assembler.'
        ]
      }
    ]
  },
  {
    id: 'algoritmos-problemas',
    number: '03',
    title: 'O que é um Algoritmo?',
    icon: 'GitFork',
    summary: 'Como pensar como um programador: passos lógicos e ordenados para resolver qualquer problema do dia a dia.',
    sections: [
      {
        heading: 'Conceito de Algoritmo',
        content:
          'Um algoritmo é uma sequência finita de passos claros, lógicos e bem definidos que, quando executados na ordem correta, resolvem um problema específico ou alcançam um objetivo.',
        tips: [
          'Uma receita de culinária é um algoritmo: se saltares passos ou mudares a ordem, o bolo pode queimar!',
          'As instruções para montar um móvel LEGO ou IKEA são outro exemplo de algoritmo do mundo real.'
        ]
      },
      {
        heading: 'Os 6 Passos para Construir um Algoritmo',
        content: 'Para resolver qualquer problema com sucesso, segue sempre esta ordem de ouro:',
        tips: [
          '1) Compreender o problema (saber exatamente o que é pedido).',
          '2) Identificar os dados de entrada (o que temos de fornecer à máquina).',
          '3) Identificar os dados de saída (qual o resultado esperado).',
          '4) Identificar as operações de processamento (os cálculos e regras necessários).',
          '5) Elaborar o algoritmo (escrever a sequência em passos ordenados).',
          '6) Testar o algoritmo (experimentar com diferentes valores para verificar se funciona sem erros).'
        ]
      },
      {
        heading: 'Exemplos Práticos do Documento',
        content: 'Repara como expressamos atividades rotineiras através de passos lógicos:',
        example: {
          title: 'Exemplo 1: Aquecer água num jarro elétrico',
          explanation: 'Passo 1: Pegar no jarro -> Passo 2: Encher de água -> Passo 3: Pousar o jarro na base -> Passo 4: Ligar à tomada -> Passo 5: Ligar o botão.'
        }
      },
      {
        heading: 'Exemplo 2: Vir para a Escola (Transportes Públicos)',
        content: 'Sequência lógica de passos até chegar à sala de aula:',
        example: {
          title: 'Percurso ordenado',
          explanation: '1. Sair de casa -> 2. Ir para a estação do comboio -> 3. Entrar no comboio -> 4. Viagem de comboio -> 5. Sair do comboio -> 6. Ir para a paragem do autocarro -> 7. Entrar no autocarro -> 8. Viagem de autocarro -> 9. Sair do autocarro -> 10. Ir para a escola.'
        }
      }
    ]
  },
  {
    id: 'dados-variaveis-operadores',
    number: '04',
    title: 'Variáveis, Tipos e Operadores',
    icon: 'Variable',
    summary: 'Aprende como guardar informação em caixas de memória e usar operadores matemáticos e lógicos.',
    sections: [
      {
        heading: 'Variáveis e Constantes',
        content:
          'Uma Variável é um identificador (como uma caixa com uma etiqueta) usada para guardar um valor que pode mudar ao longo da execução de um programa.',
        tips: [
          'Regra 1: Deve começar sempre por uma letra.',
          'Regra 2: Não pode conter espaços.',
          'Regra 3: Pode conter letras, números e o carácter underscore (_).',
          'Regra 4 (Case-Sensitive): Em Python e C, as letras maiúsculas e minúsculas são diferentes! "A" é diferente de "a", e "Escola", "escola" e "ESCOLA" são 3 variáveis distintas!',
          'Exemplos válidos de nomes: A, a, b12, xp_25, total_pontos.',
          'Constante: É semelhante a uma variável, mas o seu valor nunca se altera durante a execução do programa (ex: PI = 3.1415).'
        ]
      },
      {
        heading: 'Tipos de Dados Fundamentais',
        content: 'Cada variável tem de saber que espécie de informação vai guardar:',
        table: {
          headers: ['Nome em Português', 'Tipo em Python', 'O que guarda', 'Exemplos'],
          rows: [
            ['Inteiro', 'int', 'Números inteiros sem casas decimais', '1, 5, 33, -7, 1029'],
            ['Real', 'float', 'Números com casas decimais (usa ponto .)', '1.3, 5.9, 0.3, -2.5'],
            ['Booleano', 'bool', 'Apenas dois valores possíveis: Verdadeiro ou Falso', 'True, False'],
            ['Caracter', 'char', 'Um único símbolo ou letra (código ASCII)', "'A', 'a', '5', '#', '!'"],
            ['Texto / String', 'str', 'Palavras e frases entre aspas', '"Lisboa", "Bom dia", "TIC"']
          ]
        }
      },
      {
        heading: 'Instruções Básicas: Atribuição, Entrada e Saída',
        content: 'Como comunicamos com as variáveis:',
        tips: [
          'Atribuição (=): Guarda um valor dentro da variável. Ex: a = 5 ou a = a + 5 (soma 5 ao valor antigo de a).',
          'Entrada (Ler / input): Pede um dado ao utilizador. Em Pseudocódigo: Ler(x). Em Python: a = input("Digite um texto=").',
          'Saída (Escrever / print): Mostra uma mensagem ou valor no ecrã. Em Pseudocódigo: Escrever(x). Em Python: print(a).'
        ]
      },
      {
        heading: 'Operadores Aritméticos e Relacionais',
        content: 'Para fazermos contas e comparações nos nossos programas:',
        table: {
          headers: ['Operador', 'Pseudocódigo', 'Python', 'Significado'],
          rows: [
            ['Soma', '+', '+', 'Soma dois valores'],
            ['Subtração', '-', '-', 'Subtrai dois valores'],
            ['Multiplicação', '*', '*', 'Multiplica dois valores'],
            ['Divisão', '/', '/', 'Divide dois valores'],
            ['Igual a', '=', '==', 'Verifica se dois valores são iguais'],
            ['Diferente de', '<>', '!=', 'Verifica se dois valores são diferentes'],
            ['Menor / Maior', '< e >', '< e >', 'Menor que e Maior que'],
            ['Menor/Maior ou igual', '<= e >=', '<= e >=', 'Menor ou igual e Maior ou igual']
          ]
        }
      },
      {
        heading: 'Operadores Lógicos (NOT, AND, OR)',
        content: 'Permitem combinar várias condições ao mesmo tempo:',
        tips: [
          'NEGAR / NOT: Inverte o resultado. Se for Verdadeiro vira Falso; se for Falso vira Verdadeiro.',
          'E / AND: Só dá Verdadeiro se TODAS as condições forem Verdadeiras! Se uma falhar, o resultado é Falso.',
          'OU / OR: Dá Verdadeiro se PELO MENOS UMA das condições for Verdadeira! Só é Falso se ambas forem Falsas.'
        ]
      }
    ]
  },
  {
    id: 'fluxogramas-pseudocodigo',
    number: '05',
    title: 'Fluxogramas e Pseudocódigo',
    icon: 'Network',
    summary: 'Aprende a desenhar o raciocínio através de formas geométricas normalizadas antes de programar.',
    sections: [
      {
        heading: 'O que é um Fluxograma?',
        content:
          'Um fluxograma é uma representação gráfica de um algoritmo através de símbolos geométricos padronizados, ligados por setas que indicam o caminho do fluxo.',
        table: {
          headers: ['Forma Geométrica', 'Nome do Símbolo', 'Função no Fluxograma'],
          rows: [
            ['Oval / Elipse', 'Início / Fim', 'Marca o ponto onde o algoritmo começa ou termina.'],
            ['Paralelogramo', 'Entrada / Saída', 'Leitura de dados do utilizador Ler(a) ou escrita no ecrã Escrever(c).'],
            ['Retângulo', 'Processo / Operação', 'Cálculos matemáticos e atribuições de valores (ex: c = a + b).'],
            ['Losango', 'Decisão / Comparação', 'Analisa uma condição lógica (ex: a > b?). Tem duas saídas: Verdadeiro (True) e Falso (False).'],
            ['Círculo pequeno', 'Conexão', 'Ponto de junção de caminhos do fluxo.'],
            ['Seta', 'Linha de fluxo', 'Indica a direção e a ordem em que as operações são executadas.'],
            ['Retângulo com barras', 'Sub-rotina', 'Chamada de um bloco de código auxiliar ou função.']
          ]
        }
      },
      {
        heading: 'As 3 Estruturas de Controlo',
        content: 'Todos os programas do mundo são construídos combinando estas três estruturas:',
        tips: [
          '1. Sequencial: As instruções são executadas uma a uma, de cima para baixo, sem desvios nem repetições (Ex: ler 2 números e somar).',
          '2. Seleção / Decisão (Se... Então... Senão): Analisa uma condição. Se for Verdadeira faz uma ação; se for Falsa faz outra ação diferente!',
          '3. Repetição / Ciclos (Para e Enquanto): Repete um conjunto de instruções várias vezes até uma condição deixar de se verificar.'
        ]
      }
    ]
  },
  {
    id: 'python-e-listas',
    number: '06',
    title: 'Linguagem Python e Listas',
    icon: 'Terminal',
    summary: 'Mergulha no código Python real: lê dados com input(), imprime com print(), faz condições if/else e manipula listas!',
    sections: [
      {
        heading: 'Características do Python',
        content:
          'Python é uma das linguagens mais populares e fáceis de aprender no mundo! Funciona em Windows, Mac, Linux e Android. É uma linguagem orientada por objetos e os seus ficheiros têm a extensão .py.',
        tips: [
          'Comentários: usa-se o cardinal (#) no início da linha para anotações do programador.',
          'Mudança de linha: usa-se o código \\n dentro do texto para mudar de linha.',
          'Indentação: os blocos de código dentro de um if, for ou while têm de estar avançados com a tecla TAB! Se não estiverem, o Python dá erro de sintaxe.'
        ]
      },
      {
        heading: 'Funções Essenciais: input() e print()',
        content:
          'A função input() lê o que o utilizador escreve no teclado. Por defeito, devolve SEMPRE texto (str)! Para fazer contas temos de converter:',
        example: {
          title: 'Conversão de tipos (Casting)',
          code: 'a = int(input("Digite um número inteiro="))\nb = float(input("Digite um número com vírgula="))\nprint("A soma é=", a + b)',
          explanation: 'Usamos int() para transformar em número inteiro e float() para número real!'
        }
      },
      {
        heading: 'Decisão em Python: if, elif e else',
        content: 'Como tomar decisões no teu código:',
        example: {
          title: 'Estrutura condicional',
          code: 'if a > b:\n    print("O primeiro é maior")\nelif b > a:\n    print("O segundo é maior")\nelse:\n    print("São iguais")',
          explanation: 'Repara nos dois pontos (:) no fim de cada condição e no espaço (TAB) antes de print!'
        }
      },
      {
        heading: 'Ciclos em Python: for e while',
        content: 'Para repetir ações sem escrever código repetido:',
        tips: [
          'Ciclo for com range(início, fim_mais_um, [passo]): ex: for a in range(1, 6) vai contar 1, 2, 3, 4, 5 (o último valor não é incluído!). Com passo 2: range(2, 13, 2) conta 2, 4, 6, 8, 10, 12.',
          'Ciclo while (Enquanto): repete enquanto a condição for verdadeira. Requer inicializar a variável antes e incrementar (ex: a = a + 1) dentro do ciclo!'
        ]
      },
      {
        heading: 'Listas em Python (Arrays / Vetores / Tabelas)',
        content:
          'Uma lista é uma variável especial que consegue guardar múltiplos elementos numa só caixa! As posições começam SEMPRE no índice 0 até à dimensão-1.',
        table: {
          headers: ['Método / Código', 'O que faz?', 'Exemplo Prático'],
          rows: [
            ['tab = [12, 34, 5]', 'Cria uma lista com 3 elementos', 'tab[0] vale 12, tab[1] vale 34, tab[2] vale 5'],
            ['tab = []', 'Cria uma lista vazia', 'Pronta para receber valores com append!'],
            ['tab.append(valor)', 'Adiciona um novo elemento no final da lista', 'tab.append(42)'],
            ['len(tab)', 'Devolve o número total de elementos da lista', 'Se tiver 3 elementos, len(tab) dá 3'],
            ['tab.sort()', 'Ordena a lista por ordem crescente (do menor para o maior)', 'tab = [5, 1, 9] -> tab.sort() -> [1, 5, 9]'],
            ['tab.count(valor)', 'Conta quantas vezes um valor aparece na lista', 'tab.count(10) devolve o número de dezens'],
            ['tab.insert(pos, valor)', 'Insere um elemento numa posição específica', 'tab.insert(0, 99) coloca 99 no início'],
            ['tab.pop(pos)', 'Retira o elemento de uma determinada posição', 'tab.pop(0) apaga o primeiro elemento e a lista encolhe']
          ]
        }
      }
    ]
  }
];
