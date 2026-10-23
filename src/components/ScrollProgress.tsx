import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

/** Thin accent bar along the top edge that fills as the page is scrolled. */
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
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0 bg-accent-500"
    />
  );
};

export default ScrollProgress;
