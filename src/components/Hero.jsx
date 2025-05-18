import React from "react";
import heroData from "../data/heroData";

const Hero = () => {
  return (
    <div className="my-5">
      <div className="row text-center justify-content-center">
        {/* Image Section */}
        <div className="col-lg-8 d-flex justify-content-center">
          <div className="photo-grid-wrapper position-relative">
            <img
              src={heroData.image}
              alt="photo"
              className="img-fluid w-100"
            />
            <div className="grid-overlay"></div>
          </div>
        </div>
        {/* Text Section */}
        <div className="col-lg-8 mb-4">
          <h3 className="display-4 fw-bold lh-1 text-info-emphasis">
            {heroData.heading}
          </h3>
          <p className="lead text-justify">{heroData.description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-center mb-4">
            <button
              type="button"
              className="btn btn-success btn-md px-4 fw-bold rounded-5"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
