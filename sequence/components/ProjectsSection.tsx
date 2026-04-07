"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const PROJECTS = [
  {
    t: "E-Commerce",
    d: "Redux store · 25+ components · REST API · Mobile-responsive",
    tech: "React · Redux · Vercel",
    gh: "https://github.com/sukumar38140/ReactJs-Ecommerce-Project",
    live: "https://react-js-ecommerce-project-3jim.vercel.app",
  },
  {
    t: "Kramasikshana",
    d: "MERN discipline tracker · CRUD APIs · Role-based access",
    tech: "Mongo · Express · React · Node",
    gh: "https://github.com/sukumar38140/Kramasikshna",
    live: null,
  },
  {
    t: "Portfolio",
    d: "Modern responsive UI · Projects & skills showcase",
    tech: "HTML · CSS · JS",
    gh: "https://github.com/sukumar38140/My_portfolio",
    live: "https://react-js-ecommerce-project-ixft.vercel.app",
  },
];

const s = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const f = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" position="edge-right">
      <p className="section-number text-[0.5rem]">04 — Projects</p>
      <h2 className="section-title text-lg text-white mb-3">Work</h2>

      <motion.div className="space-y-2" variants={s} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {PROJECTS.map((p) => (
          <motion.div key={p.t} className="glass-card rounded-lg overflow-hidden" variants={f}>
            <div className="h-[2px] bg-gradient-to-r from-accent/80 to-accent/20" />
            <div className="p-2.5">
              <div className="flex items-center justify-between mb-0.5">
                <h3 className="text-white text-[0.65rem] font-semibold">{p.t}</h3>
                <div className="flex gap-1.5">
                  <a href={p.gh} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white text-[0.5rem]">Code</a>
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-accent text-[0.5rem]">Live</a>}
                </div>
              </div>
              <p className="text-gray-400 text-[0.55rem] leading-relaxed">{p.d}</p>
              <p className="text-accent/35 text-[0.45rem] mt-1">{p.tech}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.p className="text-[0.5rem] text-gray-400 mt-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        🌐 <span className="text-white font-medium">GSSoC 2025</span> · Open source contributor
      </motion.p>
    </SectionWrapper>
  );
}
