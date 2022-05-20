import {React, useState, useEffect} from 'react'
import Header from './Header'
import Card from 'react-bootstrap/Card'
import Footer from './Footer'
import { CloseButton } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import {FaPlayCircle} from 'react-icons/fa'
import { Linking } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ResSynopsis from './ResSynopsis'
import ResBook from './ResBook'
import ResCart from './ResCart'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'


const ResBookMovie = () => {

  const [key, setKey] = useState('home');
  const [Movies, setMovie] = useState([]);
  const params = useParams();



  useEffect(() => {
    const getMovies = () => {
      axios
        .get(`http://localhost:5000/movie/${params.id}`)
        .then((res) => {
          setMovie(res.data.data);
          console.log(params.id);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };
    getMovies();
  },[]);

  return (
    <div >
      
      <Card className="bg-dark text-white">
        <Card.Img src="../images/download.jpg" alt="Card image" className='card w-79'/>
        <Card.ImgOverlay>
        <CloseButton/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className='c1'>
            <Card.Title><h1>{Movies.movieName}</h1></Card.Title>
            {/* <Card.Text>
                <h2>...In The Multiverse Of Madness...</h2>
            </Card.Text> */}
            <Card.Text>{Movies.language} | {Movies.year} | {Movies.category}</Card.Text>
            
            <ReactPlayer
                    url={ Movies.link }
                    width={"16rem"}
                    height={"14rem"}
                /> 
            </div>
        </Card.ImgOverlay>
      </Card>
     
      <div className='t1'>
      
      <Tabs
        id="controlled-tab-example"
        style={{marginleft: 50}}
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Book">
          <ResBook/>
        </Tab>
        
        <Tab eventKey="synopsis" title="Synopsis">
          <ResSynopsis/>
          {/* <ResCart/> */}
        </Tab>
      </Tabs>
      </div>
    </div>
  )
}

export default ResBookMovie
