import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "../lib/gsap";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Eyebrow line draws in, then the title rises word-by-word out of a mask.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const split = SplitText.create(".sh-title", { type: "words", mask: "words" });
      gsap
        .timeline({ scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } })
        .from(".sh-line", { scaleX: 0, duration: 0.8, ease: "power3.inOut" })
        .from(".sh-eyebrow", { autoAlpha: 0, x: -12, duration: 0.6 }, "<0.2")
        .from(split.words, { yPercent: 110, rotate: 4, stagger: 0.07, duration: 1.1 }, "<0.1")
        .from(".sh-sub", { autoAlpha: 0, y: 20, duration: 0.9 }, "<0.35");
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <span
        className={`inline-flex items-center gap-3 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="sh-line h-px w-8 origin-left bg-gradient-to-r from-violet-500 to-fuchsia-500" />
        <span className="sh-eyebrow text-sm font-semibold uppercase tracking-[0.2em] text-violet-500 dark:text-violet-400">
          {eyebrow}
        </span>
      </span>
      <h2 className="sh-title mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="sh-sub mt-4 text-slate-500 dark:text-slate-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
