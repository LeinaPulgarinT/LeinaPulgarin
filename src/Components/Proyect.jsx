import React from "react";
import ButtonProyects from "./ButtonProyects";
export const Proyect = (props) => {
  const { title, repository, image, githubPages, keyProps } = props;

  return (
    <div
      className="container-12 col-sm-6 col-md-4 img-portafolio"
      key={`proyect-${keyProps}`}
    >
      <h5 className="">{title}</h5>
      <div className="portafolio">
        <a target="_blank" href={repository}>
          <img className="img-fluid tribute" src={image} alt="" />
        </a>
      </div>
      <a href={githubPages} target="_blank">
        <ButtonProyects />
      </a>
    </div>
  );
};
