
import React, { useEffect, useRef } from 'react';

type FloatingParticlesProps = {
    className?: string;
    count?: number;
    speedScale?: number;
    minSize?: number;
    maxSize?: number;
    baseColor?: string;
    glowColor?: string;
};

type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    opacity: number;
    fadeState: 'in' | 'out' | 'hold';
    fadeSpeed: number;
    holdTime: number;
    maxOpacity: number;
};

export default function FloatingParticles({
    className,
    count = 50,
    speedScale = 1,
    minSize = 1,
    maxSize = 3,
    baseColor = "rgba(255, 255, 255, 0.3)",
    glowColor = "rgba(255, 255, 255, 0.8)",
}: FloatingParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = 0;
        let height = 0;
        let particles: Particle[] = [];
        let animationId: number;

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < count; i++) {
                resetParticle(i, true);
            }
        };

        const resetParticle = (index: number, initial = false) => {
            const p = particles[index] || {};
            p.x = Math.random() * width;
            p.y = Math.random() * height;

            // Antigravity drift: slow random direction
            const angle = Math.random() * Math.PI * 2;
            const speed = (0.2 + Math.random() * 0.5) * speedScale;
            p.vx = Math.cos(angle) * speed;
            p.vy = Math.sin(angle) * speed;

            p.size = minSize + Math.random() * (maxSize - minSize);

            // Opacity handling
            p.opacity = initial ? Math.random() * 0.5 : 0;
            p.maxOpacity = 0.4 + Math.random() * 0.4; // vary max opacity
            p.fadeState = initial ? (Math.random() > 0.5 ? 'in' : 'out') : 'in';
            p.fadeSpeed = 0.005 + Math.random() * 0.01;
            p.holdTime = Math.random() * 200; // frames to hold peak opacity

            particles[index] = p as Particle;
        };

        const resize = () => {
            const { width: w, height: h } = container.getBoundingClientRect();
            width = w;
            height = h;
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            // Re-distribute particles if size changes drastically, or just let them drift
        };

        const update = () => {
            ctx.clearRect(0, 0, width, height);

            particles.forEach((p, i) => {
                // Move
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around simple
                if (p.x < -50) p.x = width + 50;
                if (p.x > width + 50) p.x = -50;
                if (p.y < -50) p.y = height + 50;
                if (p.y > height + 50) p.y = -50;

                // Fade logic
                if (p.fadeState === 'in') {
                    p.opacity += p.fadeSpeed;
                    if (p.opacity >= p.maxOpacity) {
                        p.opacity = p.maxOpacity;
                        p.fadeState = 'hold';
                    }
                } else if (p.fadeState === 'hold') {
                    p.holdTime--;
                    if (p.holdTime <= 0) {
                        p.fadeState = 'out';
                        p.holdTime = Math.random() * 200; // reset for next time? No, just fade out.
                    }
                } else if (p.fadeState === 'out') {
                    p.opacity -= p.fadeSpeed;
                    if (p.opacity <= 0) {
                        p.opacity = 0;
                        // Respawn completely new particle properties when it completely fades out
                        resetParticle(i);
                    }
                }

                // Draw
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

                // Simple glow effect for larger/brighter particles
                if (p.opacity > 0.5) {
                    ctx.shadowBlur = p.size * 2;
                    ctx.shadowColor = glowColor;
                    ctx.fillStyle = glowColor;
                } else {
                    ctx.shadowBlur = 0;
                    ctx.fillStyle = baseColor;
                }

                ctx.globalAlpha = p.opacity;
                ctx.fill();
                ctx.globalAlpha = 1.0;
            });

            animationId = requestAnimationFrame(update);
        };

        window.addEventListener('resize', resize);
        resize();
        initParticles();
        update();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationId);
        };
    }, [count, speedScale, minSize, maxSize, baseColor, glowColor]);

    return (
        <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
            <canvas ref={canvasRef} />
        </div>
    );
}
