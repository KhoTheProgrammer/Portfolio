import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import SkillsSection from "./components/SkillSection";
import ProjectSection from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white font-sans text-slate-700 antialiased dark:bg-ink dark:text-slate-300">
        {/* Fixed UI lives outside the smooth-scroll wrapper */}
        <ScrollProgress />
        <Navbar />
        <BackToTop />
        <Cursor />

        <SmoothScroll>
          <main>
            <Home id="home" />
            <About id="about" />
            <Resume id="resume" />
            <SkillsSection id="skills" />
            <ProjectSection id="projects" />
            <Contact id="contact" />
          </main>
          <Footer />
        </SmoothScroll>
      </div>
    </ThemeProvider>
  );
};

export default App;
