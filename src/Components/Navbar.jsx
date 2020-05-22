import React from "react";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="navbar"
    >
      <a class="navbar-brand" href="#">
        {" "}
        <span>LEINA</span> PULGARIN
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#inicio">
              INICIO<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#portafolio">
              PORTAFOLIO
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#competencias">
              COMPETENCIAS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link float-right" href="#acerca">
              ACERCA DE
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
