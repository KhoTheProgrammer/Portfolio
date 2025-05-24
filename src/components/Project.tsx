
import { FiGithub, FiExternalLink } from "react-icons/fi";
import konneckus from "../assets/Konnektus.jpg"
import portfolio from "../assets/portfolio.jpg"
import dhis2 from "../assets/dhis2.jpg"
import voting from "../assets/voting.jpg"
import solar from "../assets/solar.jpg"

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubLink: string;
  liveLink: string;
}

const Project = ({ id }: { id: string }) => {
  const projects: Project[] = [
    {
      title: "KonnectUs",
      description: "An online platform where farmers can sell their products to buyers directly without middlemen",
      tags: ["React", "FireBase", "Tailwind CSS"],
      image: konneckus,
      githubLink: "https://github.com/KhoTheProgrammer/KonnectUs.git",
      liveLink: "https://konektus.netlify.app/"
    },
    {
      title: "Old Portfolio Website",
      description: "An old responsive portfolio website to showcase my work and skills.",
      tags: ["HTML", "CSS", "Javascript"],
      image: portfolio,
      githubLink: "https://github.com/KhoTheProgrammer/KhoTheProgrammer.github.io.git",
      liveLink: "https://KhoTheProgrammer.netlify.app/"
    },
    {
      title: "DHIS2 Patient Reminder app",
      description: "A Health application that keeps track of patients enrolled in a health program and send reminders of their appointments via SMS",
      tags: ["React", "Tailwind CSS", "ExpressJs", "Postgres"],
      image: dhis2,
      githubLink: "https://github.com/KhoTheProgrammer/Dhis2-Patient-Reminder.git",
      liveLink: "https://github.com/KhoTheProgrammer/Dhis2-Patient-Reminder.git"
    },
    {
      title: "Unima COMSOC voting system",
      description: "An online voting sytem used by the University of Malawi's Computing Society to vote for various positions at the society",
      tags: ["NextJs", "Tailwind CSS", "Supabase"],
      image: voting,
      githubLink: "https://voting-system-lake.vercel.app/",
      liveLink: "https://voting-system-lake.vercel.app/"
    },
    {
      title: "Solar System Application",
      description: "A desktop application that shows different planets of the solar system orbiting around the sun. ",
      tags: ["C++", "OpenGL", "GLSL"],
      image: solar,
      githubLink: "https://github.com/KhoTheProgrammer/Solar-sytem-application.git",
      liveLink: "https://github.com/KhoTheProgrammer/Solar-sytem-application.git"
    },

    
  ];

  return (
    <section id={id} className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          My Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
