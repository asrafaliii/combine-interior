import React from "react";
import Slider from "react-slick";
import Photo1 from "../assets/Team/Abdul.jpg";
import Photo2 from "../assets/Team/Faruq.jpg";
import Photo3 from "../assets/Team/Nawrin.jpg";
import Photo4 from "../assets/Team/Rabiul.jpg";
import Photo5 from "../assets/Team/Raju.jpg";
import Photo6 from "../assets/Team/Ritu.jpg";
import Photo7 from "../assets/Team/Sayed.jpg";
import Photo8 from "../assets/Team/Sojib.jpg";

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
    <div className="px-12 mx-3">
      <h1 className="text-4xl text-center mt-5">Our Team</h1>
      <p>
        We specialize in planning and design and offer a full service in the
        Bangladesh, from the construction of new space, the COMBINE INTERIOR of
        existing ones, right through to high-end interior design production.
        With us you can count on a qualified team for high-level architecturual
        planning for furnishing luxurious living space.
      </p>
      <Slider {...settings}>
        <div className="card" style={{ width: "10rem" }}>
          <img src={Photo5} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Mr. Raju Diyan</h2>
            <p className="p-0">Founder & CEO</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo4} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Rabiul Hasan Rajon</h2>
            <p className="p-0">Interior Architect</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo8} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Sojib Roy</h2>
            <p className="p-0">Interior Architect</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo2} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Farooq Muhammad</h2>
            <p className="p-0">Creative designer</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo6} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Ritu Sheikh</h2>
            <p className="p-0">Senior Marketing Officer</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo7} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Sayed Shahriar</h2>
            <p className="p-0">Project Manager</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo3} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Nawrin Jafry</h2>
            <p className="p-0">Head of Social Marketing</p>
          </div>
        </div>
        <div className="card" style={{ width: "16rem" }}>
          <img src={Photo1} className="card-img-top w-100" alt="..." />
          <div className="card-body text-center p-2">
            <h2 className="text-2xl font-bold">Md. Abdul Alim</h2>
            <p className="p-0">Project Coordinator</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurTeam;
