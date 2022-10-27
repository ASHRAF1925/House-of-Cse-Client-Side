import React, { Component } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item_carousel.css'
import { Link } from "react-router-dom";

export default class Item_carousel extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    const best_courses=this.props.courses;
  
    return (
      <div className="container" >
       
        <Slider {...settings} >
        {best_courses.map(course => 
                   <div key={course.course_code} className="mx-4">
                    <Card className="card_height" >
                   <Card.Img className="image_height" variant="top" src={course.course_image} />
                   <Card.Body >
                     <Card.Title className="card_title">{course.course_name}</Card.Title>
                     <Card.Text className="card_title">
                    Ratings :{course.Rating}
                     </Card.Text>
                     <Link to={`/Courses/${course.course_code}`}><Button variant="primary">Enroll</Button></Link>
                     
                     
                   </Card.Body>
                 </Card>
                   </div>
              )}
          
        </Slider>
      </div>
    );
  }
}