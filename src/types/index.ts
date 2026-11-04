export type SectionTab = 'aprender' | 'exercicios' | 'jogos' | 'laboratorio';

export type GameType = 'correspondencia' | 'verdadeiro_falso' | 'escolha_multipla' | 'ordenar_algoritmo';

export interface ExerciseItem {
  id: number;
  title: string;
  category: 'sequencial' | 'decisao' | 'repeticao' | 'listas';
  description: string;
  inputDescription?: string;
  outputDescription?: string;
  operationsDescription?: string;
  pseudocode: string;
  alternativePseudocode?: string;
  flowchartSteps: {
    shape: 'start_end' | 'input_output' | 'process' | 'decision';
    text: string;
    conditionTrue?: string;
    conditionFalse?: string;
  }[];
  pythonCode: string;
  alternativePythonCode?: string;
  sampleInputs: { label: string; defaultValue: string | number }[];
  runSimulation: (inputs: Record<string, any>) => { output: string[]; variables: Record<string, any> };
}

export interface MatchCategory {
  id: string;
  title: string;
  description: string;
  pairs: {
    id: string;
    item: string;
    category: string; // The match target
    iconName?: string;
    explanation?: string;
  }[];
  categories: { id: string; label: string; color: string }[];
}

export interface TrueFalseQuestion {
  id: number;
  statement: string;
  isTrue: boolean;
  explanation: string;
  topic: string;
}

export interface MultipleChoiceQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
  codeSnippet?: string;
}

export interface AlgorithmSequence {
  id: string;
  title: string;
  description: string;
  steps: { id: string; text: string; correctOrder: number }[];
  hint: string;
}

export interface StudentScore {
  totalPoints: number;
  matchesCompleted: number;
  tfAnswered: number;
  tfCorrect: number;
  mcAnswered: number;
  mcCorrect: number;
  algorithmsSolved: number;
  unlockedBadges: string[];
}
