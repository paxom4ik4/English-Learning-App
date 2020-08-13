import * as React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { HintBtnsProps } from 'components/Games/EnglishPuzzle/models';
import Speaker from './Speaker';
import Hint from './Hint';
import Audio from './Audio';
import Image from './Image';
import './index.scss';

const HintsButtons: React.FC<HintBtnsProps> = ({ phrase }) => (
  <div className="eng-puzzle-hints-buttons">
    <Speaker />
    <Hint />
    <Audio phrase={phrase} />
    <Image />
    <Link to="/">
      <button
        type="button"
        className="eng-puzzle-hint-button"
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </Link>
  </div>
);

export default HintsButtons;
