import {React, useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

const ResCinema = (props) => {
  const {cartItems, setCartItems} = useState([]);
  const [Theatres, setTheatre] = useState([]);
  const [Movies, setMovie] = useState([]);
  const params = useParams();

  //const {countCartItems} = props;
  // const item1 = "Odc - full";
  // const price1 = "320.00";
  
  useEffect(() => {
    const getTheatres = () => {
      axios
        .get("http://localhost:5000/theatre")
        .then((res) => {
          setTheatre(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          alert(err.msg);
        });
    };

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
    getTheatres();
    // getMovie();
   },[]);

   const mname = Movies.movieName;
   const date = 3333;
   const time = 5;
   const type1 = Theatres.type1;
   const type2 = Theatres.type2;
   const type3 = Theatres.type3;
   const fullPrice = Theatres.fullPrice;
   const quantity = "1";
   const total = 5555;
   const totalPrice = 5555;



   const checkSubmit = () => {
    console.log(mname)
    const newCart = {
        "movieName": mname,
        "date": date,
        "time": time,
        "type1": type1,
        "type2": type2,
        "type3": type3,
        "price": fullPrice,
        "quantity": quantity,
        "total": total,
        "totalPrice": totalPrice,
    };
    console.log(newCart);
    
    axios
        .post("http://localhost:5000/cart/add", newCart)
        .then(() => 
            alert("Successfully Added"))
        .catch((err) => alert(err));
  };

  return (
    <div>

      <Link to={`/cart/${Theatres._id}`}>
        Cart
      </Link>{' '}
      {Theatres.map((Theatre)=>
        <Card className='c2'>
            <Card.Body>
                {Theatre.theatreName}
                &nbsp;&nbsp;

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  //price = {200}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. {Theatre.fullPrice} <br/>Available.
                    </Tooltip>
                  }
                >
                  
                  <Button variant="outline-dark" className='b1' onClick={checkSubmit}>{Theatre.type1}</Button>
                 
                </OverlayTrigger>
              ))}

              {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. {Theatre.halfPrice} <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>{Theatre.type2}</Button>
                </OverlayTrigger>
              ))}

                {['top'].map((placement) => (
                <OverlayTrigger
                  key={placement}
                  placement={placement}
                  overlay={
                    <Tooltip id={`tooltip-${placement}`}>
                      LKR. {Theatre.boxPrice} <br/>Available.
                    </Tooltip>
                  }
                >
                  <Button variant="outline-dark" className='b1'>{Theatre.type3}</Button>
                </OverlayTrigger>
              ))}                
                <br/>
                <hr/>
                
                <br/>
                
            </Card.Body>
        </Card>
      )}
        <br/>      
    </div>
  )
}

export default ResCinema
