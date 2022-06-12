import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-center mt-5">Our Portfolio</h1>
      <div className="row">
        {pictures?.map((pic) => (
          <div className="g-3 col-sm-12 col-md-6 col-lg-4 mb-3" key={pic._id}>
            <div className="card" style={{ width: "22rem" }}>
              <img src={pic.img} className="card-img-top w-100" alt="..." />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
