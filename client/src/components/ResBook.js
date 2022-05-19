import {React, useState} from 'react'
import ResCinema from './ResCinema'
import ResDateButton from './ResDateButton'

const ResBook = () => {
  const [cartItems, setCartItems] = useState([]);
  
  

  return (
    <div>
            
      <ResDateButton/>
      
      <ResCinema cartItems={cartItems} setCartItems={setCartItems}/>
      
    </div>
  )
}

export default ResBook
