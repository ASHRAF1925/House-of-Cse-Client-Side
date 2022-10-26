import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Courses_list = () => {
    const courses = useLoaderData();
  console.log(courses);

  return (
    <div>
      <Container>
        <Row className="justify-content-md-center">
          {courses.map(course => 
            <Col key={course.course_code}  style={{ width: "18rem" }} lg="4 m-1">
              <Card>
                <Card.Img variant="top" src={course.course_image} />
                <Card.Body>
                  <Card.Title>{course.course_name}</Card.Title>

                  <Card.Text>Ratings :{course.Rating}</Card.Text>
                  <Card.Text>Instructor:{course.Instructor_name}</Card.Text>
                  <Card.Text>Duration :{course.Duration} Weeks</Card.Text>
                  <Card.Text>Price :$ {course.Price}</Card.Text>
                  <p>{course.course_code}</p>
                  
                <Link to={`/Courses/${course.course_code}`}><Button variant="primary">Enroll</Button></Link>
                </Card.Body>
              </Card>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Courses_list;
