import React from "react";
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center items-center">
        <p className="text-[#00df9a]">We are glad to have you here.</p>
        <h1 className="md:text-7xl text-4xl font-bold md:py-6">Welcome to Our Website</h1>
        <div className="flex items-center justify-center">
            <p className="md:text-4xl text-xl font-bold py-4">Your success is our priority: </p>
            <ReactTyped 
              className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#00df9a]"
              strings={["Explore", "Learn", "Grow"]} 
              typeSpeed={120} 
              backSpeed={140} 
              loop 
            />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">Join us on this journey!</p>
        <button className="bg-[#00df9a] text-black font-bold py-2 px-4 rounded-md mt-4">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;