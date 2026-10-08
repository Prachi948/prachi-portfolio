import {
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  Server,
  Sparkles,
  Terminal,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";

import { Card, CountUp, SectionHead } from "./ui";

const groups = [
  {
    title: "BACKEND",
    icon: Server,
    accent: "#a970ff",
    code: "BE",
    description:
      "Scalable application architecture, APIs and enterprise backend systems.",
    skills: [
      ["Java", Code2],
      ["Spring Boot", Layers3],
      ["Quarkus", Zap],
      ["Hibernate ORM", Database],
      ["REST APIs", Workflow],
      ["Microservices", Server],
      ["Clean Architecture", Layers3],
      ["SOLID", Code2],
      ["JUnit", TestTube2],
      ["Mockito", TestTube2],
    ],
  },
  {
    title: "AI / PYTHON",
    icon: BrainCircuit,
    accent: "#ff9d5c",
    code: "AI",
    description:
      "AI agents, machine learning workflows and Python-based experimentation.",
    skills: [
      ["Python", Terminal],
      ["LLaMA", BrainCircuit],
      ["Groq API", Zap],
      ["Prompt Engineering", Sparkles],
      ["Streamlit", Layers3],
      ["scikit-learn", BrainCircuit],
      ["Pandas", Database],
      ["NumPy", Cpu],
      ["SQLite", Database],
    ],
  },
  {
    title: "INDUSTRIAL",
    icon: Cpu,
    accent: "#69a9ff",
    code: "IO",
    description:
      "Real-time industrial software, SCADA systems and connected operations.",
    skills: [
      ["Ignition Perspective", Layers3],
      ["Ignition SDK", Code2],
      ["OPC-UA", Workflow],
      ["MES", Server],
      ["Real-Time Tags", Zap],
      ["Python Scripting", Terminal],
    ],
  },
  {
    title: "DATA / TOOLS",
    icon: Database,
    accent: "#e48cff",
    code: "DT",
    description:
      "Databases, automation tools, testing frameworks and delivery workflows.",
    skills: [
      ["PostgreSQL", Database],
      ["MySQL", Database],
      ["SQL", Code2],
      ["Git", GitBranch],
      ["Maven", Workflow],
      ["Postman", Zap],
      ["Selenium", TestTube2],
      ["TestNG", TestTube2],
      ["JIRA", Layers3],
      ["Power BI", Database],
    ],
  },
];

const orbitNodes = [
  { Icon: Server, accent: "#a970ff", angle: 0 },
  { Icon: BrainCircuit, accent: "#ff9d5c", angle: 90 },
  { Icon: Cpu, accent: "#69a9ff", angle: 180 },
  { Icon: Database, accent: "#e48cff", angle: 270 },
];

function StackOverview() {
  return (
    <Card className="stack-card" tilt={3}>
      <div className="stack-card-top">
        <span>
          <i className="dot" style={{ width: 6, height: 6 }} />
          SYSTEM STACK
        </span>
        <span>2026 / ACTIVE</span>
      </div>

      <div className="stack-main">
        <div className="orbit" aria-hidden="true">
          <span className="orbit-ring o1" />
          <span className="orbit-ring o2" />

          <div className="orbit-spin">
            {orbitNodes.map(({ Icon, accent, angle }) => {
              const r = 73;
              const rad = (angle * Math.PI) / 180;
              return (
                <span
                  key={angle}
                  className="orbit-node"
                  style={{
                    "--accent": accent,
                    left: 75 + r * Math.cos(rad),
                    top: 75 + r * Math.sin(rad),
                  }}
                >
                  <Icon size={12} />
                </span>
              );
            })}
          </div>

          <div className="orbit-core">
            <Code2 size={20} />
          </div>
        </div>

        <div className="stack-total">
          <strong>
            <CountUp value="35+" />
          </strong>
          <span>
            TECHNICAL
            <br />
            CAPABILITIES
          </span>
          <p>
            Backend-first engineering across software, AI, testing and
            industrial systems.
          </p>
        </div>
      </div>

      <div className="legend">
        {groups.map((g) => (
          <div key={g.title} style={{ "--accent": g.accent }}>
            <i />
            {g.title}
          </div>
        ))}
      </div>
    </Card>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow g-right" aria-hidden="true" />

      <div className="container">
        <SectionHead
          no="02"
          label="Stack"
          meta="TOOLS / SYSTEMS / METHODS"
          kicker="TECHNICAL DNA"
          lines={[["THE STACK"], ["BEHIND THE WORK.", true]]}
        >
          <StackOverview />
        </SectionHead>

        <div className="skills-grid">
          {groups.map((group, index) => {
            const GroupIcon = group.icon;
            return (
              <Card
                key={group.title}
                className="skill-card"
                accent={group.accent}
                delay={(index % 2) * 0.1}
                tilt={3}
              >
                <span className="skill-ghost" aria-hidden="true">
                  {group.code}
                </span>

                <div className="skill-head">
                  <span className="icon-box">
                    <GroupIcon size={21} strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3>{group.title}</h3>
                    <p>{group.skills.length} CAPABILITIES</p>
                  </div>
                  <span className="card-index">0{index + 1}</span>
                </div>

                <p className="skill-desc">{group.description}</p>

                <div className="skill-chips">
                  {group.skills.map(([name, Icon]) => (
                    <span className="chip" key={name}>
                      <Icon size={13} strokeWidth={1.7} />
                      {name}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
