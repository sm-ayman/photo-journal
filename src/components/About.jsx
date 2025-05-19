import React from "react";
import aboutData from "../data/aboutData.js";

const About = () => {
  return (
    <div id="about">
      <div className="container my-5 ">
        <h2 className="mb-4 fw-bold text-center text-info-emphasis">
          {aboutData.title}
        </h2>
        <div className="row align-items-center">
          <div
            className="col-md-5 mb-4 mb-md-0"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <img
              src={aboutData.image}
              alt="Photographer"
              className="img-fluid rounded-bottom-circle"
            />
          </div>
          <div
            className="col-md-7 my-auto"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <p className="mb-4 text-muted fs-5 fst-italic text-justify">
              {aboutData.description}
            </p>
            <p className="mt-5 fw-semibold ">
              Email:{" "}
              <span className="text-decoration-none text-success">
                sultanmdayman@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
