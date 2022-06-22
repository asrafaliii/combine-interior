import React from "react";
import About from "../About/About";
import BusinessSummary from "../About/BusinessSummary";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import OurClient from "../OurClient/OurClient";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <BusinessSummary />
      <Service />
      <OurClient />
      <Portfolio />
      <Team />
      <Contact />
    </div>
  );
};

export default Home;
