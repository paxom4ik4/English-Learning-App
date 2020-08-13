import * as React from 'react';
import './line.scss';
import { useSelector } from 'react-redux';

const Line: React.FC = () => {
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    return <div className="line-savannah" />;
  }
  return <div />;
};

export default Line;
