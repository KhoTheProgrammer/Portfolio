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
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <BrowserRouter>
      <div className="lg:flex">
        {/* Sidebar - visible on large screens or when toggled on small screens */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Menu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
        
        {/* Main content on the right */}
        <div className="w-full lg:ml-[300px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skill" element={<SkillsSection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
};

export default App;