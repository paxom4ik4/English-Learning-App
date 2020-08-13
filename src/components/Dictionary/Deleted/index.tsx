import * as React from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { ru, eng } from 'constants/dictionary-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { updateUserWord } from 'constants/athorization-constants';
import DictionaryItem from '../DictionaryItem';

function Deleted(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const dispatch = useDispatch();
  const usedWords: FetchedWordData[] = useSelector(
    (state: State) => state.appUserWords.userWords
      .filter((word: FetchedWordData) => word.userWord.optional.del),
  );
  const btnClickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const clickedId = event.currentTarget.id;
    const clickedWord = usedWords.filter((wordItem) => String(wordItem.id) === clickedId);
    delete clickedWord[0].userWord.optional.del;
    delete clickedWord[0].userWord.optional.success;
    delete clickedWord[0].userWord.optional.repeatTimes;
    updateUserWord(clickedWord[0], dispatch);
  };
  const usedLang = lang === 'eng' ? eng : ru;

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3">
      <p className="font-weight-bold border-bottom text-uppercase py-2">
        {usedLang.deletedWords}
        {' '}
        (
        {usedWords.length}
        )
      </p>
      {usedWords.map((element) => (
        <div className="d-flex align-items-center" key={element.word}>
          <DictionaryItem item={element} />
          <button
            className="btn btn-deleted-words btn-outline-primary shadow rounded-circle p-1 m-1"
            type="button"
            data-toggle="tooltip"
            data-placement="left"
            title={usedLang.returnToLearning}
            id={String(element.id)}
            onClick={btnClickHandler}
          >
            <div className="undelete-icon" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Deleted;
