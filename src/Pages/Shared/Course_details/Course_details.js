import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { FaPrint } from 'react-icons/fa';
import ReactToPrint from "react-to-print";
import { useRef } from "react";

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
        <h3>Basic Informations</h3>
        <h2>Course Name : {course_name}</h2>
        <h6>Duration : {Duration}</h6>
      <h2>Rating :{Rating}</h2>
        
      </div>
      <div className="p-3 bg-warning">
      <p>Description : {course_description}</p>
        
      </div>


   
      
      
    
   
      
      
      <Link to='/checkout'><button>Checkout</button></Link>
    </div>


  );
};

export default Course_details;
