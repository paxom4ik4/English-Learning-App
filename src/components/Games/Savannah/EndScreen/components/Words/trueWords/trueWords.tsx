import * as React from 'react';
import './trueWords.scss';
import { useSelector } from 'react-redux';

const TrueWords: React.FC<{count: string}> = ({ count }) => {
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    return <div className="true-str-savannah">{`ПРАВИЛЬНО: ${count}`}</div>;
  }
  return <div />;
};

export default TrueWords;
