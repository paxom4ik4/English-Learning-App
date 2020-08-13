import * as React from 'react';
import './startNewGame.scss';

const reload = () => {
  location.reload();
};

const StartNewGame: React.FC = () => (
  <div className="new-game-btn-savannah" onClick={reload}>Продолжить тренировку</div>
);

export default StartNewGame;
