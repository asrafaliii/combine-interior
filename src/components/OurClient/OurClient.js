import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Photo1 from "../assets/OurClient/Client1.jpg";
import Photo2 from "../assets/OurClient/Client2.png";
import Photo3 from "../assets/OurClient/Client3.jpg";
import Photo4 from "../assets/OurClient/Client4.jpg";
import Photo5 from "../assets/OurClient/Client5.jpg";
import Photo6 from "../assets/OurClient/Client6.jpg";
import Photo7 from "../assets/OurClient/Client7.png";
import Photo8 from "../assets/OurClient/Client8.jpg";

const OurClient = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <h1 className="text-4xl text-center mt-2 mb-5">Our Client</h1>
      <Slider {...settings}>
        <div>
          <img className="w-25" src={Photo1} />
        </div>
        <div>
          <img className="w-25" src={Photo2} />
        </div>
        <div>
          <img className="w-25" src={Photo3} />
        </div>
        <div>
          <img className="w-25" src={Photo4} />
        </div>
        <div>
          <img className="w-25" src={Photo5} />
        </div>
        <div>
          <img className="w-25" src={Photo6} />
        </div>
        <div>
          <img className="w-25" src={Photo7} />
        </div>
        <div>
          <img className="w-25" src={Photo8} />
        </div>
      </Slider>
    </div>
  );
};

export default OurClient;
