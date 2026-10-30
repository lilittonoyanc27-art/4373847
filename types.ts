export type TranslationMode = 'click' | 'always' | 'never';

export interface BilingualItem {
  es: string;
  hy: string;
  note?: string;
}

export interface VocabularyWord {
  es: string;
  hy: string;
  example?: string;
  category?: string;
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  options: {
    textEs: string;
    textHy: string;
  }[];
  correctIndex: number;
  explanationEs: string;
  explanationHy: string;
}

export interface TrueFalseItem {
  id: number;
  statementEs: string;
  statementHy: string;
  isTrue: boolean;
  correctionEs?: string;
  correctionHy?: string;
}

export interface ExerciseItem {
  id: number;
  promptEs: string;
  promptHy: string;
  typeAnswerEs?: string;
  typeAnswerHy?: string;
  options?: string[];
  correctAnswer?: string;
}
