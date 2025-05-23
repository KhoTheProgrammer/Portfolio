import { ReactTyped } from "react-typed";
import home from "../assets/home.jpg"
import resume from "../assets/files/Resume.pdf"

const Home = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${home})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(5,13,24,0.3)] z-10"></div>

      {/* Content */}
      <div className="relative z-20 min-w-[300px] px-4">
        <h1 className="text-white text-[64px] leading-[56px] font-bold mb-2 md:text-[64px] md:leading-[56px] sm:text-[28px] sm:leading-[36px]">
          Kondwani Padyera
        </h1>
        <p className="text-white text-[26px] font-poppins mb-12 sm:text-[18px] sm:mb-8">
          I'm a {" "}
          <span className="border-b-[3px] border-[#149ddd] pb-1 tracking-wider">
            <ReactTyped
              strings={[
                "Web Developer",
                "Full-Stack Developer",
                "Software Engineer",
              ]} 
              typeSpeed={40}
              backSpeed={30}
              loop
            />
          </span>
        </p>
        <a
          href={resume}
          className="inline-flex items-center px-5 py-3 bg-[#149ddd] text-white font-semibold text-base rounded shadow-md hover:bg-[#2eafec] hover:-translate-y-1 transition transform duration-300"
          download
        >
          <i className="bi bi-file-earmark-arrow-down mr-2 text-lg"></i>
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Home;
