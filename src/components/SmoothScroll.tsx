import type { ReactNode } from "react";
import { ScrollSmoother, useGSAP, prefersReducedMotion } from "../lib/gsap";

/**
 * Wraps the scrolling content in GSAP ScrollSmoother for buttery, inertia-style
 * scrolling. Creating it refreshes every ScrollTrigger, so triggers made by
 * children beforehand are re-measured against the smoothed layout.
 */
const SmoothScroll = ({ children }: { children: ReactNode }) => {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.2,
      smoothTouch: 0.1,
    });
    document.documentElement.classList.add("has-smoother");
    return () => {
      ScrollSmoother.get()?.kill();
      document.documentElement.classList.remove("has-smoother");
    };
  });

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
};

export default SmoothScroll;
