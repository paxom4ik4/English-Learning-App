import * as React from 'react';
import './cross.scss';
import background from './cross.png';

const CrossComponent = ({ modalWindow, mode }) => (
  mode !== 'SETENDMODE' ? <div className="cross" onClick={modalWindow} style={{ backgroundImage: `url(${background})` }} /> : <div />
);

export default CrossComponent;
