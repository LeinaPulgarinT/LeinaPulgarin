import React from "react";
import html from "../img/html.png";
import css from "../img/css3.png";
import javascript from "../img/js.png";
import react from "../img/react.png";
import bootstrap from "../img/boostrap.png";
import git from "../img/git.png";

const Skills = () => {
  return (
    <section className="descripcion container my-5" id="acerca">
      <h2 className="text-center text-info my-5">HABILIDADES</h2>
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="text-center my-3">html5</h5>
          <img
            src={html}
            alt=""
            width="80"
            height="80"
            className="m-auto d-block"
          />
          <h5 className="text-center my-3">CSS3</h5>
          <img
            src={css}
            alt=""
            width="80"
            height="80"
            className="m-auto d-block"
          />
        </div>
        <div>
          <h5 className="text-center my-3">JS</h5>
          <img
            src={javascript}
            alt=""
            width="80"
            height="80"
            className="m-auto d-block"
          />
          <h5 className="text-center my-3">React</h5>
          <img
            src={react}
            alt=""
            width="80"
            height="80"
            className="m-auto d-block"
          />
        </div>
        <div>
          <h5 className="text-center my-3">Bootstrap</h5>
          <img
            src={bootstrap}
            alt=""
            width="80"
            height="80"
            className="m-auto d-block"
          />
          <h5 className="text-center my-3">Git</h5>
          <img
            src={git}
            alt=""
            width="80"
            height="80"
            className="m-auto d-block"
          />
        </div>
      </div>
      <h2 className="text-center text-info my-3">
        <strong>con +300 horas de practica</strong>
      </h2>
    </section>
  );
};

export default Skills;
