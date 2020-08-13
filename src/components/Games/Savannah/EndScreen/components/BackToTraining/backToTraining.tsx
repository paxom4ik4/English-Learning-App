import * as React from 'react';
import './backToTraining.scss';

const goBack = () => {
  history.back();
};

const BackToTraining: React.FC = () => (
  <div className="back-to-training" onClick={goBack}>К списку тренировок</div>
);

export default BackToTraining;
