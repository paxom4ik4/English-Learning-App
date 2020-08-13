import * as React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { showWords } from 'containers/Games/Savannah/actions';
import Header from './components/Header/header';
import Result from './components/Result/result';
import StartNewGame from './components/StartNewGame/startNewGame';
import BackToTraining from './components/BackToTraining/backToTraining';
import './endScreen.scss';
import ShowWordsComponent from './components/ShowWords/showWords';
import Words from './components/Words/words';
import Errors from './components/Words/errors/errors';
import Line from './components/Words/line/line';
import TrueWords from './components/Words/trueWords/trueWords';
import TrueWordsArr from './components/Words/trueWordsArr/trueWordsArr';

const EndScreenComponent = ({ mode, failedWords, trueWords }) => (
  mode === 'SETENDMODE' ? (
    <div className="end-screen-savannah">
      <Header word="В этот раз не получилось, но продолжай тренироваться!" />
      <Result firstNum="1" secondNum="2" />
      <div className="words-window">
        <Errors count={failedWords.failedWords.length} />
        <Words />
        <Line />
        <TrueWords count={trueWords.trueWords.length} />
        <TrueWordsArr />
      </div>
      <ShowWords />
      <StartNewGame />
      <BackToTraining />
    </div>
  ) : <div />
);

/* // eslint-disable-next-line react/prefer-stateless-function
class EndScreenComponent extends Component {
  render() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { mode, failedWords, trueWords } = this.props;
    if (mode === 'SETENDMODE') {
      return (
        <div className="end-screen">
          <Header word="В этот раз не получилось, но продолжай тренироваться!" />
          <Result firstNum="1" secondNum="2" />
          <div className="words-window">
            <Errors count={failedWords.failedWords.length} />
            <Words />
            <Line />
            <TrueWords count={trueWords.trueWords.length} />
            <TrueWordsArr />
          </div>
          <ShowWords />
          <StartNewGame />
          <BackToTraining />
        </div>
      );
    }
    return <div />;
  }
} */

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
  failedWords: state.failedWords,
  trueWords: state.trueWords,
  showWords: state.showWords,
});

const mapDispatchToPropsForButton = (dispatch) => ({
  showWord: () => {
    showWords(dispatch);
  },
});

const ShowWords = connect(mapStateToPropsForCounter, mapDispatchToPropsForButton)(ShowWordsComponent);

const EndScreen = connect(mapStateToPropsForCounter, null)(EndScreenComponent);

export default EndScreen;
