import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';

const Checkout = () => {
    
    const { user, logout } = useContext(AuthContext);
    
  
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
        <div className='container'>
           <div className="p-3 bg-info">
        <h1>Course Informations</h1>
        <hr className="fs-3 fw-bold"/>
        <h2>Course Code  : {course_code}</h2>
        <h2>Course Name : {course_name}</h2>
        <h3>Duration : {Duration}</h3>
      <h3>Rating :{Rating}</h3>
        
      </div>
  

      <div className="p-3 bg-light">
        <h1>Buyers Informations</h1>
        <hr className="fs-3 fw-bold" />
        {user?.photoURL && (
                <div>{
                  console.log(user.photoURL)
                  }
           

               
                  <img data-bs-toggle="tooltip" data-bs-placement="right" title={user.displayName}
                    src={user.photoURL}
                    width="150"
                    height="150"
                    className="d-inline-block align-top  mx-2"
                    alt=""
                  />
                </div>
              )}
        <h2>Name  : {user.displayName}</h2>
        
      </div>
        </div>
    );
};

export default Checkout;