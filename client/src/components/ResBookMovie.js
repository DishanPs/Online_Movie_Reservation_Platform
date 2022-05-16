import {React, useState} from 'react'
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


const ResBookMovie = () => {

  const [key, setKey] = useState('home');

  return (
    <div >
      <Header/>
      <Card className="bg-dark text-white">
        <Card.Img src="../images/a.png" alt="Card image" className='card w-79'/>
        <Card.ImgOverlay>
        <CloseButton/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className='c1'>
            <Card.Title><h1>Doctor Strange</h1></Card.Title>
            <Card.Text>
                <h2>...In The Multiverse Of Madness...</h2>
            </Card.Text>
            <Card.Text>English<br/>2h 10min
            &nbsp;&nbsp;
           
            <Button className='rounded-circle' variant="secondary" onPress={() => Linking.openURL('https://www.motorola.com')}><FaPlayCircle/></Button>
            
            <br/>Action | Adventure | Fantasy </Card.Text>
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
          {/* <ResSynopsis/> */}
          <ResCart/>
        </Tab>
      </Tabs>
      </div>
      <Footer/>
    </div>
  )
}

export default ResBookMovie
