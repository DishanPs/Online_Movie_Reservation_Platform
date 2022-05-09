import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import MovieModalDelete from './MovieModalDelete'

const MovieAdminMovies = () => {

  return (
    <div>
        <h2>Movies</h2>
        <hr />
        <Button variant='warning'><b>Add Movie</b></Button>
        <br />
      <div className='movies'>
        <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/download.jpg" style={{ height: '10rem' }} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark"><FaEdit /></Button>
                <Button variant="danger" ><MdDelete /></Button>

            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/avengers.jpg" style={{ height: '10rem' }} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark"><FaEdit /></Button>
                <Button variant="danger"><MdDelete /></Button>
            </Card.Body>
            </Card>
            <br />
        </Col>


        ))}


        {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/inception.jpg" style={{ height: '10rem' }} />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark"><FaEdit /></Button>
                <Button variant="danger"><MdDelete /> </Button>
            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/645154.webp" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark"><FaEdit /></Button>
                <Button variant="danger"><MdDelete  /></Button>
            </Card.Body>
            </Card>
            <br />
        </Col>


        ))}


        {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/batman.jpg" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark"><FaEdit /></Button>
                <Button variant="danger"><MdDelete /> </Button>
            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/cadaver.jpg" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="dark"><FaEdit /></Button>
                <Button variant="danger"><MdDelete /></Button>
            </Card.Body>
            </Card>
            <br />
        </Col>


        ))}
        </Row>

      </div>

        
    </div>
  )
}

export default MovieAdminMovies