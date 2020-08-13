import * as React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const ResultItem = ({
  className, word, transcription, wordTranslate, audio,
}): JSX.Element => {
  const playAudio = () => {
    const urlAudio = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${audio}`;
    const audioWord = new Audio(urlAudio);
    audioWord.play();
  };

  return (
    <div className={className}>
      <span className="audio-item" onClick={playAudio}>
        <FontAwesomeIcon icon={faVolumeUp} className="voice-img" />
      </span>
      {word}
      {' '}
      <span className="opacity-word">
        {transcription}
        {' '}
        {wordTranslate}
      </span>
    </div>
  );
};

export default ResultItem;
