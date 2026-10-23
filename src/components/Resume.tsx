import { FiDownload, FiBriefcase, FiBookOpen, FiAward, FiStar, FiArrowUpRight } from "react-icons/fi";
import type { IconType } from "react-icons";
import { useRef } from "react";
import resume from "../assets/files/NewResume.pdf";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

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
      "Graduated on 26 August 2026 with a Distinction. Strong foundation in CS principles, software development, and hands-on project work.",
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
      "Built a dashboard hands-on: data fetching and mutations, authentication with NextAuth, and core App Router concepts.",
  },
  {
    role: "Introduction to DHIS2",
    org: "DHIS2",
    orgUrl: "https://dhis2.org",
    period: "2025",
    detail:
      "DHIS2 fundamentals (organisation units, data elements and the Tracker app) for a project integration.",
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
    detail: "Awarded for academic excellence, with a GPA of 3.9.",
  },
  {
    role: "Dean's List",
    org: "University of Malawi",
    period: "2024",
    detail: "Recognized for outstanding academic performance, with a GPA of 3.9.",
  },
  {
    role: "Dean's List",
    org: "University of Malawi",
    period: "2023",
    detail: "Recognized for outstanding academic performance, with a GPA of 3.8.",
  },
];

const Timeline = ({ items }: { items: Entry[] }) => {
  const ref = useRef<HTMLDivElement>(null);

  // The spine draws itself with scroll; entries and dots pop in along it.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.fromTo(
        ".tl-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 60%", scrub: 0.6 },
        }
      );
      gsap.utils.toArray<HTMLElement>(".tl-item").forEach((item) => {
        gsap
          .timeline({ scrollTrigger: { trigger: item, start: "top 85%", once: true } })
          .from(item.querySelector(".tl-dot"), { scale: 0, duration: 0.6 })
          .from(item.querySelector(".tl-body"), { x: -30, autoAlpha: 0, duration: 1 }, "<0.1")
          .from(item.querySelectorAll("li"), { x: -16, autoAlpha: 0, stagger: 0.05, duration: 0.7 }, "<0.2");
      });
    },
    { scope: ref }
  );

  return (
    <div ref={ref} className="relative space-y-6 border-l border-slate-200 pl-6 dark:border-white/10">
      <span
        aria-hidden
        className="tl-line absolute -left-px top-0 h-full w-[2px] origin-top bg-accent-500"
      />
      {items.map((item) => (
        <div key={item.role + item.period} className="tl-item relative">
          <span className="tl-dot absolute -left-[31px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-white ring-2 ring-accent-500 dark:bg-ink">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
          </span>
          <div className="tl-body">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h4 className="font-semibold text-slate-900 dark:text-white">{item.role}</h4>
              <span className="text-sm tabular-nums text-slate-500 dark:text-slate-400">{item.period}</span>
            </div>
            <p className="mt-0.5 text-sm font-medium text-slate-500 dark:text-slate-400">
              {item.orgUrl ? (
                <a
                  href={item.orgUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent-600 underline-offset-4 transition-colors hover:text-accent-700 hover:underline dark:text-accent-400 dark:hover:text-accent-300"
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
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

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
      <Icon className="text-xl text-accent-600 dark:text-accent-400" />
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
          <SectionHeading
            title="Experience & education"
            subtitle="Work, study, certifications and awards, most recent first."
          />
          <Reveal delay={80}>
            <a
              href={resume}
              download
              data-magnetic
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-accent-700"
            >
              <FiDownload /> Download CV
            </a>
          </Reveal>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-12">
            <Block icon={FiBriefcase} title="Work Experience" items={experience} />
            <Block icon={FiBookOpen} title="Education" items={education} />
          </div>
          <div className="space-y-12">
            <Block icon={FiAward} title="Certifications" items={certifications} />
            <Block icon={FiStar} title="Awards" items={awards} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
