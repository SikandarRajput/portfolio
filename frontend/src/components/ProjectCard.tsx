import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Project } from '../types/project';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const navigate = useNavigate();

    return (
        <div className="group relative bg-zinc-900/50 border border-zinc-800 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 flex flex-col h-full">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 gap-4">
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} source code`}
                            className="p-2 bg-zinc-900/80 border border-zinc-800 rounded-full hover:bg-orange-500 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    )}
                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} live demo`}
                            className="p-2 bg-zinc-900/80 border border-zinc-800 rounded-full hover:bg-orange-500 transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech_stack.slice(0, 3).map((tech, index) => (
                        <span
                            key={`${tech}-${index}`}
                            className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold bg-zinc-800 text-zinc-400 rounded-md border border-zinc-700/50"
                        >
                            {tech}
                        </span>
                    ))}
                    {project.tech_stack.length > 3 && (
                        <span className="text-[10px] text-zinc-500 self-center">+{project.tech_stack.length - 3} more</span>
                    )}
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    {project.title}
                </h3>

                {/* Business Impact Highlighting */}
                <div className="mb-6 p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
                    <p className="text-xs font-bold text-orange-400 uppercase tracking-wider mb-1">Business Impact</p>
                    <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                        {project.impact}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => navigate(`/projects/${project.id}`)}
                    className="w-full mt-auto py-3 px-4 bg-zinc-800/50 border border-zinc-700 rounded-xl font-medium text-sm flex items-center justify-center gap-2 hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group/btn"
                >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
