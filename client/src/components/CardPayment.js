import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const CardPayment = () => {
  const [validated, setValidated] = useState(false);
  const [amount, setAmount] = useState();
  const [cardno, setCardNo] = useState();
  const [expire, setExpire] = useState();
    const [cvc, setCVC] = useState();
  const [name, setName] = useState();
  
  const navigate = useNavigate();
 
  const handleSubmit = (event) => {
    const newPayment = {
      amount: amount,
    cardno: cardno, 
      expire: expire,
      cvc: cvc,
      name: name,
    };

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      axios
        .post("http://localhost:5000/cardpayment/add", newPayment)
        .then(() => alert("Payment Successfull"))
        .catch((err) => alert(err));
      
      navigate("/paysuccess");
    }
    setValidated(true);
  };

  return (
    <div>
      <div className="mobpay1">
        <br />
        <div className="mobpay2">
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <h3 style={{ color: "black" }}>Card Payment</h3>
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
                    placeholder="2400"
                    disabled
                  ></Form.Control>
                </Col>
              </Row>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Card Number"
                title="Must include 16 digits without '-'"
                value={cardno}
                onChange={(e) => setCardNo(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMobile">
              <Form.Control
                type="text"
                placeholder="Expire Date"
                title="MM/YY"
                value={expire}
                onChange={(e) => setExpire(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="CVC"
                title="3 Digit Code at the back of card"
                pattern="[0-9]{3}"
                value={cvc}
                onChange={(e) => setCVC(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Card Holder's Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <br />
            <Button variant="primary" type="submit">
              Pay
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CardPayment;
