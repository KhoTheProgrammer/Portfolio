import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import SkillsSection from "./components/SkillSection";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Project from "./components/Project";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar stays always on the left */}
        <Sidebar />

        {/* Main content on the right */}
        <div className="w-full ml-[300px]">
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
      </div>
    </BrowserRouter>
  );
};

export default App;
