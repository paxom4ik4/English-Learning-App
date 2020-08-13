import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { useState } from 'react';
import backgroundImage from 'assets/pattern-369543.svg';
import {
  gamePage, fetchWords, toggleModal, setAudioCallMode,
} from 'containers/Games/AudioCall/actions';
import { eng, ru } from 'constants/audio-call-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import OptionItems from './OptionItems';
import {
  getWordsForGame, Json, getTranslateOptions, shuffleArray,
} from './utils';
import ModalMessage from './ModalMessage';

function makeArray(length) {
  return new Array(length).fill(0);
}

function StartPage(): JSX.Element {
  const dispatch = useDispatch();
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const level = useSelector((state: State) => state.audioCallLevel);
  const round = useSelector((state: State) => state.audioCallRound);
  const clonedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const myWords = clonedWords.filter(
    (word: FetchedWordData) => word.userWord.optional.played
    && !word.userWord.optional.del,
  );
  const [isLoading, setIsLoading] = useState(false);

  const loaderClass = isLoading ? 'visible position-absolute' : 'invisible';

  const exitClickHandler = () => { dispatch(toggleModal('exit')); };
  const btnMyWordsClickHandler = async () => {
    setIsLoading(true);
    dispatch(setAudioCallMode('my-words'));
    if (myWords.length < 10) {
      setIsLoading(false);
      dispatch(toggleModal('not enough words'));
      return;
    }
    try {
      shuffleArray(myWords);
      const wordsForGame = myWords.slice(0, 10);
      const gameData = await getTranslateOptions(wordsForGame);
      dispatch(fetchWords(gameData));
      setIsLoading(false);
      dispatch(gamePage());
    } catch (err) {
      setIsLoading(false);
      dispatch(toggleModal('error'));
    }
  };

  const btnFreeGameClickHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    dispatch(setAudioCallMode('free-mode'));
    try {
      e.preventDefault();
      const jsonObj: Array<Json> = await getWordsForGame(level, round);
      const wordsList = round % 2 === 0 ? jsonObj.slice(0, 10) : jsonObj.slice(10);
      const gameData = await getTranslateOptions(wordsList);
      dispatch(fetchWords(gameData));
      setIsLoading(false);
      dispatch(gamePage());
    } catch (err) {
      setIsLoading(false);
      dispatch(toggleModal('error'));
    }
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      dispatch(toggleModal('exit'));
    }
  };

  return (
    <div className="mb-2 text-white text-center align-items-center" style={{ height: '100vh', background: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <ModalMessage />
      <div className={loaderClass} id="audio-call-loader">
        <div className="spinner-border audio-call-spinner-border" style={{ width: '7rem', height: '7rem' }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <div className="p-4 mb-2 text-right">
        <i className="fas fa-times text-white" style={{ cursor: 'pointer' }} role="button" aria-label="Times icon" tabIndex={0} onClick={exitClickHandler} onKeyPress={keyPressHandler} />
      </div>
      <div className="d-flex flex-column justify-content-center px-3" style={{ height: '70%' }}>
        <h1 className="mb-5">{usedLang.title}</h1>
        <p>{usedLang.description}</p>
        <p>{usedLang.myWordsMode}</p>
        <p>
          {usedLang.freeGameMode}
        </p>
        <div className="d-flex justify-content-center mt-5 text-white">
          <button
            type="button"
            className="btn btn-success mr-5 mb-2"
            onClick={btnMyWordsClickHandler}
          >
            {usedLang.buttons.myWords}
          </button>
          <form onSubmit={btnFreeGameClickHandler}>
            <div className="form-row align-items-center pl-5">
              <div className="col-auto mr-3">
                <button type="submit" className="btn btn-success mb-2">{usedLang.buttons.freeGame}</button>
              </div>
              <div className="d-flex">
                <span>
                  {usedLang.level}
                  {}
                </span>
                <div className="col-auto mb-2">
                  <OptionItems options={makeArray(6)} currLvl={level} isLevelOption />
                </div>
              </div>
              <div className="d-flex">
                <span>{usedLang.round}</span>
                <div className="col-auto mb-2">
                  <OptionItems options={makeArray(60)} currLvl={round} isLevelOption={false} />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartPage;
