import * as React from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { speakerEnable, speakerDisable } from 'containers/Games/EnglishPuzzle/HeaderBlock/HintButtons/actions';
import { AudioBtnProps } from 'components/Games/EnglishPuzzle/models';

const Audio: React.FC<AudioBtnProps> = ({ phrase }) => {
  const audioBtnState = useSelector((state: State) => state.engPuzzleBtns.audioHintActive);
  const isStartPageOpen = useSelector((state: State) => state.engPuzzleStartPage.isActive);
  const dispatch = useDispatch();
  const audioBtnStyle = audioBtnState ? 'eng-puzzle-hint-button' : 'eng-puzzle-hint-button off';
  const regex = /<[^>]*>/g;
  const sentence = new SpeechSynthesisUtterance();
  const { speechSynthesis } = window;
  sentence.lang = 'en-EN';
  sentence.text = phrase.replace(regex, '');
  sentence.onstart = () => dispatch(speakerEnable());
  sentence.onend = () => dispatch(speakerDisable());
  if (!audioBtnState) speechSynthesis.cancel();

  const clickHandler = () => {
    if (audioBtnState) {
      speechSynthesis.speak(sentence);
    }
  };

  useEffect(() => {
    speechSynthesis.cancel();
    if (audioBtnState && !isStartPageOpen) {
      speechSynthesis.speak(sentence);
    }
  }, [phrase, isStartPageOpen]);

  return (
    <button
      type="button"
      className={audioBtnStyle}
      onClick={clickHandler}
    >
      <span className="eng-puzzle-tooltiptext">play audio</span>
      <FontAwesomeIcon icon={faMusic} />
    </button>
  );
};

export default Audio;
