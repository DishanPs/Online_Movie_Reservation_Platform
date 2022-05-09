import React from 'react'
import Footer from './Footer'
import Header from './Header'
import './Homestyle.css'
import CarouselX from './Carousel'



const Home = () => {
  return (
    <div>
        <Header/>
     
        <CarouselX />

        <Footer/>
    </div>
  )
}

export default Home