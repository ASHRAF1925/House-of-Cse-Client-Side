import React, { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";

let email;
let password;
let confirm_password;

const Register = () => {
  const { createUseremail, signingoogle, signingitpop } =
    useContext(AuthContext);

  const [password_error, setpassword_error] = useState("");
  const [login_error,setLogin_error]=useState('');
  const [success, setSuccess] = useState("flase");

  const handleRegister = (event) => {
    event.preventDefault();

    setSuccess(false);

    console.log("worked");
    event.preventDefault();
    email = event.target.email.value;
    password = event.target.password.value;
    confirm_password = event.target.passwordconfirm.value;

    if (!/(?=.*[A-Z])/.test(password)) {
      setpassword_error("Please Provide at least one UpperCase letter");
      return;
    }
    if (password.length < 6) {
      setpassword_error("Password length should be more than 6");
      return;
    }
    if (!/(?=.*[!@#$*])/.test(password)) {
      setpassword_error("SPEcial charecter missing");
      return;
    }
    if (confirm_password !== password) {
      setpassword_error("Password Doesnot match");
      return;
    }
    setpassword_error("");

    createUseremail(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log("working");
        setLogin_error('');
        setSuccess(true);
        event.target.reset();
        setSuccess("false");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", error);
        setLogin_error(error.message);
        setpassword_error(errorMessage);
        // ..
      });
  };

  return (
    <div className="mx-auto w-50 border rounded p-3">
      <h1>Please Register</h1>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicimage">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="text"
            name="img"
            placeholder="Enter profile image url"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="passwordconfirm"
            placeholder="Enter the password agian"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <p>
          Does not have any account ? <Link to="/register">Register now!</Link>{" "}
        </p>
        <p> {password_error}</p>
        {success && <p> User created Successfully </p>}
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
  return <div></div>;
};

export default Register;
