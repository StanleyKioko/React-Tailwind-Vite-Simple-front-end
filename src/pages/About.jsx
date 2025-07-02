import React from 'react';

const AboutPage = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#00df9a] mb-8">About Us</h1>
          <p className="text-xl mb-10 max-w-[800px] mx-auto">
            We are a team of passionate data scientists and analysts committed to helping businesses unlock the full potential of their data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-white mb-4">
              Founded in 2020, Stanley Analytics began with a simple mission: make data analytics accessible to businesses of all sizes. 
              What started as a small team of three has grown into a company serving clients worldwide.
            </p>
            <p className="text-white mb-4">
              Our journey has been driven by a passion for data and a commitment to excellence. We've helped hundreds of businesses transform 
              their operations through data-driven insights and innovative solutions.
            </p>
            <p className="text-white">
              Today, we continue to push the boundaries of what's possible with data analytics, always staying at the forefront of technological advancements.
            </p>
          </div>
          <div className="bg-gray-200 h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-gray-500">[Company Image]</p>
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {title: "Innovation", desc: "We constantly seek new ways to solve complex data challenges."},
              {title: "Integrity", desc: "We uphold the highest ethical standards in handling sensitive data."},
              {title: "Impact", desc: "We measure our success by the positive outcomes we create for our clients."}
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-16 h-16 rounded-full bg-[#00df9a] mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-700">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-[#000300] text-white p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-[#00df9a]">Join Our Team</h2>
          <p className="mb-6">We're always looking for talented individuals who share our passion for data and analytics.</p>
          <button className="bg-[#00df9a] text-black py-3 px-8 rounded-md font-medium hover:bg-[#00c589]">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;