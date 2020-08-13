import * as React from 'react';
import './defaultInfo.scss';

const DefaultInfo: React.FC = () => (
  <div className="defaultInfo-savannah">
    <h1 className="h1Style-savannah">Саванна</h1>
    <p className="info-savannah">
      Тренировка Саванна развивает словарный запас.
      Чем больше слов ты знаешь,
      тем больше очков опыта
      получишь.
    </p>
  </div>
);

export default DefaultInfo;
