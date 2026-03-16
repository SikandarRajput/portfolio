import React from 'react';
import {
    Code2,
    Terminal,
    Layers,
    Cpu,
    Globe,
    GitBranch,
    Search,
    ShieldCheck,
    Lightbulb,
    Target,
    User
} from 'lucide-react';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-950/50">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Header */}
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="flex-shrink-0 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative w-48 h-48 md:w-64 md:h-64 bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 flex items-center justify-center">
                            <User className="w-24 h-24 text-zinc-700" />
                            {/* Note: In a real scenario, the user would replace this with their actual photo */}
                        </div>
                    </div>

                    <div className="space-y-6 max-w-3xl">
                        <div className="space-y-2">
                            <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">About Me</span>
                            <h2 className="text-4xl md:text-6xl font-black">Who I Am</h2>
                        </div>
                        <p className="text-xl text-zinc-300 leading-relaxed">
                            I’m <span className="text-white font-bold">Sikandar Rajput</span>, a Full-Stack Developer driven by the challenge of bridging <span className="text-orange-400">complex business needs</span> with elegant, high-performance software. I thrive in the logic of the backend, where performance and scalability are the primary goals.
                        </p>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            With over <span className="text-white font-bold">4 years of experience</span>, I specialize in building bespoke ERP systems and high-concurrency APIs, helping businesses move away from manual bottlenecks toward automated, data-driven ecosystems.
                        </p>
                    </div>
                </div>

                {/* What I Do Best */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold flex items-center gap-3">
                            <Target className="text-orange-500" />
                            What I Do Best
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            My core strength lies in the backend, where I design systems that are:
                        </p>
                        <ul className="space-y-4">
                            {[
                                { title: 'Scalable and maintainable', icon: <Layers className="w-5 h-5" /> },
                                { title: 'Secure and performance-focused', icon: <ShieldCheck className="w-5 h-5" /> },
                                { title: 'Easy to extend and integrate', icon: <Cpu className="w-5 h-5" /> }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-4 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                                    <div className="text-orange-500">{item.icon}</div>
                                    <span className="text-zinc-200 font-medium">{item.title}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-zinc-400 text-lg leading-relaxed pt-4">
                            I’m comfortable working end-to-end — from database design and API development to React-based frontends and deployment — but I always prioritize clean architecture and long-term stability.
                        </p>
                    </div>
                    <div className="bg-zinc-900/30 border border-zinc-800 rounded-[3rem] p-8 md:p-12">
                        <div className="space-y-8">
                            <div className="space-y-2 text-center md:text-left">
                                <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Principles</h4>
                                <p className="text-2xl font-bold text-white">Clean Code & Ownership</p>
                            </div>
                            <div className="grid grid-cols-1 gap-6">
                                <div className="p-6 bg-zinc-800/20 rounded-2xl border border-zinc-800/50">
                                    <p className="text-zinc-400 italic font-serif">"I believe in understanding the business problem first, not just writing code."</p>
                                </div>
                                <div className="p-6 bg-zinc-800/20 rounded-2xl border border-zinc-800/50">
                                    <p className="text-zinc-400 italic font-serif">"I value long-term maintainability over quick hacks."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Expertise */}
                <div className="space-y-12">
                    <div className="text-center space-y-4">
                        <h3 className="text-3xl md:text-5xl font-black">Technical Expertise</h3>
                        <p className="text-zinc-500 max-w-2xl mx-auto">
                            A comprehensive list of tools and technologies I use to build robust software.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Backend */}
                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-orange-500/30 transition-colors space-y-6">
                            <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500">
                                <Terminal className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">Backend</h4>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> Python (Django, DRF, Flask)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> ERPNext & Frappe Framework</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> WebSockets & Celery</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> PostgreSQL, MariaDB, SQLite</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span> API Integration & RBAC</li>
                            </ul>
                        </div>

                        {/* Frontend */}
                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-orange-500/30 transition-colors space-y-6">
                            <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
                                <Globe className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">Frontend</h4>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> HTML, CSS, Bootstrap</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> JavaScript (ES6+), jQuery</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> AJAX & WebSockets</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> React.js (Learning/Basic)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> PDF.js Integration</li>
                            </ul>
                        </div>

                        {/* Dev & Ops */}
                        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl hover:border-orange-500/30 transition-colors space-y-6">
                            <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500">
                                <GitBranch className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold">Dev & Ops</h4>
                            <ul className="space-y-3 text-zinc-400">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Linux (Ubuntu/Debian)</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Git & Version Control</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Cron Jobs & Task Automation</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Production Deployment</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Experience & Growth */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-[3rem] overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="p-8 md:p-16 border-b lg:border-b-0 lg:border-r border-zinc-800 space-y-8">
                            <h3 className="text-3xl font-bold">Professional Experience & Growth</h3>
                            <p className="text-zinc-400 text-lg leading-relaxed">
                                I have <span className="text-white font-bold">4+ years of professional experience</span> as a Software Engineer, primarily focused on Python-based ecosystems. My journey includes building logistics platforms, complex ERP modules, and real-time management systems.
                            </p>
                            <div className="space-y-4">
                                <div className="flex gap-4 p-6 bg-zinc-800/30 border border-zinc-800 rounded-2xl">
                                    <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center text-orange-500 flex-shrink-0">
                                        <Lightbulb className="w-5 h-5" />
                                    </div>
                                    <p className="text-zinc-300">
                                        In the past year, I intentionally focused on deepening my technical foundation and improving system design skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 md:p-16 bg-zinc-900/80 space-y-8">
                            <h3 className="text-3xl font-bold">What I’m Looking For</h3>
                            <div className="space-y-6">
                                {[
                                    'Work on backend-centric or full-stack projects',
                                    'Contribute to real production systems',
                                    'Grow as a senior backend / system-oriented engineer',
                                    'Collaborate with teams that value quality and ownership'
                                ].map((text, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                        <span className="text-zinc-300 font-medium">{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Beyond Code */}
                <div className="text-center py-12 px-8 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[3rem] space-y-6">
                    <h3 className="text-2xl font-bold">Beyond Code</h3>
                    <p className="text-zinc-400 max-w-3xl mx-auto text-lg leading-relaxed">
                        Outside of coding, I enjoy learning new technologies, improving my problem-solving skills, and exploring better ways to design systems that scale. I’m continuously working on sharpening both my technical and professional skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
