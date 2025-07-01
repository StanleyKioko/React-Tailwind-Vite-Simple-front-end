import React from "react";
import{
    FaDribbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaTwitterSquare,

} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="lg:grid-cols-3 max-w-[1240px] mx-auto py-8 px-4 grid gap-8 text-white bg-gray-black">
      <div className="max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-2 gap-8 text-white bg-gray-black">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">© 2025 Stanley.</h1>
        <p className="py-4 mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illo quidem ipsam distinctio, laborum adipisci ut quasi possimus ab in itaque quo voluptates aspernatur omnis sint officia minima saepe accusantium?</p>
        <div className="flex justify-between md:w-[75%] mt-4">
          <FaFacebookSquare className="size{30}" />
          <FaInstagramSquare className="size{30}" />
          <FaTwitterSquare className="size{30}" />
          <FaLinkedin className="size{30}" />
          <FaGithubSquare className="size{30}" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        
        <div>
            <h6 className="font-bold text-white">Support</h6>
            <ul>
                <li className="py-1 text-gray-400">Pricing</li>
                <li className="py-1 text-gray-400">Documentation</li>
                <li className="py-1 text-gray-400">Guides</li>
                <li className="py-1 text-gray-400">Api status</li>
                <li className="py-1 text-gray-400">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="font-medium text-white">Company</h6>
            <ul>
                <li className="py-1 text-gray-400">About</li>
                <li className="py-1 text-gray-400">Jobs</li>
                <li className="py-1 text-gray-400">Press</li>
                <li className="py-1 text-gray-400">Terms of Service</li>
                <li className="py-1 text-gray-400">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="font-medium text-white">Legal</h6>
            <ul>
                <li className="py-1 text-gray-400">Privacy Policy</li>
                <li className="py-1 text-gray-400">Claim</li>
                <li className="py-1 text-gray-400">Terms</li>

            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;