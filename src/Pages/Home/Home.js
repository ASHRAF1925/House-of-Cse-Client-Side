import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { Button, Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Fade, Zoom } from "react-reveal";
import { useLoaderData } from "react-router-dom";
import computer_science from "../../../src/Assets/Images/computerscience.jpg";
import Carousels from "./Carousels/Carousels";
import "./Home.css";
import Item_carousel from "./Item_Carousel/Item_carousel";
import Review_carousel from "./Review_carousel/Review_carousel";

const Home = () => {
  const courses = useLoaderData();
  useEffect(() => {
    AOS.init({ duration: 2400 });
  }, []);
  const reviews = [
    {
      id: 1,
      Name: "Rafid Rahman",
      image:
        "https://images.unsplash.com/photo-1648183185045-7a5592e66e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=542&q=80",
      Comment: "Liked their Courses and Learned a lot. Recommended",
    },
    {
      id: 2,
      Name: "Anisha Islam",
      image:
        "https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      Comment: "Learned a Lot of things.Best courses ever.Buy it and Learn",
    },
    {
      id: 3,
      Name: "Mishal-AL-Rahman",
      image:
        "https://images.unsplash.com/photo-1559582930-bb01987cf4dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=576&q=80",
      Comment: "Liked their Courses and Learned a lot. Recommended",
    },
    {
      id: 4,
      Name: "Afrin Islam",
      image:
        "https://images.unsplash.com/photo-1535953472862-9cc610a70f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      Comment: "Best courses to learn .",
    },
    {
      id: 5,
      Name: "Tanvir Ahmed",
      image:
        "https://images.unsplash.com/photo-1517588632672-9758d6acba04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      Comment: "Liked their Courses and Learned a lot. Recommended",
    },
    {
      id: 6,
      Name: "Ridika Islam",
      image:
        "https://images.unsplash.com/photo-1634316887949-a417f029f843?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      Comment: "Liked their Courses and Learned a lot. Recommended",
    },
  ];
  const best_courses = courses.filter((course) => course.Rating > 7);

  return (
    <div className="Home container p-0 ">
      <Zoom>
        {" "}
        <Carousels></Carousels>
      </Zoom>
      <div class="item my-5" data-aos="fade-down">
        {" "}
        <h1 className="text-center text_back p-3">About Us</h1>
        <ScrollAnimation duration={10} animateIn="fadeIn" animateOut="fadeOut">
          <Container data-aos="fade-in" className="my-0 bg-white ">
            <Row>
              <Col className="back_2 p-3 rounded-right" lg="8">
                <h1>About Us</h1>

                <h4>Welcome to House of CSE!</h4>

                <p>
                  We are offering some courses of Computer Science and
                  Technology.Join our courses and learn new things.Explore and
                  gather knowledge{" "}
                </p>
              </Col>
              <Col className="bg-info p-3 rounded-left" lg="4">
                <img className="img-fluid" src={computer_science} alt="" />
              </Col>
            </Row>
          </Container>
        </ScrollAnimation>
      </div>

      {/* carousel start  */}
      <div class="item" data-aos="zoom-in">
        {" "}
        <Fade bottom>
          {" "}
          <Container className="my-0">
            <Row>
              <Col className="bg-dark p-3 rounded-right text-white " lg="3">
                <h1 className=".text-white">These are the best Courses</h1>

                <p>
                  We are offering some courses of Computer Science and
                  Technology.Join our courses and learn new things.Explore and
                  gather knowledge{" "}
                </p>
              </Col>
              <Col className="bg-dark p-5 rounded-right" lg="6">
                <Item_carousel courses={best_courses}></Item_carousel>
              </Col>
              <Col className="bg-light p-3 rounded-left" lg="3">
                <img className="img-fluid" src={computer_science} alt="" />
                <p className="mt-5 mx-auto">
                  They learned about the basic CSE courses From us.
                </p>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>

      {/* carousel start  */}
      <div class="h-100%" data-aos="flip-up">
        {" "}
        <Container className="mx-auto bg-secondary my-5 p-5">
          <h1 className="text-center text-white my-4">Onging Offers</h1>
          <Row className="mx-auto">
            <Col className="mx-auto my-2 " xs="12" md="6" lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1482597869166-609e91429f40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                />
                <Card.Body>
                  <Card.Title>Winter Offer</Card.Title>
                  <Card.Text>Get 10 % discount on Selected Courses</Card.Text>
                  <Button variant="primary">See Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mx-auto my-2 " xs="12" md="6" lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1607457321077-0dd2bfcfde7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                />
                <Card.Body>
                  <Card.Title>Year End Offer</Card.Title>
                  <Card.Text>
                    Get 22% discount on Selected Courses On the Ending of This
                    year
                  </Card.Text>
                  <Button variant="primary">See Details</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mx-auto my-2 " xs="12" md="6" lg="3">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1607966486807-98e5395c5ab9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                />
                <Card.Body>
                  <Card.Title>Christmas Offer</Card.Title>
                  <Card.Text>
                    Get 5% discounts on all courses in this Christmas{" "}
                  </Card.Text>
                  <Button variant="primary">See Details</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div class="item mx-auto" data-aos="zoom-out">
        <Col className="bg-dark p-5 rounded-right mx-auto " lg="12">
          <h1 className="text-center text-white font-bold">
            Courses on 15% Sale
          </h1>
          <Item_carousel courses={best_courses}></Item_carousel>
        </Col>
      </div>

      <div class="item" data-aos="slide-up">
        {" "}
        <ScrollAnimation duration={10} animateIn="fadeIn" animateOut="fadeOut">
          <div className="my-5 container text-center text_back p-4">
            <h1 className="my-5"> Trusted by Over 6000+ Students</h1>
            <p className="my-5">
              We have a fully qualified and very well educated teaching staff,
              continuous student counseling, and a very effective and
              enthusiastic student support staff.{" "}
            </p>
          </div>
        </ScrollAnimation>
      </div>

      <div class="item my-5 bg-secondary my-5" data-aos="slide-up">
        <div class="item mx-auto" data-aos="zoom-out">
          <Col className=" p-5 rounded-right mx-auto " lg="12">
            <h1 className="text-center text-white font-bold">
              Customer Reviews
            </h1>
            <Review_carousel reviews={reviews}></Review_carousel>
          </Col>
        </div>
      </div>

      <div class="item mx-auto bg-dark p-5 text-center my-5" data-aos="flip-up">
        <div className="mx-auto">
          <h1 className="text-white my-3">Our Payment Partners</h1>
          <img
            src="https://banglatech24.com/wp-content/uploads/2022/02/bkash-bn-pink.jpg"
            class="rounded-circle h-25 w-25 img-fluid mx-3"
            alt="Cinque Terre"
          ></img>
          <img
            src="https://play-lh.googleusercontent.com/Iks014Ul-atatMhWs8rLbtG7cIZLPfpeMDdkLtmq5o7D5_MlFNu5mmIqRHAY45aOhapp"
            class="rounded-circle img-fluid h-25 w-25 mx-3"
            alt="Cinque Terre"
          ></img>
          <img
            src="https://play-lh.googleusercontent.com/sDY6YSDobbm_rX-aozinIX5tVYBSea1nAyXYI4TJlije2_AF5_5aG3iAS7nlrgo0lk8"
            class="rounded-circle  img-fluid h-25 w-25 mx-3"
            alt="Cinque Terre"
          ></img>
        </div>
      </div>
      <div class="item bg-secondary text-white my-5" data-aos="flip-down">
        <h1 className="text-center font-bold">Our Services</h1>
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
          rel="stylesheet"
        ></link>
        <section class="section-big main-color">
          <div class="container">
            <div class="row">
              <div class="col-md-12 pb-20 text-center">
                <h2 class="section-title mb-10">
                  <span>
                    {" "}
                    We provide{" "}
                    <strong class="primary-color">Best Services</strong> to our
                    customers{" "}
                  </span>
                </h2>
                <p class="section-sub-title">
                  We are a passionate digital design agency that specializes in
                  beautiful and easy-to- <br />
                  use digital design &amp; web development services.
                </p>
                <div class="exp-separator center-separator">
                  <div class="exp-separator-inner"></div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
                <ul class="i-list medium">
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-desktop"></i>{" "}
                    </div>

                    <div class="icon-content">
                      <h3 class="title">Fully Responsive Design</h3>
                      <p class="sub-title">
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim ante,
                        dapibus in.
                      </p>
                    </div>
                    <div class="iconlist-timeline"></div>
                  </li>
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-code"></i>{" "}
                    </div>

                    <div class="icon-content">
                      <h3 class="title">Easy &amp; Clean Code</h3>
                      <p>
                        Aenean vulputate tellus. Aenean leo ligula, porttitor
                        eu, consequat vitae, eleifend ac, enim. Aliquam lorem
                        ante, dapibus in.
                      </p>
                    </div>
                    <div class="iconlist-timeline"></div>
                  </li>
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-paper-plane"></i>{" "}
                    </div>

                    <div class="icon-content">
                      <h3 class="title">24/7 Customer Support</h3>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat, eleifend ac, enim lorem ante,
                        dapibus in.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="i-list medium">
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-diamond"></i>{" "}
                    </div>
                    <div class="icon-content">
                      <h3 class="title">Endless Possibilites</h3>
                      <p class="sub-title">
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend Aliquam lorem
                        ante, dapibus in.
                      </p>
                    </div>
                    <div class="iconlist-timeline"></div>
                  </li>
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-recycle"></i>{" "}
                    </div>
                    <div class="icon-content">
                      <h3 class="title">Free Lifetime Updates</h3>
                      <p>
                        Aenean eleifend tellus. Aenean leo ligula, porttitor eu
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in.
                      </p>
                    </div>
                    <div class="iconlist-timeline"></div>
                  </li>
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-check"></i>{" "}
                    </div>
                    <div class="icon-content">
                      <h3 class="title">Clean &amp; Modern Design</h3>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend enim lorem ante,
                        dapibus in.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <ul class="i-list medium">
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-codepen"></i>{" "}
                    </div>
                    <div class="icon-content">
                      <h3 class="title">Useful Shortcodes</h3>
                      <p class="sub-title">
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac, enim.
                        Aliquam lorem ante.
                      </p>
                    </div>
                    <div class="iconlist-timeline"></div>
                  </li>
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-newspaper-o"></i>{" "}
                    </div>
                    <div class="icon-content">
                      <h3 class="title">Multipurpose Concept</h3>
                      <p>
                        Aenean vulputate eleifend tellus ligula, porttitor eu,
                        consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                        dapibus in.
                      </p>
                    </div>
                    <div class="iconlist-timeline"></div>
                  </li>
                  <li class="i-list-item">
                    <div class="icon">
                      {" "}
                      <i class="fa fa-heart-o"></i>{" "}
                    </div>
                    <div class="icon-content">
                      <h3 class="title">Crafted With Love</h3>
                      <p>
                        Aenean vulputate eleifend tellus. Aenean leo ligula,
                        porttitor eu, consequat vitae, eleifend ac lorem ante,
                        dapibus in.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div class="item" data-aos="flip-left text-white mx-auto p-5 my-5 mb-5">
        <section class="mb-4 text-white bg-dark my-5 mx-auto p-5">
          <h2 class="h1-responsive font-weight-bold text-center my-4">
            Contact us
          </h2>

          <p class="text-center w-responsive mx-auto mb-5">
            Do you have any questions? Please do not hesitate to contact us
            directly. Our team will come back to you within a matter of hours to
            help you.
          </p>

          <div class="row mx-auto">
            <div class="col-md-9 mb-md-0 mb-5">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
              >
                <div class="row">
                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="form-control"
                      />
                      <label for="name" class="">
                        Your name
                      </label>
                    </div>
                  </div>

                  <div class="col-md-6">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="email"
                        name="email"
                        class="form-control"
                      />
                      <label for="email" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form mb-0">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        class="form-control"
                      />
                      <label for="subject" class="">
                        Subject
                      </label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12">
                    <div class="md-form">
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        class="form-control md-textarea"
                      ></textarea>
                      <label for="message">Your message</label>
                    </div>
                  </div>
                </div>
              </form>

              <div class="text-center text-md-left">
                <a
                  class="btn btn-primary"
                  onclick="document.getElementById('contact-form').submit();"
                >
                  Send
                </a>
              </div>
              <div class="status"></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
