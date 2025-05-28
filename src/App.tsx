import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import SkillsSection from "./components/SkillSection";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import BackToTop from "./components/BackToTop";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
   
      <div className="lg:flex font-poppins">
        {/* Sidebar - visible on large screens or when toggled on small screens */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Menu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        {/* Main content */}
      <div className="w-full lg:ml-[300px]">
        <Home id="home" />
        <About id="about" />
        <Resume id="resume" />
        <SkillsSection id="skills" />
        <Project id="project" />
        <Contact id="contact" />
      <BackToTop></BackToTop>
      </div>
        <Footer></Footer>
      </div>
  );
};

export default App;