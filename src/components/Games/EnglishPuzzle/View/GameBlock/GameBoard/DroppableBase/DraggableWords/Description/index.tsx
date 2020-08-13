import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import '../index.scss';
import { DescProps } from 'components/Games/EnglishPuzzle/models';

const Description: React.FC<DescProps> = ({ description }) => {
  const isSolved = useSelector((state: State) => state.engPuzzleSolved.solved);
  const isResultsOpen = useSelector((state: State) => state.engPuzzleResults.isOpen);
  const isStatOpen = useSelector((state: State) => state.engPuzzleStatistic.statOpen);
  return (
    <div className={
      isSolved
    && !isResultsOpen
    && !isStatOpen
        ? 'eng-puzzle-description'
        : 'eng-puzzle-description-disabled'
    }
    >
      {description}
    </div>
  );
};
export default Description;
