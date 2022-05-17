import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import OTPForm from "./OTPForm";

const OTPModel = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Verify Your Number</Modal.Title>
      </Modal.Header>
          <ModalBody>
       <OTPForm/>
      </ModalBody>
    </Modal>
  );
};

export default OTPModel;
