import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from ".././assets/About/about.jpg";

const About = () => {
  const navigate = useNavigate();

  const navigateDetails = (event) => {
    navigate("/details");
  };

  return (
    <div name="about" className="px-12">
      <div className="w-ful py-16 px-4">
        <div className="text-center m-5">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            About Us
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[550px] mx-auto my-4" src={Banner} alt="/" />
          <div className="flex flex-col justify-start py-4">
            <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">
              If you’re wondering who I am.
            </h1>
            <p>
              Our Company “combine interior” have been at the forefront of
              commercial and residential refurbishments for 02 years, working in
              architects, designers and individuals to create stunning and
              exciting places to live, work and play. We have built an enviable
              reputation for high quality work, focused project management,
              attention to detail and stringent budget control. Our services
              cover new build, alterations, refurbishments, listed buildings our
              projects are mainly located in BANGLADESH. We offer special skills
              in the following areas: Corporate Design Build Residential Home
              and custom furniture Design Hospital Design Residential Hotel
              Design Idea Restaurant Design Cafeteria and Project Management.
            </p>

            <div className="mt-6">
              <button
                onClick={navigateDetails}
                className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
              >
                Read More.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
