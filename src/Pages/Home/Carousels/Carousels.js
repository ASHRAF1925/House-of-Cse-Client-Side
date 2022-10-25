import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousels.css'

const Carousels = () => {
    return (
        <Carousel className="mt-3 ">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/Carousel/1.png"
          alt="First slide"
        />
        <Carousel.Caption className='text_back_blurr'>
          <h1>CHOOSE</h1>
          <p>Choose the Course you want to learn</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/Carousel/2.png"
          alt="Second slide"
        />

        <Carousel.Caption className='text_back_blurr'>
          <h1>Learn</h1>
          <p>Learn the course with heart</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="Images/Carousel/3.png"
          alt="Third slide"
        />

        <Carousel.Caption className='text_back_blurr'>
          <h1>Develop</h1>
          <p>
          Develop Your Skills.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Carousels;