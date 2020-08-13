import thunk from 'redux-thunk';
import {
  createStore, combineReducers, compose, applyMiddleware,
} from 'redux';

import pageNumberReducer from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/pageReducer';
import groupReducer from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/groupReducer';
import offsetXReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/offsetReducer';
import solvedReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/solvedReducer';
import dontKnowReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/dontKnowReduser';
import knowReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/knowReducer';
import openResultsReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/openResultsReducer';
import statisticPageReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/statisticReducer';
import statisticInfoReducer from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/statisticInfoReducer';
import startPageReducer from 'containers/Games/EnglishPuzzle/StartPage/startPageReducer';
import {
  pageReducer, levelReducer, roundReducer,
  currWordsReducer, answerReducer, statisticReducer, modalReducer, longStatisticReducer, audioCallModeReducer,
} from 'containers/Games/AudioCall/reducer';
import levelControlReducer from 'containers/Games/SpeakIt/ControlLevel/reducer';
import fetchReducer from 'containers/Games/SpeakIt/FetchGroup/reducer';
import cardsReducer from 'containers/Games/SpeakIt/CardsGroup/reducer';
import startGameReducer from 'containers/Games/SpeakIt/ControlButtons/reducer';
import statisticInfo from 'containers/Games/SpeakIt/LongTermStatistic/statisticInfoReducer';
import statisticGameReducer from 'containers/Games/SpeakIt/LongTermStatistic/statisticReducer';
import authTokenReducer from 'containers/Authorisation/authReducer';
import authErrorsReducer from 'containers/Authorisation/authErrorsReducer';
import logReducer from 'containers/Authorisation/logReducer';
import modalMainReducer from 'containers/Main/modalMainReducer';
import modalInfoReducer from 'containers/Main/modalInfoReducer';
import cardsWordsAmountReducer from 'containers/Main/cardsWordsAmountReducer';
import settingsOpenReducer from 'containers/Main/settingsOpenReducer';
import themeReducer from 'containers/Main/themeReducer';
import userNameReducer from 'containers/Authorisation/userNameReducer';
import mainLangReducer from 'containers/Main/mainLangReducer';
import regFormReducer from 'containers/Authorisation/regFormReducer';
import logFormReducer from 'containers/Authorisation/logFormReducer';
import studyModesReducer from 'containers/Main/studyModesReducer.';
import { trainingReducer, trainingStatisticReducer } from 'containers/TrainingCard/reducers';
import userWordsReducer from 'containers/Training/trainingCardsReducer';
import MainErrorModalReducer from 'containers/Main/mainErrorModalReducer';
import {
  modeReducer, buttonAccess, fallingWordToggle, showAnswerToggle, addFailedWords, addTrueWords, showWordsToggle, setFallingWord, modalSavannahReducer,
} from 'containers/Games/Savannah/store/store';
import visitsReducer from 'containers/Authorisation/visitsReducer';
import errorReducer from 'containers/Training/errorReducer';
import trainingPageReducer from 'containers/Training/trainingPageReducer';
import userLevelPageReducer from 'containers/Authorisation/userSettingsReducer';
import settingsLoaderReducer from 'containers/Main/settingsLoaderReducer';
import userStatisticReducer from 'containers/Authorisation/userStatisticReducer';
import dictLoaderReducer from 'containers/Dictionary/dictionaryLoaderReducer';
import trainCardLoaderReducer from 'containers/Training/trainingCardLoaderReducer';
import formLoaderReducer from 'containers/Authorisation/formLoaderReducer';
import appReducer from '../containers/App/reducer';
import btnsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/btnsReducer';
import wordsReducer from '../containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/wordsReducer';
import loaderReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/Loader/loaderReducer';
import activeIndexReducer from '../containers/Games/EnglishPuzzle/GameController/activeIndexReducer';
import helpBtnsReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/reducer';
import collectionReducer from '../containers/Games/EnglishPuzzle/GameBlock/GameBoard/collectionReducer';

const rootReducer = combineReducers({
  app: appReducer,
  appErr: errorReducer,
  appVisit: visitsReducer,
  appUserWords: userWordsReducer,
  appTraining: trainingPageReducer,
  appUserSettings: userLevelPageReducer,
  appUserStatistic: userStatisticReducer,
  dictionaryLoader: dictLoaderReducer,
  authToken: authTokenReducer,
  authErrors: authErrorsReducer,
  authLog: logReducer,
  authName: userNameReducer,
  authFormLoader: formLoaderReducer,
  mainModal: modalMainReducer,
  mainSettLoader: settingsLoaderReducer,
  mainModalInfo: modalInfoReducer,
  mainTheme: themeReducer,
  mainCardsWords: cardsWordsAmountReducer,
  mainSettings: settingsOpenReducer,
  mainStudyMode: studyModesReducer,
  mainLang: mainLangReducer,
  mainLog: logFormReducer,
  mainReg: regFormReducer,
  audioCallPage: pageReducer,
  audioCallLevel: levelReducer,
  audioCallRound: roundReducer,
  audioCallCurrWords: currWordsReducer,
  audioCallAnswer: answerReducer,
  audioCallStatistic: statisticReducer,
  audioCallModal: modalReducer,
  audioCallLongStatistic: longStatisticReducer,
  engPuzzleBtns: btnsReducer,
  engPuzzleControlBtns: helpBtnsReducer,
  engPuzzleActiveIdx: activeIndexReducer,
  engPuzzleCards: collectionReducer,
  engPuzzlePage: pageNumberReducer,
  engPuzzleGroup: groupReducer,
  engPuzzleXOffset: offsetXReducer,
  engPuzzleSolved: solvedReducer,
  engPuzzleFailed: dontKnowReducer,
  engPuzzleSuccess: knowReducer,
  engPuzzleResults: openResultsReducer,
  engPuzzleStatistic: statisticPageReducer,
  engPuzzleStatisticInfo: statisticInfoReducer,
  engPuzzleFetchedWords: wordsReducer,
  engPuzzleLoading: loaderReducer,
  engPuzzleStartPage: startPageReducer,
  speakItControl: levelControlReducer,
  speakItFetch: fetchReducer,
  speakItWord: cardsReducer,
  speakItButtons: startGameReducer,
  speakItStatisticInfo: statisticInfo,
  speakItStatistic: statisticGameReducer,
  fetchedWords: wordsReducer,
  loading: loaderReducer,
  training: trainingReducer,
  trainingStatistic: trainingStatisticReducer,
  trainingCardLoader: trainCardLoaderReducer,
  mainErrorModal: MainErrorModalReducer,
  mode: modeReducer,
  modalWindow: modalSavannahReducer,
  buttonAccessProperty: buttonAccess,
  fallingWordActive: fallingWordToggle,
  showAnswer: showAnswerToggle,
  failedWords: addFailedWords,
  trueWords: addTrueWords,
  showWords: showWordsToggle,
  fallingWord: setFallingWord,
  audioCallMode: audioCallModeReducer,
});

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
