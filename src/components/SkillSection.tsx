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
          "Java",
          "JavaScript",
          "TypeScript",
          "C++",
          "C",
          "Python",
          "Assembly Language",
          "Matlab",
        ],
      },
    ],
  },

  {
    icon: FaDatabase,
    title: "Frameworks",
    categories: [
      {
        icon: FaLaptopCode,
        name: "Frontend",
        items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "OpenGL"],
      },
      {
        icon: FaServer,
        name: "Backend",
        items: ["Nest Js", "Express Js", "Node Js"],
      },
    ],
  },
  {
    icon: FaToolbox,
    title: "  Tools and Database",
    categories: [
      {
        icon: FaDatabase,
        name: "Databases",
        items: ["Postgresql", "Supabase", "Firebase"],
      },
      {
        icon: FaTools,
        name: "Tools",
        items: ["Git", "Vs Code", "Netlify", "Vercel", "Render", "Docker"],
      },
    ],
  },
  {
    icon: FaCogs,
    title: "OS",
    categories: [
      {
        icon: FaWindows,
        name: "Operating Systems",
        items: ["Ubuntu", "Windows", "Kali Linux"],
      },
    ],
  },
];

const SkillsSection = ({id}:SectionProps) => (
  <section id={id} className="bg-[#f5f8fd] py-16">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-[#173b6c] mb-4 relative inline-block after:block after:w-12 after:h-1 after:bg-blue-500 after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2">
          Technical Skills
        </h2>
        <p>
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
