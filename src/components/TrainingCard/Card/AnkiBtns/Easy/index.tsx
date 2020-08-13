import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { updateUserWords } from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

const Easy: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const dispatch = useDispatch();
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);
  const usedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const index = useSelector((state: State) => state.training.currIndex);
  const data = usedWords[index];
  const btnClickHandler = () => {
    if (canMoveToNext) {
      const clone = Array.from(usedWords);
      const currentWord = clone[index];
      const handledWord = { ...currentWord };
      handledWord.userWord.optional.nextRepeat = new Date(
        new Date().getTime() + 1000 * 60 * 60 * 168,
      ).toDateString();
      clone.splice(usedWords.indexOf(data), 1, handledWord);
      dispatch(updateUserWords(clone));
    }
  };

  return (
    <div className="d-flex flex-column">
      <span className="text-center">1.5 m</span>
      <button
        className="btn btn-success"
        type="button"
        id="easy-btn"
        onClick={btnClickHandler}
      >
        {usedLang.buttons.easyBTN}
      </button>
    </div>
  );
};

export default Easy;
