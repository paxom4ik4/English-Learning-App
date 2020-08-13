import * as React from 'react';
import './errors.scss';
import { useSelector } from 'react-redux';

const Errors: React.FC<{count: string}> = ({ count }) => {
  // @ts-ignore
  const showWords = useSelector((state) => state.showWords);
  if (showWords) {
    return <div className="error-str-savannah">{`ОШИБОК: ${count}`}</div>;
  }
  return <div />;
};

export default Errors;
