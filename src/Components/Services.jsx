import React from "react";
import Service from "./Service";

const Services = (props) => {
  return (
    <section className="section-servicios" id="competencias">
      <div className="container-fluid paisaje-marca-agua">
        <div className="container container-servicios">
          <h2 className="subtitulo-servicios d-block p-4 text-center">
            Como desarrolladora Front-End me asuguro de que los proyectos
            cuenten con las siguientes caracteristicas.
          </h2>
          <div className="row">
            {props.data.map((service, index) => (
              <Service
                title={service.title}
                image={service.image}
                paragraph={service.paragraph}
                keyProps={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
