import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import './index.scss';
import { State } from 'models';
import { updateGroup } from 'containers/Games/SpeakIt/ControlLevel/actions';
import { activeWord } from 'containers/Games/SpeakIt/CardsGroup/actions';
import { resetGame, stopGame } from 'containers/Games/SpeakIt/ControlButtons/actions';
import { resetStatistics } from 'containers/Games/SpeakIt/FetchGroup/actions';
import GroupItem from '../GroupItem';

const LevelControl = () : JSX.Element => {
  const groups = [1, 2, 3, 4, 5, 6];
  const dispatch = useDispatch();
  const activeControl = useSelector((state: State) => state.speakItControl.group);

  const changeControl = (el) => {
    dispatch(updateGroup(el));
    dispatch(stopGame());
    dispatch(resetGame());
    dispatch(resetStatistics());
    dispatch(activeWord(null));
  };
  return (
    <div className="level-wrapper">
      {groups.map((el) => (
        <GroupItem
          key={el}
          fn={() => changeControl(el)}
          className={classNames('level', { 'active-level': el === activeControl })}
          item={el}
        />
      ))}
    </div>
  );
};

export default LevelControl;
