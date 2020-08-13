import * as React from 'react';
import { connect } from 'react-redux';
import Sound from './components/Sound/sound';
import HealthBar from './components/HealthBar/healthBar';
import RawOfWordsComponent1 from './components/RawOfWords/rawOfWords';
import Indicator from './components/Indicator/Indicator';

const GameScreenComponent = (props) => {
  const { mode } = props;
  if (mode === 'SETGAMEMODE') {
    return (
      <>
        <HealthBar />
        <Sound />
        <RawOfWordsComponent1 />
        <Indicator />
      </>
    );
  }
  return <div />;
};

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const GameScreen = connect(mapStateToPropsForCounter, null)(GameScreenComponent);

export default GameScreen;
