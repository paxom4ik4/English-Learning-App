import * as React from 'react';
import questionMarkImage from 'assets/question.svg';
import checkMarkImage from 'assets/checkbox.svg';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import './index.scss';
import {
  useState, useEffect, useRef,
} from 'react';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import TrainingCardFields from 'components/TrainingCard/Card/TrainingCardFields';
import CheckedAnswer from 'components/TrainingCard/Card/CheckedAnswer';
import {
  setInputWord, toggleAnswerCorrect, toggleMoveToNext,
  addToSuccessTraining, addToFailedTraining, progressTraining,
  addRowOfSuccess, toggleTrainingStatistic, updateUserWords, updateNewCardProgress, updateGameCardProgress,
} from 'containers/TrainingCard/actions';
import { ru, eng } from 'constants/training-constants';
import { updateUserWord, updateUserStatistic } from 'constants/athorization-constants';
import Spinner from 'react-bootstrap/Spinner';
import {
  updateUserLearnedWordsAmount,
  updateDailyCardProgress,
  updateUserBestAttempts,
  updateUserCorrectRepeats,
} from 'containers/Authorisation/actions';
import { OptionalUserStatistc } from 'containers/Authorisation/models';

const Card: React.FC = () => {
  const dispatch = useDispatch();
  const clonedWords: FetchedWordData[] = useSelector((state: State) => state.appUserWords.userWords);
  const bestRow = useSelector((state: State) => state.trainingStatistic.correctAnswersInRow);
  const userStatistic = useSelector((state: State) => state.appUserStatistic);
  const trainingLoader = useSelector((state: State) => state.trainingCardLoader.isCardLoad);
  const cardsProgress = useSelector((state: State) => state.appUserStatistic.optional.totalDailyProgress);
  const isAnswerChecked = useSelector((state: State) => state.training.isChecked);
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);
  const settingsState = useSelector((state: State) => state.appUserSettings);
  const canMoveToNext = useSelector((state: State) => state.training.moveToNext);
  const studyMode = useSelector((state: State) => state.mainStudyMode.studyModes);
  const index = useSelector((state: State) => state.training.currIndex);
  const lang = useSelector((state: State) => state.mainLang.lang);
  const isStatisticOpen = useSelector((
    state: State,
  ) => state.trainingStatistic.isTrainingStatisticOpen);
  const [isWordSuccess, setSuccess] = useState(false);
  const [successRow, setSuccessRow] = useState(0);
  const [isSuccess, setIsSuccess] = useState(true);
  const [delActive, setDelActive] = useState(false);
  const [difActive, setDifActive] = useState(false);
  const [inputData, setInputData] = useState('');
  const [delMes, showDelMes] = useState(false);
  const [mes, setMes] = useState('');
  const usedLang = lang === 'eng' ? eng : ru;

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
  const prevData = usedWords[index - 1];
  const inputWidth = data.word.length * 12;
  const cardsToTrain = usedWords.length;
  const totalCardsToTrain = settingsState.optional.cardsPerDay;

  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const showWordExample = settingsState.optional.example;
  const showWordMeaning = settingsState.optional.wordMeaning;
  const showWordImage = settingsState.optional.showImage;
  const showHelpBTN = settingsState.optional.showAnswerBtn;
  const showDeleteBTN = settingsState.optional.deleteWordBtn;
  const showDifficultBTN = settingsState.optional.difficultWordBtn;
  const playAudioSetting = settingsState.optional.autoPronounce;

  const wordAudioURL = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.audio}`;
  const meaningAudioURL = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.audioMeaning}`;
  const exampleAudioURL = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.audioExample}`;
  const wordAudio = new Audio(wordAudioURL);
  const meaningAudio = new Audio(meaningAudioURL);
  const exampleAudio = new Audio(exampleAudioURL);

  useEffect(() => {
    if (!isAnswerChecked) {
      inputRef.current.focus();
    } else {
      inputRef.current.blur();
      if (isAnswerCorrect && playAudioSetting && !delActive && !difActive) {
        const handleAudio = async () => {
          try {
            wordAudio.onclick = () => wordAudio.pause();
            meaningAudio.onclick = () => meaningAudio.pause();
            exampleAudio.onclick = () => exampleAudio.pause();

            await wordAudio.play();
            wordAudio.onended = async () => {
              if (showWordMeaning && showWordExample) {
                await meaningAudio.play();
                meaningAudio.onended = async () => {
                  await exampleAudio.play();
                  exampleAudio.onended = () => {
                  };
                };
              }
            };
          } catch (error) {
            throw new Error('Cannot load the audio files');
          }
        };
        handleAudio();
      }
    }
  });

  const getUrl = () => {
    if (showWordImage && (isAnswerCorrect || index < cardsToTrain)) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${data.image}`;
    if (!showWordImage && (isAnswerCorrect || index >= cardsToTrain)) return checkMarkImage;
    if (showWordImage && (isAnswerCorrect || index >= cardsToTrain)) return `https://raw.githubusercontent.com/lactivka/rslang-data/master/${prevData.image}`;
    return questionMarkImage;
  };

  const imgURL = getUrl();
  const nextCardBTNClass = canMoveToNext ? 'next-card-btn btn btn-success shadow my-2' : 'btn invisible my-2';
  const helpBTNClass = showHelpBTN ? 'btn btn-info shadow my-1' : 'd-none';
  const deleteBTNClass = (showDeleteBTN && canMoveToNext) ? 'btn btn-info shadow my-1' : 'd-none';
  const difficultBTNClass = (showDifficultBTN && canMoveToNext) ? 'btn btn-info shadow my-1' : 'd-none';

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!canMoveToNext) {
      setInputData(event.target.value);
    }
  };

  const audioHandler = () => {
    const event = new Event('click');
    wordAudio.dispatchEvent(event);
    meaningAudio.dispatchEvent(event);
    exampleAudio.dispatchEvent(event);
  };

  const checkAnswerBTNHandler = () => {
    if (!canMoveToNext && !isAnswerChecked && inputData.length > 0) {
      dispatch(setInputWord(inputData));
      setInputData('');
      if (inputData.toLowerCase() === data.word.toLowerCase()) {
        if (isSuccess) setSuccessRow(successRow + 1);
        setSuccess(true);
        dispatch(toggleAnswerCorrect());
        dispatch(toggleMoveToNext());
      } else {
        setSuccessRow(0);
        setIsSuccess(false);
      }
    }
  };

  const helpBTNHandler = () => {
    if (!isAnswerCorrect) {
      setIsSuccess(false);
      setSuccessRow(0);
      dispatch(setInputWord(data.word));
      dispatch(toggleAnswerCorrect());
      setInputData('');
      dispatch(toggleMoveToNext());
    }
  };

  interface WordSigns {
    played: boolean;
    repeatTimes: number;
    date: string;
    time: string;
    del: boolean;
    dif: boolean;
    lastRepeat: string;
    nextRepeat: string;
  }

  const propObject = {} as WordSigns;
  const optional = {
    optional: propObject,
  };

  const deleteWord = () => {
    if (!difActive) {
      audioHandler();
      setDelActive(true);
      setMes('deleted');
      showDelMes(true);
    }
  };

  const setAsDifficult = () => {
    if (!delActive) {
      audioHandler();
      setDifActive(true);
      setMes('added to difficult');
      showDelMes(true);
    }
  };

  const nextCardBTNHandler = () => {
    audioHandler();
    showDelMes(false);
    const clone = Array.from(clonedWords);
    const currentWord = usedWords[index];
    const handledWord = { ...currentWord };
    if (handledWord.userWord && handledWord.userWord.optional.played) {
      handledWord.userWord.optional.repeatTimes === undefined
        ? handledWord.userWord.optional.repeatTimes = 0
        : +handledWord.userWord.optional.repeatTimes++;
      !handledWord.userWord.optional.lastRepeat
        ? handledWord.userWord.optional.lastRepeat = `${new Date().toDateString().slice(3, -4)} ${new Date().toLocaleTimeString().slice(0, -3)}`
        : handledWord.userWord.optional.lastRepeat = `${new Date().toDateString().slice(3, -4)} ${new Date().toLocaleTimeString().slice(0, -3)}`;
      !handledWord.userWord.optional.nextRepeat
        ? handledWord.userWord.optional.nextRepeat = `${new Date(new Date().getTime() + 1000 * 60 * 5).toLocaleTimeString().slice(0, -3)}`
        : handledWord.userWord.optional.nextRepeat = `${new Date(new Date().getTime() + 1000 * 60 * 5).toLocaleTimeString().slice(0, -3)}`;
      if (isWordSuccess && !handledWord.userWord.optional.success) {
        handledWord.userWord.optional.success = 1;
      } else if (handledWord.userWord.optional.success === 8) {
        handledWord.userWord.optional.del = true;
      } else {
        +handledWord.userWord.optional.success++;
      }
      if (delActive) {
        handledWord.userWord.optional.del = true;
        handledWord.userWord.optional.dif = false;
        handledWord.userWord.optional.nextRepeat = '-';
      }
      if (difActive) {
        handledWord.userWord.optional.dif = true;
      }
      clone.splice(clonedWords.indexOf(currentWord), 1, handledWord);

      const statistic = {
        playedGames: 0,
        bestAttempts: bestRow > userStatistic.optional.bestAttempts ? +bestRow + 1 : userStatistic.optional.bestAttempts,
        correctRepeats: isSuccess ? +userStatistic.optional.correctRepeats + 1 : userStatistic.optional.correctRepeats,
        totalDailyProgress: cardsProgress + 1,
      } as OptionalUserStatistc;
      bestRow > userStatistic.optional.bestAttempts && dispatch(updateUserBestAttempts(bestRow));
      isSuccess && dispatch(updateUserCorrectRepeats());
      dispatch(updateUserWords(clone));
      dispatch(updateDailyCardProgress());
      dispatch(updateNewCardProgress());
      dispatch(updateGameCardProgress());
      updateUserStatistic({ learnedWords: userStatistic.learnedWords, optional: statistic });
      updateUserWord(handledWord, dispatch);

      dispatch(updateUserWords(clone));
      updateUserWord(handledWord, dispatch);
      setDelActive(false);
      setDifActive(false);
    } else {
      propObject.played = true;
      propObject.repeatTimes = 0;
      propObject.date = new Date().toDateString();
      propObject.time = new Date().toTimeString();
      propObject.lastRepeat = `${new Date().toDateString().slice(0, -4)} ${new Date().toLocaleTimeString().slice(0, -3)}`;
      propObject.nextRepeat = `${new Date(new Date().getTime() + 1000 * 60 * 5).toDateString()}`;
      handledWord.userWord = optional;
      if (delActive) {
        handledWord.userWord.optional.del = true;
        handledWord.userWord.optional.dif = false;
      }
      if (difActive) {
        handledWord.userWord.optional.dif = true;
        handledWord.userWord.optional.del = false;
      }
      clone.splice(clonedWords.indexOf(currentWord), 1, handledWord);

      const statistic = {
        playedGames: 0,
        bestAttempts: bestRow > userStatistic.optional.bestAttempts ? bestRow : userStatistic.optional.bestAttempts,
        correctRepeats: isSuccess ? +userStatistic.optional.correctRepeats + 1 : userStatistic.optional.correctRepeats,
        totalDailyProgress: cardsProgress,
      } as OptionalUserStatistc;
      bestRow > userStatistic.optional.bestAttempts && dispatch(updateUserBestAttempts(bestRow));
      isSuccess && dispatch(updateUserCorrectRepeats());
      const learned = userStatistic.learnedWords + 1;
      dispatch(updateUserWords(clone));
      dispatch(updateDailyCardProgress());
      dispatch(updateNewCardProgress());
      dispatch(updateGameCardProgress());
      dispatch(updateUserLearnedWordsAmount(learned));
      updateUserStatistic({ learnedWords: learned, optional: statistic });
      updateUserWord(handledWord, dispatch);
      setDelActive(false);
      setDifActive(false);
    }
    if (isSuccess) {
      dispatch(addToSuccessTraining(data));
    } else {
      dispatch(addToFailedTraining(data));
    }

    setIsSuccess(true);
    index < usedWords.length - 1
    && dispatch(progressTraining());
    dispatch(addRowOfSuccess(successRow));
    if ((index === cardsToTrain - 1 || cardsProgress === totalCardsToTrain - 1) && !isStatisticOpen) {
      dispatch(toggleTrainingStatistic(true));
    }
  };

  const formSubmitHandler = (
    event: React.FormEvent<HTMLFormElement>,
  ) => { event.preventDefault(); checkAnswerBTNHandler(); };

  return (
    <div className="training-card-wrapper shadow">
      <div className="training-card-content">
        <div
          className={
            delMes || trainingLoader
              ? 'training-card-info training-card-info-deleted'
              : 'training-card-info'
          }
        >
          {delMes
            ? (<span style={{ color: 'black' }}>{mes}</span>)
            : (trainingLoader ? (
              <Spinner animation="border" role="status" className="dict-spinner text-info">
                <span className="sr-only">Loading...</span>
              </Spinner>
            )
              : <TrainingCardFields />
            )}
          <form
            action=""
            className={
              delMes || trainingLoader
                ? 'checking-form m-auto disabled'
                : 'checking-form m-auto'
            }
            id="checking-form"
            style={{ width: `${inputWidth}px` }}
            onSubmit={formSubmitHandler}
          >
            <input
              className="mx-auto"
              type="text"
              ref={inputRef}
              value={inputData}
              maxLength={data.word.length}
              style={{ width: `${inputWidth}px` }}
              onChange={inputChangeHandler}
            />
            <CheckedAnswer />
          </form>
        </div>
        <div className="training-card-image-container p-2">
          <img className="training-card-image rounded" alt="hint" src={imgURL} />
        </div>
      </div>
      <div className="training-card-footer px-1">
        <div className="btn-block-one">
          <button
            className="btn btn-info shadow my-1"
            type="button"
            onClick={checkAnswerBTNHandler}
          >
            {usedLang.buttons.checkBTN}
          </button>
          <button
            type="button"
            className={helpBTNClass}
            onClick={helpBTNHandler}
          >
            {usedLang.buttons.showAnswerBTN}
          </button>

          <button
            type="button"
            className={deleteBTNClass}
            onClick={deleteWord}
          >
            {usedLang.buttons.deleteBTN}
          </button>
          <button
            type="button"
            onClick={setAsDifficult}
            className={difficultBTNClass}
          >
            {usedLang.buttons.difficultBTN}
          </button>
        </div>
        <div className="btn-block-two">
          <button
            className={nextCardBTNClass}
            type="button"
            onClick={nextCardBTNHandler}
          >
            {index < cardsToTrain - 1 ? usedLang.buttons.nextCardBTN : usedLang.buttons.finishBTN}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
