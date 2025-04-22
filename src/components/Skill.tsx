import React from "react";
import { IconType } from "react-icons";

type SkillCategory = {
  icon: IconType;
  name: string;
  items: string[];
};

type SkillProps = {
  icon: IconType;
  title: string;
  categories: SkillCategory[];
};

const Skill: React.FC<SkillProps> = ({ icon: Icon, title, categories }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div
        className="relative w-full h-[360px] transform-style-3d transition-transform duration-700 group focus:outline-none"
        tabIndex={0}
      >
        <div className="absolute w-full h-full rounded-xl shadow-lg [transform-style:preserve-3d] transition-transform duration-700 group-hover:[transform:rotateY(180deg)] group-focus:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl flex flex-col items-center justify-center p-6 [backface-visibility:hidden]">
            <Icon className="text-5xl mb-4" />
            <h3 className="text-lg font-bold text-center">{title}</h3>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full bg-white text-gray-800 rounded-xl p-4 overflow-y-auto [transform:rotateY(180deg)] [backface-visibility:hidden]">
            {categories.map((category, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-blue-600 font-semibold flex items-center gap-2 mb-1">
                  <category.icon />
                  {category.name}
                </h4>
                <ul className="list-none pl-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="text-sm py-1">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
