import { FiDownload } from "react-icons/fi";
import resume from "../assets/files/Resume.pdf";

interface SectionProps {
  id: string;
}

const Resume = ({id}: SectionProps) => {
  return (
    <section id={id} className="py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="md:max-w-[70%] mb-4 md:mb-0 text-left">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white relative pb-5 mb-5">
              Professional Resume
              <span className="absolute bottom-0 left-0 md:left-0 w-12 h-1 bg-blue-500"></span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
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
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-5">
              Summary
            </h3>
            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Kondwani Padyera
              </h4>
              <p className="italic text-gray-600 dark:text-gray-300 my-2">
                Innovative and deadline-driven Software Engineer with a strong
                foundation in Javascript, ReactJs, NextJs, e.t.c. Passionate
                about delivering high-quality solutions and adapt in utilizing
                modern development tools.
              </p>
              <ul className="list-disc pl-5 text-gray-700 dark:text-gray-400 space-y-1">
                <li>Area 36, Lilongwe, Malawi</li>
                <li>+265 887107311</li>
                <li>
                  <a href="mailto:kondwanipadyera@gmail.com">
                    kondwanipadyera@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Education */}
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-12 mb-5">
              Education
            </h3>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold uppercase text-gray-800 dark:text-white">
                Bachelor of Science in Computer Science
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-semibold my-2">
                2022 - Present
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300">
                University of Malawi, Zomba, Malawi
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Currently pursuing a Bachelor of Science in Computer Science at
                the University of Malawi, Zomba. This program has provided me
                with a solid foundation in computer science principles,
                programming languages, and software development methodologies. I
                have gained hands-on experience in various programming languages
                and frameworks, enhancing my problem-solving skills and
                technical expertise.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-8 mb-5">
              Certifications and Awards
            </h3>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                COMSOC Voting System Developer
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-semibold my-2">
                2025
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300">
                UNIMA Computing Society
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Designed and developed a secure online voting platform for the
                Computing Society, streamlining student elections with
                authentication and real-time results.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Introduction to DHIS2
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-semibold my-2">
                2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300">DHIS2</p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Completed a comprehensive overview of the DHIS2 platform,
                focusing on data collection, health information systems, and
                dashboard visualization.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Dean’s List and Vice Chancellor’s Awards
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-semibold my-2">
                2023–2024
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300">
                University of Malawi
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Recognized for outstanding academic achievement, maintaining a
                GPA above 3.8 for two consecutive years.
              </p>
            </div>

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Introduction to Java
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-semibold my-2">
                2023
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300">
                Sololearn
              </p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Gained foundational knowledge of Java programming including OOP
                concepts, control structures, and data handling through
                interactive modules.
              </p>
            </div>

            

            <div className="relative pl-6 pb-6 border-l-2 border-blue-700">
              <div className="absolute w-4 h-4 rounded-full bg-white border-2 border-blue-700 -left-[9px] top-0"></div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                Seeds for the Future
              </h4>
              <h5 className="inline-block text-sm bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full font-semibold my-2">
                2023
              </h5>
              <p className="italic text-gray-600 dark:text-gray-300">Huawei</p>
              <p className="text-gray-700 dark:text-gray-400 mt-2">
                Participated in Huawei’s prestigious global ICT program, gaining
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
