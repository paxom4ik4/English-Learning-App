import * as React from 'react';
import './startButton.scss';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setLoadingMode } from 'containers/Games/Savannah/actions';

const ButtonComponent: React.FC<{startGame: ()=>void}> = ({ startGame }) => (
  <div className="start-button-savannah" onClick={startGame}>Начать</div>
);

/* class ButtonComponent extends Component {
  setMode = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { startGame } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    startGame();
  };

  // eslint-disable-next-line max-len
  render() {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="start-button" onClick={this.setMode}>Начать</div>
    );
  }
} */

const mapDispatchToPropsForButton = (dispatch) => ({
  startGame: () => {
    setLoadingMode(dispatch);
  },
});

const Button = connect(null, mapDispatchToPropsForButton)(ButtonComponent);

export default Button;
