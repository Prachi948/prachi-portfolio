import { motion } from "framer-motion";
import {
  ArrowUp,
  Code2,
  Sparkles,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .footer-premium {
          position: relative;
          width: 100%;
          overflow: hidden;

          padding: 15px 0 10px;

          background:
            radial-gradient(
              ellipse at 50% 0%,
              rgba(169,112,255,0.035),
              transparent 38%
            ),
            #07070a;

          border-top:
            1px solid rgba(255,255,255,0.055);

          color: #f5f2ff;
        }

        .footer-premium *,
        .footer-premium *::before,
        .footer-premium *::after {
          box-sizing: border-box;
        }

        /* BACKGROUND */

        .footer-premium-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .footer-premium-grid {
          position: absolute;
          inset: 0;

          opacity: 0.12;

          background-image:
            linear-gradient(
              rgba(169,112,255,0.045) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(169,112,255,0.045) 1px,
              transparent 1px
            );

          background-size: 80px 80px;

          mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 85%
            );

          -webkit-mask-image:
            linear-gradient(
              to bottom,
              black,
              transparent 85%
            );
        }

        .footer-premium-glow {
          position: absolute;

          width: 300px;
          height: 90px;

          left: 50%;
          top: -75px;

          transform: translateX(-50%);

          border-radius: 50%;

          background:
            rgba(169,112,255,0.06);

          filter: blur(55px);
        }

        /* CONTAINER */

        .footer-premium-container {
          position: relative;
          z-index: 2;

          width:
            min(
              1380px,
              calc(100% - 70px)
            );

          margin: 0 auto;
        }

        /* MAIN */

        .footer-premium-main {
          display: grid;

          grid-template-columns:
            1fr
            auto
            1fr;

          align-items: center;

          gap: 25px;

          min-height: 38px;
        }

        /* BRAND */

        .footer-premium-brand {
          display: flex;

          align-items: center;

          gap: 9px;

          min-width: 0;
        }

        .footer-premium-mark {
          position: relative;

          width: 29px;
          height: 29px;

          flex: 0 0 auto;

          display: grid;
          place-items: center;

          color: #b98aff;

          background:
            rgba(169,112,255,0.045);

          border:
            1px solid
            rgba(169,112,255,0.19);

          border-radius: 8px;
        }

        .footer-premium-mark::after {
          content: "";

          position: absolute;

          inset: -3px;

          border:
            1px solid
            rgba(169,112,255,0.05);

          border-radius: 9px;

          transform: rotate(45deg);

          pointer-events: none;
        }

        .footer-premium-brand-text {
          display: flex;

          flex-direction: column;

          gap: 2px;
        }

        .footer-premium-brand-text strong {
          color: #eee9f2;

          font-size: 14px;

          line-height: 1;

          letter-spacing: -0.04em;
        }

        .footer-premium-brand-text span {
          color: #4d4855;

          font-family:
            "DM Mono",
            monospace;

          font-size: 5px;

          line-height: 1;

          letter-spacing: 0.11em;
        }

        /* CENTER */

        .footer-premium-stack {
          display: flex;

          align-items: center;
          justify-content: center;

          gap: 7px;

          color: #55505d;

          font-family:
            "DM Mono",
            monospace;

          font-size: 5px;

          letter-spacing: 0.08em;

          white-space: nowrap;
        }

        .footer-premium-stack-dot {
          width: 3px;
          height: 3px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #3b3642;
        }

        /* BACK TO TOP */

        .footer-premium-action {
          display: flex;
          justify-content: flex-end;
        }

        .footer-premium-top {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          padding:
            6px 9px;

          color: #625c69;

          background:
            rgba(255,255,255,0.015);

          border:
            1px solid
            rgba(255,255,255,0.055);

          border-radius: 6px;

          font-family:
            "DM Mono",
            monospace;

          font-size: 5px;

          letter-spacing: 0.10em;

          cursor: pointer;

          transition:
            color 0.25s ease,
            border-color 0.25s ease,
            background 0.25s ease,
            transform 0.25s ease;
        }

        .footer-premium-top:hover {
          color: #b990ff;

          background:
            rgba(169,112,255,0.035);

          border-color:
            rgba(169,112,255,0.18);

          transform:
            translateY(-1px);
        }

        /* BOTTOM */

        .footer-premium-bottom {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 20px;

          margin-top: 9px;

          padding-top: 8px;

          border-top:
            1px solid
            rgba(255,255,255,0.035);

          color: #39353f;

          font-family:
            "DM Mono",
            monospace;

          font-size: 5px;

          line-height: 1;

          letter-spacing: 0.10em;
        }

        .footer-premium-copy {
          display: flex;

          align-items: center;

          gap: 5px;
        }

        .footer-premium-copy-dot {
          width: 3px;
          height: 3px;

          flex: 0 0 auto;

          border-radius: 50%;

          background: #8ee3b0;

          box-shadow:
            0 0 7px
            rgba(142,227,176,0.7);
        }

        .footer-premium-built {
          display: flex;

          align-items: center;

          gap: 4px;
        }

        .footer-premium-built svg {
          color: #a970ff;
          opacity: 0.65;
        }

        /* TABLET */

        @media (max-width: 850px) {

          .footer-premium-container {
            width:
              calc(100% - 50px);
          }

          .footer-premium-main {
            grid-template-columns:
              1fr auto;
          }

          .footer-premium-stack {
            grid-column:
              1 / -1;

            grid-row: 2;

            justify-content: flex-start;
          }

          .footer-premium-action {
            grid-column: 2;
            grid-row: 1;
          }
        }

        /* MOBILE */

        @media (max-width: 600px) {

          .footer-premium {
            padding:
              13px 0 9px;
          }

          .footer-premium-container {
            width:
              calc(100% - 30px);
          }

          .footer-premium-main {
            min-height: auto;

            grid-template-columns:
              1fr auto;

            gap: 9px;
          }

          .footer-premium-mark {
            width: 27px;
            height: 27px;
          }

          .footer-premium-brand-text strong {
            font-size: 13px;
          }

          .footer-premium-stack {
            gap: 5px;
            font-size: 4.5px;
          }

          .footer-premium-top {
            padding:
              5px 7px;

            font-size: 4.5px;
          }

          .footer-premium-bottom {
            margin-top: 8px;
            padding-top: 7px;
            font-size: 4.5px;
          }
        }

        @media (max-width: 400px) {

          .footer-premium-stack {
            flex-wrap: wrap;
          }

          .footer-premium-bottom {
            flex-direction: column;

            align-items: flex-start;

            gap: 6px;
          }
        }
      `}</style>

      <footer className="footer-premium">

        <div
          className="footer-premium-bg"
          aria-hidden="true"
        >
          <div className="footer-premium-grid" />

          <motion.div
            className="footer-premium-glow"
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="footer-premium-container">

          <motion.div
            className="footer-premium-main"
            initial={{
              opacity: 0,
              y: 8,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.55,
              ease,
            }}
          >

            {/* BRAND */}

            <div className="footer-premium-brand">

              <motion.div
                className="footer-premium-mark"
                animate={{
                  y: [0, -1, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Code2
                  size={14}
                  strokeWidth={1.5}
                />
              </motion.div>

              <div className="footer-premium-brand-text">

                <strong>
                  PRACHI.
                </strong>

                <span>
                  SOFTWARE ENGINEER
                </span>

              </div>

            </div>

            {/* STACK */}

            <div className="footer-premium-stack">

              <span>
                JAVA BACKEND
              </span>

              <i className="footer-premium-stack-dot" />

              <span>
                AI / ML
              </span>

              <i className="footer-premium-stack-dot" />

              <span>
                INDUSTRIAL AUTOMATION
              </span>

            </div>

            {/* TOP */}

            <div className="footer-premium-action">

              <motion.button
                type="button"
                className="footer-premium-top"
                onClick={backToTop}
                whileTap={{
                  scale: 0.96,
                }}
              >
                BACK TO TOP

                <ArrowUp
                  size={10}
                  strokeWidth={1.5}
                />
              </motion.button>

            </div>

          </motion.div>

          <motion.div
            className="footer-premium-bottom"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: false,
              amount: 0.25,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
          >

            <div className="footer-premium-copy">

              <span className="footer-premium-copy-dot" />

              <span>
                © 2026 PRACHI THORAT · ALL RIGHTS RESERVED
              </span>

            </div>

            <div className="footer-premium-built">

              <Sparkles
                size={8}
                strokeWidth={1.4}
              />

              <span>
                BUILT WITH CODE & CURIOSITY
              </span>

            </div>

          </motion.div>

        </div>

      </footer>
    </>
  );
}