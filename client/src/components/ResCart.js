import React from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'


const ResCart = () => {
  return (
    <div>
      <Card className='c3'>
            <Card.Body>
                <Card className='c4'>
                    <Card.Body>
                        <Card.Title>Name of the person</Card.Title>
                        <Card.Text>
                            Date: ..... 
                            <br/>
                            Time: .....
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='c5'>
                    <Card.Body>
                        <Card.Title>Bookings</Card.Title>
                        <Card.Text>
                            <Table striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Ticket Type</th>
                                        <th>Price</th>
                                        <th type='number'>Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td type='number'>1</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td type='number'>1</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td type='number'>1</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Card.Body>
      </Card> 
    </div>
  )
}

export default ResCart
