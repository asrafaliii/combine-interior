import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full bg- py-16 px-12">
      <div className="text-center m-5 mt-10">
        <p className="text-4xl font-bold inline border-b-4 border-red-600">
          Contact
        </p>
      </div>
      <div className="w-full mx-auto grid md:grid-cols-2 gap-8">
        <div className="shadow-md w-full flex flex-col gap-y-4 px-6 py-12 my-4 rounded-lg hover:shadow-xl">
          <div className=" py-3 rounded-xl border">
            <p className="text-5xl font-bold text-red-500">
              <AiOutlineMail />
            </p>
            <p className="text-gray-400 mt-2 text-2xl px-2">
              combineinterior@gmail.com
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-2 text-center">
            <div className="py-3 rounded-xl border">
              <p className="text-5xl font-bold text-red-500 text-center">
                <GoLocation className=" flex justify-center items-center" />
              </p>
              <p className="text-gray-400 mt-2 text-2xl">
                181/1 (4th Floor), Shahadat Sarani, Badda Hogh School Road,
                Middle Badda, Gulshan-1, Dhaka-1212.
              </p>
            </div>
            <div className=" py-3 rounded-xl border">
              <p className="text-5xl font-bold text-red-500">
                <AiOutlinePhone />
              </p>
              <p className="text-gray-400 mt-2 text-2xl">
                +880 1719 687061, +880 1681 929969, +880 1738 165563
              </p>
            </div>
          </div>
        </div>
        <div className="shadow-md w-full flex flex-col p-4 my-4 rounded-lg hover:shadow-xl">
          <form className="px-6 py-4">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <textarea
                className="textarea shadow appearance-none border rounded w-full h-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
