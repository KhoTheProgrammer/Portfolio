import { useRef } from "react";
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
import SectionHeading from "./SectionHeading";
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from "../lib/gsap";

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

const SkillsSection = ({ id }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Infinite marquee whose speed and direction follow scroll velocity.
      const loop = gsap.to(trackRef.current, { xPercent: -50, duration: 30, ease: "none", repeat: -1 });
      // Start deep into the repeats so scrolling up can play it in reverse.
      loop.totalTime(loop.duration() * 1000);
      if (prefersReducedMotion()) {
        loop.pause();
        return;
      }
      ScrollTrigger.create({
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (self) => {
          const boost = gsap.utils.clamp(1, 6, 1 + Math.abs(self.getVelocity()) / 400);
          gsap.timeline()
            .to(loop, { timeScale: boost * self.direction, duration: 0.2, overwrite: true })
            .to(loop, { timeScale: self.direction, duration: 1.2, ease: "power2.out" });
        },
      });

      // Cards cascade in, then each card's chips pop.
      gsap.set(".skill-card", { y: 70, rotateX: -25, autoAlpha: 0, transformOrigin: "50% 100%" });
      gsap.set(".skill-chip", { scale: 0.6, autoAlpha: 0 });
      ScrollTrigger.batch(".skill-card", {
        start: "top 88%",
        once: true,
        onEnter: (cards) =>
          gsap
            .timeline()
            .to(cards, { y: 0, rotateX: 0, autoAlpha: 1, stagger: 0.1, duration: 1.2 })
            .to(
              cards.flatMap((c) => Array.from(c.querySelectorAll(".skill-chip"))),
              { scale: 1, autoAlpha: 1, stagger: 0.02, duration: 0.6, ease: "back.out(2.5)" },
              "<0.3"
            ),
      });
    },
    { scope: ref }
  );

  return (
    <section ref={ref} id={id} className="relative overflow-hidden bg-white py-24 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Technical skills"
          subtitle="Technologies I use to design, build, and ship products across the stack."
          align="center"
        />

        <div className="grid grid-cols-1 gap-5 [perspective:1000px] sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <article
              key={cat.title}
              className="skill-card group h-full rounded-2xl border border-slate-200 bg-slate-50/40 p-6 transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-500/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-violet-500/40"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg text-white shadow-lg shadow-violet-500/25 transition-transform duration-500 group-hover:rotate-[360deg]">
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
                    className="skill-chip rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors group-hover:border-violet-200 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Infinite tech marquee */}
      <div className="relative mt-16 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div ref={trackRef} className="flex shrink-0 items-center gap-4 pr-4">
          {[...marquee, ...marquee].map((t, i) => (
            <span
              key={i}
              className="whitespace-nowrap font-display text-2xl font-semibold text-slate-300 transition-colors hover:text-violet-500 dark:text-white/15 dark:hover:text-violet-400"
            >
              {t} <span className="text-violet-400">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
