import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

const UserReg = () => {
    const [validated, setvalidated] = useState(false);
    const [cardno, setCardno] = useState("");
    const [expdate, setExpdate] = useState("");
    const [cvc, setCvc] = useState("");
    
    
    const checkSubmit = (event) => {
       

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        else {
            

            axios
                
                .then((data) => 
                console.log(data),
                swal("Submitted!", "Submited Successfully ", "success"))
                .catch((err) => alert(err));

            
          
        }
        setvalidated(true);
      };

    

    return (
        <div 
            style = {{
                backgroundImage: 
                `url("https://us.123rf.com/450wm/hugolacasse/hugolacasse1603/hugolacasse160300013/53756518-illustration-of-a-film-stripe-reel-on-abstract-movie-background.jpg?ver=6")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover" }}
                >
         <div className='Containerreg'>
          <div className='wrapperreg'>
           <div className='titlereg'>
             <h1 >Card details</h1>
              <div className="loginformreg">
            
               <Form noValidate validated={validated} onSubmit= {checkSubmit}>
                
                  <Form.Group className="inputreg" controlId="cardno">
                   <Form.Label>Card no.</Form.Label>
                    <Form.Control
                      placeholder="Enter Card no." 
                      pattern="[0-9]{16}"
                      value={cardno}
                      onChange={(e) => setCardno(e.target.value)}
                      required
                    />
                  </Form.Group>
         
                  <Form.Group className="inputreg" controlId="expdate">
                   <Form.Label>Exp date</Form.Label>
                    <Form.Control
                      placeholder="Enter expire date" 
                      value={expdate}
                      onChange={(e) => setExpdate(e.target.value)}
                      required
                    />
                  </Form.Group>
                 

                  <Form.Group className="inputreg" controlId="cvc">
                   <Form.Label>CVC</Form.Label>
                    <Form.Control
                      type="text" 
                      placeholder="Enter a CVC"
                      pattern="[0-9]{3}"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                       Please enter a valid CVC number.
                    </Form.Control.Feedback>
                  </Form.Group>
        
                 <Form.Group className="inputreg" controlId="checkbox">
                   <Form.Check
                     type="checkbox" 
                     label="I Agree to Terms & Conditions" 
                     required
                   />
                 </Form.Group>

                 <Button className="butnreg" variant="success" type="submit">Submit</Button>
               
               </Form>
              
              </div>
             </div>
            </div>
           </div>
        </div>
                
    )
}

export default UserReg 