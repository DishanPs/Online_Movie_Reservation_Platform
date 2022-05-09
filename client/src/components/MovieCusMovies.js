import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaPlayCircle} from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import {RiStarSFill} from 'react-icons/ri'

const MovieCusMovies = () => {
  return (
    <div>
        <h2>Movies</h2>
        <hr />
      <div className='movies'>
        <Row xs={1} md={3} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/download.jpg" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Thor<Badge bg="warning"><RiStarSFill />3.2</Badge> </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>

            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/avengers.jpg" style={{ height: '10rem' }} />
            <Card.Body>
                <Card.Title>Avengers<Badge bg="warning"><RiStarSFill />3.0</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>
            </Card.Body>
            </Card>
            <br />
        </Col>


        ))}


        {Array.from({ length: 1 }).map((_, idx) => (
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/inception.jpg" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Inception<Badge bg="warning"><RiStarSFill />3.7</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>
            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/645154.webp" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Thor<Badge bg="warning"><RiStarSFill />3.0</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>
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
                <Card.Title>The Dark Knight<Badge bg="warning"><RiStarSFill />3.9</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>
            </Card.Body>
            </Card>
            <br />
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/cadaver.jpg" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>Cadaver<Badge bg="warning"><RiStarSFill />3.5</Badge></Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>
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

export default MovieCusMovies