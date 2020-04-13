import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="navbar"
    >
      <a className="navbar-brand" href="#">
        {" "}
        <span>LEINA</span> PULGARIN
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#inicio">
              INICIO<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#portafolio">
              PORTAFOLIO
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#competencias">
              COMPETENCIAS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link float-right" href="#acerca"></a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
