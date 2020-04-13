import React from "react";

const Service = (props) => {
  const { title, image, paragraph } = props;
  return (
    <div className="container-12 col-sm-6 col-md-3">
      <div className="p-4">
        <h4>{title}</h4>
      </div>
      <div className="imagen">
        <img className="img-fluid traducir" src={image} alt="" />
      </div>
      <p>{paragraph}</p>
    </div>
  );
};

export default Service;
