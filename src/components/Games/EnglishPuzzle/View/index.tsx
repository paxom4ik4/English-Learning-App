import * as React from 'react';
import { State } from 'models';
import { useSelector } from 'react-redux';
import Header from './HeaderBlock';
import GameBlock from './GameBlock';
import './index.scss';

const View: React.FC = () => {
  const isStartPageOpen = useSelector((state: State) => state.engPuzzleStartPage.isActive);
  return (
    <div
      className={
    isStartPageOpen
      ? 'disabled'
      : 'english-puzzle-view'
  }
    >
      <Header />
      <GameBlock />
    </div>
  );
};
export default View;
