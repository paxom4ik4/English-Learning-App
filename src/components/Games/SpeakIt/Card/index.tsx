import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames';
import './index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { backgroundWord, translateWord } from 'containers/Games/SpeakIt/FetchGroup/actions';
import { State } from 'models';
import { activeWord } from 'containers/Games/SpeakIt/CardsGroup/actions';
import { resetGame, resultGame, selectedWord } from 'containers/Games/SpeakIt/ControlButtons/actions';

const Card = ({ data, index, next }) => {
  const dispatch = useDispatch();
  const pagination :number = useSelector((state: State) => state.speakItButtons.pagination);
  const game :boolean = useSelector((state: State) => state.speakItButtons.startGame);

  useEffect(() => {
    if (pagination > 9) {
      dispatch(resultGame(true));
      dispatch(resetGame());
    }
    if (pagination === Number(next)) {
      dispatch(selectedWord(data.word));
      game === true && dispatch(backgroundWord(data.image));
    }
  }, [pagination, data.word]);

  const active = useSelector((state: State) => state.speakItWord.activeWord);
  const statistics = useSelector((state: State) => state.speakItFetch.statistics);

  const winCard :boolean = statistics.find((elem) => elem.word === data.word).win;
  const mistakeCard :boolean = statistics.find((elem) => elem.word === data.word).mistake;

  const cardData = () => {
    dispatch(activeWord(index));
    dispatch(translateWord(data.wordTranslate));
    dispatch(backgroundWord(data.image));
    const urlAudio = `https://raw.githubusercontent.com/ArtemDrushchyts/rslang-data/master/${data.audio}`;
    const audio = new Audio(urlAudio);
    !game && audio.play();
  };

  return (
    <div
      className={
        game
          ? classNames(
            'speak-it-card', {
              'card-selected': pagination === Number(next),
              'card-win': winCard,
              'card-mistake': mistakeCard,
            },
          )
          : classNames('speak-it-card', { 'active-card': index === active })
        }
      id={next}
      onClick={!game && cardData}
    >
      <FontAwesomeIcon icon={faVolumeUp} className="voice-img" />
      <p className="word">{data.word}</p>
      <p className="transcription">{data.transcription}</p>
    </div>
  );
};

export default Card;
