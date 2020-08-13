export interface SavedResult {
  sentence: string;
  learning: string;
}

export interface ActionResults {
  type: string;
  payload?: SavedResult;
}

export interface InitialStateFailed {
  failed: SavedResult[];
}

export interface InitialStateSuccess {
  success: SavedResult[];
}

export interface InitialStateResultsPage {
  isOpen: boolean;
}
