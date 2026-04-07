"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroOverlay() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.06], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.06], [0, 40]);

  return (
    <section
      id="hero"
      className="relative z-10 h-screen flex flex-col justify-end pointer-events-none"
    >
      {/* Full-width bottom banner — sits over the shoulder/chest area */}
      <motion.div
        className="pointer-events-auto w-full px-6 md:px-12 lg:px-20 pb-2 md:pb-4"
        style={{ opacity, y }}
      >
        {/* Subtle gradient fade at the bottom for text readability */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[35%] pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(10,10,10,0.6) 0%, rgba(10,10,10,0.2) 50%, transparent 100%)",
          }}
        />

        <div className="relative z-10">
          {/* Greeting — small, above the name */}
          <motion.p
            className="text-accent font-medium text-[0.6rem] md:text-xs tracking-[0.4em] uppercase mb-2 text-glow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name — BIG, full width, cinematic intro */}
          <motion.h1
            className="section-title text-[2.8rem] md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[0.95] mb-3"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
          >
            SAATHARLA <span className="gradient-text">KUMAR</span>
          </motion.h1>

          {/* Subtitle — smaller, below the name */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mb-5"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <p className="text-gray-200 text-sm md:text-base font-medium text-glow">
              Full Stack Developer
            </p>
            <span className="hidden sm:block text-gray-600">|</span>
            <p className="text-gray-400 text-xs md:text-sm text-glow">
              Innovation Ambassador &bull; Open Source Contributor
            </p>
          </motion.div>

          {/* Buttons + Scroll indicator — inline */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <a href="#about" className="glow-btn">Explore</a>
            <a href="#contact" className="outline-btn">Contact</a>

            <div className="ml-4 flex items-center gap-2">
              <motion.div
                className="w-4 h-6 rounded-full border border-gray-600/40 flex items-start justify-center pt-1"
                animate={{ borderColor: ["rgba(100,100,100,0.25)", "rgba(232,115,74,0.35)", "rgba(100,100,100,0.25)"] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <motion.div
                  className="w-0.5 h-1.5 rounded-full bg-accent/60"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              <span className="text-gray-600 text-[0.5rem] tracking-[0.2em] uppercase">Scroll</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
