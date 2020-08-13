import * as React from 'react';
import './heart.scss';
import background from './hear1t.svg';

const Heart: React.FC = () => (
  <div className="heart" style={{ backgroundImage: `url(${background})` }} />
);

export default Heart;
