import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="w-full bg- py-16 px-4">
      <h1 className="text-4xl text-center mt-2 mb-5">Contact</h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="max-w-[500px] grid md:grid-cols-1 gap-2 px-2 text-center">
          <div className="flex py-3 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">
              <GoLocation />
            </p>
            <p className="text-gray-400 mt-2 text-2xl">
              181/1 (4th Floor), Shahadat Sarani, Badda Hogh School Road, Middle
              Badda, Gulshan-1, Dhaka-1212.
            </p>
          </div>
          <div className="flex py-3 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">
              <AiOutlineMail />
            </p>
            <p className="text-gray-400 mt-2 text-2xl">
              combineinterior@gmail.com
            </p>
          </div>
          <div className="flex py-3 rounded-xl shadow-xl">
            <p className="text-5xl font-bold text-red-500">
              <AiOutlinePhone />
            </p>
            <p className="text-gray-400 mt-2 text-2xl">
              +880 1719 687061, +880 1681 929969, +880 1738 165563
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <form>
            <div class="mb-3">
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required=""
              />
            </div>
            <div class="mb-3">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Your Email"
                required=""
              />
            </div>
            <div class="mb-6">
              <label
                for="text"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                type="text"
                id="message"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="Your Message"
                required=""
              />
            </div>
            <button
              type="submit"
              class="text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
