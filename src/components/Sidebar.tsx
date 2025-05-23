import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";
import {
  BiHome,
  BiUser,
  BiFileBlank,
  BiEnvelope,
  BiBookContent,
} from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import khoo from "../assets/kho2.jpg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <header className="fixed top-0 left-0 bottom-0 w-[300px] transition-all duration-500 ease-in-out  px-[15px] bg-[#040b14] overflow-y-auto font-opensans">
      <div className="flex flex-col items-center">
        <div className="profile text-center">
          <img
            src={khoo}
            alt="Profile"
            className="block mx-auto my-[15px] w-[120px] h-[120px] border-[8px] border-[#2c2f3f] rounded-full"
          />
          <h1 className="text-white text-2xl font-semibold mt-4 font-poppins">
            <a href="index.html">Kondwani Padyera</a>
          </h1>
          <div className=" mt-3 flex justify-center gap-3 text-white text-xl ">
            <a
              href="https://github.com/KhoTheProgrammer"
              className="bg-[#212431] hover:bg-[#149ddd] hover:text-white p-2 rounded-full"
            >
              <FaGithub />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=100084319704616"
              className=" bg-[#212431] hover:bg-[#149ddd] hover:text-white p-2 rounded-full"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="bg-[#212431] hover:bg-[#149ddd] hover:text-white p-2 rounded-full"
            >
              <FaInstagram />
            </a>
            <a
              href="wa.link/w5tdwl"
              className="bg-[#212431] hover:bg-[#149ddd] hover:text-white p-2 rounded-full"
            >
              <FaWhatsapp/>
            </a>
            <a
              href="https://www.linkedin.com/in/kondwani-padyera-9a511a26b"
              className="bg-[#212431] hover:bg-[#149ddd] hover:text-white p-2 rounded-full"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav className="mt-10 w-full">
          <ul className="flex flex-col space-y-4 text-white text-sm">
            <li>
              <Link to="/home"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded"
              >
                <BiHome className=" text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/> <span className="text-[#a8a9b4] hover:text-white">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded"
              >
                <BiUser  className=" text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/> <span className="text-[#a8a9b4] hover:text-white">About</span>
              </Link>
            </li>
            <li>
              <Link to="/resume"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded"
              >
                <BiFileBlank className=" text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/> <span className="text-[#a8a9b4] hover:text-white">Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/skill"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded"
              >
                <BsCodeSlash className=" text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/> <span className="text-[#a8a9b4] hover:text-white">Skills</span>
              </Link>
            </li>
            <li>
              <Link to="/project"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded"
              >
                <BiBookContent className=" text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/> <span className="text-[#a8a9b4] hover:text-white">Projects</span>
              </Link>
            </li>
            <li>
              <Link to="/contact"
                className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded"
              >
                <BiEnvelope className=" text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/> <span className="text-[#a8a9b4] hover:text-white">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
