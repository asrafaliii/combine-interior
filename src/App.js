import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import AboutDetails from "./components/About/AboutDetails";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="aboutdetails" element={<AboutDetails />} />
        <Route path="service" element={<Service />} />
        <Route path="team" element={<Team />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
