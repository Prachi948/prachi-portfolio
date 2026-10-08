import {
  Activity,
  ArrowUpRight,
  Award,
  Database,
  Factory,
  GitBranch,
  Link2,
  Mail,
  Server,
  Sparkles,
} from "lucide-react";

import { Card, CountUp, Reveal, SectionHead } from "./ui";

const stats = [
  {
    number: "8+",
    label: "BACKEND MODULES",
    meta: "ENGINEERED",
    Icon: Server,
    accent: "#a78bfa",
  },
  {
    number: "15+",
    label: "PRODUCTION REST APIs",
    meta: "DELIVERED",
    Icon: Database,
    accent: "#93c5fd",
  },
  {
    number: "50+",
    label: "LIVE PRODUCTION TAGS",
    meta: "MONITORED",
    Icon: Factory,
    accent: "#5eead4",
  },
  {
    number: "1",
    label: "GRANTED NATIONAL PATENT",
    meta: "RECOGNIZED",
    Icon: Award,
    accent: "#c4b5fd",
  },
];

const glance = [
  ["Role", "Associate Software Engineer"],
  ["Focus", "Backend · AI · Industrial"],
  ["Based in", "Mumbai, India"],
  ["Education", "B.E. IT · CGPA 8.5"],
];

export default function About() {
  return (
    <section id="about" className="section alt">
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow g-right" aria-hidden="true" />

      <div className="container">
        <SectionHead
          no="01"
          label="About"
          meta="ENGINEERING IDENTITY"
          kicker="WHO I AM"
          lines={[["ENGINEERING"], ["WITH PURPOSE.", true]]}
        >
          <p
            className="mono"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontSize: "0.72rem",
              letterSpacing: "0.18em",
              color: "var(--text-3)",
              textTransform: "uppercase",
            }}
          >
            <Activity size={14} color="var(--violet)" />
            Build · Learn · Evolve
          </p>
        </SectionHead>

        <div className="about-grid">
          {/* ---------------- SUMMARY ---------------- */}
          <Card className="summary" accent="#a970ff" tilt={2}>
            <div className="summary-top">
              <span>PROFESSIONAL SUMMARY</span>
              <Sparkles size={16} />
            </div>

            <p className="summary-lead">
              Java Backend Engineer working at the intersection of{" "}
              <em>scalable software</em>, <em>artificial intelligence</em> and{" "}
              <em>industrial automation</em>.
            </p>

            <p className="summary-text">
              From production REST APIs and microservices to SCADA dashboards
              and conversational AI agents, the goal is simple: make complex
              systems useful, reliable and measurable.
            </p>

            <div className="glance">
              {glance.map(([k, v]) => (
                <div key={k}>
                  <small>{k}</small>
                  <span>{v}</span>
                </div>
              ))}
            </div>

            <div className="summary-links">
              <a
                className="btn btn-primary"
                href="https://www.linkedin.com/in/prachi-thorat-8984a1328/"
                target="_blank"
                rel="noreferrer"
              >
                <Link2 size={15} />
                LinkedIn
                <ArrowUpRight size={15} />
              </a>
              <a
                className="btn btn-ghost"
                href="https://github.com/Prachi948"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch size={15} />
                GitHub
              </a>
              <a className="btn btn-ghost" href="mailto:prachithorat503@gmail.com">
                <Mail size={15} />
                Email
              </a>
            </div>
          </Card>

          {/* ---------------- STATS ---------------- */}
          <div className="stats-grid">
            {stats.map(({ number, label, meta, Icon, accent }, i) => (
              <Card
                key={label}
                className="stat"
                accent={accent}
                delay={i * 0.08}
              >
                <div className="stat-top">
                  <span className="card-index">0{i + 1}</span>
                  <span className="icon-box" style={{ "--size": "46px" }}>
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                </div>

                <div>
                  <div className="stat-num">
                    <CountUp value={number} />
                  </div>
                  <div className="stat-label">
                    <i />
                    <span>{label}</span>
                  </div>
                </div>

                <span className="card-index" style={{ marginTop: 18 }}>
                  {meta}
                </span>
              </Card>
            ))}
          </div>
        </div>

        <Reveal
          className="bottom-line"
          y={0}
          style={{ marginTop: "clamp(36px, 5vw, 60px)" }}
        >
          <div />
          <span>BUILD · LEARN · EVOLVE</span>
          <div style={{ background: "linear-gradient(90deg, var(--line), transparent)" }} />
        </Reveal>
      </div>
    </section>
  );
}
