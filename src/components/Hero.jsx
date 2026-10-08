import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  ArrowDown,
  ArrowUpRight,
  BrainCircuit,
  Server,
  Sparkles,
} from "lucide-react";

import { scrollToId } from "../lib/scroll";
import { ease } from "../lib/motion";
import { Magnetic, Words } from "./ui";

const pills = [
  "Java",
  "Spring Boot",
  "Quarkus",
  "Python",
  "SCADA",
];

export default function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const sx = useSpring(mx, {
    stiffness: 50,
    damping: 20,
  });

  const sy = useSpring(my, {
    stiffness: 50,
    damping: 20,
  });

  /* ---------------- IMAGE PARALLAX ---------------- */

  const imgX = useTransform(
    sx,
    [-0.5, 0.5],
    [-8, 8]
  );

  const imgY = useTransform(
    sy,
    [-0.5, 0.5],
    [-5, 5]
  );

  const glowX = useTransform(
    sx,
    [-0.5, 0.5],
    [22, -22]
  );

  const glowY = useTransform(
    sy,
    [-0.5, 0.5],
    [14, -14]
  );

  /* ---------------- SCROLL ---------------- */

  const { scrollY } = useScroll();

  const copyY = useTransform(
    scrollY,
    [0, 600],
    [0, 45]
  );

  const visualY = useTransform(
    scrollY,
    [0, 600],
    [0, -25]
  );

  const fade = useTransform(
    scrollY,
    [0, 520],
    [1, 0.3]
  );

  /* ---------------- POINTER ---------------- */

  const onMove = (event) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    mx.set(
      (event.clientX - rect.left) /
        rect.width -
        0.5
    );

    my.set(
      (event.clientY - rect.top) /
        rect.height -
        0.5
    );
  };

  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  /* ---------------- NAVIGATION ---------------- */

  const go = (event, id) => {
    event.preventDefault();
    scrollToId(id);
  };

  return (
    <section
      id="top"
      className="hero"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="bg-grid"
        aria-hidden="true"
      />

      <div
        className="glow g-right"
        aria-hidden="true"
      />

      <motion.div
        aria-hidden="true"
        style={{
          x: glowX,
          y: glowY,
          position: "absolute",
          width: 430,
          height: 430,
          right: "13%",
          top: "27%",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(169,112,255,0.13) 0%, rgba(169,112,255,0.045) 40%, transparent 72%)",
          filter: "blur(24px)",
          pointerEvents: "none",
        }}
      />

      {/* =====================================================
          HERO SHELL
      ===================================================== */}

      <div className="container hero-inner">

        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <motion.div
          className="hero-copy"
          style={{
            y: copyY,
            opacity: fade,
          }}
        >

          {/* EYEBROW */}

          <motion.div
            className="eyebrow"
            initial={{
              opacity: 0,
              x: -18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease,
            }}
          >

            <i className="dot" />

            JAVA BACKEND ENGINEER

            <span className="line" />

            AI / INDUSTRIAL AUTOMATION

          </motion.div>

          {/* =================================================
              TITLE
          ================================================= */}

          <h1 className="hero-title">

            <span className="line-solid">
              <Words
                text="I BUILD"
                animateOnMount
                delay={0.35}
              />
            </span>

            <span className="line-out">
              <Words
                text="INTELLIGENT"
                animateOnMount
                delay={0.5}
              />
            </span>

            <span className="line-solid">

              <Words
                text="SYSTEMS"
                animateOnMount
                delay={0.65}
              />

              <motion.span
                className="accent"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 1.15,
                  ease,
                }}
              >
                .
              </motion.span>

            </span>

          </h1>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          <motion.p
            className="hero-lead"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.9,
              ease,
            }}
          >
            Scalable backend services,
            AI-powered applications and
            real-time industrial software —
            engineered for the real world.
          </motion.p>

          {/* =================================================
              ACTIONS
          ================================================= */}

          <motion.div
            className="hero-actions"
            initial={{
              opacity: 0,
              y: 18,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.05,
              ease,
            }}
          >

            <Magnetic>

              <a
                href="#projects"
                className="btn btn-primary"
                onClick={(event) =>
                  go(event, "projects")
                }
              >
                EXPLORE WORK

                <ArrowUpRight
                  size={16}
                  strokeWidth={2}
                />

              </a>

            </Magnetic>

            <Magnetic>

              <a
                href="#contact"
                className="btn btn-ghost"
                onClick={(event) =>
                  go(event, "contact")
                }
              >
                START A CONVERSATION
              </a>

            </Magnetic>

          </motion.div>

          {/* =================================================
              TECH PILLS
          ================================================= */}

          <motion.div
            className="hero-pills"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 1.25,
              ease,
            }}
          >

            {pills.map((pill, index) => (

              <motion.span
                key={pill}
                className="chip"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay:
                    1.3 +
                    index * 0.06,
                  ease,
                }}
              >
                {pill}
              </motion.span>

            ))}

          </motion.div>

        </motion.div>

        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <motion.div
          className="hero-visual"
          style={{
            y: visualY,
          }}
          initial={{
            opacity: 0,
            scale: 0.95,
            x: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.4,
            ease,
          }}
        >

          {/* IMAGE GLOW */}

          <motion.div
            className="hero-halo"
            style={{
              x: glowX,
              y: glowY,
            }}
          />

          <div className="hero-ring r1" />
          <div className="hero-ring r2" />

          {/* =================================================
              MAIN IMAGE
          ================================================= */}

          <motion.div
            style={{
              x: imgX,
              y: imgY,
              position: "relative",
              zIndex: 3,
              width: "100%",
              display: "grid",
              placeItems: "center",
            }}
          >

            <motion.img
              src="/PrachiDeveloper.png"
              alt="Illustration of Prachi Thorat coding at her desk"
              width="1536"
              height="1024"
              className="hero-portrait"
              draggable={false}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              style={{
                width: "min(100%, 610px)",
                maxWidth: "610px",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />

          </motion.div>

          {/* =================================================
              BACKEND CHIP
              Kept away from image top
          ================================================= */}

          <motion.div
            className="float-chip c1"
            style={{
              "--accent": "#a970ff",
              zIndex: 7,
            }}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: [0, -6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 1.4,
              },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.4,
              },
            }}
          >

            <span className="icon-box">
              <Server size={16} />
            </span>

            <div>

              <small>
                BACKEND
              </small>

              <strong>
                15+ REST APIs
              </strong>

            </div>

          </motion.div>

          {/* =================================================
              AI CHIP
          ================================================= */}

          <motion.div
            className="float-chip c2"
            style={{
              "--accent": "#ff9d5c",
              zIndex: 7,
            }}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: [0, 6, 0],
            }}
            transition={{
              opacity: {
                duration: 0.7,
                delay: 1.6,
              },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.6,
              },
            }}
          >

            <span className="icon-box">
              <BrainCircuit size={16} />
            </span>

            <div>

              <small>
                AI / LLM
              </small>

              <strong>
                Agents &amp; Prompts
              </strong>

            </div>

          </motion.div>

        </motion.div>

      </div>

      {/* =====================================================
          BOTTOM
      ===================================================== */}

      <motion.div
        className="hero-bottom"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 1.55,
        }}
      >

        <div className="container">

          <a
            href="#about"
            onClick={(event) =>
              go(event, "about")
            }
          >

            <span
              className="scroll-mouse"
              aria-hidden="true"
            />

            SCROLL TO EXPLORE

            <ArrowDown size={13} />

          </a>

          <span className="hide-xs">
            MUMBAI / INDIA
          </span>

          <span
            style={{
              display: "inline-flex",
              gap: 8,
              alignItems: "center",
            }}
          >

            <Sparkles size={13} />

            OPEN TO BUILD

          </span>

        </div>

      </motion.div>

    </section>
  );
}