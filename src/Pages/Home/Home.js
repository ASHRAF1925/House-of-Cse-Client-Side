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
import Item_carousel from "./Item_Carousel/Item_carousel";
import computer_science from '../../../src/Assets/Images/computerscience.jpg'


const Home = () => {
  const courses = useLoaderData();

  const best_courses = courses.filter((course) => course.Rating > 7);


  return (
    <div className="Home container p-0 ">
      <Carousels></Carousels>
      <h1 className="text-center text_back p-3">About Us</h1>

      <Container className="my-0 bg-white ">
        <Row>
          <Col className="back_2 p-3 rounded-right" lg="8">
            <h1>About Us</h1>

            <h4>Welcome to House of CSE!</h4>
            <p>
              We are offering some courses of Computer Science and
              Technology.Join our courses and learn new things.Explore and
              gather knowledge{" "}
            </p>
          </Col>
          <Col className="bg-info p-3 rounded-left" lg="4">
            <img
              className="img-fluid"
              src={computer_science}
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
          <Col className="bg-dark p-3 rounded-right text-white " lg="3">
            <h1 className=".text-white">These are the best Courses</h1>
            
            <p>
              We are offering some courses of Computer Science and
              Technology.Join our courses and learn new things.Explore and
              gather knowledge{" "}
            </p>
          </Col>
          <Col className="bg-dark p-5 rounded-right" lg="6">
            <Item_carousel courses={best_courses}></Item_carousel>
          </Col>
          <Col className="bg-light p-3 rounded-left" lg="3">
            <img
              className="img-fluid"
              src={computer_science}
              alt=""
            />
          </Col>
        </Row>
      </Container>

      {/* carousel start  */}

      <div className="my-5 container text-center text_back p-4">
        <h1 className="my-5"> Trusted by Over 6000+ Students</h1>
        <p className="my-5">
          We have a fully qualified and very well educated teaching staff,
          continuous student counseling, and a very effective and enthusiastic
          student support staff.{" "}
        </p>
       
      </div>
   
    </div>
  );
};

export default Home;
