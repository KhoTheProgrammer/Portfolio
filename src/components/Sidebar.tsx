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

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close sidebar on mobile after clicking
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };
  return (
    <header className={`fixed top-0 left-0 bottom-0 w-[300px] transition-all duration-500 ease-in-out px-[15px] bg-[#040b14] overflow-y-auto font-opensans z-[9999] ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 lg:block`}>
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
          <div className="mt-3 flex justify-center gap-3 text-white text-xl">
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
            {[
              { id: "home", icon: <BiHome />, text: "Home" },
              { id: "about", icon: <BiUser />, text: "About" },
              { id: "resume", icon: <BiFileBlank />, text: "Resume" },
              { id: "skill", icon: <BsCodeSlash />, text: "Skills" },
              { id: "project", icon: <BiBookContent />, text: "Projects" },
              { id: "contact", icon: <BiEnvelope />, text: "Contact" },
            ].map((item) => (
              <li key={item.id}>
                <button 
              onClick={() => handleClick(item.id)}
              className="flex items-center gap-2 px-4 py-2 hover:bg-[#1a1f28] rounded w-full text-left"
            >
              {<item.icon.type className="text-2xl hover:text-[#149ddd] text-[#a8a9b4]"/>}
              <span className="text-[#a8a9b4] hover:text-white">{item.text}</span>
            </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Sidebar;
