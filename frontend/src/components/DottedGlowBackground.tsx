/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useEffect, useRef } from 'react';

type DottedGlowBackgroundProps = {
  className?: string;
  gap?: number;
  radius?: number;
  color?: string;
  glowColor?: string;
  opacity?: number;
  speedScale?: number;
};

export default function DottedGlowBackground({
  className,
  gap = 12,
  radius = 2,
  color = "rgba(255,255,255,0.08)",
  glowColor = "rgba(255, 255, 255, 0.45)",
  opacity = 0.55,
  speedScale = 0.52,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = canvasRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    const ctx = el.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stopped = false;
    let isMobile = window.innerWidth < 768;

    const dpr = Math.max(1, window.devicePixelRatio || 1);

    const resize = () => {
      isMobile = window.innerWidth < 768;
      if (isMobile) {
        ctx.clearRect(0, 0, el.width, el.height);
        return;
      }
      const { width, height } = container.getBoundingClientRect();
      el.width = Math.max(1, Math.floor(width * dpr));
      el.height = Math.max(1, Math.floor(height * dpr));
      el.style.width = `${width}px`;
      el.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    setTimeout(resize, 0);

    let dots: { x: number; y: number }[] = [];

    const regenDots = () => {
      dots = [];
      const { width, height } = container.getBoundingClientRect();
      const cols = Math.ceil(width / gap) + 2;
      const rows = Math.ceil(height / gap) + 2;
      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const x = i * gap + (j % 2 === 0 ? 0 : gap * 0.5);
          const y = j * gap;
          dots.push({ x, y });
        }
      }
    };

    regenDots();
    window.addEventListener("resize", regenDots);

    const draw = (now: number) => {
      if (stopped) return;

      if (isMobile) {
        raf = requestAnimationFrame(draw);
        return;
      }

      const { width, height } = container.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const time = (now / 1000) * speedScale;

      dots.forEach((d) => {
        const verticalOffset = time * 39; // ~35% slower than original 60
        const rawY = d.y - verticalOffset;
        const currentY = ((rawY % height) + height) % height;

        const verticalProgress = currentY / height;
        const intensity = 0.1 + 0.9 * (verticalProgress * verticalProgress);

        ctx.beginPath();
        ctx.arc(d.x, currentY, radius, 0, Math.PI * 2);

        if (intensity > 0.7) {
          ctx.fillStyle = glowColor;
          ctx.shadowColor = glowColor;
          // Reduced shadow blur (was: 8 * ... * 3, now: 4 * ... * 2)
          ctx.shadowBlur = 4 * (verticalProgress - 0.7) * 2;
        } else {
          ctx.fillStyle = color;
          ctx.shadowBlur = 0;
        }
        ctx.globalAlpha = opacity * (intensity > 0.7 ? 0.75 : 0.25 + intensity * 0.4);
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      stopped = true;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", regenDots);
      ro.disconnect();
    };
  }, [gap, radius, color, glowColor, opacity, speedScale]);

  return (
    <div ref={containerRef} className={className} style={{ position: "absolute", inset: 0, zIndex: 0 }}>
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}
