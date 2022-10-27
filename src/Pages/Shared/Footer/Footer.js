import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BsFacebook, BsWhatsapp, BsYoutube } from "react-icons/bs";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="mb-0 text-center p-1 background_color mt-5">
      <h1>House of CSE</h1>
      <h6>Contact Us on</h6>
      <div className="d-flex text-center fs-1 mx-auto justify-content-center">
        <BsFacebook className="mx-3"></BsFacebook>{" "}
        <BsYoutube className="mx-3"></BsYoutube>
        <BsWhatsapp className='mx-3'></BsWhatsapp>{" "}
      </div>
    </div>
  );
};

export default Footer;
