import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="mobpay1">
      <center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div style={{ width: "60%" }}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title>
                <h1>Payment Successfull</h1>
              </Card.Title>
              <Card.Text>
                We will send Comfirmation Message to your Email & Mobile
              </Card.Text>
              <Link to="/">
                <Button variant="success">Back to Home</Button>
              </Link>
            </Card.Body>
            <Card.Footer className="text-muted">
              Thanks for using out service
            </Card.Footer>
          </Card>
        </div>
      </center>
    </div>
  );
}

export default PaymentSuccess