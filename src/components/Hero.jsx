import React from "react";
import heroData from "../data/heroData";

const Hero = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            {heroData.heading}
          </h1>
          <p className="lead">{heroData.description}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >
              Explore
            </button>
          </div>
        </div>
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="rounded img-fluid"
            src={heroData.image}
            alt="hero"
            width="720"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
