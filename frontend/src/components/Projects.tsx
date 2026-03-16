import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { mockProjects } from '../types/project';

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
                    <div className="space-y-4">
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Portfolio</span>
                        <h2 className="text-4xl md:text-6xl font-black">Featured Projects</h2>
                    </div>
                    <div className="flex flex-col gap-6">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 text-orange-500 font-bold hover:text-orange-400 transition-colors group"
                        >
                            View All Projects
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                </div>

                {/* Home Page Grid - Showing only the first 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockProjects.slice(0, 3).map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>

                {/* { Call to Action }}
                <div className="mt-20 p-12 bg-zinc-900/30 border border-zinc-800 rounded-[3rem] text-center space-y-8">
                    <h3 className="text-2xl font-bold">Want to see more?</h3>
                    <p className="text-zinc-400 max-w-lg mx-auto">
                        I'm always working on new and exciting projects. Check out my GitHub for more open-source contributions.
                    </p>
                    <a
                        href="https://github.com/SikandarRajput"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-300"
                    >
                        Visit GitHub Profile
                    </a>
                </div> */}
            </div>
        </section>
    );
};

export default Projects;
