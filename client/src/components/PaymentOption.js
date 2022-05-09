import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { FaCreditCard, FaMobile} from 'react-icons/fa'
import { Link } from 'react-router-dom';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}


function total(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const rows = [
  createRow('Paperclips (Box)', 100, 1.15),
  createRow('Paper (Case)', 10, 45.99),
  createRow('Waste Basket', 2, 17.99),
];

const invoiceTotal = total(rows);

const PaymentOption = () => {
  return (
    <div>
      <div className="payopt1">
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <div className="payopt2">
              <h1>Order Summery</h1>
              <hr />

              <Table sx={{ maxWidth: "100%" }} aria-label="spanning table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={3}>
                      Details
                    </TableCell>
                    <TableCell align="right">Price</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Desc</TableCell>
                    <TableCell align="right">Qty.</TableCell>
                    <TableCell align="right">Unit</TableCell>
                    <TableCell align="right">Sum</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.desc}>
                      <TableCell>{row.desc}</TableCell>
                      <TableCell align="right">{row.qty}</TableCell>
                      <TableCell align="right">{row.unit}</TableCell>
                      <TableCell align="right">
                        {ccyFormat(row.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}>Total</TableCell>
                    <TableCell align="right">
                      {ccyFormat(invoiceTotal)}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </Col>
          <Col>
            <div className="payopt3">
              <br />
              <div style={{ marginTop: "30%", marginLeft: "25%" }}>
                <Button style={{ width: "40%" }} variant="success">
                  <FaCreditCard />
                  &nbsp;&nbsp;&nbsp;Credit/Debit Card
                </Button>
                <br />
                <br />
                <Link to="mobilepay">
                  <Button style={{ width: "40%" }} variant="success">
                    <FaMobile />
                    &nbsp;&nbsp;&nbsp;Mobile Number
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default PaymentOption