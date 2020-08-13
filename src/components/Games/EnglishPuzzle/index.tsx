import * as React from 'react';
import View from './View';
import StartPage from './StartPage';
import './index.scss';

const EnglishPuzzle: React.FC = () => (
  <div className="eng-puzzle-wrapper">
    <View />
    <StartPage />
  </div>
);
export default EnglishPuzzle;
