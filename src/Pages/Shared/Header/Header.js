import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import "./Header.css"
const Header = () => {
    return (
        <div>
        <Navbar expand="lg" id='backgroundColor'>
      <div className="d-flex  me-auto container ">
        <div>
          <Navbar.Brand href="/">
            <img
              src="Images/logo-removebg-preview.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
        </div>
        <Navbar.Brand href="/"  className="title">
         House Of CSE
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav variant="pills" defaultActiveKey="/" className="ms-auto my-auto align-items-center ">
          <Nav.Item>
              <Link eventKey="/" to='/' className="text-decoration-none  text_color mx-3"> Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Link eventKey="/Courses" to='/Courses' className="text-decoration-none  text_color mx-3"> Courses</Link>
            </Nav.Item>
            <Nav.Item>
              <Link eventKey="/Blogs" to='/Blogs' className="text-decoration-none  text_color mx-3"> Blogs</Link>
            </Nav.Item>
            <Nav.Item>
              <Link eventKey="/FAQS" to='/FAQS' className="text-decoration-none  text_color mx-3"> FAQS</Link>
            </Nav.Item>
            <Form>
      <Form.Check 
        type="switch"
        id="custom-switch"
        label="Theme"
      />
      
    </Form>
    <img 
              src="Images/logo-removebg-preview.png"
              width="100"
              height="100"
              className="d-inline-block align-top rounded-circle"
              alt=""
            />

            <button className='btn btn-primary' >Login</button>
            
            
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
        </div>
    );
};

export default Header;