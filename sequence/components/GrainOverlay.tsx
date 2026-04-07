"use client";

export default function GrainOverlay() {
  return (
    <div
      className="grain-overlay"
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
}
