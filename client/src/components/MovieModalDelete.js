import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { ModalBody } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import axios from 'axios'


const MovieModalDelete = (props) => {
  const del = () => {
   axios
    .delete(`http://localhost:5000/movie/delete/${props.DeleteMovie._id}`)
    .then(() => {
        alert("Successfully Deleted")
    })
    .catch((err) => {
        alert(err)
    });
      
  }




    return (
        <Modal
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Movie
          </Modal.Title>
        </Modal.Header>
        <ModalBody>
          Are you sure want to delete this movie ?
         
        </ModalBody>
        <Modal.Footer>
            <Button variant = "danger" onClick={del}>Delete</Button>
            <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default MovieModalDelete