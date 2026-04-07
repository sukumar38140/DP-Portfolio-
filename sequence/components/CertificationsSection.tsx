"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const f = { hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0, transition: { duration: 0.3 } } };

export default function CertificationsSection() {
  return (
    <SectionWrapper id="certifications" position="edge-right">
      <p className="section-number text-[0.5rem]">06 — Achievements</p>
      <h2 className="section-title text-lg text-white mb-3">Recognition</h2>

      <motion.div className="space-y-2.5" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {/* Certs */}
        <motion.div variants={f}>
          <p className="text-gray-600 text-[0.45rem] uppercase tracking-[0.15em] mb-1">Certifications</p>
          {["Salesforce Certified Dev I", "Innovation Amb. — MoE", "MIS — NPTEL", "DB Admin — Microsoft"].map((c) => (
            <p key={c} className="text-gray-300 text-[0.5rem] leading-relaxed">· {c}</p>
          ))}
        </motion.div>

        {/* Wins */}
        <motion.div variants={f}>
          <p className="text-gray-600 text-[0.45rem] uppercase tracking-[0.15em] mb-1">Competitions</p>
          <p className="text-gray-300 text-[0.5rem]">🏆 1st — PPT, D-Festa</p>
          <p className="text-gray-300 text-[0.5rem]">🏆 1st — Treasure Hunt</p>
          <p className="text-gray-300 text-[0.5rem]">🎯 Gateway Hackathon</p>
        </motion.div>

        {/* Leadership */}
        <motion.div variants={f}>
          <p className="text-gray-600 text-[0.45rem] uppercase tracking-[0.15em] mb-1">Leadership</p>
          {["IPR Coordinator — SIH", "Google Student Amb.", "AI Workshop — 50+ students", "ISTE Member"].map((l) => (
            <p key={l} className="text-gray-400 text-[0.5rem]">› {l}</p>
          ))}
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}
