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
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../images/645154.jpg"
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="../images/inception.jpg"
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
      </div>
    
  )
}

export default CarouselX