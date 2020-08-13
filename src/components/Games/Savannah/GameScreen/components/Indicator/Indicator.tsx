import * as React from 'react';
import './indicator.scss';
import background from './movingImg.png';

const Indicator: React.FC = () => (
  <div className="indicator-savannah">
    <div className="movingImg-savannah" style={{ backgroundImage: `url(${background})` }} />
    <div className="pulsate-css-savannah" />
  </div>
);

export default Indicator;
