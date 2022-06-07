import { Carousel } from "react-bootstrap";
import React, { useState } from "react";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/tBpNPfc/Combine-Interior-8.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="top-50">
          <h1 className="text-4xl font-bold">Welcome to Combine Interior</h1>
          <p className="text-2xl mb-2">
            Design is our passion! Our team of Top Interior Designers work with
            you to realize the home of your dreams.
          </p>
          <button class="btn btn-primary btn-sm">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/B2YW0yD/Combine-Interior-9.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className="top-50">
          <h1 className="text-4xl font-bold">Welcome to Combine Interior</h1>
          <p className="text-2xl mb-2">
            Design is our passion! Our team of Top Interior Designers work with
            you to realize the home of your dreams.
          </p>
          <button class="btn btn-primary btn-sm">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/X41t8WW/Home-Slide-2.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="top-50">
          <h1 className="text-4xl font-bold">Welcome to Combine Interior</h1>
          <p className="text-2xl mb-2">
            Design is our passion! Our team of Top Interior Designers work with
            you to realize the home of your dreams.
          </p>
          <button class="btn btn-primary btn-sm">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.ibb.co/L1gCbnR/Blog-Slide.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className="top-50">
          <h1 className="text-4xl font-bold">Welcome to Combine Interior</h1>
          <p className="text-2xl mb-2">
            Design is our passion! Our team of Top Interior Designers work with
            you to realize the home of your dreams.
          </p>
          <button class="btn btn-primary btn-sm">Get In Touch</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
