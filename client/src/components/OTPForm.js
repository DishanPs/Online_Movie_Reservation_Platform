import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const OTPForm = () => {
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasiccode">
          <Form.Control type="text" placeholder="6 Digit Code" />
          <Form.Text className="text-muted">
            Enter the OTP sent to your mobile number.
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
         Verify
        </Button>
      </Form>
    </div>
  );
}

export default OTPForm