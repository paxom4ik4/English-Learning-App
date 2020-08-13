import * as React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import { State } from 'models';
import { translateExtractor } from 'constants/english-puzzle-constants';
import './index.scss';

const HintsBlock: React.FC = () => {
  const currentState = useSelector((state: State) => state.engPuzzleBtns);
  const isSpeakerOn = useSelector((state: State) => state.engPuzzleBtns.speakerActive);
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const actualWordsCollection = useSelector(
    (state: State) => state.engPuzzleFetchedWords.currentWords,
  );
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  const speakerState = currentState.audioHintActive;
  const speakerStyle = () => {
    let style: string;
    if (isSpeakerOn) {
      style = 'english-puzzle-speaker-active';
    } else if (speakerState) {
      style = 'english-puzzle-speaker';
    } else {
      style = 'english-puzzle-speaker-disabled';
    }
    return style;
  };
  const translateFieldState = currentState.translateHintActive
    ? 'english-puzzle-translation'
    : 'english-puzzle-translation-disabled';

  return (
    <div className={isResultsOpen || isStatOpen ? 'english-puzzle-hints-block disabled' : 'english-puzzle-hints-block'}>
      {speakerState ? (
        <FontAwesomeIcon icon={faVolumeUp} className={speakerStyle()} />
      ) : (
        <FontAwesomeIcon icon={faVolumeMute} className="english-puzzle-speaker" />
      )}
      {actualWordsCollection.length ? (
        <p className={translateFieldState}>
          {translateExtractor(actualWordsCollection, activeIdx)}
        </p>
      ) : (<p />)}
    </div>
  );
};

export default HintsBlock;
