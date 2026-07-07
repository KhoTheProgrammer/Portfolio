import { ReactTyped } from "react-typed";
import { FiDownload, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import portrait from "../assets/kho.jpg";
import resume from "../assets/files/NewResume.pdf";

interface SectionProps {
  id: string;
}

const socials = [
  { icon: FiGithub, href: "https://github.com/KhoTheProgrammer", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kondwani-padyera-9a511a26b", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/265980636311", label: "WhatsApp" },
];

const Home = ({ id }: SectionProps) => {
  return (
    <section
      id={id}
      className="bg-grid relative flex min-h-screen items-center overflow-hidden bg-white pt-24 pb-16 dark:bg-ink"
    >
      {/* Animated gradient blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="animate-float absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full bg-violet-500/25 blur-[120px] dark:bg-violet-600/25" />
        <div className="animate-float-slow absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/20" />
        <div className="animate-float absolute -bottom-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-[120px] dark:bg-fuchsia-600/20" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/5 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            Hi, I'm{" "}
            <span className="gradient-text">Kondwani</span>
            <br />
            Padyera
          </h1>

          <p className="mt-5 text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
            I'm a{" "}
            <ReactTyped
              className="font-semibold text-slate-900 dark:text-white"
              strings={[
                "Full-Stack Developer",
                "Software Engineer",
                "Problem Solver",
                "React & Django Dev",
              ]}
              typeSpeed={45}
              backSpeed={30}
              backDelay={1400}
              loop
            />
          </p>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 lg:mx-0">
            A Computer Science student & full-stack developer from Malawi,
            crafting fast, accessible web and mobile products with React,
            Django, and modern tooling.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30 transition-transform hover:-translate-y-0.5"
            >
              View my work
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/50 px-7 py-3.5 font-semibold text-slate-700 backdrop-blur transition-colors hover:border-violet-400 hover:text-violet-600 dark:border-white/15 dark:bg-white/5 dark:text-slate-200 dark:hover:border-violet-400 dark:hover:text-white"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition-all hover:-translate-y-1 hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-2xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px] shadow-2xl shadow-violet-500/20">
            <img
              src={portrait}
              alt="Kondwani Padyera"
              className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] object-cover"
            />
          </div>

          {/* Floating stat chips */}
          <div className="glass absolute -left-4 top-8 rounded-2xl px-4 py-3 shadow-xl sm:-left-8">
            <p className="font-display text-2xl font-bold text-slate-900 dark:text-white">10+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Projects shipped</p>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Home;
