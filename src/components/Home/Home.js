import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Team />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default Home;
