"use client";

import Navbar from "@/components/Navbar";
import FrameCanvas from "@/components/FrameCanvas";
import HeroOverlay from "@/components/HeroOverlay";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main className="relative">
      {/* ─── Fixed Canvas Background (spans entire page) ─── */}
      <FrameCanvas />

      {/* ─── Navigation ─── */}
      <Navbar />

      {/* ─── All content floats OVER the canvas ─── */}
      <div className="relative z-10">
        {/* Hero — centered, fades on scroll */}
        <HeroOverlay />

        {/* Sections float on alternating sides to keep the face visible */}
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </div>
    </main>
  );
}
