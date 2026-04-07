"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const SKILLS = [
  { title: "Frontend", items: "React.js · JavaScript · HTML5 · CSS3 · Responsive · UI/UX" },
  { title: "Backend", items: "Node.js · Express.js · REST API · API Integration" },
  { title: "State & DB", items: "Redux · Context API · Hooks · MySQL · MongoDB" },
  { title: "Tools & QA", items: "Git · GitHub · Vercel · Functional Testing · Regression · Bug Tracking" },
];

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const f = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" position="right">
      <p className="section-number">02 — Skills</p>
      <h2 className="section-title text-xl md:text-2xl text-white mb-4">Technical Arsenal</h2>

      <motion.div className="space-y-2.5" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {SKILLS.map((cat) => (
          <motion.div key={cat.title} className="glass-card p-3 rounded-lg" variants={f}>
            <h3 className="text-white text-[0.65rem] font-semibold mb-1.5 tracking-wide">
              {cat.title}
            </h3>
            <p className="text-accent/80 text-[0.6rem] leading-relaxed">{cat.items}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-3" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
        <p className="text-gray-600 text-[0.5rem] uppercase tracking-[0.2em] mb-1.5">Core</p>
        <p className="text-gray-400 text-[0.6rem]">Problem Solving · Agile · SDLC · Code Review · Prompt Eng.</p>
      </motion.div>
    </SectionWrapper>
  );
}
