"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const f = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" position="edge-left">
      <p className="section-number text-[0.5rem]">07 — Contact</p>
      <h2 className="section-title text-lg text-white mb-0.5">Let&apos;s Build</h2>
      <h2 className="section-title text-lg gradient-text mb-3">Something Amazing</h2>

      <motion.div className="space-y-1.5 mb-3" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {[
          { l: "Email", v: "saatharlakumar@gmail.com", h: "mailto:saatharlakumar@gmail.com" },
          { l: "Phone", v: "+91 89789 43122", h: "tel:+918978943122" },
          { l: "Location", v: "Madanapalle, India", h: "#" },
        ].map((c) => (
          <motion.a key={c.l} href={c.h}
            className="block glass-card p-2 rounded-lg" variants={f}>
            <p className="text-gray-600 text-[0.4rem] uppercase tracking-wider">{c.l}</p>
            <p className="text-white text-[0.6rem] font-medium">{c.v}</p>
          </motion.a>
        ))}
      </motion.div>

      <div className="flex gap-1.5 mb-3">
        {[
          { l: "LinkedIn", h: "https://linkedin.com/in/saatharlakumar" },
          { l: "GitHub", h: "https://github.com/sukumar38140" },
        ].map((s) => (
          <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer"
            className="px-2.5 py-1 rounded-md glass-card text-gray-500 hover:text-accent text-[0.5rem] transition-colors">
            {s.l}
          </a>
        ))}
      </div>

      <div className="pt-2 border-t border-white/5">
        <p className="text-gray-700 text-[0.45rem]">
          Built by <span className="text-accent">Saatharla Kumar</span> · © {new Date().getFullYear()}
        </p>
      </div>
    </SectionWrapper>
  );
}
