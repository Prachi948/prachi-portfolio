import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { Card, Magnetic, Reveal, Words } from "./ui";

const EMAIL = "prachithorat503@gmail.com";

const contactItems = [
  {
    label: "DIRECT LINE",
    value: "+91 79726 65527",
    href: "tel:+917972665527",
    icon: Phone,
    accent: "#a970ff",
  },
  {
    label: "BASED IN",
    value: "Mumbai, India",
    icon: MapPin,
    accent: "#63c7ff",
  },
  {
    label: "PROFESSIONAL",
    value: "LINKEDIN",
    href: "https://www.linkedin.com/in/prachi-thorat-8984a1328/",
    external: true,
    icon: ExternalLink,
    accent: "#7ba8ff",
  },
  {
    label: "CODE",
    value: "GITHUB",
    href: "https://github.com/Prachi948",
    external: true,
    icon: ExternalLink,
    accent: "#c28cff",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="section alt">
      <div className="bg-grid" aria-hidden="true" />
      <div className="glow g-right" aria-hidden="true" />
      <div className="glow g-left" aria-hidden="true" />

      <div className="container">
        <Reveal className="section-meta" y={-10}>
          <span>
            <b>07</b> / CONTACT
          </span>
          <span className="hide-sm">LET&apos;S BUILD</span>
        </Reveal>

        <div className="contact-main">
          <div>
            <Reveal className="kicker" y={14}>
              <i />
              OPEN TO CONVERSATION
            </Reveal>

            <h2 className="contact-title">
              <span style={{ display: "block" }}>
                <Words text="LET'S BUILD" />
              </span>
              <span style={{ display: "block", color: "#4d465a" }}>
                <Words text="WHAT'S NEXT." delay={0.2} />
              </span>
            </h2>

            <Reveal as="p" className="contact-desc" delay={0.15}>
              Have a backend problem, AI idea or ambitious system in mind? Start
              with an email and let&apos;s turn the idea into something real.
            </Reveal>

            <Reveal className="email-row" delay={0.25}>
              <Magnetic strength={0.12}>
                <a className="email-link" href={`mailto:${EMAIL}`}>
                  <span className="icon-box">
                    <Mail size={20} strokeWidth={1.5} />
                  </span>
                  <span>
                    <small>START A CONVERSATION</small>
                    <strong>{EMAIL}</strong>
                  </span>
                  <ArrowUpRight size={20} strokeWidth={1.6} />
                </a>
              </Magnetic>

              <button
                type="button"
                className="btn btn-ghost copy-btn"
                onClick={copy}
                aria-live="polite"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.span
                      key="done"
                      style={{ display: "inline-flex", gap: 10, alignItems: "center", color: "var(--green)" }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Check size={16} /> Copied
                    </motion.span>
                  ) : (
                    <motion.span
                      key="copy"
                      style={{ display: "inline-flex", gap: 10, alignItems: "center" }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                    >
                      <Copy size={16} /> Copy email
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          </div>

          <Reveal className="contact-side" x={24} y={0} delay={0.2}>
            <div className="contact-side-label">
              <i className="dot" style={{ width: 6, height: 6 }} />
              AVAILABLE FOR
            </div>
            <p>
              Backend engineering, AI-powered applications, automation systems,
              and software development opportunities.
            </p>
          </Reveal>
        </div>

        <div className="contact-cards">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            const extra = item.href
              ? {
                  href: item.href,
                  ...(item.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {}),
                }
              : {};

            return (
              <Card
                key={item.value}
                as={item.href ? "a" : "div"}
                className="contact-card"
                accent={item.accent}
                delay={index * 0.07}
                tilt={4}
                {...extra}
              >
                <div className="stat-top">
                  <span className="icon-box">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className="card-index">0{index + 1}</span>
                </div>

                <div>
                  <small>{item.label}</small>
                  <strong>
                    {item.value}
                    {item.external && <ArrowUpRight size={15} />}
                  </strong>
                </div>
              </Card>
            );
          })}
        </div>

        <Reveal className="contact-bottom" y={0}>
          <span className="status">
            <i />
            OPEN TO OPPORTUNITIES
          </span>
          <div />
          <span>MUMBAI · INDIA</span>
        </Reveal>
      </div>
    </section>
  );
}
