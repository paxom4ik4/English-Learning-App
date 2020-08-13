import * as React from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { ru, eng } from 'constants/dictionary-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import DictionaryItem from '../DictionaryItem';

function Learning(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const usedWords: FetchedWordData[] = useSelector(
    (state: State) => state.appUserWords.userWords
      .filter(
        (word: FetchedWordData) => word.userWord.optional.played
        && !word.userWord.optional.dif
        && !word.userWord.optional.del,
      ),
  );

  return (
    <div className="dictionary-content bg-light rounded container py-2 my-3">
      <p className="font-weight-bold border-bottom text-uppercase py-2">
        {usedLang.learningWords}
        {' '}
        (
        {usedWords.length}
        )
      </p>
      {usedWords.map((element) => <DictionaryItem item={element} key={element.word} />)}
    </div>
  );
}

export default Learning;
