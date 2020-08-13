import * as React from 'react';
import './translation.scss';

const Translation: React.FC<{word3: string}> = ({ word3 }) => (
  <div className="translation-savannah">{word3}</div>
);

export default Translation;
