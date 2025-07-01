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
      <div className="max-w-[1240px] mx-auto py-8 px-4 grid lg:grid-cols-3 gap-8 text-white bg-gray-black">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">© 2025 Stanley.</h1>
        <p className="py-4 mx-auto md:0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere illo quidem ipsam distinctio, laborum adipisci ut quasi possimus ab in itaque quo voluptates aspernatur omnis sint officia minima saepe accusantium?</p>
        <div className="flex justify-between md:w-[100%] mt-16">
          <FaFacebookSquare className="size{30}" />
          <FaInstagramSquare className="size{30}" />
          <FaTwitterSquare className="size{30}" />
          <FaLinkedin className="size{30}" />
          <FaGithubSquare className="size{30}" />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        
        <div>
            <h6 className="font-medium text-white">Support</h6>
            <ul>
                <li className="py-2 text-white">Pricing</li>
                <li className="py-2 text-white">Documentation</li>
                <li className="py-2 text-white">Guides</li>
                <li className="py-2 text-white">Api status</li>
                <li className="py-2 text-white">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="font-medium text-white">Company</h6>
            <ul>
                <li className="py-2 text-white">About</li>
                <li className="py-2 text-white">Jobs</li>
                <li className="py-2 text-white">Press</li>
                <li className="py-2 text-white">Terms of Service</li>
                <li className="py-2 text-white">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="font-medium text-white">Legal</h6>
            <ul>
                <li className="py-2 text-white">Privacy Policy</li>
                <li className="py-2 text-white">Claim</li>
                <li className="py-2 text-white">Terms</li>

            </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;