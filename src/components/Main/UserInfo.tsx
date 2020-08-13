import * as React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { State } from 'models';
import { eng, ru } from 'constants/main-page-constants';

const UserInfo: React.FC = () => {
  const lang = useSelector((state: State) => state.mainLang.lang);
  const userStatistic = useSelector((state: State) => state.appUserStatistic);
  const [usedLang, setUsedLang] = lang === 'eng' ? useState(eng) : useState(ru);
  useEffect(() => (lang === 'eng' ? setUsedLang(eng) : setUsedLang(ru)), [lang]);
  return (
    <div className="main-stat">
      <div>
        <p>{`${usedLang.userProgress.learned} ${userStatistic.learnedWords}`}</p>
      </div>
      <div>
        <p>{`${usedLang.userProgress.played} ${userStatistic.optional.playedGames}`}</p>
      </div>
      <div>
        <p>{`${usedLang.userProgress.rightInARow} ${userStatistic.optional.bestAttempts}`}</p>
      </div>
      <div>
        <p>{`${usedLang.userProgress.correctRepeats} ${userStatistic.optional.correctRepeats}`}</p>
      </div>
    </div>
  );
};
export default UserInfo;
