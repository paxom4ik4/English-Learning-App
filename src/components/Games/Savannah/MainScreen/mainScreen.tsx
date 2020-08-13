import * as React from 'react';
import { connect } from 'react-redux';
import DefaultInfo from './components/DefaultInfo/defaultInfo';
import Button from './components/StartButton/startButton';
import './mainScreen.scss';

const MainScreenComponent = (props) => {
  const { mode } = props;
  if (mode === '') {
    return (
      <div className="main-savannah">
        <DefaultInfo />
        <Button />
      </div>
    );
  }
  return <div />;
};

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const MainScreen = connect(mapStateToPropsForCounter, null)(MainScreenComponent);

export default MainScreen;
