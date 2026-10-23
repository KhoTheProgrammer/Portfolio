import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

/** Thin gradient bar along the top edge that fills as the page is scrolled. */
const ScrollProgress = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(ref.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
    });
  });

  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400"
    />
  );
};

export default ScrollProgress;
