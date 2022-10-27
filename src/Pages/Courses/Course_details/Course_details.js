import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaPrint } from 'react-icons/fa';
import ReactToPrint from "react-to-print";
import { useRef } from "react";

import { VscArrowRight } from "react-icons/vsc";
import './Course_details.css'

const Course_details = () => {

  const pdfref=useRef();
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
    <div ref={pdfref} className="container p-0">
      <header >
      
         <img className="w-100" src={course_image} alt="" /> 
         <div className="d-flex p-2 bg-light">
         <h1 className="text-center position-relative top-0start-50">Welcome to {course_name} Course </h1>
         <ReactToPrint trigger={()=>      <Button variant="outline-primary h-50"><FaPrint/></Button>} content={()=>pdfref.current}></ReactToPrint>
   
         
         </div>
      

      </header>

      <div className="p-3 bg-info">
        <h1>Basic Informations</h1>
        <hr className="fs-3 fw-bold"/>
        <h2>Course Code  : {course_code}</h2>
        <h2>Course Name : {course_name}</h2>
        <h3>Duration : {Duration}</h3>
      <h3>Rating :{Rating}</h3>
        
      </div>
      <div className="p-3 bg-warning">
        <h1>Description About the Course</h1>
        <hr className="fs-3 fw-bold" />
      <p>{course_description}</p>
        
      </div>

      <div className="p-3">
        <h1>Instructor Informations</h1>
        <hr className="fs-3 fw-bold" />
        <h2>Instructor ID  : {instructor_id}</h2>
        <h2>Instructor Name : {Instructor_name}</h2>
      </div>

      <div className="p-3 text-center bg-white w-50 mx-auto rounded">
        <h1>Price : ${Price}</h1>
      </div>
      <div className="mx-5 mt-5 text-center"> <Link className="mx-5" to={`/checkout/${course.course_code}`}><Button className="mx-5" variant="primary" size="lg">
          Checkout <VscArrowRight></VscArrowRight>
        </Button></Link>
        
        </div>


   
      
      
    
   
      
      
     
    </div>


  );
};

export default Course_details;
