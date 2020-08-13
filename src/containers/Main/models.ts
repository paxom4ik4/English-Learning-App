import * as Models from 'models';

export interface InitialStateModal {
  isOpen: boolean;
}

export interface InitialStateModalInfo {
  modalId: string;
  name: string;
  desc: string;
}

export interface InitialStateTheme {
  theme: string;
}

export interface InitialStateStatOpen {
  isOpen: boolean;
}

export interface InitialStateHintsState {
  showTranscription: boolean;
  showImage: boolean;
  autoPronounce: boolean;
  showTextTranslate: boolean;
  example: boolean;
  showAnswerBtn: boolean;
  deleteWordBtn: boolean;
  difficultWordBtn: boolean;
  repeatBtn: boolean;
}

export interface InitialStudyState {
  trainAllWords: boolean;
  onlyNew: boolean;
  onlyRepeat: boolean;
  onlyDifficult: boolean;
}

export interface InitialStateStudyMode {
  studyModes: InitialStudyState;
}
export interface InitialStateHintsEnabled {
  hintsState: InitialStateHintsState,
}

export interface InitialAmountState {
  words: number;
  cards: number;
}

export interface InitialStateAmountCW {
  amount: InitialAmountState;
}

export interface InitialStateMainLang {
  lang: string;
}

export interface ActionModalInfo {
  type: string;
  payload?: InitialStateModalInfo;
}

export interface ActionLang {
  type: string;
  payload: string;
}

export interface ActionTheme {
  type: string;
  payload: string;
}

export interface ActionSettings {
  type: string;
  payload: InitialStateHintsState,
}

export interface ActionAmount {
  type: string;
  payload: InitialAmountState,
}

export interface ActionStudy {
  type: string;
  payload: InitialStudyState;
}

export interface MainErrorModal {
  isOpen: boolean,
  title: string,
  content: string,
}

export interface ModalObj {
  title: string,
  content: string,
}

export namespace Payload {
  export interface SetDocumentTypes { }
}

export namespace Action {
  export interface OpenErrorModal extends Models.Action<Payload.SetDocumentTypes> { }
  export interface CloseErrorModal extends Models.Action<Payload.SetDocumentTypes> { }
}

export namespace ActionCreator {
  export type OpenErrorModal = (data: ModalObj) => Action.OpenErrorModal;
  export type CloseErrorModal = () => Action.CloseErrorModal;
}
