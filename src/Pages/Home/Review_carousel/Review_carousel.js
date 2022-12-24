import AOS from "aos";
import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { AiFillStar } from "react-icons/ai";
import Slider from "react-slick";
import useWindowDimensions from "../../../Hooks/useWindow";
import "./Item_carousel.css";

const Review_carousel = ({ reviews }) => {
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
  useEffect(() => {
    AOS.init({ duration: 2400 });
  }, []);

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
  const reviewss = reviews;
  console.log(reviews);

  return (
    <div className="container">
      <Slider {...settings}>
        {reviewss.map((course) => (
          <div key={course.id} className="mx-4">
            <div class="item" data-aos="fade-right">
              {" "}
              <Card className="card_height h-100 text-center">
                <img
                  src={course.image}
                  class="rounded-circle h-50 w-50 mx-auto"
                  alt="Cinque Terre"
                ></img>
                <Card.Body className="mx-auto">
                  <Card.Title className="card_title mx-auto">
                    {course.Name}
                    <p className="text-warning">
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                      <AiFillStar></AiFillStar>
                    </p>
                  </Card.Title>
                  <Card.Text className="card_title">
                    Comment:
                    <p>{course.Comment}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review_carousel;
