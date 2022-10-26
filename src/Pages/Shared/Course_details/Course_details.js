import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Course_details = () => {
  const course = useLoaderData();
  const {
    course_code,
    course_name,
    course_image,
    course_description,
    Duration,
    Price,
    Rating,
    instructor_id,
    Instructor_name,
  } = course;
  return (
    <div>
      <h1 className="text-center">Welcome to {course_name} Course </h1>
      <h1>{course_image}</h1>
 
      <Image
        src="https://media.geeksforgeeks.org/wp-content/uploads/20210425000233/test-300x297.png"
        rounded
      />
      <h3>Basic Information </h3>
      <h5>Course code : {course_code}</h5>
      <p>Description : {course_description}</p>
      <h6>Duration : {Duration}</h6>
      <h2>{Rating}</h2>
    </div>

  );
};

export default Course_details;
