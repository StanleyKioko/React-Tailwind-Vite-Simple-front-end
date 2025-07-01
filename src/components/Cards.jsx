import React from "react";
import interactions from '../assets/interactions.jpg';
import users from '../assets/users.png';
import engagement from '../assets/engagement.png';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 text-black bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto my-4 bg-white" src={interactions} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">User Interactions</h2>
            <p className="text-center text-2xl mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-center text-2xl mx-8">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="mt-auto flex justify-center w-full">
              <button className="bg-[#00df9a] text-[#000300] px-6 py-3 rounded-md my-6 mx-auto md:0 font-bold hover:bg-blue-200">Learn More</button>
            </div>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-8 rounded-lg hover:bg-gray-100 md:0 scale-105 duration-300">
            <img className="w-20 mx-auto  mt-[3-rem] bg-transparent" src={users} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">User Interactions</h2>
            <p className="text-center text-2xl mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-center text-2xl mx-8">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="mt-auto flex justify-center w-full">
              <button className="bg-black text-[#00df9a] py-2 px-4 rounded-md my-6 mx-auto font-bold hover:bg-blue-600">Learn More</button>
            </div>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img className="w-20 mx-auto  mt-[3-rem] bg-white" src={engagement} alt="/" />
            <h2 className="text-2xl font-bold text-center py-8">User Engagement</h2>
            <p className="text-center text-2xl mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p className="text-center text-2xl mx-8">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className="mt-auto flex justify-center w-full">
              <button className="bg-[#00df9a] text-[#000300] py-2 px-4 rounded-md my-6 mx-auto font-bold hover:bg-blue-600">Learn More</button>
            </div>
          </div>
        </div>
      
    </div>
  );
}
export default Cards;