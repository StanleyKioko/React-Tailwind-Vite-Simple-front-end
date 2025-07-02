import React from "react";
import interactions from '../assets/interactions.jpg';
import users from '../assets/users.png';
import engagement from '../assets/engagement.png';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 text-black bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full bg-white border border-gray-100 shadow-lg flex flex-col p-4 sm:p-6 rounded-cl hover:scale-105 transition-transform duration-300">
            <img className="w-full lg:w-full mx-auto  mt-[3-rem] bg-transparent" src={interactions} alt="/" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center py-4 sm:py-6">User Interactions</h1>
            
            <p className="text-base sm:text-lg text-center mx-4 leading-relaxed">Track and analyze how users interact with your digital platforms to identify patterns and opportunities for improvement.</p>
            <p className="text-base sm:text-lg text-center mx-4 leading-relaxed mb-6">Our advanced analytics tools capture detailed user behavior metrics to help you optimize conversion paths and enhance user experience.</p>
            <div className="mt-auto flex justify-center w-full">
              <button className="bg-gradient-to-r from-[#00df9a] to-[#00b383] text-[#000300] px-4 sm:px-6 py-2 sm:py-3 rounded-md my-4 sm:my-6 font-semibold hover:from-[#00b383] hover:to-[#009c6d] hover:scale-105 hover:shadow-md focus:ring-2 focus:ring-[#00df9a] focus:outline-none transition-all duration-300">Learn More</button>
            </div>
          </div>

          <div className="w-full bg-white border border-gray-100 shadow-lg flex flex-col p-4 sm:p-6 rounded-cl hover:scale-105 transition-transform duration-300">
            <img className="w-full lg:w-full mx-auto  mt-[3-rem] bg-transparent" src={users} alt="/" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center py-4 sm:py-6">Data Visualization</h1>
            

            <p className="text-base sm:text-lg text-center mx-4 leading-relaxed">Transform your data into compelling visual stories that drive insights and decision-making.</p>
            <p className="text-base sm:text-lg text-center mx-4 leading-relaxed mb-6">Our visualization tools enable you to create interactive dashboards and reports that make complex data easy to understand.</p>
            <div className="mt-auto flex justify-center w-full">
              <button className="bg-black text-[#00df9a] py-2 px-4 rounded-md my-6 mx-auto font-bold hover:bg-blue-600">Learn More</button>
            </div>
          </div>

          <div className="w-full bg-white border border-gray-100 shadow-lg flex flex-col p-4 sm:p-6 rounded-cl hover:scale-105 transition-transform duration-300">
            <img className="w-full lg:w-full mx-auto  mt-[3-rem] bg-transparent" src={engagement} alt="/" />
            <h1 className="text-2xl sm:text-3xl font-bold text-center py-4 sm:py-6">User Engagement</h1>
            

            <p className="text-base sm:text-lg text-center mx-4 leading-relaxed">Measure and improve how users engage with your content and services through data-driven strategies.</p>
            <p className="text-base sm:text-lg text-center mx-4 leading-relaxed mb-6">Our engagement analytics help you understand which features resonate with your audience, allowing you to build stronger customer relationships.</p>
            <div className="mt-auto flex justify-center w-full">
              <button className="bg-[#00df9a] text-[#000300] py-2 px-4 rounded-md my-6 mx-auto font-bold hover:bg-blue-600">Learn More</button>
            </div>
          </div>
        </div>
      
    </div>
  );
}
export default Cards;