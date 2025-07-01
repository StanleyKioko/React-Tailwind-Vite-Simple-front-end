import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-center">Subscribe to our Newsletter</h1>
          <p className="text-center text-gray-600 py-4">
            Stay updated with the latest news and exclusive offers.
          </p>
        </div>
        <form className="flex flex-col md:flex-row items-center justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-2 rounded-md border border-gray-300 md:mr-4"
          />
          <button className="bg-[#00df9a] text-black font-bold py-2 px-4 rounded-md mt-4 md:mt-0">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
