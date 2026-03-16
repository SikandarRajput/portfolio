import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { mockProjects } from '../types/project';
import { ExternalLink, Github, CheckCircle2, ArrowLeft } from 'lucide-react';

const ProjectDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const project = mockProjects.find(p => p.id === Number(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
                <h2 className="text-2xl font-bold text-zinc-400">Project Not Found</h2>
                <Link to="/" className="text-orange-500 hover:underline">Return Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button
                    type="button"
                    onClick={() => {
                        if (window.history.length > 1) {
                            navigate(-1);
                            return;
                        }
                        navigate('/projects');
                    }}
                    className="group mb-12 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                    Back to Projects
                </button>

                <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden flex flex-col shadow-2xl">
                    {/* Header */}
                    <div className="relative h-64 md:h-[32rem] flex-shrink-0">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

                        <div className="absolute bottom-12 left-12 right-12">
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech_stack.map((tech, index) => (
                                    <span
                                        key={`${tech}-${index}`}
                                        className="px-4 py-1.5 text-xs uppercase tracking-widest font-bold bg-orange-500 text-white rounded-full shadow-lg shadow-orange-500/20"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black">{project.title}</h1>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-16 lg:p-24 custom-scrollbar">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                            {/* Left Column: Description & Features */}
                            <div className="lg:col-span-2 space-y-16">
                                <section>
                                    <h3 className="text-xl font-bold mb-6 text-orange-500 uppercase tracking-widest text-sm">Overview</h3>
                                    <p className="text-zinc-300 text-xl leading-relaxed">
                                        {project.description}
                                    </p>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-8 text-orange-500 uppercase tracking-widest text-sm">Key Features</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.features.map((feature, index) => (
                                            <div key={index} className="flex items-start gap-4 p-6 bg-zinc-800/20 border border-zinc-800/50 rounded-3xl">
                                                <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                                                <span className="text-zinc-300 font-medium text-lg">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section>
                                    <h3 className="text-xl font-bold mb-8 text-orange-500 uppercase tracking-widest text-sm">Project Gallery</h3>
                                    <div className="grid grid-cols-1 gap-8">
                                        {project.screenshots.map((shot, index) => (
                                            <div key={index} className="group relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
                                                <img
                                                    src={shot}
                                                    alt={`${project.title} screenshot ${index + 1}`}
                                                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            </div>

                            {/* Right Column: Actions & Details */}
                            <div className="space-y-12">
                                <div className="p-8 bg-zinc-800/30 border border-zinc-800 rounded-[2.5rem] space-y-6 sticky top-32">
                                    <h4 className="text-lg font-bold text-center">Project Links</h4>
                                    <div className="space-y-4">
                                        {project.live_url && (
                                            <a
                                                href={project.live_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-orange-500/20 active:scale-[0.98]"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                                Launch Live Site
                                            </a>
                                        )}
                                        {project.github_url && (
                                            <a
                                                href={project.github_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-3 w-full py-5 bg-zinc-700 hover:bg-zinc-600 text-white font-bold rounded-2xl transition-all active:scale-[0.98]"
                                            >
                                                <Github className="w-5 h-5" />
                                                View Source Code
                                            </a>
                                        )}
                                    </div>

                                    <div className="pt-8 space-y-6 border-t border-zinc-700/50">
                                        <div>
                                            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3">Category</h4>
                                            <p className="font-semibold text-lg text-zinc-200">Full-Stack Application</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3">Role</h4>
                                            <p className="font-semibold text-lg text-zinc-200">Lead Backend Engineer</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold mb-3">Release Date</h4>
                                            <p className="font-semibold text-lg text-zinc-200">February 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
