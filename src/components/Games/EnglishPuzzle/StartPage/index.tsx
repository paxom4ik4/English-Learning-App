import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useState, useCallback } from 'react';
import { closeStartPage } from 'containers/Games/EnglishPuzzle/StartPage/actions';
import './index.scss';

const StartPage: React.FC = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState('block');
  const [style, setStyle] = useState('eng-puzzle-start-page');
  const removeStartPage = useCallback(() => {
    setStyle('eng-puzzle-start-page eng-puzzle-hide-start-page');
    dispatch(closeStartPage());
    setTimeout(() => {
      setActive('none');
    }, 700);
  }, []);
  return (
    <div className={style} style={{ display: `${active}` }}>
      <div className="eng-puzzle-guide">
        <div className="eng-puzzle-app-info">
          <h1 className="eng-puzzle-appName">English Bricks</h1>
          <p className="eng-puzzle-app-describe">Click on words, collect phrases.</p>
          <p className="eng-puzzle-app-describe">Words can be drag and drop. Select tooltips in the menu.</p>
        </div>
        <button
          type="button"
          className="eng-puzzle-help-button"
          onClick={removeStartPage}
        >
          START
        </button>
      </div>
    </div>
  );
};
export default StartPage;
