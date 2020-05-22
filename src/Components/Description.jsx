import React from "react";
import imgd from "../img/imgd.png";
const Description = () => {
  return (
    <section className=" container descripcion row d-flex justify-content-between my-5  ">
      <div className=" container container-12 container-sm-12 container-md-6 container-lg-6 ">
        <img
          src={imgd}
          alt="Chania"
          width="460"
          height="345"
          className="img-fluid"
        />
      </div>

      <div className="parrafo mx-5 container-12 container-sm-12 container-md-6 container-lg-6">
        <div>
          <h2 className="text-center my-4 ">FRONTEND DEVELOPER</h2>
          <p>
            Desarrolladora Web Front-End en formación. Soy una persona
            emprendedora, con facilidad para reinventarse y para trabajar en
            equipo, me adapto facilmente a los cambios.
          </p>
        </div>
        <div className="buttons row justify-content-center">
          {/* <button className="mx-4">Portafolio</button>
          <button className="mx-4">Cv</button> */}
        </div>
      </div>
    </section>
  );
};

export default Description;
