import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { disableStatisticBtn } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/HelpButtons/actions';
import { State } from 'models';
import { openStatistic } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Statistic/actions';
import { closeResults } from 'containers/Games/EnglishPuzzle/GameBlock/GameBoard/Results/actions';

const StatisticBtn: React.FC = () => {
  const statisticBtnState = useSelector((state: State) => state.engPuzzleControlBtns.statisticBtn);
  const dispatch = useDispatch();
  const statisticBtnStyle = statisticBtnState ? 'eng-puzzle-help-button' : 'disabled';
  const clickHandler = () => {
    dispatch(closeResults());
    dispatch(openStatistic());
    dispatch(disableStatisticBtn());
  };
  return (
    <button
      type="button"
      className={statisticBtnStyle}
      onClick={clickHandler}
    >
      Statistic
    </button>
  );
};
export default StatisticBtn;
