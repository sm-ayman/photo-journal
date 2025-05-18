import React from "react";

const Gallery = () => {
  return (
    <div className="container py-5" id="gallery">
      <h2 className="text-center mb-5 fw-bold text-info-emphasis">Through the Lens</h2>
      <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow rounded-4 mb-4"
            alt="Boat on Calm Water"
          />
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
            className="w-100 shadow rounded-4 mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
            className="w-100 shadow rounded-4 mb-4"
            alt="Mountains in the Clouds"
          />
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow rounded-4 mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            className="w-100 shadow rounded-4 mb-4"
            alt="Waves at Sea"
          />
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            className="w-100 shadow rounded-4 mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
