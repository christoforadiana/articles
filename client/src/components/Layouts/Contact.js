import React from "react";
import ContactPhoto from "../../images/contact-bg.jpg";

const Contact = () => {
  return (
    <div>
      <div className="bg-[url(../src/images/contact-bg.jpg)] h-2/3 flex flex-wrap items-center justify-center flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center">
          <img src={ContactPhoto} alt="" className="h-[70vh]" />
        </div>
        <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex items-center justify-center flex-col mt-10">
          <div className=" flex gap-5 items-center lg:items-start justify-center flex-col">
            <span className="flex text-dark text-4xl lg:text-5xl gap-2 font-bold">
              CONTACT <p className="text-[#027fb5]"> ME</p>
            </span>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="email"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="message"
            >
              Message
            </label>
            <textarea
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              type="text"
              placeholder="message"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
