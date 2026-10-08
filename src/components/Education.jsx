import { Award, BookOpen, GraduationCap, MapPin } from "lucide-react";

import { Card, Reveal, SectionHead } from "./ui";

const education = [
  {
    period: "2021 — 2025",
    degree: "B.E. INFORMATION TECHNOLOGY",
    institution: "St. John College of Engineering and Management",
    location: "Mumbai, India",
    result: "CGPA 8.5 / 10",
    icon: GraduationCap,
    accent: "#a970ff",
    number: "01",
  },
  {
    period: "2019 — 2021",
    degree: "HSC — SCIENCE",
    institution: "SDSM College",
    location: "Palghar, Maharashtra",
    result: "94%",
    icon: Award,
    accent: "#63c7ff",
    number: "02",
  },
];

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow g-left" aria-hidden="true" />

      <div className="container">
        <SectionHead
          no="06"
          label="Education"
          meta="FOUNDATION"
          kicker="ACADEMIC FOUNDATION"
          lines={[["THE"], ["FOUNDATION.", true]]}
        />

        <div className="edu-grid">
          <Reveal className="edu-intro" x={-24} y={0}>
            <p>
              The academic foundation behind the engineering mindset — from
              information technology fundamentals to problem solving, systems
              thinking and software development.
            </p>

            <div className="edu-motto">
              <span />
              LEARN · BUILD · APPLY
            </div>

            <div className="foundation" aria-hidden="true">
              <i className="ring a" />
              <i className="ring b" />
              <span className="icon-box">
                <BookOpen size={22} strokeWidth={1.5} />
              </span>
            </div>
          </Reveal>

          <div className="edu-list">
            {education.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.degree}
                  className="edu-card"
                  accent={item.accent}
                  delay={index * 0.12}
                  tilt={3}
                >
                  <span className="edu-no" aria-hidden="true">
                    {item.number}
                  </span>

                  <span className="icon-box">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <span className="edu-period">{item.period}</span>
                    <h3>{item.degree}</h3>
                    <p className="edu-inst">{item.institution}</p>

                    <div className="edu-foot">
                      <span>
                        <MapPin size={14} strokeWidth={1.8} />
                        {item.location}
                      </span>
                      <span className="result">{item.result}</span>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        <Reveal className="bottom-line" y={0}>
          <span>FOUNDATION · KNOWLEDGE · GROWTH</span>
          <div />
          <span>INFORMATION TECHNOLOGY</span>
        </Reveal>
      </div>
    </section>
  );
}
