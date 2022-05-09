import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
//import axios from "axios";
import swal from 'sweetalert';
const bcrypt = require('bcryptjs');

const UserReg = () => {
    const [validated, setvalidated] = useState(false);
    const [fname, setFirstName] = useState("");
    const [lname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contactno, setContactNo] = useState("");
    const [nic, setNIC] = useState("");
    const [address, setAddress] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setConfirmPassword] = useState();
    const [selectedPhoto, setSelectedPhoto] = useState("");



    const checkSubmit = (event) => {
        console.log(password);
        const newCustomer = {
            "firstName": fname,
            "lastName": lname,
            "email": email,
            "contactNo": contactno,
            "NIC": nic,
            "address": address,
        }

        const newLogin = {
            "name":fname,
            "email": email,
            "type": "customer",
            "password": bcrypt.hashSync(password, bcrypt.genSaltSync()),
            
        }

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    };
    //     else {
    //         if (cpassword == password){

    //         axios
    //             .post("http://localhost:5000/customer/register", newCustomer)
    //             .then((data) => console.log(data))
    //             .catch((err) => alert(err));

    //         axios
    //             .post("http://localhost:5000/login/add", newLogin)
    //             .then(() =>
    //                 swal("Submitted!", "Successfully Registered", "success"))
    //             .catch((err) =>
    //                  alert(err));
    //         } else {
    //             swal("Error !", "Password Mismatch", "error");
    
    //         }
    //     }
    //     setvalidated(true);
    //   };

    //   const imageChange = (e) => {
    //     if (e.target.files && e.target.files.length > 0) {
    //       setSelectedPhoto(e.target.files[0]);
    //     }
        
    //     setPhoto(e.target.value);
    
    //   };

      

    return (
        <div className='ContainerL'>
        <div className='wrapperl'>
            
       < div className="loginform">
        <h1> SIGN IN</h1><hr/>
        <Form noValidate validated={validated} onSubmit= {checkSubmit}>
        
        <Form.Group className="input" controlId="email">
            <Form.Label>Username</Form.Label>
            <Form.Control
                 type="email" 
                 placeholder="Enter your email"
                 pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" 
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
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 value={password} 
                 onChange={(e) => setPassword(e.target.value)}
                 required
            />
            <Form.Control.Feedback type="invalid">
                Password must contain at least 8 characters with at least one uppercase letter and a digit.
            </Form.Control.Feedback>
        </Form.Group>

        <Button className="butn" variant="success" type="submit">LOGIN</Button>
        </Form>
        </div>
        </div>
        </div>
       

        
    )
}

export default UserReg 