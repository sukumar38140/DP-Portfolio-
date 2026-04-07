"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const f = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function EducationSection() {
  return (
    <SectionWrapper id="education" position="edge-left">
      <p className="section-number text-[0.5rem]">05 — Education</p>
      <h2 className="section-title text-lg text-white mb-3">Academic</h2>

      <motion.div className="space-y-2" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <motion.div className="glass-card p-2.5 rounded-lg" variants={f}>
          <div className="flex items-baseline justify-between">
            <h3 className="text-white text-[0.65rem] font-semibold">MCA</h3>
            <span className="text-accent text-[0.5rem] font-semibold">8.0</span>
          </div>
          <p className="text-accent/60 text-[0.5rem]">MITS</p>
          <p className="text-gray-600 text-[0.45rem]">Pursuing · Jul 2026</p>
          <p className="text-gray-500 text-[0.45rem] mt-1">DSA · DBMS · Web · SE · OOP</p>
        </motion.div>

        <motion.div className="glass-card p-2.5 rounded-lg" variants={f}>
          <div className="flex items-baseline justify-between">
            <h3 className="text-white text-[0.65rem] font-semibold">BCA</h3>
            <span className="text-accent text-[0.5rem] font-semibold">7.7</span>
          </div>
          <p className="text-accent/60 text-[0.5rem]">Shri Gnanambica</p>
          <p className="text-gray-600 text-[0.45rem]">Graduated Jul 2023</p>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
