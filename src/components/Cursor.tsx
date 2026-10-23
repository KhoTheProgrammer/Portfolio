import { useRef } from "react";
import { gsap, useGSAP, prefersReducedMotion, hasFinePointer } from "../lib/gsap";

const INTERACTIVE = "a, button, [data-cursor]";

/**
 * Desktop-only pointer effects:
 *  - a dot + trailing ring that swells over interactive elements
 *  - a magnetic pull on anything marked `data-magnetic`
 */
const Cursor = () => {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (prefersReducedMotion() || !hasFinePointer()) return;

    gsap.set([dot.current, ring.current], { autoAlpha: 0 });
    const dotX = gsap.quickTo(dot.current, "x", { duration: 0.15, ease: "power3.out" });
    const dotY = gsap.quickTo(dot.current, "y", { duration: 0.15, ease: "power3.out" });
    const ringX = gsap.quickTo(ring.current, "x", { duration: 0.6, ease: "power3.out" });
    const ringY = gsap.quickTo(ring.current, "y", { duration: 0.6, ease: "power3.out" });

    let magnet: HTMLElement | null = null;

    const release = () => {
      if (!magnet) return;
      gsap.to(magnet, { x: 0, y: 0, duration: 0.9, ease: "elastic.out(1, 0.35)" });
      magnet = null;
    };

    const onMove = (e: MouseEvent) => {
      gsap.to([dot.current, ring.current], { autoAlpha: 1, duration: 0.3, overwrite: "auto" });
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);

      const target = e.target as HTMLElement;
      const next = target.closest<HTMLElement>("[data-magnetic]");
      if (next !== magnet) release();
      if (next) {
        magnet = next;
        const r = next.getBoundingClientRect();
        gsap.to(next, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.35,
          y: (e.clientY - (r.top + r.height / 2)) * 0.35,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    };

    const onOver = (e: MouseEvent) => {
      const hovering = (e.target as HTMLElement).closest(INTERACTIVE);
      gsap.to(ring.current, {
        scale: hovering ? 1.8 : 1,
        backgroundColor: hovering ? "rgba(139, 92, 246, 0.12)" : "rgba(139, 92, 246, 0)",
        duration: 0.4,
      });
      gsap.to(dot.current, { scale: hovering ? 0 : 1, duration: 0.3 });
    };

    const onLeave = () => gsap.to([dot.current, ring.current], { autoAlpha: 0, duration: 0.3 });
    const onDown = () => gsap.to(ring.current, { scale: 0.7, duration: 0.2 });
    const onUp = () => gsap.to(ring.current, { scale: 1, duration: 0.4 });

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  });

  return (
    <>
      <div ref={ring} aria-hidden className="cursor-ring invisible" />
      <div ref={dot} aria-hidden className="cursor-dot invisible" />
    </>
  );
};

export default Cursor;
