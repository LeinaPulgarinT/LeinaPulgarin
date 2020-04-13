import React from "react";
import leina from "../img/1.jpg";

const Presentation = () => {
  return (
    <section className="section-presentacion" id="inicio">
      <div className="marca-agua">
        <div className="container area-foto position-relative">
          <img className="leina img-fluid d-block m-auto" src={leina} alt="" />
        </div>

        <div className="title-presentacion">
          <h1 id="welcome-section">¡Hola!</h1>
          <h3>¿Buscando desarrollador? Mi nombre es ¡Leina!</h3>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
