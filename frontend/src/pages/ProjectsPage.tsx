import React, { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import { mockProjects } from '../types/project';
import { Plus } from 'lucide-react';

const ProjectsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-24 pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col gap-6 mb-16">
                    <div className="space-y-4">
                        <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm">Portfolio</span>
                        <h1 className="text-4xl md:text-7xl font-black">All Projects</h1>
                    </div>
                    <p className="text-zinc-500 max-w-2xl text-xl leading-relaxed">
                        An archive of my technical journey, from enterprise-grade backend systems to experimental web applications.
                    </p>
                </div>

                {/* Full Grid View */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {mockProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                    {/* Coming Soon Card */}
                    <div className="group relative bg-zinc-900/50 border border-zinc-800 border-dashed rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full">
                        <div className="relative aspect-video overflow-hidden bg-zinc-800/30 flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent"></div>
                            <Plus className="w-12 h-12 text-zinc-700 group-hover:text-orange-500/50 transition-colors duration-500" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow items-center justify-center text-center">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                                Coming Soon
                            </h3>
                            <p className="text-zinc-500 text-sm">
                                More exciting projects are being uploaded. Stay tuned!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
