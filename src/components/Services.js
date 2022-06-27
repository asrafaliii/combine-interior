import React from "react";
import Service1 from ".././assets/Services/pic1.jpg";
import Service2 from ".././assets/Services/pic2.jpg";
import Service3 from ".././assets/Services/pic3.jpg";
import Service4 from ".././assets/Services/pic4.jpg";
import Service5 from ".././assets/Services/pic5.jpg";
import Service6 from ".././assets/Services/pic6.jpg";
import Service7 from ".././assets/Services/pic7.jpg";
import Service8 from ".././assets/Services/pic8.jpg";

const Services = () => {
  return (
    <div className="px-12">
      <div className="text-center m-5 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-red-600">
          Our Services
        </p>
      </div>
      <p>
        Our work methods are organized to give maximum parsonal assistance to
        the architrct in charge of managing the project and their customer by
        providing a team of design engineers dedicated to the individual
        proeject; We are ready to develop designs and estimates based on the
        information received. Our professionalism and experience harmonize style
        and creativity
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8 mt-5">
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service3}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">On-site Consultations</h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service6}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">Project Survey & Analysis</h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service8}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">
              Space Planning & Furniture Arrangement
            </h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service2}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">Design Concepts</h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service4}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">Finishes & Furnishings</h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service1}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">Custom Designs</h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service7}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">
              Purchasing, Delivery & Installation
            </h2>
          </div>
        </div>
        <div
          className="card bg-white"
          style={{ width: "18rem", height: "16rem" }}
        >
          <img
            src={Service5}
            className="card-img-top w-100 hover:scale-110 duration-500"
            alt="..."
          />
          <div className="card-body text-center p-2 my-3">
            <h2 className="text-2xl font-bold">
              Project Coordination & Management
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
