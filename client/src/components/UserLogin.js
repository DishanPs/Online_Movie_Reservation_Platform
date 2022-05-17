import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState, useEffect } from 'react';
//import axios from 'axios';
//import { useHistory } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import swal from 'sweetalert';
import Header from './Header.js';


const UserLogin = () => {
 

    const [modalShow, setModalShow] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [signin, setSignin] = useState();
    //const [type,setType] = useState('')

    // const history = useHistory();
    // const navigate = (type) => {
    //     if (type == "customer") {
    //         history.push("/CusProfile.js");
    //     } else if (type == "General Manager") {
    //         history.push("/Admin.js");
    //     } else if (type == "Supliar Manager") {
    //         history.push("/Supplier.js")
    //     } else if (type == "Stock Keeper") {
    //         history.push("/Dashboard")
    //     } else if (type == "Data Entry Operator") {
    //         history.push("/Dailysupply.js")
    //     } else if (type == "Customer Relation Manger") {
    //         history.push("/CusTable.js")
    //     } else if (type == "HR Manager") {
    //          history.push("/Employee.js")
    //     }
    //     else if (type == "Receptionist") {
    //          history.push("//PendingTable.js")
    //     }
    //     else if (type == "Product Manger") {
    //         history.push("/AdmnProductView.js")
    //     }
    // }
  
    // const handleSubmit = (e) =>{
    //     e.preventDefault();

    //     axios.get(`http://localhost:5000/login/${email}`)
    //     .then ((res) => {
            
    //         if (res.data.data != null){
    //             let hashPass = res.data.data.password;
    //             console.log(password);
    //             const isValid = bcrypt.compareSync(password, hashPass);
    //             if (isValid) {
                    
    //                 console.log(res.data);
    //                 const token ={
    //                     id: res.data.data._id,
    //                     name: res.data.data.name,
    //                     email:res.data.data.email,
    //                     type:res.data.data.type
    //                 }
                    
         
                
        

                 
    //             sessionStorage.setItem("token",JSON.stringify(token));
    //             navigate(res.data.data.type);
    //             swal("Success!", "Login Successful", "success");
    //             } else {
    //                 swal("Error !", "Invalid Password", "error");
    //             }
    //         } else {
    //             swal("Error !", "Invalid Email", "error");
                
    //         }
    //     })
       
          
    // }
    
    

   


    return (
        <>
         <div className='ContainerL'>
         <div className='wrapperl'>
            
        < div className="loginform">
         <h1> SIGN IN</h1><hr/>
         <Form 
        //  onSubmit = {handleSubmit}
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
                <Button variant="success" onClick={() => setModalShow(true)}>Sign Up</Button>
                
            
        </Form>
        </div>
        </div>
        {/* <ModalRegister
        show={modalShow}
        onHide={() => setModalShow(false)}
    />  */}
        </div>




        
            
            </>
     );
}
 
export default UserLogin;