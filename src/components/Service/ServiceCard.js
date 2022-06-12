import React from "react";

const ServiceCard = ({ service }) => {
  const { name, img } = service;
  return (
    <div className="g-3 col-sm-12 col-md-6 col-lg-3 mb-3">
      <div className="card" style={{ width: "18rem", height: "16rem" }}>
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body text-center p-2">
          <h2 className="text-2xl font-bold">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
