import { connect } from 'react-redux';
import * as React from 'react';
import { Component } from 'react';
import { closeModalWindow } from 'containers/Games/Savannah/actions';
import './modalCross.scss';
import background from './cross.png';

const ModalCrossComponent = ({ modalWindow }) => (
  <div className="modal-cross-savannah" onClick={modalWindow} style={{ backgroundImage: `url(${background})` }} />
);

/* class ModalCrossComponent extends Component {
  clickHandler = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { modalWindow } = this.props;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    modalWindow();
  };

  // eslint-disable-next-line max-len
  render() {
    return (
      // eslint-disable-next-line max-len
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div className="modal-cross" onClick={this.clickHandler} />
    );
  }
} */

const mapDispatchToPropsForButton = (dispatch) => ({
  modalWindow: () => {
    closeModalWindow(dispatch);
  },
});

const ModalCross = connect(null, mapDispatchToPropsForButton)(ModalCrossComponent);

export default ModalCross;
