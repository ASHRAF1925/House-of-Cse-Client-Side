import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Images/logo-removebg-preview.png";
import { AuthContext } from "../../../Contexts/UserContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  const handlelogout = () => {
    logout()
      .then(() => {
        // Sign-out successful.
        console.log("signout successful");
        toast.success("Successfully Loged out!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container header_background_color mb-5">
      <Navbar expand="lg" id="backgroundColor">
        <div className="d-flex  me-auto container ">
          <div>
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
          </div>
          <Navbar.Brand href="/" className="title fw-bold">
            <h1>House Of CSE</h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav
              variant="pills"
              defaultActiveKey="/"
              className="ms-auto my-auto align-items-center "
            >
              <Nav.Item>
                <Nav.Link eventKey="/">
                  <Link to="/" className="text-decoration-none  text_color">
                    {" "}
                    Home
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/Courses">
                  <Link
                    to="/Courses"
                    className="text-decoration-none  text_color"
                  >
                    {" "}
                    Courses
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/Blogs">
                  <Link
                    to="/Blogs"
                    className="text-decoration-none  text_color"
                  >
                    {" "}
                    Blogs
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/FAQS">
                  <Link to="/FAQS" className="text-decoration-none  text_color">
                    {" "}
                    FAQS
                  </Link>
                </Nav.Link>
              </Nav.Item>
              <Form>
                <label class="switch mx-3">
                  <input type="checkbox" id="togBtn" />
                  <div onClick={toggleTheme} class="slider round">
                    <span class="on">Light</span>
                    <span class="off">Dark</span>
                  </div>
                </label>
              </Form>

              {user?.uid && (
                <div>
                  {console.log(user.photoURL)}

                  <img
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title={user.displayName}
                    src={user.photoURL}
                    width="50"
                    height="50"
                    className="d-inline-block align-top rounded-circle mx-2"
                    alt=""
                  />
                </div>
              )}
              {user?.uid ? (
                <Link>
                  <button onClick={handlelogout}>Sign Out</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-primary">Login</button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
