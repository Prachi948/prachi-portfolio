import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Maximize2,
} from "lucide-react";

import { lockScroll, scrollToId } from "../lib/scroll";
import { ease } from "../lib/motion";

const links = [
  ["About", "about"],
  ["Stack", "skills"],
  ["Work", "projects"],
  ["Journey", "experience"],
  ["Proof", "achievements"],
  ["Education", "education"],
];

const allIds = [
  ...links.map(([, id]) => id),
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  /* =========================================
     SCROLL STATE
  ========================================= */

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener(
        "scroll",
        onScroll
      );
  }, []);

  /* =========================================
     ACTIVE SECTION
  ========================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.25, 0.5],
      }
    );

    allIds.forEach((id) => {
      const element =
        document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    const hero =
      document.getElementById("top");

    const heroObserver =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive("");
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
        }
      );

    if (hero) {
      heroObserver.observe(hero);
    }

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  /* =========================================
     LOCK SCROLL
  ========================================= */

  useEffect(() => {
    lockScroll(open || profileOpen);

    return () => lockScroll(false);
  }, [open, profileOpen]);

  /* =========================================
     ESCAPE KEY
  ========================================= */

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setProfileOpen(false);
        setOpen(false);
      }
    };

    window.addEventListener(
      "keydown",
      onKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        onKeyDown
      );
  }, []);

  /* =========================================
     CLOSE MOBILE MENU
  ========================================= */

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1080) {
        setOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      onResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        onResize
      );
  }, []);

  /* =========================================
     NAVIGATION
  ========================================= */

  const go = (event, id) => {
    event.preventDefault();

    setOpen(false);

    setTimeout(
      () => scrollToId(id),
      open ? 80 : 0
    );
  };

  return (
    <>
      {/* =====================================
          NAVBAR
      ===================================== */}

      <header
        className={`nav ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <motion.div
          className="nav-bar"
          initial={{
            y: -90,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.1,
            ease,
          }}
        >
          {/* BRAND */}

          <a
            href="#top"
            className="brand"
            onClick={(event) =>
              go(event, "top")
            }
          >
            {/* CLICKABLE PROFILE */}

            <motion.button
              type="button"
              className="avatar-button"
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
                setProfileOpen(true);
              }}
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.94,
              }}
              aria-label="Open Prachi profile"
            >
              <span
                className="avatar"
                aria-hidden="true"
              />

              <span className="avatar-expand-icon">
                <Maximize2 size={11} />
              </span>
            </motion.button>

            <span className="brand-text">
              <strong>
                PRACHI THORAT
              </strong>

              <span>
                SOFTWARE ENGINEER
              </span>
            </span>
          </a>

          {/* DESKTOP NAV */}

          <nav
            className="nav-links"
            aria-label="Primary navigation"
          >
            {links.map(([label, id]) => {
              const isActive =
                active === id;

              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`nav-link ${
                    isActive
                      ? "active"
                      : ""
                  }`}
                  onClick={(event) =>
                    go(event, id)
                  }
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="nav-pill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}

                  <span className="nav-link-label">
                    {label}
                  </span>
                </a>
              );
            })}

            <a
              href="#contact"
              className={`nav-cta ${
                active === "contact"
                  ? "active"
                  : ""
              }`}
              onClick={(event) =>
                go(event, "contact")
              }
            >
              <span>
                LET&apos;S TALK
              </span>

              <ArrowUpRight
                size={15}
              />
            </a>
          </nav>

          {/* MOBILE */}

          <motion.button
            type="button"
            className="menu-btn"
            onClick={() =>
              setOpen((value) => !value)
            }
            aria-label={
              open
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={open}
            whileTap={{
              scale: 0.92,
            }}
          >
            {open ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </motion.button>
        </motion.div>
      </header>

      {/* =====================================
          PROFILE EXPANDED OVERLAY
      ===================================== */}

      <AnimatePresence>
        {profileOpen && (
          <motion.div
            className="profile-modal"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() =>
              setProfileOpen(false)
            }
          >
            <motion.div
              className="profile-modal-card"
              initial={{
                scale: 0.65,
                opacity: 0,
                y: 30,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              exit={{
                scale: 0.65,
                opacity: 0,
                y: 30,
              }}
              transition={{
                duration: 0.55,
                ease,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              {/* CLOSE */}

              <button
                type="button"
                className="profile-modal-close"
                onClick={() =>
                  setProfileOpen(false)
                }
                aria-label="Close profile"
              >
                <X size={20} />
              </button>

              {/* LARGE PROFILE */}

              <div className="profile-large">
                <div className="profile-large-ring ring-one" />
                <div className="profile-large-ring ring-two" />
                <div className="profile-large-ring ring-three" />

                {/* Future image can go here */}
                <div className="profile-large-center">
                  <span />
                </div>
              </div>

              {/* PROFILE INFORMATION */}

              <div className="profile-modal-info">
                <span className="profile-modal-kicker">
                  JAVA BACKEND · AI · AUTOMATION
                </span>

                <h2>
                  PRACHI
                  <span>THORAT.</span>
                </h2>

                <p>
                  Software Engineer building
                  scalable backend systems,
                  AI-powered applications and
                  real-time industrial software.
                </p>

                <div className="profile-modal-tags">
                  <span>JAVA</span>
                  <span>SPRING BOOT</span>
                  <span>AI / LLM</span>
                  <span>SCADA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================
          MOBILE MENU
      ===================================== */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            data-lenis-prevent
            initial={{
              opacity: 0,
              clipPath:
                "circle(0% at 92% 7%)",
            }}
            animate={{
              opacity: 1,
              clipPath:
                "circle(150% at 92% 7%)",
            }}
            exit={{
              opacity: 0,
              clipPath:
                "circle(0% at 92% 7%)",
            }}
            transition={{
              duration: 0.65,
              ease,
            }}
          >
            <div className="mobile-menu-inner">
              <div className="mobile-menu-label">
                NAVIGATION
              </div>

              {[
                ...links,
                ["Contact", "contact"],
              ].map(
                ([label, id], index) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    className={`mobile-link ${
                      active === id
                        ? "active"
                        : ""
                    }`}
                    onClick={(event) =>
                      go(event, id)
                    }
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay:
                        0.12 +
                        index * 0.06,
                      ease,
                    }}
                  >
                    <span>{label}</span>
                    <small>
                      0{index + 1}
                    </small>
                  </motion.a>
                )
              )}

              <div className="mobile-menu-footer">
                <span>
                  JAVA BACKEND
                </span>

                <span>
                  AI / INDUSTRIAL AUTOMATION
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}