import { useRef } from "react";
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
        .from(split.chars, { yPercent: 120, stagger: 0.02, duration: 1.1 }, 0.2)
        .fromTo(".hero-name", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" }, 0.35)
        .from(".hero-fade", { y: 24, autoAlpha: 0, stagger: 0.08, duration: 1 }, 0.7)
        .from(".hero-social", { y: 12, autoAlpha: 0, stagger: 0.06, duration: 0.8 }, 1)
        .fromTo(".hero-portrait", { clipPath: "inset(100% 0% 0% 0% round 2rem)" }, { clipPath: "inset(0% 0% 0% 0% round 2rem)", duration: 1.6, ease: "expo.inOut" }, 0.3)
        .from(".hero-portrait img", { scale: 1.3, duration: 2, ease: "expo.out" }, 0.6)
        .from(".hero-chip", { y: 16, autoAlpha: 0, duration: 1 }, 1.3)
        .to(stat, {
          value: 10,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            const el = ref.current?.querySelector(".hero-count");
            if (el) el.textContent = `${Math.round(stat.value)}+`;
          },
        }, 1.4);

      // --- Scroll-out parallax -------------------------------------------
      gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      })
        .to(".hero-copy", { yPercent: -18, autoAlpha: 0.2, ease: "none" }, 0)
        .to(".hero-portrait-wrap", { yPercent: 12, ease: "none" }, 0);

      // --- Mouse parallax (desktop only) ---------------------------------
      if (!hasFinePointer()) return;
      const layers = [
        { el: ".hero-portrait-wrap", depth: 14 },
        { el: ".hero-chip", depth: 26 },
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
        tiltX(nx * 6);
        tiltY(-ny * 6);
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
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 pb-16 dark:bg-ink"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Text */}
        <div className="hero-copy text-center lg:text-left">
          <h1 className="font-display text-5xl font-bold leading-[1.02] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
            <span className="hero-plain">Hi, I'm</span>{" "}
            <span className="hero-name inline-block pb-1 text-accent-600 dark:text-accent-400">Kondwani</span>
            <br />
            <span className="hero-plain">Padyera</span>
          </h1>

          <p className="hero-fade mt-6 text-xl font-semibold text-slate-900 sm:text-2xl dark:text-white">
            Full-stack software engineer
          </p>

          <p className="hero-fade mx-auto mt-3 max-w-xl text-lg leading-relaxed text-slate-600 lg:mx-0 dark:text-slate-400">
            I build web apps, mobile apps and the APIs behind them with React,
            Next.js, NestJS and PostgreSQL, from Lilongwe, Malawi.
          </p>

          <div className="hero-fade mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
              data-magnetic
              className="group inline-flex items-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-accent-700"
            >
              View my work
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={resume}
              download
              data-magnetic
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3.5 font-semibold text-slate-800 transition-colors hover:border-slate-900 dark:border-white/20 dark:text-slate-200 dark:hover:border-white"
            >
              <FiDownload />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 lg:justify-start">
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-magnetic
                  className="hero-social grid h-11 w-11 place-items-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-slate-900 hover:text-slate-900 dark:border-white/10 dark:text-slate-300 dark:hover:border-white dark:hover:text-white"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
            <p className="hero-fade inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for new roles
            </p>
          </div>
        </div>

        {/* Portrait */}
        <div className="hero-portrait-wrap relative mx-auto w-full max-w-sm [perspective:1000px]">
          <div className="hero-portrait relative overflow-hidden rounded-[2rem] bg-slate-100 [transform-style:preserve-3d] dark:bg-ink-2">
            <img
              src={portrait}
              alt="Kondwani Padyera"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          {/* Floating stat chip */}
          <div className="hero-chip absolute -left-4 top-8 rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:-left-8 dark:border-white/10 dark:bg-ink-2">
            <p className="hero-count font-display text-2xl font-bold text-slate-900 dark:text-white">10+</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">Projects shipped</p>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-fade pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-slate-500 sm:flex dark:text-slate-400">
        Scroll
        <span className="relative h-10 w-px overflow-hidden bg-slate-300/50 dark:bg-white/10">
          <span className="animate-scroll-cue absolute inset-x-0 top-0 h-1/2 bg-accent-500" />
        </span>
      </div>
    </section>
  );
};

export default Home;
