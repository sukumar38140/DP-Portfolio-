"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const STATS = [
  { value: "10+", label: "Months Exp." },
  { value: "2×", label: "Hackathon Wins" },
  { value: "25+", label: "Components" },
  { value: "50+", label: "Test Cases" },
];

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const f = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function AboutSection() {
  return (
    <SectionWrapper id="about" position="left">
      <p className="section-number">01 — About</p>
      <h2 className="section-title text-xl md:text-2xl text-white mb-4">Who I Am</h2>

      <motion.div variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.p className="text-gray-300 text-[0.7rem] leading-relaxed mb-3" variants={f}>
          MCA student · <span className="text-white font-medium">10+ months internship</span> in full stack dev & testing.
          Proficient in <span className="text-accent">React.js</span>, <span className="text-accent">Node.js</span>, <span className="text-accent">MongoDB</span>.
        </motion.p>
        <motion.p className="text-gray-400 text-[0.7rem] leading-relaxed mb-3" variants={f}>
          <span className="text-white font-medium">GSSoC 2025</span> contributor · 2× hackathon winner · Building AI-powered systems & e-commerce platforms.
        </motion.p>
        <motion.p className="text-gray-500 text-[0.65rem] leading-relaxed mb-4" variants={f}>
          Seeking Full Stack / React Developer role.
        </motion.p>
      </motion.div>

      <motion.div className="grid grid-cols-4 gap-2 mb-4" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {STATS.map((st) => (
          <motion.div key={st.label} className="text-center" variants={f}>
            <span className="block text-base font-bold gradient-text">{st.value}</span>
            <span className="text-gray-500 text-[0.5rem] leading-tight">{st.label}</span>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex gap-2">
        {[
          { l: "in", h: "https://linkedin.com/in/saatharlakumar" },
          { l: "gh", h: "https://github.com/sukumar38140" },
          { l: "✉", h: "mailto:saatharlakumar@gmail.com" },
        ].map((x) => (
          <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer"
            className="w-7 h-7 rounded-lg glass-card flex items-center justify-center text-gray-500 hover:text-accent text-[0.55rem] font-bold transition-colors">
            {x.l}
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}
