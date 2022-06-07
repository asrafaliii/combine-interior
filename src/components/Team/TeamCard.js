import React from "react";

const TeamCard = ({ team }) => {
  const { name, img, designation, description } = team;
  return (
    <div className="g-4 col-sm-12 col-md-6 col-lg-3">
      <div className="card" style={{ width: "16rem" }}>
        <img src={img} className="card-img-top w-100" alt="..." />
        <div className="card-body text-center p-2">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="p-0">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
