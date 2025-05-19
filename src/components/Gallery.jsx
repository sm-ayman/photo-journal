import React from "react";
import galleryData from "../data/galleryData";

const Gallery = () => {
  return (
    <div className="container py-5" id="gallery">
      <h2 className="text-center fw-bold text-info-emphasis">
        Through the Lens
      </h2>
      <p className="text-center text-muted fs-5 mb-5">
        The World, One Frame at a Time
      </p>
      <div className="row">
        {galleryData.map((item) => (
          <div key={item.id} className="col-lg-4 col-md-6 mb-4">
            <img
              src={item.src}
              className="w-100 shadow rounded-3"
              alt={item.alt}
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
