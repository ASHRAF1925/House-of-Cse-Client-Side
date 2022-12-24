import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Roll, Slide, Zoom } from "react-reveal";
import image1 from "../../../../src/Assets/Images/Carousel/1.png";
import image2 from "../../../../src/Assets/Images/Carousel/2.png";
import image3 from "../../../../src/Assets/Images/Carousel/3.png";
import "./Carousels.css";

const Carousels = () => {
  return (
    <Carousel className="mt-3 h-full">
      <Carousel.Item>
        <img className="d-block w-100 h-75" src={image1} alt="First slide" />

        <Slide left>
          <Carousel.Caption className="text_back_blurr">
            <h1>CHOOSE</h1>
            <p>Choose the Course you want to learn</p>
          </Carousel.Caption>
        </Slide>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Roll>
          <Carousel.Caption className="text_back_blurr">
            <h1>Learn</h1>
            <p>Learn the course with heart</p>
          </Carousel.Caption>
        </Roll>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Zoom>
          <Carousel.Caption className="text_back_blurr">
            <h1>Develop</h1>
            <p>Develop Your Skills.</p>
          </Carousel.Caption>
        </Zoom>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
