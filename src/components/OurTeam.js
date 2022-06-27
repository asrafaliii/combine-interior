import React from "react";
import Slider from "react-slick";
import Photo1 from ".././assets/Team/Abdul.jpg";
import Photo2 from ".././assets/Team/Faruq.jpg";
import Photo3 from ".././assets/Team/Nawrin.jpg";
import Photo4 from ".././assets/Team/Rabiul.jpg";
import Photo5 from ".././assets/Team/Raju.jpg";
import Photo6 from ".././assets/Team/Ritu.jpg";
import Photo7 from ".././assets/Team/Sayed.jpg";
import Photo8 from ".././assets/Team/Sojib.jpg";

const OurTeam = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div name="team" className="px-12">
      <div className="text-center my-8 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-red-600">
          Our Team
        </p>
        <p className="mt-5">
          We specialize in planning and design and offer a full service in the
          Bangladesh, from the construction of new space, the COMBINE INTERIOR
          of existing ones, right through to high-end interior design
          production. With us you can count on a qualified team for high-level
          architecturual planning for furnishing luxurious living space.
        </p>
      </div>
      <Slider {...settings}>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo5}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Mr. Raju Diyan</h2>
            <p>
              <small>Founder & CEO</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo4}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Rabiul Hasan Rajon</h2>
            <p>
              <small>Interior Architect</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo8}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Sojib Roy</h2>
            <p>
              <small>Interior Architect</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo2}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Farooq Muhammad</h2>
            <p>
              <small>Creative designer</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo6}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Ritu Sheikh</h2>
            <p>
              <small>Senior Marketing Officer</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo7}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Sayed Shahriar</h2>
            <p>
              <small>Project Manager</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo3}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Nawrin Jafry</h2>
            <p>
              <small>Head of Social Marketing</small>
            </p>
          </div>
        </div>
        <div
          className="card px-5 hover:drop-shadow-xl"
          style={{ width: "10rem" }}
        >
          <img
            src={Photo1}
            className="card-img-top w-72 rounded-t-lg"
            alt="..."
          />
          <div className="card-body text-center py-2">
            <h2 className="text-1xl font-bold">Md. Abdul Alim</h2>
            <p>
              <small>Project Coordinator</small>
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurTeam;
