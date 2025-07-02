import React from 'react';
import dashboard from '../assets/dashboard.jpg';
import interactions from '../assets/interactions.jpg';

const Offerings = () => {
  return (
  <div className="w-full py-16 px-4 bg-gray-50">
    <div className="max-w-[1240px] mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#00df9a] mb-8">Our Offerings</h1>
        <p className="text-xl mb-10 max-w-[800px] mx-auto text-gray-700">
          We provide a comprehensive suite of data analytics solutions designed to help your business grow and thrive in the digital age.
        </p>
      </div>
      
      {/* Featured Offering */}
      <div className="w-full py-12 lg:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-0">
          <div className="w-full flex flex-col lg:flex-row items-center justify-between">
            <div className="w-full bg-white border border-gray-100 shadow-lg flex flex-col p-6 lg:p-10 rounded-lg hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center lg:text-left py-4 text-center">Premium Data Analytics Suite</h2>
              
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="w-full lg:w-1/2">
                  <p className="text-gray-700 mb-6 text-base sm:text-lg">
                    Our flagship offering provides enterprise-grade analytics tools with AI-powered insights,
                    real-time dashboards, and predictive modeling capabilities.
                  </p>
                  
                  <ul className="list-disc pl-5 mb-8 text-gray-700 text-base sm:text-lg">
                    <li className="mb-2">Advanced data visualization</li>
                    <li className="mb-2">Machine learning algorithms</li>
                    <li className="mb-2">Custom reporting solutions</li>
                    <li className="mb-2">24/7 expert support</li>
                  </ul>
                  
                  <button className="bg-gradient-to-r from-[#00df9a] to-[#00b383] text-white font-semibold py-3 px-8 rounded-md hover:from-[#00b383] hover:to-[#009c6d] hover:shadow-md focus:ring-2 focus:ring-[#00df9a] focus:outline-none transition-all duration-300 w-full lg:w-auto">
                    Learn More
                  </button>
                </div>
                
                <div className="w-full lg:w-1/2 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" 
                    src={dashboard} 
                    alt="Analytics Dashboard" 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Categories */}
      <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
          <div className="bg-[#00df9a] text-white p-4 mt-[-2rem] size-[60px] rounded-md mb-4 mx-auto flex items-center justify-center">
            <svg className="w-8 h-8 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3">Data Analytics</h3>
          <p className="text-gray-700 mb-4 text-center">
            Turn your raw data into actionable insights with our comprehensive analytics solutions.
          </p>
          <ul className="text-gray-700 mb-6 flex flex-col items-start">
            <li className="mb-2">• Custom dashboard creation</li>
            <li className="mb-2">• Performance metrics tracking</li>
            <li className="mb-2">• Trend analysis</li>
          </ul>
          <a href="#" className="text-[#00df9a] font-bold flex items-center justify-center">
            Explore Analytics 
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        
        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
          <div className="bg-[#00df9a] text-white p-4 rounded-full mb-4 size-[60px] mt-[-2rem] mx-auto flex items-center justify-center">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 flex justify-center">Business Intelligence</h3>
          <p className="text-gray-700 mb-4">
            Make informed decisions with our powerful business intelligence tools and dashboards.
          </p>
          <ul className="text-gray-700 mb-6">
            <li className="mb-2">• Real-time data monitoring</li>
            <li className="mb-2">• Competitor analysis</li>
            <li className="mb-2">• Market forecasting</li>
          </ul>
          <a href="#" className="text-[#00df9a] font-bold flex items-center justify-center">
            Explore BI Solutions
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
        
        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all">
          <div className="bg-[#00df9a] text-white p-4 inline-block rounded-full size-[60px] mt-[-2rem] mb-4 mx-auto flex items-center justify-center">
            <svg className="w-8 h-8 justify-center" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 flex justify-center">Consulting Services</h3>
          <p className="text-gray-700 mb-4">
            Get expert guidance from our team of experienced data scientists and analysts.
          </p>
          <ul className="text-gray-700 mb-6">
            <li className="mb-2">• Strategy development</li>
            <li className="mb-2">• Implementation support</li>
            <li className="mb-2">• Training and workshops</li>
          </ul>
          <a href="#" className="text-[#00df9a] font-bold flex justify-center">
            Explore Consulting
            <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition-all hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2 text-center">Basic</h3>
            <p className="text-gray-600 mb-6 text-center">Perfect for small businesses</p>
            <p className="text-4xl font-bold mb-6 text-center">$99<span className="text-lg text-gray-600 font-normal">/month</span></p>
            <ul className="mb-8">
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Basic data analytics
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                5 custom reports
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Weekly insights
              </li>
              <li className="flex items-center text-gray-400">
                <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                </svg>
                AI recommendations
              </li>
            </ul>
            <button className="w-full bg-[#00df9a] text-black py-2 rounded-md font-bold hover:bg-opacity-80 transition-all">
              Get Started
            </button>
          </div>
          
          {/* Pro Plan - Highlighted */}
          <div className="bg-[#FFFFC5] p-8 rounded-lg shadow-xl border-2 border-[#00df9a] hover:shadow-2xl transition-all transform md:-translate-y-4 hover:scale-105 transition-transform duration-300">
            <div className="bg-[#00df9a] text-black text-sm font-bold py-1 px-4 rounded-full inline-block mb-2 justify-center">MOST POPULAR</div>
            <h3 className="text-2xl font-bold mb-2 text-center">Professional</h3>
            <p className="text-gray-600 mb-6 text-center">For growing businesses</p>
            <p className="text-4xl font-bold mb-6 text-center">$199<span className="text-lg text-gray-600 font-normal">/month</span></p>
            <ul className="mb-8">
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Advanced analytics
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                20 custom reports
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Daily insights
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                AI recommendations
              </li>
            </ul>
            <button className="w-full bg-[#000300] text-[#00df9a] py-2 rounded-md font-bold hover:bg-opacity-80 transition-all">
              Get Started
            </button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition-all hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold mb-2 text-center">Enterprise</h3>
            <p className="text-gray-600 mb-6 text-center">For large organizations</p>
            <p className="text-4xl font-bold mb-6 text-center">$499<span className="text-lg text-gray-600 font-normal">/month</span></p>
            <ul className="mb-8">
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Enterprise analytics suite
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Unlimited reports
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Real-time insights
              </li>
              <li className="flex items-center mb-3">
                <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                Dedicated support team
              </li>
            </ul>
            <button className="w-full bg-[#00df9a] text-black py-2 rounded-md font-bold hover:bg-opacity-80 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className="mt-20 bg-gray-900 p-10 rounded-xl text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to transform your business?</h2>
        <p className="text-gray-300 mb-8 max-w-[600px] mx-auto">
          Join thousands of businesses that use our analytics solutions to drive growth and make data-driven decisions.
        </p>
        <button className="bg-[#00df9a] text-black py-3 px-8 rounded-md font-bold hover:bg-opacity-80 transition-all">
          Schedule a Demo
        </button>
      </div>
    </div>
  </div>
  );
}

export default Offerings;