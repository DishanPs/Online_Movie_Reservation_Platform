import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FaEdit} from 'react-icons/fa'
import {MdDelete} from 'react-icons/md'
import MovieModalDelete from './MovieModalDelete'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const MovieAdminMovies = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const [Movies, setMovie] = useState([]);
    const [DeleteMovie, setDeleteMovie] = useState('');

    const navigate = useNavigate();

    const onEdit = (res) => { 
      sessionStorage.setMovie("res", JSON.stringify(res)) 
      navigate('/addmovie') 
    }



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
        <hr />
        <Link to ="/addmovie">
            <Button variant='warning'><b>Add Movie</b></Button>
        </Link>
        </center>
        <br />
      <div className='movies'>
        <Row xs={1} md={3} className="g-4">
       
        {Movies.map((Movie)=>
        <Col>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/download.jpg" style={{ height: '10rem' }} />
            <Card.Body>
                <Card.Title>{ Movie.movieName }</Card.Title>
                <Card.Text>
                { Movie.director }<br />
                { Movie.category }{" | "}{ Movie.language }{" | "}{ Movie.year }
                </Card.Text>
                
                <Button variant="dark" onClick={onEdit}><FaEdit /></Button>
                
                <Button variant="danger" onClick={() => {
                    setModalShow(true);setDeleteMovie(Movie);}} ><MdDelete /></Button>

            </Card.Body>
            </Card>
            <br />
        </Col>

        )}
        


        </Row>

        <MovieModalDelete
                show={modalShow}
                onHide={() => setModalShow(false)}
                DeleteMovie = {DeleteMovie}
        />

      </div>

        
    </div>
  )
}

export default MovieAdminMovies