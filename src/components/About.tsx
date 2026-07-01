import profilePic from "../assets/kho2.jpg";

interface SectionProps {
  id: string;
}
const About = ({ id }: SectionProps) => {
  return (
    <section
      id={id}
      className="py-16 overflow-hidden px-8 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8 relative pb-6 text-left">
          <h2 className="text-3xl font-bold text-[#173b6c] dark:text-white inline-block relative after:content-[''] after:block after:w-12 after:h-[3px] after:bg-[#149ddd] after:absolute after:-bottom-3 after:left-0 mb-4 transition-colors duration-300">
            About
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8">
          {/* Image */}
          <div className="lg:w-1/3">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-auto rounded"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-2/3 pt-4 lg:pt-0">
            <h3 className="text-2xl font-bold text-[#173b6c] dark:text-white mb-4 transition-colors duration-300">
              Software Engineer
            </h3>
            <p className="italic mb-6 text-gray-700 dark:text-gray-300 transition-colors duration-300">
              Dedicated software engineer with expertise in Javascript, NestJs,
              and React.
            </p>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">
              Hi, I’m Kondwani — a third-year Computer Science student with a
              passion for software development and a knack for building
              efficient backend systems using technologies like Javascript and
              NestJS. I’ve worked on web chat apps, explored OpenGL graphics,
              and continuously sharpen my problem-solving skills through
              academic projects and personal experimentation. My core skills
              include:<br></br>{" "}
              <span className="font-bold text-black dark:text-white transition-colors duration-300">
                Backend
              </span>
              : Javascript, ExpressJs and NestJS, <br></br>
              <span className="font-bold text-black dark:text-white transition-colors duration-300">
                Frontend
              </span>
              : ReactJS and NextJs
              <br></br>When I’m not coding, you’ll find me playing FIFA,
              learning new tech, or tweaking my dev setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
