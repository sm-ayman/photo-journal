import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container my-5 d-flex flex-column align-items-center justify-content-center">
      <h3>「 PhotoJournal 」</h3>
      <ul className="list-unstyled d-flex gap-5 border border-1 border-primary-subtle p-2">
        <li>
          <a href="https://www.facebook.com/smayman98">
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sm_ayman/">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faXTwitter} size="lg" />
          </a>
        </li>
        <li>
          <a href="">
            <FontAwesomeIcon icon={faWhatsapp} size="lg" />
          </a>
        </li>
      </ul>
      <p className="fs-5">Created By <a href="https://sm-ayman.netlify.app/" className="text-info-emphasis">Sultan Md. Ayman</a> | All Rights Reserved | © 2025</p>
    </div>
  );
};

export default Footer;
