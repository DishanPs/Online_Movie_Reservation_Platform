import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import OTPModel from "./OTPModel";

const MobilePayment = (props) => {

const [showModal, setShowModal] = useState(false)

  return (
    <div>
      <div className="mobpay1">
        <br />
        <br />
        <br />
        <br />
        <div className="mobpay2">
          <div className="mobpay3">
            <Form {...props}>
              <h1 style={{ color: "black" }}>Mobile Payment</h1>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicAmount">
                <Row>
                  <Col>
                    <Form.Label>
                      <h4>Amount: </h4>{" "}
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="text">{props.amount}</Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" required />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Control
                  type="text"
                  placeholder="Mobile Number"
                  title="Must include 10 digits without Country Code"
                  pattern="[0-9]{10}"
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
              <OTPModel show={showModal} onHide={() => setShowModal(false)} />
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePayment;
