import * as React from 'react';
import './result.scss';
import { connect } from 'react-redux';

interface Props {
  firstNum: string,
  secondNum: string,
  showWords: boolean,
}

const ResultComponent: React.FC<Props> = ({ showWords, firstNum, secondNum }) => (
  !showWords ? <div className="result-savannah">{`${firstNum} слов изучено, ${secondNum} на изучении`}</div> : <div />
);

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
});

const Result = connect(mapStateToPropsForCounter, null)(ResultComponent);

export default Result;
