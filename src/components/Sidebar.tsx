import React from "react";
import { FaGithub, FaFacebook, FaInstagram, FaSkype, FaLinkedin } from "react-icons/fa";
import { BiHome, BiUser, BiFileBlank, BiServer, BiEnvelope, BiBookContent } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import khoo from "../assets/kho.jpeg"

const Sidebar = () => {
  return (
    <header className="fixed top-0 left-0 bottom-0 w-[300px] transition-all duration-500 ease-in-out z-[9997] px-[15px] bg-[#040b14] overflow-y-auto font-opensans">
      <div className="flex flex-col items-center">
        <div className="profile mt-4 text-center">
          <img
            src={khoo}
            alt="Profile"
            className="block mx-auto my-[15px] w-[150px] h-[150px] border-[8px] border-[#2c2f3f] rounded-full"
          />
          <h1 className="text-white text-xl font-semibold mt-4">
            <a href="index.html">Kondwani Padyera</a>
          </h1>
          <div className=" mt-3 flex justify-center gap-3 text-white text-xl">
            <a href="https://github.com/KhoTheProgrammer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaSkype />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-kumar-techie/"
              className="hover:text-gray-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav className="mt-10 w-full">
          <ul className="flex flex-col space-y-4 text-white text-sm">
            <li>
              <a href="#hero" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BiHome /> <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BiUser /> <span>About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BiFileBlank /> <span>Resume</span>
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BsCodeSlash /> <span>Skills</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BiBookContent /> <span>Projects</span>
              </a>
            </li>
           
            <li>
              <a href="#services" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BiServer /> <span>Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded">
                <BiEnvelope /> <span>Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
