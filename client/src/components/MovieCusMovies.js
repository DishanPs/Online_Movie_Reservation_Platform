import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaPlayCircle} from 'react-icons/fa'
import Badge from 'react-bootstrap/Badge'
import {RiStarSFill} from 'react-icons/ri'
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MovieCusMovies = () => {
    const [Movies, setMovie] = useState([]);
    

    useEffect(() => {
        const getMovies = () => {
          axios
            .get("http://localhost:5000/movie")
            .then((res) => {
              setMovie(res.data);
              console.log(res.data);
            })
            .catch((err) => {
              alert(err.msg);
            });
        };
        getMovies();
      },[]);


  return (
    <div>
        <center>
        <h2>Movies</h2>
        </center>
        <hr />
      <div className='movies'>
        <Row xs={1} md={3} className="g-4">
        
        {Movies.map((Movie)=>
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/download.jpg" style={{ height: '10rem' }}/>
            <Card.Body>
                <Card.Title>{ Movie.movieName }<Badge bg="warning"><RiStarSFill />{ Movie.rating }</Badge> </Card.Title>
                <Card.Text>
                { Movie.director }<br />
                { Movie.category }{" | "}{ Movie.language }{" | "}{ Movie.year }
                </Card.Text>
                <Button variant="primary">Book a Ticket</Button>
                <Button variant="success">Watch Movie Trailer <FaPlayCircle/> </Button>
                <ReactPlayer
                    url={ Movie.link }
                    width={"16rem"}
                    height={"15rem"}
                /> 

            </Card.Body>
            </Card>
            <br />
            
        </Col>

        )}


        


        
        </Row>

      </div>

        

    </div>
  )
}

export default MovieCusMovies