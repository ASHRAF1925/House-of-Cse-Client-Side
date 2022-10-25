import React from "react";
import Header from "../Shared/Header/Header";
import Carousels from "./Carousels/Carousels";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { useLoaderData } from "react-router-dom";
const Home = () => {
  const courses = useLoaderData();

  const best_courses = courses.filter((course) => course.Rating > 7);
  console.log(best_courses);

  return (
    <div className="Home container p-0 ">
      <Carousels></Carousels>
      <Container className="my-0 ">
        <Row>
          <Col className="bg-primary p-3 rounded-right" lg="8">
            <h1>About Us</h1>
            <h4>Welcome to House of CSE!</h4>
            <p>
              We are offering some courses of Computer Science and
              Technology.Join our courses and learn new things.Explore and
              gather knowledge{" "}
            </p>
          </Col>
          <Col className="bg-success p-3 rounded-left" lg="4">
            <img
              className="img-fluid"
              src="Images/computerscience.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      {/* carousel start  */}
      <Container className="my-0">
        <Row>
          <Col className="bg-primary p-3 rounded-right" lg="3">
            <h1>These are the best Courses</h1>
            <h4>Welcome to House of CSE!</h4>
            <p>
              We are offering some courses of Computer Science and
              Technology.Join our courses and learn new things.Explore and
              gather knowledge{" "}
            </p>
          </Col>
          <Col className="bg-primary p-3 rounded-right" lg="6">
            <Carousel className="container">
              {best_courses.map((course) => {
                <Carousel.Item>
                  <Card className="bg-danger">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>course.course_name</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              })}
            </Carousel>
          </Col>
          <Col className="bg-success p-3 rounded-left" lg="3">
            <img
              className="img-fluid"
              src="Images/computerscience.jpg"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      {/* carousel start  */}

      <div className="my-5">
        <h1 className="my-5"> Trusted by Over 6000+ Students</h1>
        <p className="my-5">
          We have a fully qualified and very well educated teaching staff,
          continuous student counseling, and a very effective and enthusiastic
          student support staff.{" "}
        </p>
        <Button variant="primary" size="lg" className="my-5">
          Large button
        </Button>{" "}
      </div>
    </div>
  );
};

export default Home;
