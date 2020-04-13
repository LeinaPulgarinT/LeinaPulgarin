import React from "react";
const Description = () => {
  return (
    <section className=" container descripcion row d-flex justify-content-between my-5  ">
      <div className="caricatura container-12 col-sm-6 col-md-4  m-auto d-block">
        <img
          src="https://static1.squarespace.com/static/53a3776fe4b04f506a40e2cc/t/57ebfa94d1758ef9c9127c15/1475082905422/?format=1500w"
          alt=""
          width="400"
          height="300"
        />
      </div>
      <div className="parrafo mx-5 container-12 col-sm-6 col-md-4">
        <div>
          <h2 className="text-center my-4 ">FRONTEND DEVELOPER</h2>
          <p>
            Desarrolladora Web Front-End en formación. Soy una persona
            emprendedora, con facilidad para reinventarse y para trabajar en
            equipo, me adapto facilmente a los cambios.
          </p>
          <p>
            Desarrolladora Web Front-End en formación con énfasis en React |
            Manejo de HTML5, CSS3, JavaScript, Bootstrap
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
