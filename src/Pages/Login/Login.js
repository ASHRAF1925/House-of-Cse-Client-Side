import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';


let email;
let password;

const Login = () => {


  const {signIn}=useContext(AuthContext)





    const handleLogin= event =>{
        event.preventDefault();
        console.log(event.target.email.value)
        email=event.target.email.value;
        password=event.target.password.value;
        signIn(email,password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
        });
      

    }
    return (
    <div className='mx-auto w-50 border rounded p-3'>
        <h1>Please Login</h1>
            <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <p>Does not have any account ? <Link to="/register">Register now!</Link> </p>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    </div>
    );
};

export default Login;