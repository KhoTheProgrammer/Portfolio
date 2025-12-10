import { useState } from "react";
import { ThemeProvider } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import SkillsSection from "./components/SkillSection";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import BackToTop from "./components/BackToTop";
import ProjectSection from "./components/Project";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider>
      <div className="lg:flex font-poppins bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* Theme Toggle Button */}
        <ThemeToggle />

        {/* Sidebar - visible on large screens or when toggled on small screens */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <Menu toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />

        {/* Main content */}
        <div className="w-full lg:ml-[300px]">
          <Home id="home" />
          <About id="about" />
          <Resume id="resume" />
          <SkillsSection id="skills" />
          <ProjectSection id="project" />
          <Contact id="contact" />
          <BackToTop />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
