import * as React from 'react';
import './tips.scss';
import background from './keyboard.svg';

const Tips: React.FC = () => (
  <div className="tips-savannah">
    <div className="tips-img-savannah" style={{ backgroundImage: `url(${background})` }} />
    <p>Используй клавиши 1, 2, 3 и 4, чтобы дать быстрый ответ</p>
  </div>
);

export default Tips;
