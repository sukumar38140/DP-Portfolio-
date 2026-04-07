"use client";

import { useEffect, useRef, useCallback } from "react";

const TOTAL_FRAMES = 120;
const FRAME_PATH = (i: number) =>
  `/frames/frame_${String(i).padStart(3, "0")}_delay-0.066s.png`;

export default function FrameCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Draw a single frame onto the canvas with cover-fit
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = imagesRef.current[frameIndex];
    if (!canvas || !ctx || !img || !img.complete || img.naturalWidth === 0)
      return;

    // Match canvas to viewport
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);

    const canvasW = window.innerWidth;
    const canvasH = window.innerHeight;

    // Cover-fit calculations
    const canvasRatio = canvasW / canvasH;
    const imgRatio = img.naturalWidth / img.naturalHeight;

    let drawW: number, drawH: number, drawX: number, drawY: number;

    if (imgRatio > canvasRatio) {
      drawH = canvasH;
      drawW = drawH * imgRatio;
      drawX = (canvasW - drawW) / 2;
      drawY = 0;
    } else {
      drawW = canvasW;
      drawH = drawW / imgRatio;
      drawX = 0;
      drawY = (canvasH - drawH) / 2;
    }

    ctx.clearRect(0, 0, canvasW, canvasH);
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
  }, []);

  // Handle scroll — map ENTIRE page scroll to frame index
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (docHeight <= 0) return;

    const progress = Math.max(0, Math.min(1, scrollTop / docHeight));
    const frameIndex = Math.min(
      TOTAL_FRAMES - 1,
      Math.floor(progress * TOTAL_FRAMES)
    );

    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      drawFrame(frameIndex);
    }
  }, [drawFrame]);

  // RAF-throttled scroll
  const onScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      handleScroll();
      rafRef.current = null;
    });
  }, [handleScroll]);

  useEffect(() => {
    // Preload all frames
    const images: HTMLImageElement[] = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        if (i === 0) drawFrame(0);
      };
      images.push(img);
    }
    imagesRef.current = images;

    window.addEventListener("scroll", onScroll, { passive: true });
    const handleResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame, onScroll]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ display: "block" }}
      aria-hidden="true"
    />
  );
}
