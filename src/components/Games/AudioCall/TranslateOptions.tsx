import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import {
  correctAnswer, wrongAnswer, checkAnswer, progressGame, knowWords, notKnowWords,
} from 'containers/Games/AudioCall/actions';
import { Json } from 'containers/Games/AudioCall/models';
import { playSound } from './utils';

function TranslateOptions(): JSX.Element {
  const dispatch = useDispatch();

  const currWords: Array<Json> = useSelector((state: State) => state.audioCallCurrWords);
  const selectedWord = useSelector((state: State) => state.audioCallAnswer.selectedWord);
  const isChecked = useSelector((state: State) => state.audioCallAnswer.isChecked);
  const isCorrect = useSelector((state: State) => state.audioCallAnswer.isCorrect);
  const isWrong = useSelector((state: State) => state.audioCallAnswer.isWrong);

  const gameProgress = useSelector((state: State) => state.audioCallAnswer.progress);

  const currActiveId = isChecked ? gameProgress - 1 : gameProgress;
  const targetTranslate = currWords[currActiveId].wordTranslate;
  const cursorStyle = isChecked ? 'default' : 'pointer';

  const optionClass = (word: string) => {
    if (isCorrect && word === targetTranslate) {
      return 'option bg-light text-success px-2 mx-5 mt-1 border border-success';
    }
    if (isWrong && word === selectedWord) {
      return 'option bg-light text-danger px-2 mx-5 mt-1 border border-danger';
    }
    if (isChecked && word !== targetTranslate) {
      return 'option mx-5 mt-1 text-dark';
    }
    if (isChecked && word === targetTranslate) {
      return 'option px-2 mx-5 mt-1 border border-success';
    }
    return 'option mx-5 px-2 mt-1';
  };

  function hovered(
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>,
  ): void {
    if (!isChecked) { event.currentTarget.classList.add('shadow'); }
  }

  function unHovered(
    event: React.MouseEvent<HTMLElement, MouseEvent> | React.FocusEvent<HTMLElement>,
  ): void {
    if (!isChecked) { event.currentTarget.classList.remove('shadow'); }
  }

  const clickHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!isChecked) {
      const isAnswerCorrect = event.currentTarget.id === targetTranslate;
      const sound = isAnswerCorrect ? 'correct' : 'error';
      const funcToDispatch = isAnswerCorrect ? knowWords : notKnowWords;
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      playSound(sound);
      dispatch(funcToDispatch(currWords[currActiveId]));
      dispatch(checkAnswer(event.currentTarget.id));
      if (isAnswerCorrect) {
        dispatch(correctAnswer(true));
      } else {
        dispatch(wrongAnswer(true));
      }
      dispatch(progressGame());
    }
  };

  const mouseOverHandler = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => hovered(event);
  const mouseLeaveHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => unHovered(event);
  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => event.preventDefault();
  const focusHandler = (event: React.FocusEvent<HTMLDivElement>) => hovered(event);

  return (

    <div className="options mb-5 d-flex flex-wrap justify-content-center text-white">
      { currWords[currActiveId].translateOptions.map((word, idx) => (
        <div
          className={optionClass(word)}
          role="button"
          key={+idx}
          id={word}
          tabIndex={-1}
          style={{ cursor: `${cursorStyle}` }}
          onClick={clickHandler}
          onMouseOver={mouseOverHandler}
          onMouseLeave={mouseLeaveHandler}
          onKeyPress={keyPressHandler}
          onFocus={focusHandler}
        >
          <h4 className="my-2">
            {+idx + 1}
            &nbsp;&nbsp;
            {word.length > 0 ? word : 'неизвестно'}
          </h4>
        </div>
      )) }
    </div>
  );
}

export default TranslateOptions;
