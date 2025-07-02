import React from 'react';
import engagement from '../assets/engagement.png';
import traffic from '../assets/Traffic.webp';
import interactions from '../assets/interactions.jpg';
import users from '../assets/users.png';

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-8">
        <img className="w-[500px] mx-auto my-4" src={traffic} alt="Traffic" />
        <div className="flex flex-col justify-center">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Know More about us</h1>
          <p className="text-gray-600">We are results-driven with a strong foundation in data analytics, Data Engineering, and AI-driven
              product development. Proven ability to design and deploy scalable solutions using Python, and cloud
              technologies. Experienced in developing AI-powered tools for education and public impact, with a focus
              on accessible technologies (e.g., USSD, Groq API). Passionate about applying artificial intelligence to
              solve real-world challenges — especially in underserved communities.
          </p>
          <button className="bg-black text-[#00df9a] font-bold py-2 px-4 rounded-md mt-4 mx-auto md:mx-0 py-3">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
