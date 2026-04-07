"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const EXPS = [
  {
    role: "Full Stack Dev Intern",
    co: "Veterans India",
    when: "Aug '25 – Feb '26 · Remote",
    pts: [
      "AI chatbot: React.js + Node.js + Hugging Face LLMs",
      "30% accuracy boost via prompt engineering",
      "Agile sprints, code reviews, full-cycle delivery",
    ],
    tech: "React · Node · Express · HuggingFace · Git",
  },
  {
    role: "Software Testing Intern",
    co: "VentureSoft Global",
    when: "Dec '22 – Mar '23 · Madanapalle",
    pts: [
      "50+ test cases · 25% fewer post-deploy defects",
      "Functional, regression & integration testing",
    ],
    tech: "Testing · Bug Tracking · SDLC",
  },
  {
    role: "Salesforce Dev Intern",
    co: "Salesforce",
    when: "Aug '22 – Oct '22 · Remote",
    pts: [
      "Apex programming & process automation",
      "Certified Platform Developer I",
    ],
    tech: "Apex · Salesforce · Automation",
  },
];

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const f = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" position="left">
      <p className="section-number">03 — Experience</p>
      <h2 className="section-title text-xl md:text-2xl text-white mb-4">Career</h2>

      <motion.div className="space-y-3" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {EXPS.map((e) => (
          <motion.div key={e.co} className="glass-card p-3 rounded-lg" variants={f}>
            <h3 className="text-white text-[0.7rem] font-semibold">{e.role}</h3>
            <p className="text-accent text-[0.6rem]">{e.co}</p>
            <p className="text-gray-600 text-[0.5rem] mb-1.5">{e.when}</p>
            {e.pts.map((p, i) => (
              <p key={i} className="text-gray-400 text-[0.6rem] leading-relaxed pl-2.5 relative before:content-['›'] before:absolute before:left-0 before:text-accent/60">
                {p}
              </p>
            ))}
            <p className="text-accent/40 text-[0.5rem] mt-1.5 tracking-wide">{e.tech}</p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
