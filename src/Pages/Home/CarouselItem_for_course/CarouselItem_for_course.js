import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CarouselItem_for_course = () => {
    return (
       
           <Carousel.Item>
        <Card className="bg-danger">
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>course.course_name</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and
              make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Carousel.Item>
    
              
       
        
    );
};

export default CarouselItem_for_course;