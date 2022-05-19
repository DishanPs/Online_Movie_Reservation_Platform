import React from "react";
import { useState } from "react";import Modal from "react-bootstrap/Modal";
import { ModalBody } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from 'react-router-dom';

const OTPModel = (props) => {
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
   
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
       navigate("/paysuccess");
    }
    setValidated(true);
  };
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
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasiccode">
            <Form.Control type="text" placeholder="6 Digit Code" required />
            <Form.Text className="text-muted">
              Enter the OTP sent to your mobile number.
            </Form.Text>
          </Form.Group>
            <Button variant="success" type="submit">
              Verify
            </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default OTPModel;
