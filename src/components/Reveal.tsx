import { useRef, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "../lib/gsap";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** delay in ms before the reveal animation starts */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Fades, lifts and de-blurs its children the first time they scroll into view.
 * Skipped entirely when the user prefers reduced motion.
 */
const Reveal = ({ children, className = "", delay = 0, as = "div" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(ref.current, {
        autoAlpha: 0,
        y: 60,
        scale: 0.97,
        filter: "blur(8px)",
        duration: 1.1,
        delay: delay / 1000,
        clearProps: "filter",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
      });
    },
    { scope: ref }
  );

  const Tag = as as "div";
  return (
    <Tag ref={ref as React.RefObject<HTMLDivElement>} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
