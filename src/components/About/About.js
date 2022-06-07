import React from "react";

const About = () => {
  return (
    <section className="px-12 mt-5">
      <div className="card rounded-0">
        <div className="row g-0">
          <div className="col-lg-5 rounded-0">
            <img
              src="https://i.ibb.co/3kzBy7f/Combine-Interior-5.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-lg-6 mt-0">
            <div className="card-body mt-0">
              <h1 className="card-title text-3xl m-0">About Us</h1>
              <p className="card-text">
                Our Company “combine interior” have been at the forefront of
                commercial and residential refurbishments for 02 years, working
                in architects, designers and individuals to create stunning and
                exciting places to live, work and play. We have built an
                enviable reputation for high quality work, focused project
                management, attention to detail and stringent budget control.
                Our services cover new build, alterations, refurbishments,
                listed buildings our projects are mainly located in BANGLADESH.
                We offer special skills in the following areas: Corporate Design
                Build Residential Home and custom furniture Design Hospital
                Design Residential Hotel Design Idea Restaurant Design Cafeteria
                and Project Management.
              </p>

              <button class="btn btn-outline btn-primary">See More..</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
