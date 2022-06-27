import React from "react";
import Slider from "react-slick";
import Banner1 from ".././assets/Banner/banner1.jpg";
import Banner2 from ".././assets/Banner/banner2.jpg";
import Banner3 from ".././assets/Banner/banner3.jpg";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div name="home" className="w-full">
      <Slider {...settings}>
        <div>
          <div
            className="w-full hero min-h-screen"
            style={{ backgroundImage: "url(" + Banner1 + ")" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-red-500 text-5xl font-bold">
                  Welcome to Combine Interior
                </h1>
                <p className="mb-5 font-bold">
                  Design is our passion! Our team of Top Interior Designers work
                  with you to realize the home of your dreams.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-500 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="w-full hero min-h-screen"
            style={{ backgroundImage: "url(" + Banner2 + ")" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-red-500 text-5xl font-bold">
                  Welcome to Combine Interior
                </h1>
                <p className="mb-5 font-bold">
                  Design is our passion! Our team of Top Interior Designers work
                  with you to realize the home of your dreams.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-500 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="w-full hero min-h-screen"
            style={{ backgroundImage: "url(" + Banner3 + ")" }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-3 text-red-500 text-5xl font-bold">
                  Welcome to Combine Interior
                </h1>
                <p className="mb-5 font-bold">
                  Design is our passion! Our team of Top Interior Designers work
                  with you to realize the home of your dreams.
                </p>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 border border-red-500 rounded">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
