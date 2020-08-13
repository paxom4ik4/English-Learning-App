import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableContinueBtn } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/actions';
import { State } from 'models';
import {
  audioEnabled, translateEnable, backgroundEnable, speakerEnable, speakerDisable,
} from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';
import { addFailed } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/actions';
import { DontKnowBtnProps } from 'components/Games/EnglishPuzzle/models';
import { pronounceAudio } from 'constants/english-puzzle-constants';

const DontKnowBtn: React.FC<DontKnowBtnProps> = ({
  onClickFn, length, setCheckedStateToCards, setDragging, phrase, learningWord,
}) => {
  const dontKnowBtnState = useSelector((state: State) => state.engPuzzleControlBtns.dontKnowBtn);
  const phraseToSpeak = [];
  phrase.forEach((card) => phraseToSpeak.push(card.word));
  const dispatch = useDispatch();
  const pushWordsToBoard = () => {
    onClickFn();
    setDragging(true);
    setCheckedStateToCards(new Array(length).fill('eng-puzzle-start-word eng-puzzle-true'));
    dispatch(audioEnabled());
    dispatch(translateEnable());
    dispatch(backgroundEnable());
    dispatch(enableContinueBtn());
    dispatch(addFailed({ sentence: phraseToSpeak.join(' '), learning: learningWord }));
    pronounceAudio(true, phraseToSpeak.join(' '), dispatch, speakerEnable, speakerDisable);
  };
  const dontKnowBtnStyle = dontKnowBtnState
    ? 'eng-puzzle-help-button'
    : 'disabled';
  return (
    <button
      type="button"
      className={dontKnowBtnStyle}
      onClick={pushWordsToBoard}
    >
      Don&apos;t know
    </button>
  );
};

export default DontKnowBtn;
