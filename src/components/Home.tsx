import { useRef } from "react";
import { ReactTyped } from "react-typed";
import { FiDownload, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import portrait from "../assets/kho.jpg";
import resume from "../assets/files/NewResume.pdf";
import { gsap, SplitText, useGSAP, prefersReducedMotion, hasFinePointer, scrollToId } from "../lib/gsap";

interface SectionProps {
  id: string;
}

const socials = [
  { icon: FiGithub, href: "https://github.com/KhoTheProgrammer", label: "GitHub" },
  { icon: FiLinkedin, href: "https://www.linkedin.com/in/kondwani-padyera-9a511a26b", label: "LinkedIn" },
  { icon: FaWhatsapp, href: "https://wa.me/265980636311", label: "WhatsApp" },
];

const Home = ({ id }: SectionProps) => {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // --- Intro timeline -------------------------------------------------
      const split = SplitText.create(".hero-plain", { type: "chars", mask: "chars" });
      const stat = { value: 0 };

      gsap
        .timeline({ delay: 0.15 })
        .from(".hero-blobs > *", { scale: 0.4, autoAlpha: 0, duration: 2, stagger: 0.15, ease: "power2.out" })
        .from(".hero-badge", { y: 20, autoAlpha: 0, duration: 0.8 }, 0.2)
        .from(split.chars, { yPercent: 120, rotate: 8, stagger: 0.025, duration: 1.2 }, 0.3)
        .fromTo(".hero-name", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" }, 0.45)
        .from(".hero-fade", { y: 30, autoAlpha: 0, stagger: 0.1, duration: 1 }, 0.8)
        .from(".hero-social", { scale: 0, autoAlpha: 0, stagger: 0.08, duration: 0.8, ease: "back.out(2.5)" }, 1.1)
        .fromTo(".hero-portrait", { clipPath: "inset(100% 0% 0% 0% round 2rem)" }, { clipPath: "inset(0% 0% 0% 0% round 2rem)", duration: 1.6, ease: "expo.inOut" }, 0.3)
        .from(".hero-portrait img", { scale: 1.4, duration: 2, ease: "expo.out" }, 0.6)
        .from(".hero-glow", { autoAlpha: 0, duration: 1.5 }, 1.2)
        .from(".hero-chip", { scale: 0.5, autoAlpha: 0, rotate: -12, duration: 1, ease: "back.out(1.8)" }, 1.4)
        .to(stat, {
          value: 10,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            const el = ref.current?.querySelector(".hero-count");
            if (el) el.textContent = `${Math.round(stat.value)}+`;
          },
        }, 1.5);

      // Name gradient shimmer, running forever after the intro.
      gsap.to(".hero-name", {
        backgroundPosition: "200% 50%",
        duration: 6,
        ease: "none",
        repeat: -1,
      });

      // --- Scroll-out parallax -------------------------------------------
      gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      })
        .to(".hero-copy", { yPercent: -18, autoAlpha: 0.2, ease: "none" }, 0)
        .to(".hero-portrait-wrap", { yPercent: 12, rotate: 3, ease: "none" }, 0)
        .to(".hero-blobs", { yPercent: 30, ease: "none" }, 0);

      // --- Mouse parallax (desktop only) ---------------------------------
      if (!hasFinePointer()) return;
      const layers = [
        { el: ".hero-blobs", depth: -40 },
        { el: ".hero-portrait-wrap", depth: 18 },
        { el: ".hero-chip", depth: 34 },
      ].map(({ el, depth }) => ({
        depth,
        x: gsap.quickTo(el, "x", { duration: 1.2, ease: "power3.out" }),
        y: gsap.quickTo(el, "y", { duration: 1.2, ease: "power3.out" }),
      }));
      const tiltX = gsap.quickTo(".hero-portrait", "rotationY", { duration: 1, ease: "power3.out" });
      const tiltY = gsap.quickTo(".hero-portrait", "rotationX", { duration: 1, ease: "power3.out" });

      const onMove = (e: MouseEvent) => {
        const nx = e.clientX / window.innerWidth - 0.5;
        const ny = e.clientY / window.innerHeight - 0.5;
        layers.forEach((l) => {
          l.x(nx * l.depth);
          l.y(ny * l.depth);
        });
        tiltX(nx * 10);
        tiltY(-ny * 10);
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: ref }
  );

  return (
    <section
      ref={ref}
      id={id}
      className="bg-grid relative flex min-h-screen items-center overflow-hidden bg-white pt-24 pb-16 dark:bg-ink"
    >
      {/* Animated gradient blobs */}
      <div className="hero-blobs pointer-events-none absolute inset-0 -z-10">
        <div className="animate-float absolute -top-24 -left-24 h-[32rem] w-[32rem] rounded-full bg-violet-500/25 blur-[120px] dark:bg-violet-600/25" />
        <div className="animate-float-slow absolute top-1/3 -right-24 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-[120px] dark:bg-cyan-500/20" />
        <div className="animate-float absolute -bottom-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/20 blur-[120px] dark:bg-fuchsia-600/20" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text */}
        <div className="hero-copy text-center lg:text-left">
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/5 px-4 py-1.5 text-sm font-medium text-violet-600 dark:text-violet-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            <span className="hero-plain">Hi, I'm</span>{" "}
            <span className="hero-name gradient-text gradient-text-animated inline-block pb-1">Kondwani</span>
            <br />
            <span className="hero-plain">Padyera</span>
          </h1>

          <p className="hero-fade mt-5 text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
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

          <p className="hero-fade mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 lg:mx-0">
            A Computer Science student & full-stack developer from Malawi,
            crafting fast, accessible web and mobile products with React,
            Django, and modern tooling.
          </p>

          <div className="hero-fade mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
              data-magnetic
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/30"
            >
              View my work
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={resume}
              download
              data-magnetic
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
                data-magnetic
                className="hero-social grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-violet-400 hover:text-violet-600 dark:border-white/10 dark:text-slate-300 dark:hover:border-violet-400 dark:hover:text-white"
              >
                <Icon className="text-lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Portrait */}
        <div className="hero-portrait-wrap relative mx-auto w-full max-w-sm [perspective:1000px]">
          <div className="hero-glow absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-2xl" />
          <div className="hero-portrait relative overflow-hidden rounded-[2rem] bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-cyan-400 p-[2px] shadow-2xl shadow-violet-500/20 [transform-style:preserve-3d]">
            <div className="overflow-hidden rounded-[calc(2rem-2px)]">
              <img
                src={portrait}
                alt="Kondwani Padyera"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          {/* Floating stat chips */}
          <div className="hero-chip glass absolute -left-4 top-8 rounded-2xl px-4 py-3 shadow-xl sm:-left-8">
            <p className="hero-count font-display text-2xl font-bold text-slate-900 dark:text-white">10+</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Projects shipped</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-400 sm:flex">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-slate-300/50 dark:bg-white/10">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-violet-500 to-fuchsia-500" />
        </span>
      </div>
    </section>
  );
};

export default Home;
