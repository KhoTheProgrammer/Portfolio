import { useRef } from "react";
import { FiServer, FiLayout, FiSmartphone, FiMapPin } from "react-icons/fi";
import profilePic from "../assets/kho2.jpg";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

interface SectionProps {
  id: string;
}

const focus = [
  { icon: FiServer, title: "Backend", detail: "Node.js, NestJS, Express, Django REST" },
  { icon: FiLayout, title: "Frontend", detail: "React, Next.js, TypeScript, Tailwind" },
  { icon: FiSmartphone, title: "Mobile", detail: "Expo, Kotlin & Jetpack Compose, Flutter" },
];

const About = ({ id }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      // Photo drifts inside its frame while the section scrolls past.
      gsap.fromTo(
        ".about-photo",
        { yPercent: -8, scale: 1.18 },
        {
          yPercent: 8,
          scale: 1.18,
          ease: "none",
          scrollTrigger: { trigger: ".about-frame", start: "top bottom", end: "bottom top", scrub: true },
        }
      );
      gsap.from(".about-card", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.1,
        duration: 1.1,
        scrollTrigger: { trigger: ".about-cards", start: "top 90%", once: true },
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id={id} className="relative bg-white py-24 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading title="About me" />

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Image */}
          <Reveal className="relative mx-auto w-full max-w-sm">
            <div className="about-frame rounded-3xl bg-slate-100 dark:bg-ink-2">
              <div className="overflow-hidden rounded-3xl">
                <img
                  src={profilePic}
                  alt="Kondwani Padyera"
                  loading="lazy"
                  className="about-photo aspect-square w-full object-cover"
                />
              </div>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <FiMapPin className="text-accent-600 dark:text-accent-400" /> Lilongwe, Malawi
            </p>
          </Reveal>

          {/* Text */}
          <Reveal delay={120}>
            <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
              Software Engineer &amp; CS Graduand
            </h3>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              Software Engineer with professional experience developing scalable
              web and mobile applications using JavaScript, TypeScript, React,
              Next.js, NestJS, Express, and PostgreSQL. I'm experienced in
              translating business requirements into production-ready software,
              deploying applications with Docker, and collaborating in agile
              development teams.
            </p>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-slate-600 dark:text-slate-400">
              I'm passionate about backend engineering, cloud technologies,
              AI-powered applications, and building software that solves
              real-world problems.
            </p>

            <dl className="about-cards mt-10 grid gap-x-8 gap-y-6 border-t border-slate-200 pt-6 sm:grid-cols-3 dark:border-white/10">
              {focus.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="about-card">
                  <dt className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                    <Icon className="text-accent-600 dark:text-accent-400" />
                    {title}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{detail}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
