import * as React from 'react';
import WarningText from '../WarningText/warningText';
import TipText from '../TipText/tipText';
import EndButton from '../EndButton/endButton';
import CloseModalWindowButtons from '../CloseModalWindowButton/closeModalWindowButton';
import './innerModal.scss';
import ModalCross from '../ModalCross/modalCross';

const InnerModal: React.FC = () => (
  <div className="modal-wrapper-savannah">
    <div className="inner-modal-savannah">
      <ModalCross />
      <WarningText />
      <TipText />
      <EndButton />
      <CloseModalWindowButtons />
    </div>
  </div>
);

export default InnerModal;
