import { useRef } from "react";
import { gsap, SplitText, useGSAP, prefersReducedMotion } from "../lib/gsap";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

const SectionHeading = ({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // The title rises word-by-word out of a mask, then the subtitle fades up.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const split = SplitText.create(".sh-title", { type: "words", mask: "words" });
      gsap
        .timeline({ scrollTrigger: { trigger: ref.current, start: "top 85%", once: true } })
        .from(split.words, { yPercent: 110, stagger: 0.06, duration: 1.1 })
        .from(".sh-sub", { autoAlpha: 0, y: 20, duration: 0.9 }, "<0.35");
    },
    { scope: ref }
  );

  return (
    <div
      ref={ref}
      className={`mb-12 ${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <h2 className="sh-title font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="sh-sub mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
