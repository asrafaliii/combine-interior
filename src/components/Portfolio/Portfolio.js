import React, { useEffect, useState } from "react";

const Portfolio = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch("portfolio.json")
      .then((res) => res.json())
      .then((data) => setPictures(data));
  }, []);
  return (
    <div className="px-4">
      <h1 className="text-4xl text-center mt-5">Our Portfolio</h1>
      <p>
        As you already know, Combine Interior has become a well-known company in
        Bangladesh through their work. They have gained a reputation in a very
        short time by doing many other things including residential, commercial,
        restaurants, brand shops, cafeterias, banks, insurance offices, booths.
        Combine Interior has been working to ensure the highest quality work
        within the client's budget. Here are some of their stereo pictures:
      </p>
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
