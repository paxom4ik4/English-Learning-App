import * as React from 'react';
import './index.scss';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

interface Props {
  tabInfo
}

const GameTab: React.FC<Props> = ({ tabInfo }) => (
  <div className="game-tab">
    <Image src={tabInfo.imagePath} fluid />
    <p>{tabInfo.text}</p>
    <Link to={tabInfo.linkToGame}>
      <Button className="game-tab-button" variant="outline-primary">Play it now!</Button>
    </Link>
  </div>
);

export default GameTab;
