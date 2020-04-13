import React from "react";
import { Proyect } from "./Proyect.jsx";

const Proyects = (props) => {
  return (
    <section className="section-portafolio" id="portafolio">
      <div className="container container-portafolio" id="projects">
        <h2 className="text-center p-4 project-tile">
          MI <span>PORTAFOLIO</span>
        </h2>
        <div className="row justify-content-center">
          {props.data.map((proyect, index) => (
            <Proyect
              title={proyect.title}
              repository={proyect.repository}
              image={proyect.image}
              githubPages={proyect.githubPages}
              keyProps={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyects;
