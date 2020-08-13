import * as React from 'react';
import './header.scss';

const HeaderComponent: React.FC<{word: string}> = ({ word }) => (
  <div className="header-savannah">{word}</div>
);

export default HeaderComponent;
