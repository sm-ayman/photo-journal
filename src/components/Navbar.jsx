import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-dark" href="#">
          PhotoJournal
        </a>

        {/* Hamburger Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium px-3">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium px-3">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium px-3">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark fw-medium px-3">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
