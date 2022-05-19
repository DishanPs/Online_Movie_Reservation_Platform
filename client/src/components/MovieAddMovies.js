import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { useParams } from 'react-router-dom';

const MovieAddMovies = ({ det }) => {

    const params = useParams();

    const [validated, setvalidated] = useState(false);
    const [mname, setMovieName] = useState(det != null ? det.mname : "");
    const [year, setYear] = useState(det != null ? det.year : "");
    const [category, setCategory] = useState(det != null ? det.category : "");
    const [language, setLanguage] = useState(det != null ? det.language : "");
    const [dname, setDirector] = useState(det != null ? det.dname : "");
    const [theatre1, setTheatre1] = useState(det != null ? det.theatre1 : "");
    const [time1, setTime1] = useState(det != null ? det.time1 : "");
    const [theatre2, setTheatre2] = useState(det != null ? det.theatre2 : "");
    const [time2, setTime2] = useState(det != null ? det.time2 : "");
    const [rating, setRating] = useState(det != null ? det.rating : "");
    const [tlink, setLink] = useState(det != null ? det.tlink : "");
    const [cast, setCast] = useState(det != null ? det.cast : "");
    const [photo, setPhoto] = useState(det != null ? det.photo : "");
    const [selectedPhoto, setSelectedPhoto] = useState("");

    



    const checkSubmit = (event) => {
        console.log(mname)
        const newMovie = {
            "movieName": mname,
            "year": year,
            "category": category,
            "language": language,
            "director": dname,
            "theater1": theatre1,
            "time1": time1,
            "theater2": theatre2,
            "time2": time2,
            "rating": rating,
            "link": tlink,
            "cast" : cast,
        };

        
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else {
            if(det == null){
                axios
                    .post("http://localhost:5000/movie/add", newMovie)
                    .then(() => 
                        alert("Successfully Added"))
                    .catch((err) => alert(err));

            } else {
                axios
                    .put(`http://localhost:5000/movie/update/${det._id}`, newMovie)
                    .then(() => 
                        alert("Successfully Updated"))
                    .catch((err) => alert(err));

            }
           
        }
        setvalidated(true);
      };

      const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedPhoto(e.target.files[0]);
        }
        
        setPhoto(e.target.value);
    
      };

      const res = JSON.parse(sessionStorage.getItem("res"))





  return (
    <div style = {{
        backgroundImage: `url("https://inc42.com/wp-content/uploads/2019/04/movie-ticketing-1024x768.jpg")`,
        height: "150vh",
        backgroundSize: "cover",}}>
            <br />
        <center><h2 style={{color: "white"}}>{det != null ? "Update Movie" : "Add Movie"}</h2></center>
        <div className='movieform'>

        <Form noValidate validated={validated} onSubmit= {checkSubmit}>

        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="mname">
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control
                        placeholder="Movie Name" 
                        value={mname}
                        onChange={(e) => setMovieName(e.target.value)}
                        required
                    />
                </Form.Group>
            </Col>

            <Col>
                <Form.Group className="mb-3" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                        placeholder="Year" 
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </Form.Group>
            </Col>
        </Row>

        <Row>
        <Col>
        <Form.Group className="mb-3" controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
                 type="text" 
                 placeholder="Category" 
                 value={category}
                 onChange={(e) => setCategory(e.target.value)}
                 required
            />
        </Form.Group>
        </Col>

        <Col>
        <Form.Group className="mb-3" controlId="language">
            <Form.Label>Lanugage</Form.Label>
            <Form.Control
                 type="text" 
                 placeholder="Language" 
                 value={language}
                 onChange={(e) => setLanguage(e.target.value)}
                 required
            />
        </Form.Group>
        </Col>
        </Row>

        <Form.Group className="mb-3" controlId="dname">
            <Form.Label>Director</Form.Label>
            <Form.Control
                 type="text" 
                 placeholder="Director" 
                 value={dname}
                 onChange={(e) => setDirector(e.target.value)}
                 required
            />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="theatre1">
            <Form.Label>Movie Theatre</Form.Label>
            <Form.Select value={theatre1} onChange={(e) => setTheatre1(e.target.value)}>
                <option>Choose....</option>
                <option>Skylite</option>
                <option>Liberty</option>
                <option>Savoy</option>
                <option>Scope</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="time1">
            <Form.Label>Time</Form.Label>
            <Form.Select value={time1} onChange={(e) => setTime1(e.target.value)}>
                <option>Choose....</option>
                <option>6.30 pm</option>
                <option>7.30 pm</option>
                <option>10.30 am</option>
                <option>2.30 pm</option>
            </Form.Select>
            </Form.Group>

        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="theatre2">
            <Form.Select value={theatre2} onChange={(e) => setTheatre2(e.target.value)}>
                <option>Choose....</option>
                <option>Skylite</option>
                <option>Liberty</option>
                <option>Savoy</option>
                <option>Scope</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="time2">
            <Form.Select value={time2} onChange={(e) => setTime2(e.target.value)}>
                <option>Choose....</option>
                <option>6.30 pm</option>
                <option>7.30 pm</option>
                <option>10.30 am</option>
                <option>2.30 pm</option>
            </Form.Select>
            </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
                //pattern=' /^[0-10]+$/'
                 placeholder="Rating"
                 value={rating}
                 onChange={(e) => setRating(e.target.value)}
                 required

        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="tlink">
            <Form.Label>Trailer Link</Form.Label>
            <Form.Control
                 placeholder="Trailer Link"
                 value={tlink}
                 onChange={(e) => setLink(e.target.value)}
                 required

        />
        </Form.Group>

        <Form.Group className="mb-3" controlId="cast">
            <Form.Label>Cast</Form.Label>
            <Form.Control 
                        as="textarea"
                        rows={3}
                        value={cast}
                        onChange={(e) => setCast(e.target.value)}
             />
        </Form.Group>


        <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Upload a Photo</Form.Label>
            <Form.Control
                 type="file"
                 value={photo}
                 onChange={imageChange}
                 //onChange={(e) => setPhoto(e.target.value)}
                 //required
            />
            {selectedPhoto && (
            <div
                style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                maxWidth: "10%",
                maxHeight: "10%",
                }}
            >
                <img src={URL.createObjectURL(selectedPhoto)} />
            </div>
            )}
        </Form.Group>



        <Button variant="primary" type="submit">
        {det != null ? "Save Changes" : "Add"}
        </Button>

        </Form>
        </div>
        <br />
    </div>
  )
}

export default MovieAddMovies