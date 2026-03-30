import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { StarIcon } from './Icons';

interface CountUpProps {
    end: number;
    duration?: number;
    suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = "" }) => {
    const [count, setCount] = useState<string | number>(1);
    const elementRef = useRef<HTMLSpanElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let startTime: number | null = null;
        const startValue = 1;
        const isDecimal = end % 1 !== 0;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const rawValue = progress * (end - startValue) + startValue;
            const currentCount = isDecimal ? rawValue.toFixed(1) : Math.floor(rawValue);

            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                setCount(isDecimal ? end.toFixed(1) : end);
            }
        };

        requestAnimationFrame(animate);
    }, [hasAnimated, end, duration]);

    return <span ref={elementRef}>{count}{suffix}</span>;
}

const Hero: React.FC = () => {
    return (
        <section className="relative z-10 flex flex-col items-center justify-start min-h-[90vh] pt-32 pb-8 px-4 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 mb-8 rounded-full bg-zinc-900/50 border border-zinc-800 backdrop-blur-md hover:border-orange-500/30 transition-colors">
                <StarIcon className="w-5 h-5 text-orange-400" />
                <span className="text-base font-medium text-zinc-300">
                    Fixing Expensive Operational Bottlenecks <span className="mx-2 text-zinc-600">•</span> <span className="text-orange-400 font-semibold">Ready for Scale</span>
                </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#3bc9ed] mb-6 max-w-5xl">
                I Build Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">Simplify Operations</span> & Drive Growth
            </h1>

            {/* Subtext */}
            <p className="max-w-3xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed">
                Specializing in <span className="text-white font-semibold">logistics and enterprise-grade backend architectures</span>.
                <br className="hidden md:block" />
                I turn chaotic manual workflows into high-performance automated solutions that save hundreds of man-hours.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 mb-20">
                <Button variant="primary" size="lg" className="w-full sm:w-auto px-10 py-6 text-lg" onClick={() => {
                    const el = document.getElementById('projects');
                    el?.scrollIntoView({ behavior: 'smooth' });
                }}>
                    Prove the Impact
                </Button>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-10 py-5 bg-zinc-900 border border-zinc-800 text-zinc-300 font-bold rounded-2xl hover:bg-zinc-800 hover:text-white transition-all flex items-center justify-center gap-2"
                >
                    Download ROI-Focused CV
                </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-4xl border-t border-zinc-800/50 pt-12">
                <div className="flex flex-col items-center">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 mb-2">
                        <CountUp end={40} suffix="%" />
                    </span>
                    <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Avg. Efficiency Gain</span>
                </div>
                <div className="flex flex-col items-center relative">
                    <span className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-800"></span>
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 mb-2">
                        <CountUp end={60} suffix="%" />
                    </span>
                    <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Costs Reduced (Logistics)</span>
                    <span className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-zinc-800"></span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 mb-2">
                        <CountUp end={99.9} suffix="%" />
                    </span>
                    <span className="text-sm font-medium text-zinc-500 uppercase tracking-wider">Architecture Reliability</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
