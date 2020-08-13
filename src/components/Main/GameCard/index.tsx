import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { State } from 'models';
import { openModal, setModalInfo } from 'containers/Main/actions';
import { InitialStateModalInfo } from 'containers/Main/models';
import { CardProps } from '../models';
import './index.scss';

const GameCard: React.FC<CardProps> = ({
  route, cardId, name, imgSrc, modalId, desc,
}) => {
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const modalInfo: InitialStateModalInfo = {
    modalId,
    name,
    desc,
  };
  const modalHandler = () => {
    dispatch(openModal());
    dispatch(setModalInfo(modalInfo));
  };
  return (
    <div className={theme === 'light' ? 'game-card' : 'game-card card-dark'} id={cardId}>
      { route === 'ourGame' || route === 'sprint'
        ? <p className="game-name">{name}</p>
        : (
          <Link to={`/${route}`} className="game-link">
            <p className="game-name">{name}</p>
          </Link>
        )}
      <img src={imgSrc} alt="Game Card" />
      <button
        type="button"
        onClick={modalHandler}
        className={theme === 'light' ? 'about-game' : 'about-game about-dark'}
      >
        <FontAwesomeIcon icon={faQuestionCircle} />
      </button>
    </div>
  );
};

export default GameCard;
