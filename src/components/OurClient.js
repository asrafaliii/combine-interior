import React from "react";
import Slider from "react-slick";
import Client1 from ".././assets/OurClient/client1.png";
import Client2 from ".././assets/OurClient/client2.png";
import Client3 from ".././assets/OurClient/client3.png";
import Client4 from ".././assets/OurClient/client4.png";
import Client5 from ".././assets/OurClient/client5.png";
import Client6 from ".././assets/OurClient/client6.png";
import Client7 from ".././assets/OurClient/client7.png";
import Client8 from ".././assets/OurClient/client8.png";
import Client9 from ".././assets/OurClient/client9.png";

const OurClient = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <div name="client" className="px-12">
      <div className="text-center m-5 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-red-600">
          Our Client
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <div className=" flex items-center justify-center bg-white w-24 h-24  hover:scale-110 duration-500 my-5">
            <img className="w-16 mx-auto" src={Client1} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-white w-24 h-24 hover:scale-110 duration-500 my-5">
            <img className="w-16 mx-auto" src={Client2} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-white w-24 h-24 hover:scale-110 duration-500 my-5">
            <img className="w-16 mx-auto" src={Client3} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center w-20 h-20 rounded-full hover:scale-110 duration-500 my-5">
            <img className="w-18 mx-auto" src={Client4} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center w-20 h-20 rounded-full hover:scale-110 duration-500 my-5">
            <img className="w-18 mx-auto" src={Client5} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-white w-24 h-24 hover:scale-110 duration-500 my-5">
            <img className="w-18 mx-auto" src={Client6} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center w-20 h-20 rounded-full hover:scale-110 duration-500 my-5">
            <img className="w-18 mx-auto" src={Client7} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-white w-24 h-24 hover:scale-110 duration-500 my-5">
            <img className="w-16 mx-auto" src={Client8} alt="" />
          </div>
        </div>
        <div>
          <div className=" flex items-center justify-center bg-white w-24 h-24 hover:scale-110 duration-500 my-5">
            <img className="w-16 mx-auto" src={Client9} alt="" />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OurClient;
