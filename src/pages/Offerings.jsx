import React from 'react';

const CompanyPage = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#00df9a] mb-8">Our Company</h1>
          <p className="text-xl mb-6">
            Stanley Analytics is a leading data analytics company providing insights to businesses across all industries.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              We are dedicated to transforming complex data into actionable insights that drive business growth and innovation. 
              Our mission is to empower businesses with the knowledge they need to make informed decisions.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the global leader in data analytics, recognized for our innovative solutions, 
              reliable insights, and commitment to helping businesses thrive in the digital age.
            </p>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto mb-4"></div>
                <h3 className="text-xl font-bold">Team Member {item}</h3>
                <p className="text-gray-600">Position Title</p>
                <p className="mt-4 text-gray-700">
                  Brief description about this team member and their expertise.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;