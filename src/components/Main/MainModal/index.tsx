import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { State } from 'models';
import { closeErrorModal } from 'containers/Main/actions';

function MainModal(): JSX.Element {
  const dispatch = useDispatch();
  const title = useSelector((state: State) => state.mainErrorModal.title);
  const content = useSelector((state: State) => state.mainErrorModal.content);
  const isModalOpen = useSelector((state: State) => state.mainErrorModal.isOpen);

  const btnClickHandle = () => {
    dispatch(closeErrorModal());
  };

  return (
    <Modal
      show={isModalOpen}
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="info" onClick={btnClickHandle}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MainModal;
