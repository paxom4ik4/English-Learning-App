import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'models';
import { updateUserWords } from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

const Repeat: React.FC = () => {
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
        new Date().getTime() + 1000 * 60 * 60 * 5,
      ).toDateString();
      clone.splice(usedWords.indexOf(data), 1, handledWord);
      dispatch(updateUserWords(clone));
    }
  };

  return (
    <div className="d-flex flex-column">
      <span className="text-center">&gt; 10 min</span>
      <button
        className="btn btn-success"
        type="button"
        id="repeat-btn"
        onClick={btnClickHandler}
      >
        {usedLang.buttons.againgBTN}
      </button>
    </div>
  );
};

export default Repeat;
