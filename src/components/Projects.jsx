import {
  Activity,
  ArrowUpRight,
  Bot,
  BusFront,
  Cpu,
  Database,
  GitBranch,
  MapPin,
  Radio,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Workflow,
} from "lucide-react";

import { Card, CountUp, SectionHead } from "./ui";

const github = "https://github.com/Prachi948";

const projects = [
  {
    no: "01",
    type: "AI / LLM",
    title: "MEDASSIST",
    subtitle: "AI Health Assistant Agent",
    desc: "Low-latency conversational AI agent built with Python, Streamlit and LLaMA through Groq API, with clinical prompt guardrails and persistent multi-turn context.",
    stats: [
      ["<500ms", "INFERENCE"],
      ["100%", "CONTEXT"],
    ],
    tags: ["Python", "LLaMA", "Groq API", "Streamlit", "SQLite"],
    icon: Bot,
    accent: "#a970ff",
    status: "AI SYSTEM ONLINE",
    visual: "ai",

    // Live MedAssist application
    url: "https://prachi-portfolio-ywltcrcerzhmwusmlksqcb.streamlit.app/",
    live: true,
  },

  {
    no: "02",
    type: "IOT / PATENT",
    title: "SMART SCHOOL BUS",
    subtitle: "IoT Monitoring System",
    desc: "GPS + RFID fleet tracking system with embedded hardware and centralized monitoring; led a four-person team to first place at Megahack 5.0.",
    stats: [
      ["1st", "MEGAHACK 5.0"],
      ["1", "PATENT"],
    ],
    tags: ["GPS", "RFID", "Python", "IoT", "Dashboard"],
    icon: BusFront,
    accent: "#ff9d5c",
    status: "IOT SYSTEM ACTIVE",
    visual: "iot",
    patent: true,
  },

  {
    no: "03",
    type: "AUTOMATION",
    title: "ORANGEHRM",
    subtitle: "Enterprise Automation Framework",
    desc: "Data-driven Selenium automation suite covering four core HR modules using TestNG, Page Object Model and Maven.",
    stats: [
      ["85%", "COVERAGE"],
      ["4", "HR MODULES"],
    ],
    tags: ["Java", "Selenium", "TestNG", "POM", "Maven"],
    icon: TestTube2,
    accent: "#69a9ff",
    status: "TEST SYSTEM READY",
    visual: "automation",
  },
];

/* ---------------- visuals ---------------- */

function AIVisual({ accent }) {
  const nodes = [
    [Database, 0],
    [Cpu, 120],
    [Activity, 240],
  ];

  return (
    <div
      className="visual"
      style={{ "--accent": accent }}
      aria-hidden="true"
    >
      <span className="v-ring a" />
      <span className="v-ring b" />

      <div
        className="v-orbit"
        style={{ inset: "calc(50% - 78px)" }}
      >
        {nodes.map(([Icon, angle]) => {
          const rad = (angle * Math.PI) / 180;

          return (
            <span
              key={angle}
              className="v-dot"
              style={{
                left: 78 + 78 * Math.cos(rad),
                top: 78 + 78 * Math.sin(rad),
              }}
            >
              <Icon size={12} />
            </span>
          );
        })}
      </div>

      <div className="v-center">
        <Bot size={22} />
      </div>

      <span className="visual-label">CONTEXT / AI</span>
    </div>
  );
}

function IoTVisual({ accent }) {
  return (
    <div
      className="visual"
      style={{ "--accent": accent }}
      aria-hidden="true"
    >
      <span className="v-ring a" />
      <span className="v-ring b" />

      <span className="radar-sweep" />

      <div className="v-center">
        <BusFront size={20} />
      </div>

      <span
        className="blip"
        style={{
          left: "26%",
          top: "30%",
        }}
      >
        <MapPin size={11} />
      </span>

      <span
        className="blip"
        style={{
          right: "24%",
          bottom: "30%",
          animationDelay: "1.2s",
        }}
      >
        <Radio size={11} />
      </span>

      <span className="visual-label">GPS / RFID</span>
    </div>
  );
}

function AutomationVisual({ accent }) {
  return (
    <div
      className="visual"
      style={{ "--accent": accent }}
      aria-hidden="true"
    >
      <div className="flow">
        <span className="flow-node on">
          <TestTube2 size={16} />
        </span>

        <span className="flow-line" />

        <span className="flow-node">
          <Workflow size={16} />
        </span>

        <span className="flow-line" />

        <span className="flow-node">
          <ShieldCheck size={16} />
        </span>
      </div>

      <div className="bars">
        {[38, 62, 48, 78, 92].map((h, i) => (
          <i
            key={i}
            style={{
              height: `${h}%`,
            }}
          />
        ))}
      </div>

      <span className="visual-label">
        TEST / BUILD / PASS
      </span>
    </div>
  );
}

const visuals = {
  ai: AIVisual,
  iot: IoTVisual,
  automation: AutomationVisual,
};

/* ---------------- section ---------------- */

export default function Projects() {
  return (
    <section id="projects" className="section alt">
      <div className="bg-grid" aria-hidden="true" />

      <div
        className="glow g-left"
        aria-hidden="true"
      />

      <div className="container">
        <SectionHead
          no="03"
          label="Work"
          meta="SELECTED SYSTEMS"
          kicker="SELECTED WORK"
          lines={[
            ["BUILT."],
            ["SHIPPED.", true],
          ]}
        >
          <p>
            Real projects across AI, IoT and enterprise
            automation.
          </p>

          <a
            className="btn btn-ghost link-btn-row"
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <GitBranch size={15} />

            GitHub

            <ArrowUpRight size={15} />
          </a>
        </SectionHead>

        <div className="project-list">
          {projects.map((project) => {
            const Icon = project.icon;
            const Visual = visuals[project.visual];

            return (
              <Card
                key={project.no}
                className="project"
                accent={project.accent}
                tilt={2}
              >
                <span
                  className="project-ghost"
                  aria-hidden="true"
                >
                  {project.no}
                </span>

                <div>
                  <div className="project-type">
                    <Sparkles size={13} />

                    {project.type}
                  </div>

                  <div className="project-title-row">
                    <span
                      className="icon-box"
                      style={{
                        "--size": "56px",
                      }}
                    >
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                      />
                    </span>

                    <div>
                      <h3>{project.title}</h3>

                      <h4>{project.subtitle}</h4>
                    </div>
                  </div>

                  <p className="project-desc">
                    {project.desc}
                  </p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span
                        className="tag"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="project-side">
                  <div className="project-status">
                    <span className="dot" />

                    {project.status}
                  </div>

                  <Visual
                    accent={project.accent}
                  />

                  <div className="pstats">
                    {project.stats.map(
                      ([value, label]) => (
                        <div
                          className="pstat"
                          key={label}
                        >
                          <strong>
                            <CountUp value={value} />
                          </strong>

                          <span>{label}</span>
                        </div>
                      )
                    )}
                  </div>

                  {project.patent && (
                    <div className="patent">
                      <ShieldCheck size={16} />

                      PATENT GRANTED / 2025
                    </div>
                  )}

                  {/* Project Link */}
                  <a
                    className="project-open"
                    href={project.url || github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <span>
                      {project.live ? (
                        <>
                          <Activity size={15} />
                          LIVE DEMO
                        </>
                      ) : (
                        <>
                          <GitBranch size={15} />
                          OPEN ON GITHUB
                        </>
                      )}
                    </span>

                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}