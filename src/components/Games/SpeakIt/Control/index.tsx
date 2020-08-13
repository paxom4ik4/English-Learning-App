import * as React from 'react';
import './index.scss';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  nextCard,
  resetGame, resultGame,
  startGame,
  stopGame,
} from 'containers/Games/SpeakIt/ControlButtons/actions';
import { State } from 'models';
import { mistake, resetStatistics, failedWord } from 'containers/Games/SpeakIt/FetchGroup/actions';
import { activeWord } from 'containers/Games/SpeakIt/CardsGroup/actions';

const Control = (): JSX.Element => {
  const dispatch = useDispatch();
  const game = useSelector((state: State) => state.speakItButtons.startGame);
  const gameWord = useSelector((state: State) => state.speakItButtons.gameWord);

  const start = () => {
    dispatch(startGame());
  };
  const stop = () => {
    dispatch(stopGame());
    dispatch(resetGame());
    dispatch(resetStatistics());
    dispatch(activeWord(null));
  };
  const next = () => {
    dispatch(nextCard());
    dispatch(mistake(gameWord));
    dispatch(failedWord());
  };

  const result = () => {
    dispatch(resultGame(true));
  };

  return (
    <div className="btn-wrapper">
      <Button variant="danger" className="btn" onClick={stop}>Stop</Button>
      <Button variant="success" className="btn" onClick={game ? next : start}>{game ? 'Next' : 'Start'}</Button>
      <Button variant="info" className="btn" onClick={result}>Result</Button>
    </div>
  );
};

export default Control;
