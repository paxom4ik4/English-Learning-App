import * as React from 'react';
import './trueWordsArr.scss';
import { connect } from 'react-redux';
import AppendWord from '../appendWord/appendWord';

const WordsComponent = ({ showWords, trueWords }) => (
  showWords ? trueWords.trueWords.map((word) => <AppendWord word3={word} key={word} />) : <div />
);

const mapStateToPropsForCounter = (state) => ({
  showWords: state.showWords,
  failedWords: state.failedWords,
  trueWords: state.trueWords,
});

const TrueWordsArr = connect(mapStateToPropsForCounter, null)(WordsComponent);

export default TrueWordsArr;
