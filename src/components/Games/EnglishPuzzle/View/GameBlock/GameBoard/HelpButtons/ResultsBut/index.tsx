import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { enableStatisticBtn } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/actions';
import { State } from 'models';
import { openResults } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/actions';

const ResultsBtn: React.FC = () => {
  const resultsBtnState = useSelector((state: State) => state.engPuzzleControlBtns.resultsBtn);
  const dispatch = useDispatch();
  const resultsBtnStyle = resultsBtnState ? 'eng-puzzle-help-button' : 'disabled';
  const clickHandler = () => {
    dispatch(openResults());
    dispatch(enableStatisticBtn());
  };
  return (
    <button
      type="button"
      className={resultsBtnStyle}
      onClick={clickHandler}
    >
      Results
    </button>
  );
};

export default ResultsBtn;
