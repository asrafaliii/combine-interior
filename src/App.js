import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BusinessSummary from "./components/BusinessSummary";
import Portfolio from "./components/Portfolio";
import OurClient from "./components/OurClient";
import OurTeam from "./components/OurTeam";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <BusinessSummary />
      <Services />
      <OurClient />
      <Portfolio />
      <OurTeam />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
