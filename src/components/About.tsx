import profilePic from "../assets/kho2.jpg";

interface SectionProps {
  id: string;
}
const About = ({id}: SectionProps) => {
  
  return (
    <section id={id} className="py-16 overflow-hidden px-8">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8 relative pb-6 text-left">
          <h2 className="text-3xl font-bold text-[#173b6c] inline-block relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-[#149ddd] after:absolute after:-bottom-3 after:left-0 mb-4 ">
            About
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Image */}
          <div className="lg:w-1/3" data-aos="fade-right">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 pt-4 lg:pt-0" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-[#173b6c] mb-4">
              Software Engineer
            </h3>
            <p className="italic mb-6">
              Dedicated software engineer with expertise in Javascript, NestJs,
              and React.
            </p>
            <p>
              👋 Hi, I’m Kondwani — a third-year Computer Science student with a
              passion for software development and a knack for building
              efficient backend systems using technologies like Javascript and
              NestJS. 🚀 I’ve worked on web chat apps, explored OpenGL graphics,
              and continuously sharpen my problem-solving skills through
              academic projects and personal experimentation. 🛠️ My core skills
              include:<br></br> Backend: Javascript, Espress and NestJS,{" "}
              <br></br>Frontend: ReactJS Tools: Git, GitHub, IntelliJ, CMake{" "}
              <br></br>🎮 When I’m not coding, you’ll find me playing FIFA,
              learning new tech, or tweaking my dev setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
