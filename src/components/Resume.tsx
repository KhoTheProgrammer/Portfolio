import { FiDownload } from "react-icons/fi";
import resume from "../assets/files/Resume.pdf";

interface SectionProps {
  id: string;
}

const Resume = ({ id }: SectionProps) => {
  return (
    <section
      id={id}
      className="py-16 overflow-hidden bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="md:max-w-[70%] mb-4 md:mb-0 text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-5 mb-5 transition-colors duration-300">
              Professional Resume
              <span className="absolute bottom-0 left-0 md:left-0 w-12 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Explore my education and professional journey in the world of
              software engineering and development.
            </p>
          </div>
          <div className="w-full md:w-auto text-center">
            <a
              href={resume}
              download
              className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FiDownload className="mr-2" />
              Download Resume
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1">
            {/* Summary */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-5 transition-colors duration-300">
              Summary
            </h3>
            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                Kondwani Padyera
              </h4>
              <p className="italic text-gray-600 dark:text-gray-300 my-2 transition-colors duration-300">
                Highly motivated and results-driven Full Stack Developer with
                hands-on experience in designing, developing, and deploying
                dynamic web applications. Strong background in modern web
                technologies, including React, Tailwind CSS, and NextJS,
                complemented by a solid foundation in programming languages
                such as Java, JavaScript, and C++. Enthusiastic about
                leveraging skills in collaborative, agile environments to
                develop innovative solutions that drive business objectives.
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1 transition-colors duration-300">
                <li>Lilongwe, Malawi</li>
                <li>+265 980 636 311</li>
                <li>
                  <a
                    href="mailto:kondwanipadyera@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    kondwanipadyera@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://khoopadyera.me"
                    target="_blank"
                    rel="noopener"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    khoopadyera.me
                  </a>
                </li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-5 transition-colors duration-300">
              Education
            </h3>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold uppercase text-gray-800 dark:text-white transition-colors duration-300">
                Bachelor of Science in Computer Science
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2022 - 2026
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                University of Malawi, Zomba, Malawi
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Pursuing a Bachelor of Science in Computer Science at the
                University of Malawi, Zomba. Named to the Dean's List for
                Academic Excellence, achieving a GPA of 3.8 in the first year
                and 3.9 in the second year. This program has provided me with
                a solid foundation in computer science principles, programming
                languages, and software development methodologies, along with
                hands-on experience across various frameworks that has
                sharpened my problem-solving skills and technical expertise.
              </p>
            </div>

            {/* Work */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-5 transition-colors duration-300">
              Work Experience
            </h3>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold uppercase text-gray-800 dark:text-white transition-colors duration-300">
                FULL STACK DEVELOPER INTERN
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2025
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Infi Tech
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Working as a Full Stack Developer Intern at{" "}
                <a
                  href="https://infi-tech.net"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Infi-Tech
                </a>
                , responsible for designing and implementing fullstack
                applications, more especially SaaS applications.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold uppercase text-gray-800 dark:text-white transition-colors duration-300">
                DEVELOPER
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Konektus &mdash; School Project
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Developed a platform aimed at connecting local farmers with
                potential buyers.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold uppercase text-gray-800 dark:text-white transition-colors duration-300">
                DEVELOPER
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                DHIS2 Reminder Application &mdash; School Project
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Created an application for sending health reminders to users,
                enhancing healthcare accessibility.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold uppercase text-gray-800 dark:text-white transition-colors duration-300">
                DEVELOPER
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Personal Portfolio
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Designed and implemented a personal portfolio website to
                showcase projects and skills.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-5 transition-colors duration-300">
              Certifications and Awards
            </h3>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                COMSOC Voting System Developer
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2025
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                UNIMA Computing Society
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Designed and developed a secure online voting platform for the
                Computing Society, streamlining student elections with
                authentication and real-time results.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                Introduction to DHIS2
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                DHIS2
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Completed a comprehensive overview of the DHIS2 platform,
                focusing on data collection, health information systems, and
                dashboard visualization.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                Dean's List and Vice Chancellor's Awards
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2023–2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                University of Malawi
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Recognized for outstanding academic achievement, maintaining a
                GPA above 3.8 for two consecutive years.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                Introduction to Java
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2023
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Sololearn
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Gained foundational knowledge of Java programming including OOP
                concepts, control structures, and data handling through
                interactive modules.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-700 -left-[9px] top-0 transition-colors duration-300"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white transition-colors duration-300">
                Seeds for the Future
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full font-semibold my-2 transition-colors duration-300">
                2023
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Huawei
              </p>
              <p className="text-gray-700 dark:text-gray-300 mt-2 transition-colors duration-300">
                Participated in Huawei's prestigious global ICT program, gaining
                exposure to emerging technologies such as cloud computing, AI,
                and 5G networks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
