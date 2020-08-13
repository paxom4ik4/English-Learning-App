import * as React from 'react';
import { useSelector } from 'react-redux';
import { eng, ru } from 'constants/audio-call-constants';
import { FetchedWordData } from 'containers/Games/EnglishPuzzle/HeaderBlock/SettingsBlock/models';
import { State } from 'models';
import StatisticItem from './StatisticItem';

function ShortStatisticContent(): JSX.Element {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const usedLang = lang === 'eng' ? eng : ru;
  const knowWords: FetchedWordData[] = useSelector(
    (state: State) => state.audioCallStatistic.correctAnswers,
  );
  const notKnowWords: FetchedWordData[] = useSelector(
    (state: State) => state.audioCallStatistic.wrongAnswers,
  );
  const isLongStatistic = useSelector(
    (state: State) => state.audioCallStatistic.isLongStatistic,
  );

  if (isLongStatistic) {
    return null;
  }

  return (
    <div className="short-statistic bg-light mx-5 text-dark" style={{ overflowY: 'scroll', maxHeight: '50vh' }}>
      <div className="d-flex pb-3 bg-light text-dark flex-column border-bottom">
        <p className="text-danger my-1">
          {usedLang.shortStatistic.errors}
          &nbsp;
          {notKnowWords.length}
        </p>
        {
        notKnowWords.map((word) => <StatisticItem item={word} key={word.word} />)
      }
      </div>
      <div className="d-flex bg-light text-dark flex-column">
        <p className="text-success mb-1 mt-3">
          {usedLang.shortStatistic.know}
          &nbsp;
          {knowWords.length}
        </p>
        { knowWords.map((word) => <StatisticItem item={word} key={word.word} />)}
      </div>
    </div>
  );
}

export default ShortStatisticContent;
