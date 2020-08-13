import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import HintButtons from './HintButtons';
import Settings from './SettingsBlock';
import './index.scss';

const Header: React.FC = () => {
  const actualWordsCollection = useSelector(
    (state: State) => state.engPuzzleFetchedWords.currentWords,
  );
  const activeIdx = useSelector((state: State) => state.engPuzzleActiveIdx.currentIdx);
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  return (
    <div className={isResultsOpen || isStatOpen ? 'disabled' : 'eng-puzzle-header-section'}>
      <Settings />
      {actualWordsCollection.length ? (
        <HintButtons phrase={actualWordsCollection[activeIdx].textExample} />
      ) : (null)}
    </div>
  );
};

export default Header;
