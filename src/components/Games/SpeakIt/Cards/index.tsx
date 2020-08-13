import * as React from 'react';
import { useSpeechRecognition } from 'react-speech-kit';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { State } from 'models';
import { nextCard } from 'containers/Games/SpeakIt/ControlButtons/actions';
import { win, succesWord } from 'containers/Games/SpeakIt/FetchGroup/actions';
import {
  updateDate, updateTime, updateLevels, updateFailed, updateSuccess,
} from 'containers/Games/SpeakIt/LongTermStatistic/actions';
import Card from '../Card';

const Cards = (): JSX.Element => {
  const dispatch = useDispatch();
  const statistics = useSelector((state: State) => state.speakItFetch.statistics);
  const game = useSelector((state: State) => state.speakItButtons.startGame);
  const arr = [1, 3, 4, 5, 2, 6, 0, 7, 9, 8];
  const gameWord = useSelector((state: State) => state.speakItButtons.gameWord);
  const [value, setValue] = useState('');
  const pagination: number = useSelector((state: State) => state.speakItButtons.pagination);
  const savedDate = useSelector((state: State) => state.speakItStatisticInfo.playedDates[0]);
  const group = useSelector((state: State) => state.speakItControl.group);
  const succes = useSelector((state: State) => state.speakItFetch.succes);
  const failed = useSelector((state: State) => state.speakItFetch.failed);

  useEffect(() => {
    if (value.toLowerCase() === gameWord) {
      dispatch(nextCard());
      dispatch(win(gameWord));
      dispatch(succesWord());
    }
  }, [gameWord, value]);

  useEffect(() => {
    if (pagination > 9) {
      if (!savedDate || savedDate.date !== new Date().toDateString()) {
        dispatch(updateDate({ date: new Date().toDateString() }));
      }
      dispatch(updateTime(
        {
          date: new Date().toDateString(),
          payload: new Date().toTimeString().slice(0, 9),
        },
      ));
      dispatch(updateLevels({ date: new Date().toDateString(), payload: `Group: ${group}` }));
      dispatch(updateFailed({ date: new Date().toDateString(), payload: failed }));
      dispatch(updateSuccess({ date: new Date().toDateString(), payload: succes }));
    }
  }, [pagination]);

  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  if (game) {
    listen({ lang: 'en-US' });
  } else {
    stop();
  }

  return (
    <div className="cards-wrapper">
      { statistics.map((item, index) => (
        <Card
          next={arr[index]}
          index={index}
          data={item}
          key={item.word}
        />
      ))}
    </div>
  );
};

export default Cards;
