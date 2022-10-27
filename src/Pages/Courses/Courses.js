import React from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Courses.css";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <Container >
      <Row>
        <Col lg="5">
          {courses.map(course=> 
            <Link key={course.course_code} className="decoration" to={`/Courses/${course.course_code}`}>
              <div >
                <Row className="mb-3 me-1  course_card ">
                  <Col lg="6 bg-dark p-0  left_border">
                    <img
                      className="w-100 rounded-left h-100 "
                      src={course.course_image}
                      alt=""
                    />
                  </Col>
                  <Col lg="6">
                    <h5>{course.course_name}</h5>
                    <p>Rating: {course.Rating}</p>
                  </Col>
                </Row>
              </div>
            </Link>
          )}
        </Col>
        <Col className="bg-success p-0" lg="7">
          <Outlet></Outlet>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
