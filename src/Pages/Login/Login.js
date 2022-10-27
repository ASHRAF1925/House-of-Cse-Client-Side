import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";



let email;
let password;

const Login = () => {
  const [errors,setError]=useState('');
  

  const {signIn}=useContext(AuthContext);
  const navigate=useNavigate();

  const {signingoogle,signingitpop}= useContext(AuthContext);

  const location=useLocation();
  let from =location.state?.from?.pathname || '/';
  console.log("from header",from);

  const handlegooglesignin=()=>{
    signingoogle()
    .then((result) => {
      
      const user = result.user;
      console.log("from google",user);
      toast.success('Successfully log IN!')
      setError('');
      navigate(from,{replace: true});
   
    }).catch((error) => {
   

      console.log(error.code,error.message);
      setError(error.message);
      toast.error({errors})

    });

  }
  const handlegitsignin=()=>{
    signingitpop()
    .then((result) => {
      const user = result.user;
      console.log("from git",user);
      setError('');
      toast.success('Successfully log IN!')
      navigate(from,{replace:true});
    }).catch((error) => {
      console.log(error.code,error.message);
      setError(error.message);
      toast.error({errors})
    });

  }


  





    const handleLogin= event =>{
        event.preventDefault();
        console.log(event.target.email.value)
        email=event.target.email.value;
        password=event.target.password.value;
        signIn(email,password)
        .then((userCredential) => {
     
          const user = userCredential.user;
          console.log(from);
          setError('');
          toast.success('Successfully log IN!')
          navigate(from,{replace:true});
     
        })
        .catch((error) => {
          console.log(error.code,error.message);
          setError(error.message);
          toast.error({errors})
        });
      

    }
    return (
    <div className='mx-auto w-50 border rounded p-3 '>
        <h1>Please Login</h1>
            <Form onSubmit={handleLogin} className="text-center">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
    
      <p>Does not have any account ? <Link to="/register">Register now!</Link> </p>
      <Button className='mx-5 mb-3 text-center' variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <div className='d-flex'>
    <Button className='mx-5' onClick={handlegooglesignin} variant="primary" size="lg">
       <FcGoogle className='me-2'></FcGoogle>Continue With Google
      </Button>
      <Button onClick={handlegitsignin} variant="primary" size="lg">
        <BsGithub></BsGithub> Continue With GitHub
      </Button>
    </div>
 
    
    
    </div>
    );
};

export default Login;