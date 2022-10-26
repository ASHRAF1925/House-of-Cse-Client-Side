import React, { Component } from "react";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Item_carousel.css'

export default class AutoPlay extends Component {
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
      <div >
       
        <Slider {...settings} >
        {best_courses.map(course => 
                   <div className="mx-4">
                    <Card className="card_height" >
                   <Card.Img className="image_height" variant="top" src={course.course_image} />
                   <Card.Body >
                     <Card.Title className="card_title">{course.course_name}</Card.Title>
                     <Card.Text className="card_title">
                    Ratings :{course.Rating}
                     </Card.Text>
                     <Button variant="primary" className="text-center">Explore</Button>
                   </Card.Body>
                 </Card>
                   </div>
              )}
          
        </Slider>
      </div>
    );
  }
}