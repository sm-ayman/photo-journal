import React from "react";

const Navbar = () => {
  return (
    <div className="container">
      <header className="bg-light py-3">
        <nav className="container d-flex justify-content-center align-items-center">
          <ul className="nav">
            <li className="nav-item active">
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
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
