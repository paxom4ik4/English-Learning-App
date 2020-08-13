import { Card } from 'components/Games/EnglishPuzzle/models';

export interface ActionCard {
  type: string;
  payload?: Card[];
}

export interface ActionOffset {
  type: string;
  payload?: number[];
}

export interface InitialStateOffsetX {
  xOffsets: Array<number[]>;
}

export interface InitialStateCardsCollection {
  cardsCollection: Array<Card[]>;
}

export interface InitialStateIsSolved {
  solved: boolean;
}
