"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  /** 'left' | 'right' | 'edge-left' | 'edge-right' */
  position?: "left" | "right" | "edge-left" | "edge-right";
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  position = "left",
  className = "",
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const isLeft = position === "left" || position === "edge-left";
  const isEdge = position === "edge-left" || position === "edge-right";

  const slideFrom = isLeft ? { x: -40 } : { x: 40 };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative z-10 min-h-screen flex flex-col justify-center ${
        isLeft ? "items-start" : "items-end"
      } py-16 md:py-20 ${className}`}
      initial={{ opacity: 0, ...slideFrom }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, ...slideFrom }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
    >
      <div
        className={`
          w-full px-3
          ${isEdge ? "max-w-[300px]" : "max-w-[400px]"}
          ${isLeft
            ? isEdge ? "ml-0 md:ml-2 lg:ml-4" : "md:ml-6 lg:ml-12 xl:ml-20"
            : isEdge ? "mr-0 md:mr-2 lg:mr-4" : "md:mr-6 lg:mr-12 xl:mr-20"
          }
        `}
      >
        <div className="glass-panel p-4 md:p-5">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
