import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { gsap, useGSAP, scrollToId, prefersReducedMotion } from "../lib/gsap";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Entrance: bar drops in, then links cascade.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap
        .timeline({ delay: 0.1 })
        .from(headerRef.current, { yPercent: -100, duration: 1.1 })
        .from(".nav-item", { y: -16, autoAlpha: 0, stagger: 0.06, duration: 0.8 }, "<0.3");
    },
    { scope: headerRef }
  );

  // Slide the highlight pill under whichever link is active.
  useGSAP(
    () => {
      const el = linkRefs.current[active];
      const list = pillRef.current?.parentElement;
      if (!el || !list) return;
      // Measure via rects: the animated <li> transforms make offsetLeft unreliable.
      gsap.to(pillRef.current, {
        x: el.getBoundingClientRect().left - list.getBoundingClientRect().left,
        width: el.offsetWidth,
        autoAlpha: 1,
        duration: 0.5,
      });
    },
    { dependencies: [active] }
  );

  // Stagger the mobile links in each time the drawer opens.
  useGSAP(
    () => {
      if (!open || prefersReducedMotion()) return;
      gsap.from(".nav-mobile-item", { x: -24, autoAlpha: 0, stagger: 0.05, duration: 0.6, delay: 0.05 });
    },
    { scope: headerRef, dependencies: [open] }
  );

  const go = (id: string) => {
    scrollToId(id);
    setOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/85 backdrop-blur-md dark:border-white/10 dark:bg-ink/85"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <button
          onClick={() => go("home")}
          className="nav-item group flex items-center gap-2 font-display text-lg font-bold tracking-tight"
          aria-label="Back to top"
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 text-white">
            K
          </span>
          <span className="text-slate-900 dark:text-white">
            Kondwani<span className="text-accent-600 dark:text-accent-400">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="relative isolate hidden items-center gap-1 lg:flex">
          <span
            ref={pillRef}
            aria-hidden
            className="invisible absolute inset-y-0 left-0 -z-10 rounded-full bg-accent-500/10 ring-1 ring-accent-500/30 dark:bg-white/5"
          />
          {links.map((link) => (
            <li key={link.id} className="nav-item">
              <button
                ref={(el) => {
                  linkRefs.current[link.id] = el;
                }}
                onClick={() => go(link.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-slate-900 dark:text-white"
                    : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-item flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => go("contact")}
            data-magnetic
            className="hidden rounded-full bg-accent-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-700 sm:inline-block"
          >
            Let's talk
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10 lg:hidden"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden border-t border-slate-200/60 bg-white/95 backdrop-blur transition-[max-height] duration-300 dark:border-white/10 dark:bg-ink/95 lg:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {links.map((link) => (
            <li key={link.id} className="nav-mobile-item">
              <button
                onClick={() => go(link.id)}
                className={`w-full rounded-xl px-4 py-3 text-left text-base font-medium transition-colors ${
                  active === link.id
                    ? "bg-accent-500/10 text-accent-700 dark:text-accent-300"
                    : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
