export interface Card {
  cId: number;
  word: string;
  xOffset: number;
}

export interface RowsMap {
  cards: Card[];
  selected: Card[];
}

export interface Source {
  index: number;
  droppableId: string;
}

export interface Dest {
  droppableId: string;
  index: number;
}

export interface Res {
  base: Card[];
  board: Card[];
}

export interface DroppableProps {
  rowLength: number;
  words: RowsMap;
  onClickFn: React.MouseEventHandler;
  cssStyle: string[];
  drag: boolean;
  back: string;
  description: string;
}

export interface ButtonsProps {
  onClickFn: () => void;
  wordsToApply: Card[];
  wordsToCheck: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  phrase: Card[];
  learningWord: string
}

export interface WordProps {
  onClickFn: React.MouseEventHandler;
  word: string;
  cId: number;
  idx: number;
  id: number;
  cssStyle: string;
  drag: boolean;
  back: string;
  offsetX: number;
}

export interface BoardProps {
  gameData: [RowsMap, number, string];
  background: string;
  description: string;
}

export interface DontKnowBtnProps {
  onClickFn: () => void;
  length: number;
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  phrase: Card[];
  learningWord: string;
}

export interface ContinueBtnProps {
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CheckBtnProps {
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
  wordsToApply: Card[];
  wordsToCheck: Card[];
  phrase: Card[];
  learningWord: string;
}

export interface DescProps {
  description: string;
}

export interface ResultsProps {
  back: string;
  description: string;
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface StatisticProps {
  wordsToApply: Card[];
  setCheckedStateToCards: React.Dispatch<React.SetStateAction<string[]>>;
  setDragging: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AudioBtnProps {
  phrase: string;
}

export interface HintBtnsProps {
  phrase: string;
}
