import React from "react";

const BusinessSummary = () => {
  return (
    <div name="about" className="w-full">
      <div className="max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-4 gap-4 px-2 text-center">
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">50+</p>
            <p className="text-gray-400 mt-2">Happy Clients</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">50</p>
            <p className="text-gray-400 mt-2">Projects</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">24/7</p>
            <p className="text-gray-400 mt-2">Support</p>
          </div>
          <div className="border py-8 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">3</p>
            <p className="text-gray-400 mt-2">Years of experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;

{
  /* <p>Happy Clients</p>;
<p>Awards</p>;
<p>Years of experience</p>;
<p>Projects</p>; */
}
