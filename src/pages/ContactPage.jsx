import React from 'react';

const ContactPage = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#00df9a] mb-8">Contact Us</h1>
          <p className="text-xl mb-10 max-w-[800px] mx-auto">
            Have questions or ready to get started? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00df9a]"
                  type="text"
                  id="name"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00df9a]"
                  type="email"
                  id="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#00df9a]"
                  type="text"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md h-32 focus:outline-none focus:border-[#00df9a]"
                  id="message"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-[#00df9a] text-black py-3 px-8 rounded-md font-medium hover:bg-[#00c589]"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="bg-[#000300] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-[#00df9a]">Contact Information</h2>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <div className="bg-[#00df9a] p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Address</h3>
                  <p className="text-gray-400">123 Analytics Street, Tech City, TC 10101</p>
                </div>
              </div>
              
              <div className="flex items-center mb-4">
                <div className="bg-[#00df9a] p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Email</h3>
                  <p className="text-gray-400">info@stanleyanalytics.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="bg-[#00df9a] p-2 rounded-full mr-4">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm.5-13h-1c-.828 0-1.5.671-1.5 1.5v1c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-1c0-.829-.672-1.5-1.5-1.5zm0 9c-1.381 0-2.5-1.119-2.5-2.5v-1c0-1.381 1.119-2.5 2.5-2.5h1c1.381 0 2.5 1.119 2.5 2.5v1c0 1.381-1.119 2.5-2.5 2.5h-1z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.191 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-white p-2 rounded-full text-black hover:bg-gray-200">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;