import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useWindowDimensions from "../../../Hooks/useWindow";
import "./Item_carousel.css";

const Item_carousel = ({ courses }) => {
  const windowsize = useWindowDimensions();

  let slidenumber = 3;

  var w = windowsize.width;
  if (w < 480) {
    slidenumber = 1;
  } else if (w > 480 && w < 900) {
    slidenumber = 2;
  } else if (w > 900) {
    slidenumber = 3;
  }

  console.log(w, slidenumber);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidenumber,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const best_courses = courses;
  console.log("here");

  return (
    <div className="container">
      <Slider {...settings}>
        {best_courses.map((course) => (
          <div key={course.course_code} className="mx-4">
            <Card className="card_height h-100">
              <Card.Img
                className="image_height"
                variant="top"
                src={course.course_image}
              />
              <Card.Body>
                <Card.Title className="card_title">
                  {course.course_name}
                </Card.Title>
                <Card.Text className="card_title">
                  Ratings :{course.Rating}
                </Card.Text>
                <Link to={`/Courses/${course.course_code}`}>
                  <Button variant="primary">Enroll</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Item_carousel;
