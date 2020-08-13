import * as React from 'react';
import { connect } from 'react-redux';
import './loadingScreen.scss';
import LoadingImg from './components/LoadingImg/loadingImg';
import Tips from './components/Tips/tips';

const LoadingScreenComponent = ({ mode }) => (
  mode === 'SETLOADINGMODE'
    ? (
      <div>
        <LoadingImg />
        <Tips />
      </div>
    ) : <div />
);

const mapStateToPropsForCounter = (state) => ({
  mode: state.mode,
});

const LoadingScreen = connect(mapStateToPropsForCounter, null)(LoadingScreenComponent);

export default LoadingScreen;
