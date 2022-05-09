import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useState } from "react";
//import axios from "axios";
import swal from 'sweetalert';
import Row from 'react-bootstrap/Row'
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
        <div className='Container'>
        <div className='wrapper'>
        <div className='title'><h1 >Create Profile</h1>
        <div className="loginform">
            
        <Form noValidate validated={validated} onSubmit= {checkSubmit}>
        <Row >
        <Form.Group className="input" controlId="fname">
            <Form.Label>First Name</Form.Label>
            <Form.Control
                 placeholder="First Name" 
                 value={fname}
                 onChange={(e) => setFirstName(e.target.value)}
                 required
            />
        </Form.Group>
         
        <Form.Group className="input" controlId="lname">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
                 placeholder="Last Name" 
                 value={lname}
                 onChange={(e) => setLastName(e.target.value)}
                 required
            />
        </Form.Group></Row>
        <Row>
        <Form.Group className="input" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
                 type="email" 
                 placeholder="abcd@defg.com"
                 pattern="^[\w]{1,}[\w.+-]{0,}@[\w-]{2,}([.][a-zA-Z]{2,}|[.][\w-]{2,}[.][a-zA-Z]{2,})$" 
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required
            />
            <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input" controlId="contactno">
            <Form.Label>Contact No.</Form.Label>
            <Form.Control
                 placeholder="Enter Contact No."
                 pattern="[0-9]{10}"
                 value={contactno}
                 onChange={(e) => setContactNo(e.target.value)}
                 required
             />
             <Form.Control.Feedback type="invalid">
                Please enter a valid phone number.
            </Form.Control.Feedback>
        </Form.Group></Row>
        <Row>
        <Form.Group className="input" controlId="nic">
            <Form.Label>NIC</Form.Label>
            <Form.Control
                 placeholder="Enter NIC"
                 pattern="^([0-9]{9}[x|X|v|V]|[0-9]{12})$"
                 value={nic}
                 onChange={(e) => setNIC(e.target.value)}
                 required

        />
        <Form.Control.Feedback type="invalid">
            Please enter a valid NIC number.
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="input" controlId="homecity">
            <Form.Label>Home City</Form.Label>
            <Form.Control
                 placeholder="Home city" 
                 value={lname}
                 onChange={(e) => setLastName(e.target.value)}
                 required
            />
        </Form.Group></Row>
        <Row>
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

        <Form.Group className="input" controlId="cpassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
                 type="password" 
                 placeholder="Re-enter the Password" 
                 pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                 onChange={(e) => setConfirmPassword(e.target.value)}
                 required
            />
        </Form.Group></Row>
        <Row className='mb-3'>
        <Form.Group className="input" controlId="checkbox">
            <Form.Check
                 type="checkbox" 
                 label="I Agree to Terms & Conditions" 
                 required
                 
            />
        </Form.Group>



        <Button className="butn" variant="success" type="submit">Submit</Button></Row>
        </Form>
        </div>
        </div>
        </div>
        </div>
        

        
    )
}

export default UserReg 