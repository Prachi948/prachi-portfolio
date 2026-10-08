import Lenis from "lenis";

let lenis = null;

const prefersReduced = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Start a single shared Lenis instance. Returns a cleanup function. */
export function initSmoothScroll() {
  if (prefersReduced()) return () => {};

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 0.95,
    touchMultiplier: 1.4,
  });

  let frame = 0;
  const raf = (time) => {
    lenis?.raf(time);
    frame = requestAnimationFrame(raf);
  };
  frame = requestAnimationFrame(raf);

  return () => {
    cancelAnimationFrame(frame);
    lenis?.destroy();
    lenis = null;
  };
}

export function scrollToId(id, offset = -64) {
  const el = id === "top" ? null : document.getElementById(id);

  if (lenis) {
    lenis.scrollTo(el ?? 0, { offset: el ? offset : 0, duration: 1.4 });
    return;
  }

  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

export function lockScroll(locked) {
  if (locked) lenis?.stop();
  else lenis?.start();
  document.documentElement.style.overflow = locked ? "hidden" : "";
}
