import React from 'react';

const ResourcesPage = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#00df9a] mb-8">Resources</h1>
          <p className="text-xl mb-10">
            Explore our collection of resources designed to help you understand data analytics and make the most of our services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Cards */}
          {['Guides', 'Tutorials', 'Case Studies', 'Webinars', 'White Papers', 'API Documentation'].map((resource, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
              <div className="bg-[#00df9a] text-white p-4 inline-block rounded-lg mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-2">{resource}</h3>
              <p className="text-gray-700 mb-4">
                Access our {resource.toLowerCase()} to learn more about data analytics and how to leverage our platform effectively.
              </p>
              <button className="text-[#00df9a] font-bold flex items-center">
                Explore {resource}
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
              </button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Need personalized help?</h2>
          <p className="mb-6">Our team is ready to assist you with custom solutions tailored to your specific needs.</p>
          <button className="bg-[#00df9a] text-black py-3 px-8 rounded-md font-medium hover:bg-[#00c589]">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;