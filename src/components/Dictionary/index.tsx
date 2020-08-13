import * as React from 'react';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ru, eng } from 'constants/dictionary-constants';
import { State } from 'models';
import { useSelector } from 'react-redux';
import View from './View';

function Dictionary(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const [currPage, setCurrPage] = useState('learning');
  const btnClickHandler = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => setCurrPage(event.currentTarget.id);

  return (
    <div className="dictionary-wrapper p-2">
      <div className="dictionary-header bg-light rounded container py-2">
        <div className="title-container d-flex justify-content-between">
          <h4 className="dictionary-title text-uppercase display-4">{usedLang.title}</h4>
          <Link to="/"><FontAwesomeIcon icon={faTimes} /></Link>
        </div>
        <div className="dictionary-btn-container d-flex">
          <button
            type="submit"
            className="btn dictionary-btn btn-outline-primary mx-1"
            id="learning"
            onClick={btnClickHandler}
          >
            {usedLang.learningWords}
          </button>
          <button
            type="submit"
            className="btn dictionary-btn btn-outline-primary mx-1"
            id="difficult"
            onClick={btnClickHandler}
          >
            {usedLang.difficultWords}
          </button>
          <button
            type="submit"
            className="btn dictionary-btn btn-outline-primary mx-1"
            id="deleted"
            onClick={btnClickHandler}
          >
            {usedLang.deletedWords}
          </button>
        </div>
      </div>
      <View dictionaryPage={currPage} />
    </div>
  );
}

export default Dictionary;
