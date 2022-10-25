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
      <div className="d-flex  me-auto container">
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

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" defaultActiveKey="/" className="ms-auto my-auto">
          <Nav.Item>
              <Nav.Link eventKey="/"><Link to='/' className="text-decoration-none  text_color"> Home</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Courses"><Link to='/Courses' className="text-decoration-none  text_color"> Courses</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/Blogs"><Link to='/Blogs' className="text-decoration-none  text_color"> Blogs</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="/FAQS"><Link to='/FAQS' className="text-decoration-none  text_color"> FAQS</Link></Nav.Link>
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