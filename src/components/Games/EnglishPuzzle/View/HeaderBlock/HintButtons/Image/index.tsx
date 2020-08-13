import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models';
import { backgroundEnable, backgroundDisable } from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';

const Image: React.FC = () => {
  const dispatch = useDispatch();
  const backBtnState = useSelector((state: State) => state.engPuzzleBtns.backgroundHintActive);
  const speakerBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const translateBtnState = useSelector((state: State) => state.engPuzzleBtns.translateHintActive);
  const initialBtnsState = JSON.parse(localStorage.getItem('hintsState'));
  const stateSwitcher = () => {
    if (backBtnState) {
      dispatch(backgroundDisable());
      initialBtnsState.backgroundHintActive = false;
      initialBtnsState.audioHintActive = speakerBtnState;
      initialBtnsState.translateHintActive = translateBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    } else {
      dispatch(backgroundEnable());
      initialBtnsState.backgroundHintActive = true;
      initialBtnsState.audioHintActive = speakerBtnState;
      initialBtnsState.translateHintActive = translateBtnState;
      localStorage.setItem('hintsState', JSON.stringify(initialBtnsState));
    }
  };
  const clickHandler = () => stateSwitcher();
  const backgroundBtnStyle = backBtnState ? 'eng-puzzle-hint-button' : 'eng-puzzle-hint-button off';
  return (
    <button
      type="button"
      className={backgroundBtnStyle}
      onClick={clickHandler}
    >
      <span className="eng-puzzle-tooltiptext">image hint</span>
      <FontAwesomeIcon icon={faImage} />
    </button>
  );
};
export default Image;
