import {React, useState} from 'react'
import ResCinema from './ResCinema'
import ResDateButton from './ResDateButton'

const ResBook = (props) => {
  const [cartItems, setCartItems] = useState([]);
  
  

  return (
    <div>
            
      <ResDateButton/>
      
      <ResCinema/>
      
    </div>
  )
}

export default ResBook
