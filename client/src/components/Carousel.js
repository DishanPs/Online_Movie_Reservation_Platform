import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

const CarouselX = () => {
  return (
      <div>
          <Carousel>
        <Carousel.Item interval={1000}>
            <img
            className="d-block w-100"
            src="../images/avengers.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>Avengers</h3>
            <p>Action Movie</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../images/645154.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Thor</h3>
            <p>Action Movie.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../images/inception.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Inception</h3>
            <p>Action/Thriller Movie</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    
  )
}

export default CarouselX