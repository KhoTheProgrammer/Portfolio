import Skill from "./Skill";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaCogs,
  FaWindows,
  FaToolbox,
  FaTools,
} from "react-icons/fa";

interface SectionProps {
  id: string;
}

const skillsData = [
  {
    icon: FaCode,
    title: "Programming Languages",
    categories: [
      {
        icon: FaCode,
        name: "Languages",
        items: [
          "JavaScript",
          "TypeScript",
          "Python",
          "Kotlin",
          "Java",
          "C++",
          "C",
          "GDScript",
          "Assembly Language",
          "Matlab",
          "Dart",
        ],
      },
    ],
  },

  {
    icon: FaDatabase,
    title: "Frameworks & Libraries",
    categories: [
      {
        icon: FaLaptopCode,
        name: "Frontend",
        items: [
          "React",
          "Next.js",
          "Jetpack Compose",
          "HTML5",
          "CSS3",
          "Tailwind CSS",
          "Material Design",
          "OpenGL",
          "Flutter",
        ],
      },
      {
        icon: FaServer,
        name: "Backend",
        items: [
          "Django",
          "Django REST Framework",
          "Express.js",
          "Node.js",
          "Nest.js",
          "Laravel",
        ],
      },
    ],
  },
  {
    icon: FaToolbox,
    title: "Databases & Tools",
    categories: [
      {
        icon: FaDatabase,
        name: "Databases",
        items: ["PostgreSQL", "PostGIS", "Supabase", "Firebase", "SQLite"],
      },
      {
        icon: FaTools,
        name: "Tools & Platforms",
        items: [
          "Git",
          "VS Code",
          "Android Studio",
          "Godot Engine",
          "Docker",
          "Netlify",
          "Vercel",
          "Render",
        ],
      },
    ],
  },
  {
    icon: FaCogs,
    title: "Specialized Technologies",
    categories: [
      {
        icon: FaWindows,
        name: "Operating Systems",
        items: ["Ubuntu", "Windows", "Kali Linux", "Android"],
      },
    ],
  },
];

const SkillsSection = ({ id }: SectionProps) => (
  <section
    id={id}
    className="bg-[#f5f8fd] dark:bg-gray-800 py-16 transition-colors duration-300"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c] dark:text-white mb-4 relative inline-block after:block after:w-12 after:h-1 after:bg-blue-500 after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 transition-colors duration-300">
          Technical Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Leveraging cutting-edge technologies to build innovative solutions.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        {skillsData.map((skill, index) => (
          <Skill key={index} {...skill} />
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
