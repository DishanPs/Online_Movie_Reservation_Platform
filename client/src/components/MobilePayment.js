import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import OTPModel from "./OTPModel";
import axios from "axios";

const MobilePayment = () => {
  const [validated, setValidated] = useState(false);
  const [amount, setAmount] = useState();
  const [name, setName] = useState();
  const [mobile, setMobile] = useState();
  const [email, setEmail] = useState();
  const [showModal, setShowModal] = useState(false);


  const handleSubmit = (event) => {
    const newPayment = {
      amount: amount,
      name: name,
      mobile: mobile,
      email: email,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/mobilepayment/add", newPayment)
        .then(() => alert("Payment Successfull"))
        .catch((err) => alert(err));
      
    }
    setValidated(true);
  };

  

  return (
    <div>
      <div className="mobpay1">
        <br />
        <div className="mobpay2">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h3 style={{ color: "black" }}>Mobile Payment</h3>
            <hr />
            <Form.Group className="mb-3" controlId="formBasicAmount">
              <Row>
                <Col>
                  <Form.Label>
                    <h4>Amount:</h4>
                  </Form.Label>
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Control
                type="text"
                placeholder="Mobile Number"
                title="Must include 10 digits without Country Code"
                pattern="[0-9]{10}"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll send OTP to verify number.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Email"
                pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-z]{2,}|[.][\w-]{2,}[.][a-z]{2,})$"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <br />
            <Button
              variant="primary"
              type="submit"
              onClick={() => setShowModal(true)}
            >
              Pay
            </Button>
            <OTPModel show={showModal} onHide={() => setShowModal(false)} />;
          </Form>
        </div>
      </div>
    </div>
  );
};

export default MobilePayment;
