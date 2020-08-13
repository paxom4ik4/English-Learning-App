import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { eng, ru } from 'constants/audio-call-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { updateUserWords } from 'containers/TrainingCard/actions';
import { updateUserWord } from 'constants/athorization-constants';
import { useState } from 'react';

function StatisticItem(currWord: {item: FetchedWordData}): JSX.Element {
  const dispatch = useDispatch();
  const lang = useSelector((state: State) => state.mainLang.lang);
  const clonedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const usedLang = lang === 'eng' ? eng : ru;
  const [deleted, setDeleted] = useState(false);

  if (!currWord) {
    return null;
  }

  const gameMode = useSelector((state: State) => state.audioCallMode.mode);
  const trashIconClass = gameMode === 'my-words' && !deleted
    ? 'fas fa-trash ml-auto mr-3'
    : 'd-none';

  async function playWordAudio() {
    const audioUrl: string = currWord.item.audio;
    const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${audioUrl}`;
    const audio = new Audio(url);
    await audio.play();
  }

  function hovered(
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>,
  ): void {
    event.currentTarget.classList.add('text-danger');
  }

  function unHovered(
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>,
  ): void {
    event.currentTarget.classList.remove('text-danger');
  }

  const speakerIconClickHandler = () => playWordAudio();
  const keyPressHandler = (
    event: React.KeyboardEvent<HTMLElement>,
  ) => event.preventDefault();
  const trashMouseOverHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => hovered(event);
  const trashMouseLeaveHandler = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => unHovered(event);
  const trashFocusHandler = (event: React.FocusEvent<HTMLElement>) => hovered(event);
  const trashClickHandler = () => {
    setDeleted(true);
    const clone = Array.from(clonedWords);
    const handledWord = { ...currWord.item };
    const index = clonedWords.findIndex((el) => el.word === handledWord.word);
    handledWord.userWord.optional.del = true;
    handledWord.userWord.optional.dif = false;
    handledWord.userWord.optional.nextRepeat = '-';
    delete handledWord.translateOptions;
    clone.splice(index, 1, handledWord);
    dispatch(updateUserWords(clone));
    updateUserWord(handledWord, dispatch);
    dispatch(updateUserWords(clone));
    updateUserWord(handledWord, dispatch);
  };

  return (
    <div className="d-flex bg-light my-2 align-items-baseline">
      <i
        className="fas fa-volume-down mr-3"
        role="button"
        aria-label="Speaker icon"
        tabIndex={-1}
        style={{ cursor: 'pointer' }}
        onClick={speakerIconClickHandler}
        onKeyPress={keyPressHandler}
      />
      <span className="bg-light d-inline-block text-truncate" style={{ width: '70%' }}>
        <span className="text-primary">{currWord.item.word}</span>
        {' '}
        -
        {' '}
        {currWord.item.wordTranslate}
      </span>
      <i
        className={trashIconClass}
        style={{ cursor: 'pointer' }}
        data-toggle="tooltip"
        data-placement="left"
        title={usedLang.shortStatistic.deleteHint}
        tabIndex={-1}
        role="button"
        aria-label="Trash icon"
        onMouseOver={trashMouseOverHandler}
        onMouseLeave={trashMouseLeaveHandler}
        onFocus={trashFocusHandler}
        onClick={trashClickHandler}
        onKeyPress={keyPressHandler}
      />
    </div>
  );
}

export default StatisticItem;
