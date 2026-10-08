import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  Crown,
  Sparkles,
  Trophy,
} from "lucide-react";

import { Card, SectionHead } from "./ui";

const achievements = [
  {
    no: "02",
    label: "WIN",
    title: "1ST PLACE",
    subtitle: "Megahack 5.0",
    description:
      "Recognized for building a practical technology solution during the All India Hackathon Megahack 5.0.",
    icon: Trophy,
    accent: "#a970ff",
  },
  {
    no: "03",
    label: "IMPACT",
    title: "40% EFFICIENCY",
    subtitle: "Plant Operations",
    description:
      "Improved operational efficiency through automation, monitoring and engineering-focused system improvements.",
    icon: Sparkles,
    accent: "#63c7ff",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="section alt">
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow g-right" aria-hidden="true" />

      <div className="container">
        <SectionHead
          no="05"
          label="Proof"
          meta="IMPACT / RECOGNITION"
          kicker="BUILT. PROVEN."
          lines={[["RESULTS"], ["THAT SPEAK.", true]]}
        >
          <p>
            Recognition matters when it comes from solving a real problem,
            shipping the work and creating measurable impact.
          </p>
          <p
            className="mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "var(--text-3)",
            }}
          >
            BUILD · MEASURE · IMPROVE
          </p>
        </SectionHead>

        <div className="ach-grid">
          {/* ---------------- PATENT ---------------- */}
          <Card className="patent-card" accent="#a970ff" tilt={2}>
            <div className="grid-fx" aria-hidden="true" />
            <div className="scan" aria-hidden="true" />

            <div>
              <div className="ach-top">
                <span>01 / SIGNATURE ACHIEVEMENT</span>
                <span className="verified">
                  <i />
                  VERIFIED
                </span>
              </div>

              <motion.span
                className="icon-box"
                animate={{
                  boxShadow: [
                    "0 0 26px rgba(169,112,255,0.12)",
                    "0 0 52px rgba(169,112,255,0.34)",
                    "0 0 26px rgba(169,112,255,0.12)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Award size={30} strokeWidth={1.5} />
              </motion.span>

              <div className="eyebrow-sm">PATENT · 2025</div>

              <h3>
                ONE GRANTED
                <em>NATIONAL PATENT.</em>
              </h3>

              <p className="patent-copy">
                Smart School Bus Monitoring System — an IoT fleet tracking
                solution built with GPS, RFID, Python and embedded hardware.
              </p>
            </div>

            <div className="ach-foot">
              <div className="tags">
                {["IoT", "GPS", "RFID", "PYTHON"].map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="ach-year" aria-hidden="true">
                2025
              </span>
            </div>
          </Card>

          {/* ---------------- SIDE ---------------- */}
          <div className="ach-side">
            {achievements.map((item, i) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.no}
                  className="ach-small"
                  accent={item.accent}
                  delay={0.1 + i * 0.1}
                >
                  <div className="stat-top">
                    <span className="card-index">{item.no}</span>
                    <span className="icon-box">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="ach-label">{item.label}</div>
                  <h3>{item.title}</h3>
                  <p className="sub">{item.subtitle}</p>
                  <p className="desc">{item.description}</p>

                  <div
                    className="card-index"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "auto",
                      paddingTop: 20,
                    }}
                  >
                    <span>{item.no} / IMPACT</span>
                    <ArrowUpRight size={14} color={item.accent} />
                  </div>
                </Card>
              );
            })}

            <Card className="mindset" accent="#a970ff" tilt={0} delay={0.3}>
              <span className="icon-box" style={{ "--size": "42px" }}>
                <Crown size={18} strokeWidth={1.5} />
              </span>
              <div>
                <small>ENGINEERING MINDSET</small>
                <strong>BUILD USEFUL THINGS.</strong>
              </div>
              <Sparkles className="spark" size={18} strokeWidth={1.4} />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
