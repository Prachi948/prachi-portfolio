import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Database,
  Factory,
  FlaskConical,
  Gauge,
  GitBranch,
} from "lucide-react";

import { ease } from "../lib/motion";
import { Card, Reveal, SectionHead } from "./ui";

const jobs = [
  {
    period: "JUN 2025 — PRESENT",
    role: "ASSOCIATE SOFTWARE ENGINEER",
    company: "LEANQUBIT",
    icon: BriefcaseBusiness,
    accent: "#a970ff",
    text: "Building backend services, industrial automation modules and real-time SCADA/MES systems for enterprise environments.",
    wins: [
      "8+ backend modules",
      "15+ production REST APIs",
      "50+ live production tags",
      "99.9% data availability",
    ],
    tags: ["Java", "Spring Boot", "Quarkus", "PostgreSQL", "Ignition", "OPC-UA"],
  },
  {
    period: "JUL 2024 — SEP 2024",
    role: "SOFTWARE AUTOMATION TESTING INTERN",
    company: "EXCELR SOLUTIONS",
    icon: FlaskConical,
    accent: "#70d6a0",
    text: "Built a Selenium WebDriver, TestNG and Page Object Model framework for repeatable enterprise test automation.",
    wins: [
      "100+ test cases",
      "40% manual testing reduction",
      "Reusable POM framework",
    ],
    tags: ["Java", "Selenium", "TestNG", "POM", "Maven"],
  },
  {
    period: "JUL 2024 — SEP 2024",
    role: "GOOGLE AI-ML VIRTUAL INTERN",
    company: "EDUSKILLS FOUNDATION",
    icon: Gauge,
    accent: "#63c7ff",
    text: "Worked on supervised machine-learning pipelines using Python and data-science libraries across multiple datasets.",
    wins: ["5+ datasets", "90%+ validation accuracy", "Supervised ML pipelines"],
    tags: ["Python", "scikit-learn", "Pandas", "NumPy"],
  },
];

const capabilities = [
  [Code2, "BACKEND"],
  [Factory, "INDUSTRIAL"],
  [Database, "DATA"],
  [GitBranch, "AUTOMATION"],
];

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 110, damping: 26 });

  return (
    <section id="experience" className="section">
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow g-left" aria-hidden="true" />

      <div className="container">
        <SectionHead
          no="04"
          label="Journey"
          meta="EXPERIENCE / 2024—NOW"
          kicker="WHERE I ENGINEER"
          lines={[["FROM CODE"], ["TO THE FLOOR.", true]]}
        >
          <p>
            Software that lives beyond a screen — APIs, test systems,
            dashboards and industrial machines.
          </p>
          <p
            className="mono"
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              color: "var(--text-3)",
            }}
          >
            CODE · AUTOMATE · DEPLOY
          </p>
        </SectionHead>

        <div className="timeline" ref={ref} style={{ background: "transparent" }}>
          <div className="rail" aria-hidden="true">
            <motion.div className="rail-fill" style={{ scaleY }} />
          </div>

          {jobs.map((job, index) => {
            const Icon = job.icon;
            return (
              <article
                className="job"
                key={job.company + job.role}
                style={{ "--accent": job.accent }}
              >
                <div className="job-node">
                  <motion.span
                    className="icon-box"
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.7, ease }}
                  >
                    <Icon size={20} strokeWidth={1.6} />
                  </motion.span>
                  <span className="card-index">0{index + 1}</span>
                </div>

                <Card className="job-card" accent={job.accent} tilt={2}>
                  <div className="job-top">
                    <span>{job.period}</span>
                    <span>EXPERIENCE / 0{index + 1}</span>
                  </div>

                  <div className="job-title">
                    <h3>{job.role}</h3>
                    <h4>{job.company}</h4>
                  </div>

                  <p className="job-text">{job.text}</p>

                  <div className="wins">
                    {job.wins.map((win) => (
                      <span className="win" key={win}>
                        <CheckCircle2 size={16} strokeWidth={1.8} />
                        {win}
                      </span>
                    ))}
                  </div>

                  <div className="job-tags">
                    {job.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </article>
            );
          })}
        </div>

        <Reveal className="capabilities">
          {capabilities.map(([Icon, label]) => (
            <span className="capability" key={label}>
              <Icon size={17} />
              {label}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
