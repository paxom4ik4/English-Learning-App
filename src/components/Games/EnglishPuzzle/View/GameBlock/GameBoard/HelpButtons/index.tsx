import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { ButtonsProps } from 'components/Games/EnglishPuzzle/models';
import DontKnowBtn from './DontKnowBut';
import CheckBtn from './CheckBut';
import ContinueBtn from './ContinueBut';
import ResultsBtn from './ResultsBut';
import StatisticBtn from './StatisticBut';
import './index.scss';

const HelpButtons: React.FC<ButtonsProps> = ({
  onClickFn, wordsToApply, setCheckedStateToCards,
  wordsToCheck, setDragging, phrase, learningWord,
}) => {
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  return (
    <div className={isResultsOpen || isStatOpen ? 'disabled' : 'eng-puzzle-help-buttons'}>
      <DontKnowBtn
        onClickFn={onClickFn}
        length={wordsToApply.length}
        setDragging={setDragging}
        setCheckedStateToCards={setCheckedStateToCards}
        phrase={phrase}
        learningWord={learningWord}
      />
      <CheckBtn
        setCheckedStateToCards={setCheckedStateToCards}
        setDragging={setDragging}
        wordsToApply={wordsToApply}
        wordsToCheck={wordsToCheck}
        phrase={phrase}
        learningWord={learningWord}
      />
      <ContinueBtn
        wordsToApply={wordsToApply}
        setDragging={setDragging}
        setCheckedStateToCards={setCheckedStateToCards}
      />
      <ResultsBtn />
      <StatisticBtn />
    </div>
  );
};
export default HelpButtons;
