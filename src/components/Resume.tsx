import { FiDownload, FiBriefcase, FiBookOpen, FiAward, FiStar, FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import resume from "../assets/files/NewResume.pdf";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id: string;
}

type Entry = {
  role: string;
  org: string;
  orgUrl?: string;
  period: string;
  detail?: string;
  bullets?: string[];
};

const experience: Entry[] = [
  {
    role: "Full-Stack Developer Intern",
    org: "Infi-Tech",
    orgUrl: "https://infi-tech.net",
    period: "2025 - Present",
    bullets: [
      "Developed and maintained SaaS web applications using React, Next.js, NestJS and PostgreSQL.",
      "Built REST APIs, authentication systems and business logic for multi-tenant applications.",
      "Containerized and deployed applications using Docker and Dokploy.",
      "Collaborated with senior developers to review requirements and deliver production-ready software.",
      "Debugged and resolved software defects while improving application performance.",
      "Participated in code reviews and agile development processes.",
    ],
  },
  {
    role: "Developer",
    org: "Lockie Visuals",
    orgUrl: "https://lockievisuals.vercel.app",
    period: "2025 - Present",
    bullets: [
      "Developed responsive web applications using Next.js and Express.",
      "Built reusable UI components and REST APIs.",
      "Implemented authentication and database integrations.",
      "Produced technical documentation and user guides.",
      "Assisted with mobile application development using React Native.",
    ],
  },
];

const education: Entry[] = [
  {
    role: "Bachelor's Degree in Computer Science",
    org: "University of Malawi, Zomba",
    period: "2022 – 2026",
    detail:
      "Graduating on 26 August 2026 with a Distinction. Strong foundation in CS principles, software development, and hands-on project work.",
  },
  {
    role: "Malawi School Certificate of Education (MSCE)",
    org: "Chipasula Secondary School",
    period: "2016 – 2021",
    detail: "Lilongwe, Malawi.",
  },
];

const certifications: Entry[] = [
  {
    role: "Next.js App Router Fundamentals",
    org: "Vercel",
    orgUrl: "https://nextjs.org/learn",
    period: "2025",
    detail:
      "Built a dashboard hands-on — data fetching and mutations, authentication with NextAuth, and core App Router concepts.",
  },
  {
    role: "Introduction to DHIS2",
    org: "DHIS2",
    orgUrl: "https://dhis2.org",
    period: "2025",
    detail:
      "Fundamentals of DHIS2 — organisation units, data elements, and the Tracker app — for a project integration.",
  },
  {
    role: "Introduction to Java",
    org: "Sololearn",
    orgUrl: "https://www.sololearn.com",
    period: "2023",
    detail:
      "Java fundamentals: variables, data types, flow control, functions, and object-oriented programming.",
  },
  {
    role: "Seeds for the Future",
    org: "Huawei",
    orgUrl: "https://www.huawei.com/en/tech4all/seeds-for-the-future",
    period: "2023",
    detail:
      "One-week program on emerging technologies including AI, cloud computing, VR/AR, and blockchain.",
  },
];

const awards: Entry[] = [
  {
    role: "Vice Chancellor's Scholarship",
    org: "University of Malawi",
    period: "2024",
    detail: "Awarded for academic excellence — GPA of 3.9.",
  },
  {
    role: "Dean's List",
    org: "University of Malawi",
    period: "2024",
    detail: "Recognized for outstanding academic performance — GPA of 3.9.",
  },
  {
    role: "Dean's List",
    org: "University of Malawi",
    period: "2023",
    detail: "Recognized for outstanding academic performance — GPA of 3.8.",
  },
];

const Timeline = ({ items }: { items: Entry[] }) => (
  <div className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-white/10">
    {items.map((item) => (
      <div key={item.role + item.period} className="relative">
        <span className="absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-white ring-2 ring-violet-500 dark:bg-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
        </span>
        <div className="flex flex-wrap items-center gap-2">
          <h4 className="font-semibold text-slate-900 dark:text-white">{item.role}</h4>
          <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs font-semibold text-violet-600 dark:text-violet-300">
            {item.period}
          </span>
        </div>
        <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
          {item.orgUrl ? (
            <a
              href={item.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-violet-600 transition-colors hover:text-fuchsia-500 dark:text-violet-300 dark:hover:text-fuchsia-400"
            >
              {item.org}
              <FiArrowUpRight className="text-xs" />
            </a>
          ) : (
            item.org
          )}
        </p>
        {item.detail && (
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.detail}</p>
        )}
        {item.bullets && (
          <ul className="mt-2 space-y-1.5">
            {item.bullets.map((b) => (
              <li key={b} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-500" />
                {b}
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

const Block = ({
  icon: Icon,
  title,
  items,
}: {
  icon: IconType;
  title: string;
  items: Entry[];
}) => (
  <div>
    <div className="mb-5 flex items-center gap-3">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
        <Icon />
      </span>
      <h3 className="font-display text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
    </div>
    <Timeline items={items} />
  </div>
);

const Resume = ({ id }: SectionProps) => {
  return (
    <section id={id} className="relative bg-slate-50 py-24 dark:bg-ink-2">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Resume"
              title="Experience & education"
              subtitle="My journey through software engineering, study, and continuous learning."
            />
          </Reveal>
          <Reveal delay={80}>
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 font-semibold text-white shadow-lg shadow-violet-500/25 transition-transform hover:-translate-y-0.5"
            >
              <FiDownload /> Download CV
            </a>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <Reveal className="space-y-12">
            <Block icon={FiBriefcase} title="Work Experience" items={experience} />
            <Block icon={FiBookOpen} title="Education" items={education} />
          </Reveal>
          <Reveal delay={120} className="space-y-12">
            <Block icon={FiAward} title="Certifications" items={certifications} />
            <Block icon={FiStar} title="Awards" items={awards} />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Resume;
