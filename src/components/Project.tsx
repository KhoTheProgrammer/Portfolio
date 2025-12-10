import { FiGithub, FiExternalLink } from "react-icons/fi";
import projects from "../constants/Projects";

interface SectionProps {
  id: string;
}

const ProjectSection = ({ id }: SectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900" id={id}>
      <div className="max-w-6xl mx-auto">
        <div className="md:max-w-[70%] mb-4  text-left">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-5 mb-5">
            My Projects
            <span className="absolute bottom-0 left-0 md:left-0 w-12 h-1 bg-blue-500"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            A curated selection of the projects I've built to solve real-world
            problems, enhance user experiences, and demonstrate my skills across
            full-stack development, desktop applications, and creative
            solutions.
          </p>
        </div>

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
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiGithub className="mr-2" /> GitHub
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FiExternalLink className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
