import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react';
import axios from 'axios';
import bcrypt from 'bcryptjs';
import swal from 'sweetalert';
import Header from './Header.js';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserLogin = () => {
 

   
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    

    const navigate1 = useNavigate();
    const navigate = (type) => {
        if (type == "customer") {
            navigate1("/");
        } else if (type == "Movie Admin") {
            navigate1("/MovieAdminMovies.js");
        } else if (type == "System Admin") {
            navigate1("/MovieAdminMovies.js");
        }
    }
  
    const handleSubmit = (e) =>{
        e.preventDefault();

        axios.get(`http://localhost:5000/login/${email}`)
        .then ((res) => {
            
            if (res.data.data != null){
                let hashPass = res.data.data.password;
                console.log(password);
                const isValid = bcrypt.compareSync(password, hashPass);
                if (isValid) {
                    
                    console.log(res.data);
                    const token ={
                        id: res.data.data._id,
                        name: res.data.data.name,
                        email:res.data.data.email,
                        type:res.data.data.type
                    }
                    
         
                              
                sessionStorage.setItem("token",JSON.stringify(token));
                navigate(res.data.data.type);
                swal("Success!", "Login Successful", "success");
                } else {
                    swal("Error !", "Invalid Password", "error");
                }
            } else {
                swal("Error !", "Invalid Email", "error");
                
            }
        })
       
          
    }
    
    

    return (
        <>
         <div 
            style = {{
                backgroundImage: 
                `url("https://media.istockphoto.com/vectors/realistic-3d-film-strips-in-perspective-modern-cinema-background-vector-id1292150773?k=20&m=1292150773&s=612x612&w=0&h=YBbad_KZmFFBnml7W8X-ABSHapXaFKMM0q_pYw-wmq0=")`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: "cover" }}
                >
            <div className='ContainerL'>
              <div className='wrapperl'>
            
               < div className="loginform">
                   <h1> SIGN IN</h1><hr/>
                   <Form 
                      onSubmit = {handleSubmit}
                   >
        
                     <Form.Group className="input" controlId="email">
                      <Form.Label>Username</Form.Label>
                       <Form.Control
                         type="email" 
                         placeholder="Enter your email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                         required
                       />
                       <Form.Control.Feedback type="invalid">
                          Please enter a valid email address.
                       </Form.Control.Feedback>
                     </Form.Group>

                     <Form.Group className="input" controlId="password">
                      <Form.Label>Password</Form.Label>
                       <Form.Control
                         type="password" 
                         placeholder="Enter a Password"
                         value={password} 
                         onChange={(e) => setPassword(e.target.value)}
                         required
                       />
                      <Form.Control.Feedback type="invalid">
                          Please enter a valid password.
                      </Form.Control.Feedback>
                     </Form.Group>

                     <br/>
                     <Button variant="success" type="submit">
                        Login
                     </Button>

                     <br/><br/>

                     <h5>Don't have an account ? </h5>
                     <Link to="/Userreg"><Button  variant="success" >Sign Up</Button></Link>
                
            
                  </Form>
                </div>
              </div>
           </div>
         </div>

       </>
     );
}
 
export default UserLogin;