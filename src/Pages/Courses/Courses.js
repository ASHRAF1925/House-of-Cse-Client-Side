import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <Container>
      <Row>
        <Col lg="5">
          {courses.map(course=> 
            <Link key={course.course_code} className="decoration" to={`/Courses/${course.course_code}`}>
              <div >
                <Row className="m-3 p-1 course_card rounded">
                  <Col lg="4">
                    <img
                      className="img-fluid"
                      src={course.course_image}
                      alt=""
                    />
                  </Col>
                  <Col lg="8">
                    <h5>{course.course_name}</h5>
                    <p>Rating: {course.Rating}</p>
                  </Col>
                </Row>
              </div>
            </Link>
          )}
        </Col>
        <Col className="bg-success" lg="7">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
