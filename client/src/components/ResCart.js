import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"


const ResCart = () => {
    const [Theatres, setTheatre] = useState([]);
    const params = useParams();

    // const handleClick = (props) => {
    //     setCartItems(props)
    //     console.log(props)
    //   };

    // const handleRemove = (id) => {
    //     const arr = cartItems.filter(() => item.id)
    // }

    // const handlePrice = () => {
    //     let ans = 0;
    //     cartItems.map((props) => (ans += ))
    // }

    useEffect(() => {
        const getTheatres = () => {
          axios
            .get(`http://localhost:5000/theatre/${params.id}`)
            .then((res) => {
                setTheatre(res.data.data);
                console.log(params.id);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getTheatres();
      },[]);

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
                                        <td>{Theatres.type1}</td>
                                        <td>{Theatres.fullPrice}</td>
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
