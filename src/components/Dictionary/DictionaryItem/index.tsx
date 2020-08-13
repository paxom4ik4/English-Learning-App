import * as React from 'react';
import './index.scss';
import { ru, eng } from 'constants/dictionary-constants';
import { State } from 'models';
import { useSelector } from 'react-redux';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import Spinner from 'react-bootstrap/Spinner';

function DictionaryItem({ item }: {item: FetchedWordData}): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const dictLoading = useSelector((state: State) => state.dictionaryLoader.isDictLoad);
  const usedLang = lang === 'eng' ? eng : ru;
  const settingsState = useSelector((state: State) => state.appUserSettings);
  const url = `https://raw.githubusercontent.com/lactivka/rslang-data/master/${item.audio}`;
  const audio = new Audio(url);

  const transcriptionClass = settingsState.optional.showTranscription ? 'text-danger' : 'd-none';
  const imageBlockClass = settingsState.optional.showImage ? 'image-block shadow m-1' : 'd-none';
  const exampleClass = settingsState.optional.example ? null : 'd-none';
  const meaningClass = settingsState.optional.wordMeaning ? null : 'd-none';

  async function playWordAudio(): Promise<void> {
    await audio.play();
  }

  const speakerIconClickHandler = () => playWordAudio();

  return (
    <div className="dictionary-item container shadow d-flex flex-wrap justify-content-between align-items-center my-1 py-1">
      {dictLoading
        ? (
          <Spinner animation="border" role="status" className="dict-spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
        : (
          <button
            className="btn btn-speaker btn-outline-primary shadow rounded-circle p-1 m-1"
            type="button"
            onClick={speakerIconClickHandler}
          >
            <div className="speaker-icon" />
          </button>
        )}
      <div className="word-translate-transcription-block d-flex flex-column justify-content-around align-items-center m-1">
        <span className="text-primary">{item.word}</span>
        <span className="text-center">{item.wordTranslate}</span>
        <span className={transcriptionClass}>{item.transcription}</span>
      </div>
      <div
        className={imageBlockClass}
      >
        <img
          className="word-image rounded"
          src={`https://raw.githubusercontent.com/lactivka/rslang-data/master/${item.image}`}
          alt="Illustration to word"
        />
      </div>
      <div className="example-meaning-block d-flex flex-column m-1">
        <p className={exampleClass} dangerouslySetInnerHTML={{ __html: `${item.textExample}` }} />
        <p className={meaningClass} dangerouslySetInnerHTML={{ __html: `${item.textMeaning}` }} />
      </div>
      <div className="word-statistic d-flex flex-wrap justify-content-between mb-2 px-1">
        <span className="px-1">
          {usedLang.wordProgress}
          {' '}
          {item.userWord.optional.success || 0}
        </span>
        <span className="px-1">
          {usedLang.repeats}
          {' '}
          {item.userWord.optional.repeatTimes || 0}
        </span>
        <span className="px-1">
          {usedLang.lastRepeat}
          {' '}
          {item.userWord.optional.lastRepeat || '-'}
          {' '}
        </span>
        <span className="px-1">
          {usedLang.nextRepeat}
          {' '}
          {item.userWord.optional.nextRepeat || '-'}
        </span>
      </div>
    </div>
  );
}

export default DictionaryItem;
