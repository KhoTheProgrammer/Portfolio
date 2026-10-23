import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, useGSAP);

gsap.defaults({ ease: "expo.out", duration: 1 });

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const hasFinePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/** Scrolls to a section, going through ScrollSmoother when it's active. */
export const scrollToId = (id: string) => {
  const smoother = ScrollSmoother.get();
  if (smoother) smoother.scrollTo(`#${id}`, true, "top 72px");
  else document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export const scrollToTop = () => {
  const smoother = ScrollSmoother.get();
  if (smoother) smoother.scrollTo(0, true);
  else window.scrollTo({ top: 0, behavior: "smooth" });
};

export { gsap, ScrollTrigger, ScrollSmoother, SplitText, useGSAP };
