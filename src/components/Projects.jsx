import React from "react";
import projectsData from "../data/projectsData";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div
      className="container"
      data-aos="fade"
      data-aos-delay="500"
      id="projects"
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold text-info-emphasis">Visual Stories</h2>
        <p className="text-muted fs-5">Stories that matter!</p>
      </div>
      <div className="row">
        {projectsData.map(({ id, title, imgSrc, description }) => (
          <div key={id} className="col-lg-4 mb-4">
            <div className="image-wrap-2 position-relative">
              <div className="image-info position-absolute p-3">
                <h2 className="mb-3">{title}</h2>
                <p className="small">{description}</p>
              </div>
              <img src={imgSrc} alt={title} className="img-fluid" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
