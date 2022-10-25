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
import CarouselItem_for_course from "./CarouselItem_for_course/CarouselItem_for_course";
const Home = () => {
  const courses = useLoaderData();

  const best_courses = courses.filter((course) => course.Rating > 7);
  console.log(best_courses);

  return (
    <div className="Home container p-0 ">
      <Carousels></Carousels>
      <h1>About Us{best_courses.length}</h1>

      <Container className="my-0 ">
        <Row>
          <Col className="bg-primary p-3 rounded-right" lg="8">
            <h1>About Us{best_courses.length}</h1>

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
      {best_courses.map((course) => {
        <h1>why</h1>;
      })}

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
            <CarouselItem_for_course></CarouselItem_for_course>
             <CarouselItem_for_course></CarouselItem_for_course>
            </Carousel>
            {/* {best_courses.map(
              (course) => (
                <h1>hello</h1>
              )

              // <CarouselItem_for_course></CarouselItem_for_course>
            )} */}
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
      {/* {best_courses.map((course) => {
                <CarouselItem_for_course></CarouselItem_for_course>
              })} */}
    </div>
  );
};

export default Home;
