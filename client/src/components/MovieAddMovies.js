import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MovieAddMovies = () => {
    const [validated, setvalidated] = useState(false);
    const [mname, setMovieName] = useState("");
    const [year, setYear] = useState("");
    const [category, setCategory] = useState("");
    //const [contactno, setContactNo] = useState("");
    const [rating, setRating] = useState("");
    const [photo, setPhoto] = useState("");
    const [selectedPhoto, setSelectedPhoto] = useState("");



    const checkSubmit = (event) => {
        // const newCustomer = {
        //     "firstName": fname,
        //     "lastName": lname,
        //     "email": email,
        //     "contactNo": contactno,
        //     "NIC": nic,
        //     "address": address,
        // }

        
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else {
           
        }
        setvalidated(true);
      };

      const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedPhoto(e.target.files[0]);
        }
        
        setPhoto(e.target.value);
    
      };





  return (
    <div>
        <center><h2>Add Movie</h2></center>
        <div className='movieform'>
        <Form noValidate validated={validated} onSubmit= {checkSubmit}>
        <Form.Group className="mb-3" controlId="mname">
            <Form.Label>Movie Name</Form.Label>
            <Form.Control
                 placeholder="Movie Name" 
                 value={mname}
                 onChange={(e) => setMovieName(e.target.value)}
                 required
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="year">
            <Form.Label>Year</Form.Label>
            <Form.Control
                 placeholder="Year" 
                 value={year}
                 onChange={(e) => setYear(e.target.value)}
                 required
            />
        </Form.Group>

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

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Movie Theatre</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Time</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

        </Row>

        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

        </Row>

        <Form.Group className="mb-3" controlId="rating">
            <Form.Label>Rating</Form.Label>
            <Form.Control
                 placeholder="Rating"
                 value={rating}
                 onChange={(e) => setRating(e.target.value)}
                 required

        />
        </Form.Group>


        <Form.Group controlId="photo" className="mb-3">
            <Form.Label>Upload a Photo</Form.Label>
            <Form.Control
                 type="file"
                 value={photo}
                 //onChange={imageChange}
                 onChange={(e) => setPhoto(e.target.value)}
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
                <img src={URL.createObjectURL(selectedPhoto)} alt="Profile" />
            </div>
            )}
        </Form.Group>



        <Button variant="success" type="submit">Add</Button>
        </Form>
        </div>
        <br />
    </div>
  )
}

export default MovieAddMovies