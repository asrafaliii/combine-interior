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
      <div className="row px-12">
        {pictures?.map((pic) => (
          <div
            className="g-3 col-sm-12 col-md-6 col-lg-4 mb-3 rounded-none"
            key={pic._id}
          >
            <div className="card rounded-none" style={{ width: "24rem" }}>
              <img
                src={pic.img}
                className="card-img-top w-100 h-100"
                alt="..."
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
