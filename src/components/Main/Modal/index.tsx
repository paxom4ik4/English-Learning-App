import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { closeModal } from 'containers/Main/actions';
import { State } from 'models';
import './index.scss';

const ModalMain: React.FC = () => {
  const theme = useSelector((state: State) => state.mainTheme.theme);
  const dispatch = useDispatch();
  const modalInfo = useSelector((state: State) => state.mainModalInfo);
  const modalHandler = () => dispatch(closeModal());
  return (
    <div id={modalInfo.modalId} className="modal-main">
      <div className={theme === 'light' ? 'modal-hint' : 'modal-hint modal-hint-dark'}>
        <button
          type="button"
          className={theme === 'light' ? 'modal-close-button' : 'modal-close-button modal-close-button-dark'}
          onClick={modalHandler}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="hint-title">{modalInfo.name}</div>
        <div className="hint-descr">{modalInfo.desc}</div>
      </div>
    </div>
  );
};

export default ModalMain;
