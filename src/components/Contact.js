import React from "react";
import ContactImg from ".././assets/Banner/contact.jpg";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg- py-16 px-12">
      <div className="text-center m-5 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-red-600">
          Contact
        </p>
      </div>
      <div className="w-full mx-auto grid md:grid-cols-2 gap-8 mt-10">
        <img src={ContactImg} alt="Contact" />
        <div className="shadow-md w-full flex flex-col p-4 my-4 rounded-lg hover:shadow-xl">
          <form className="px-6 py-4">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="textarea shadow appearance-none rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Your Message"
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
