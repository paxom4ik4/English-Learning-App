import * as React from 'react';
import './speaker.scss';
import background from './speaker.png';

const Speaker: React.FC = () => (
  <div className="speaker-savannah" style={{ backgroundImage: `url(${background})` }} />
);

export default Speaker;
