import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="px-12">
      <h1 className="text-4xl text-center mt-5">Our Services</h1>
      <p>
        Our work methods are organized to give maximum parsonal assistance to
        the architrct in charge of managing the project and their customer by
        providing a team of design engineers dedicated to the individual
        proeject; We are ready to develop designs and estimates based on the
        information received. Our professionalism and experience harmonize style
        and creativity
      </p>
      <div className="row mt-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Service;
