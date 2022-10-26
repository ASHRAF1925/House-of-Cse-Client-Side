import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister= event =>{
        event.preventDefault();
        console.log(event.target.email.value)

    }
    return (
    <div className='mx-auto w-50 border rounded p-3'>
        <h1>Please Register</h1>
            <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicname">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Name" />
 
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicimage">
        <Form.Label>Image URL</Form.Label>
        <Form.Control type="text" name="img" placeholder="Enter profile image url" />
        </Form.Group>





      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" name="passwordconfirm" placeholder="Enter the password agian" />
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
    );    return (
        <div>
            
        </div>
    );
};

export default Register;