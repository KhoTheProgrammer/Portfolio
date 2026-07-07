import type { IconType } from "react-icons";
import {
  FaCode,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaMobileAlt,
  FaCloud,
  FaTools,
} from "react-icons/fa";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id: string;
}

type Category = {
  icon: IconType;
  title: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: FaCode,
    title: "Programming Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++", "SQL", "Dart"],
  },
  {
    icon: FaLaptopCode,
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    icon: FaServer,
    title: "Backend",
    items: ["NestJS", "Express", "Node.js", "REST API", "NextAuth", "Microservices"],
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Development",
    items: ["React Native", "Expo", "Flutter", "Jetpack Compose"],
  },
  {
    icon: FaDatabase,
    title: "Database",
    items: ["PostgreSQL", "Prisma", "Supabase", "Firebase", "Neon"],
  },
  {
    icon: FaCloud,
    title: "DevOps & Cloud",
    items: ["Docker", "Kubernetes", "Git", "GitHub", "Dokploy"],
  },
  {
    icon: FaTools,
    title: "Others",
    items: ["QGIS", "Power BI", "MATLAB", "VMware", "Packet Tracer", "MIPS Assembly"],
  },
];

const marquee = [
  "React", "TypeScript", "Next.js", "NestJS", "Node.js", "PostgreSQL",
  "Tailwind", "React Native", "Python", "Docker", "Prisma", "Kubernetes",
  "Flutter", "C++", "Supabase",
];

const SkillsSection = ({ id }: SectionProps) => (
  <section id={id} className="relative overflow-hidden bg-white py-24 dark:bg-ink">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          subtitle="Technologies I use to design, build, and ship products across the stack."
          align="center"
        />
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <Reveal as="article" key={cat.title} delay={i * 70}>
            <div className="group h-full rounded-2xl border border-slate-200 bg-slate-50/40 p-6 transition-all hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-500/40">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg text-white shadow-lg shadow-violet-500/25">
                  <cat.icon />
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors group-hover:border-violet-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>

    {/* Infinite tech marquee */}
    <div className="relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
        {[...marquee, ...marquee].map((t, i) => (
          <span
            key={i}
            className="whitespace-nowrap font-display text-2xl font-semibold text-slate-300 dark:text-white/15"
          >
            {t} <span className="text-violet-400">•</span>
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
