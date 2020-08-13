import * as React from 'react';
import Speaker from './speaker/speaker';
import Translation from './translation/translation';
import './appendWord.scss';

const AppendWord: React.FC<{word3: string}> = ({ word3 }) => (
  <div className="append-word-savannah">
    <Speaker />
    <Translation word3={word3} />
  </div>
);

export default AppendWord;
