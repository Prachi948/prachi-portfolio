import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { ease } from "../lib/motion";

const finePointer = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches;

/* -------------------------------------------------------
   Reveal — fade/slide in once when scrolled into view
------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  className,
  style,
  as = "div",
}) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.15, margin: "0px 0px -6% 0px" }}
      transition={{ duration: 0.85, delay, ease }}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------
   Words — masked word-by-word headline reveal
------------------------------------------------------- */
export function Words({ text, delay = 0, className = "", animateOnMount }) {
  const ref = useRef(null);
  // observe the wrapper (not the clipped words) so the trigger actually fires
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const show = animateOnMount || inView;
  const words = text.split(" ");

  return (
    <span ref={ref} className={`words ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span key={i}>
          <span className="word-mask" aria-hidden="true">
            <motion.span
              className="word"
              initial={{ y: "115%" }}
              animate={{ y: show ? "0%" : "115%" }}
              transition={{
                duration: 0.9,
                delay: show ? delay + i * 0.07 : 0,
                ease,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </span>
  );
}

/* -------------------------------------------------------
   CountUp — "8+", "99.9%", "<500ms" etc.
------------------------------------------------------- */
export function CountUp({ value, duration = 1.6 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const match = String(value).match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);

  useEffect(() => {
    if (!inView || !match || !ref.current) return;
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;

    const controls = animate(0, target, {
      duration,
      ease,
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span>{value}</span>;
  return (
    <span ref={ref}>
      {match[1]}0{match[3]}
    </span>
  );
}

/* -------------------------------------------------------
   Card — spotlight follows cursor + gentle 3D tilt
------------------------------------------------------- */
export function Card({
  children,
  className = "",
  accent,
  tilt = 5,
  delay = 0,
  as = "div",
  style,
  ...rest
}) {
  const ref = useRef(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 180, damping: 18, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 180, damping: 18, mass: 0.4 });
  const Tag = motion[as];

  const onMove = (event) => {
    if (!finePointer() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (event.clientX - r.left) / r.width;
    const py = (event.clientY - r.top) / r.height;
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
    if (tilt) {
      ry.set((px - 0.5) * tilt * 2);
      rx.set(-(py - 0.5) * tilt * 2);
    }
  };

  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Tag
      ref={ref}
      className={`card ${className}`}
      style={{
        ...style,
        "--accent": accent,
        rotateX: srx,
        rotateY: sry,
        transformPerspective: 1100,
      }}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -5% 0px" }}
      transition={{ duration: 0.85, delay, ease }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/* -------------------------------------------------------
   Magnetic — button gently follows the cursor
------------------------------------------------------- */
export function Magnetic({ children, strength = 0.28 }) {
  const ref = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 16 });

  const onMove = (event) => {
    if (!finePointer() || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((event.clientX - (r.left + r.width / 2)) * strength);
    y.set((event.clientY - (r.top + r.height / 2)) * strength);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      ref={ref}
      style={{ x, y, display: "inline-flex" }}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </motion.span>
  );
}

/* -------------------------------------------------------
   SectionHead — shared meta row + headline + side copy
------------------------------------------------------- */
export function SectionHead({ no, label, meta, kicker, lines, children }) {
  return (
    <>
      <Reveal className="section-meta" y={-10}>
        <span>
          <b>{no}</b> / {label}
        </span>
        <span className="hide-sm">{meta}</span>
      </Reveal>

      <div className="head-grid">
        <div>
          <Reveal className="kicker" y={14}>
            <i />
            {kicker}
          </Reveal>

          <h2 className="display">
            {lines.map(([text, muted], i) => (
              <span
                key={text}
                className={`display-line ${muted ? "muted" : ""}`}
              >
                <Words text={text} delay={i * 0.18} />
              </span>
            ))}
          </h2>
        </div>

        {children && (
          <Reveal className="head-side" delay={0.2} x={24} y={0}>
            {children}
          </Reveal>
        )}
      </div>
    </>
  );
}
