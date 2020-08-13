import * as React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { toggleAnswerChecked } from 'containers/TrainingCard/actions';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';

function CheckedAnswer(): JSX.Element {
  const dispatch = useDispatch();
  const clonedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const inputWord: string = useSelector((state: State) => state.training.inputWord);
  const isAnswerChecked = useSelector((state: State) => state.training.isChecked);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  const settingsState = useSelector((state: State) => state.appUserSettings);
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);
  const studyMode = useSelector((state: State) => state.mainStudyMode.studyModes);
  const index = useSelector((state: State) => state.training.currIndex);

  let usedWords: FetchedWordData[];
  if (studyMode.trainAllWords) {
    usedWords = clonedWords.filter((word) => !word.userWord.optional.del);
  }
  if (studyMode.onlyNew) {
    usedWords = clonedWords.filter((word) => !word.userWord.optional.played).slice(0, settingsState.wordsPerDay);
  }
  if (studyMode.onlyRepeat) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.repeatTimes > 0);
  }
  if (studyMode.onlyDifficult) {
    usedWords = clonedWords.filter((word) => word.userWord.optional.dif);
  }

  const data = usedWords[index];
  const [checkedAnswerClass, setCheckedAnswerClass] = useState('checked-answer');
  const correctWord = data.word;

  if (!isAnswerChecked) return null;

  let mistakes = 0;
  for (let i = 0; i < correctWord.length; i += 1) {
    if (!inputWord[i] || correctWord[i].toLowerCase() !== inputWord[i].toLowerCase()) mistakes += 1;
  }

  const correctColor = 'text-success';
  const wrongColor = mistakes < 3 ? 'text-warning' : 'text-danger';

  if (checkedAnswerClass === 'checked-answer' && isAnswerChecked && !isAnswerCorrect) {
    setTimeout(() => {
      setCheckedAnswerClass('half-transparent');
    }, 1000);
  }

  const clickHandler = () => {
    if (!canMoveToNext) {
      dispatch(toggleAnswerChecked());
    }
    setCheckedAnswerClass('checked-answer');
  };

  const keyPressHandler = (event: React.KeyboardEvent<HTMLDivElement>) => event.preventDefault();

  return (
    <div
      className={checkedAnswerClass}
      role="button"
      tabIndex={-1}
      id="checked-answer"
      onClick={clickHandler}
      onKeyPress={keyPressHandler}
    >
      {
        correctWord.split('').map((el: string, id) => (
          <span
            className={
              inputWord[id] && el.toLowerCase() === inputWord[id].toLowerCase() ? correctColor : wrongColor
            }
            key={(new Date()).toDateString() + id.toString()}
          >
            {el}
          </span>
        ))
      }
    </div>
  );
}

export default CheckedAnswer;
