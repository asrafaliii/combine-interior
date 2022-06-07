import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
