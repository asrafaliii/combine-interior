import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const navigateDetails = (event) => {
    navigate("/aboutdetails");
  };

  return (
    <div>
      <div className="w-ful py-16 px-4">
        <h1 className="text-4xl text-center mt-5">About</h1>
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img
            className="w-[500px] mx-auto my-4"
            src="https://i.ibb.co/0s9SBRH/Office-Interior-Design-1.jpg"
            alt="/"
          />
          <div className="flex flex-col justify-start">
            <h1 className="md:text-4xl sm:text-3xl text-[#003140] text-2xl font-bold py-2">
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

            <div class="mt-6">
              <button onClick={navigateDetails} class="btn btn-primary">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
