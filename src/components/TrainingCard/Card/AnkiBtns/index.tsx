import * as React from 'react';
import './index.scss';
import { useSelector } from 'react-redux';
import { State } from 'models';
import Repeat from './Repeat';
import Hard from './Hard';
import Normal from './Normal';
import Easy from './Easy';

const AnkiBtns: React.FC = () => {
  const settingsState = useSelector((state: State) => state.appUserSettings);
  const showIntervalBTNS = settingsState.optional.repeatBtn;
  const isAnswerCorrect = useSelector((state: State) => state.training.isCorrect);

  if (!showIntervalBTNS || !isAnswerCorrect) {
    return (
      <div className="anki-btns-wrapper d-flex justify-content-around flex-wrap mx-auto pt-3 invisible">
        <Repeat />
        <Easy />
        <Normal />
        <Hard />
      </div>
    );
  }

  return (
    <div className="anki-btns-wrapper d-flex justify-content-around flex-wrap mx-auto pt-3">
      <Repeat />
      <Easy />
      <Normal />
      <Hard />
    </div>
  );
};

export default AnkiBtns;
