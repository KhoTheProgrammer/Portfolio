import { FiServer, FiLayout, FiSmartphone, FiMapPin } from "react-icons/fi";
import profilePic from "../assets/kho2.jpg";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

interface SectionProps {
  id: string;
}

const focus = [
  { icon: FiServer, title: "Backend", detail: "Node.js, NestJS, Express, Django REST" },
  { icon: FiLayout, title: "Frontend", detail: "React, Next.js, TypeScript, Tailwind" },
  { icon: FiSmartphone, title: "Mobile", detail: "Expo, Kotlin & Jetpack Compose, Flutter" },
];

const About = ({ id }: SectionProps) => {
  return (
    <section id={id} className="relative bg-white py-24 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow="About me" title="Turning ideas into software" />
        </Reveal>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="rounded-3xl bg-gradient-to-tr from-violet-500/20 to-cyan-400/20 p-2">
              <img
                src={profilePic}
                alt="Kondwani Padyera"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
            <div className="glass mt-4 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-300">
              <FiMapPin className="text-violet-500" /> Lilongwe, Malawi
            </div>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Software Engineer &amp; CS Graduand
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              Software Engineer with professional experience developing scalable
              web and mobile applications using JavaScript, TypeScript, React,
              Next.js, NestJS, Express, and PostgreSQL. I'm experienced in
              translating business requirements into production-ready software,
              deploying applications with Docker, and collaborating in agile
              development teams.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
              I'm passionate about backend engineering, cloud technologies,
              AI-powered applications, and building software that solves
              real-world problems.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {focus.map(({ icon: Icon, title, detail }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 transition-colors hover:border-violet-300 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-500/40"
                >
                  <Icon className="text-xl text-violet-500" />
                  <p className="mt-3 font-semibold text-slate-900 dark:text-white">{title}</p>
                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
