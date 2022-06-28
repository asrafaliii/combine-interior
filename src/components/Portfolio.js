import React from "react";
import Pro1 from ".././assets/Portfolio/pro1.jpg";
import Pro2 from ".././assets/Portfolio/pro2.jpg";
import Pro3 from ".././assets/Portfolio/pro3.jpg";
import Pro4 from ".././assets/Portfolio/pro4.jpg";
import Pro5 from ".././assets/Portfolio/pro5.jpg";
import Pro6 from ".././assets/Portfolio/pro6.jpg";
import Pro7 from ".././assets/Portfolio/pro7.jpg";
import Pro8 from ".././assets/Portfolio/pro8.jpg";

const Portfolio = () => {
  return (
    <div name="portfolio" className="px-12">
      <div className="text-center m-5 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-red-600">
          Our Portfolio
        </p>
      </div>
      <p>
        As you already know, Combine Interior has become a well-known company in
        Bangladesh through their work. They have gained a reputation in a very
        short time by doing many other things including residential, commercial,
        restaurants, brand shops, cafeterias, banks, insurance offices, booths.
        Combine Interior has been working to ensure the highest quality work
        within the client's budget. Here are some of their stereo pictures:
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 mt-5">
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro1} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro2} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro3} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro4} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro5} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro6} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro7} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro8} className="card-img-top w-100 h-full" alt="..." />
        </div>
        <div className="card bg-white rounded-none hover:scale-105 duration-300 shadow-xl">
          <img src={Pro1} className="card-img-top w-100 h-full" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
