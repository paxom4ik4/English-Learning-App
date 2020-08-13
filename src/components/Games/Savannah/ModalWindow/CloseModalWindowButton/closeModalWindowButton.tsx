import * as React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import { closeModalWindow } from 'containers/Games/Savannah/actions';
import './closeModalWindowButton.scss';

const CloseModalWindowButtonComponent = ({ modalWindow }) => (
  <div className="close-modal-window-savannah" onClick={modalWindow}>Отмена</div>
);

/* class CloseModalWindowButtonComponent extends Component {
  clickHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { modalWindow } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    modalWindow();
  };

  render() {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="close-modal-window" onClick={this.clickHandler}>Отмена</div>
    );
  }
} */

const mapDispatchToPropsForButton = (dispatch) => ({
  modalWindow: () => {
    closeModalWindow(dispatch);
  },
});

const CloseModalWindowButton = connect(null, mapDispatchToPropsForButton)(CloseModalWindowButtonComponent);

export default CloseModalWindowButton;
