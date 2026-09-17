import { useState } from 'react';
import { Project, ProjectStatus } from '../types';
import { ExternalLink, Github, ArrowUpRight, Layers, Sparkles } from 'lucide-react';

interface FeaturedWorkProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export function FeaturedWork({ projects, onSelectProject }: FeaturedWorkProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterCategories = ['All', 'Featured', 'Active', 'Prototype', 'Research', 'Completed'];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.status === activeFilter;
  });

  // Sort by Tier (1 -> 2 -> 3)
  const sortedProjects = [...filteredProjects].sort((a, b) => a.tier - b.tier);

  const getStatusBadgeClass = (status: ProjectStatus) => {
    switch (status) {
      case 'Featured':
        return 'bg-[#c29b38]/10 text-[#f4e8c1] border-[#c29b38]/30';
      case 'Active':
        return 'bg-emerald-950/40 text-emerald-300 border-emerald-800/40';
      case 'Prototype':
        return 'bg-amber-950/40 text-amber-300 border-amber-800/40';
      case 'Research':
        return 'bg-indigo-950/40 text-indigo-300 border-indigo-800/40';
      case 'Completed':
        return 'bg-neutral-800/60 text-neutral-300 border-neutral-700/60';
      default:
        return 'bg-neutral-800/60 text-neutral-300 border-neutral-700/60';
    }
  };

  return (
    <section id="work" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>System Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
              Featured Systems & Projects
            </h2>
            <p className="text-sm text-[#9a9b9f] mt-2 max-w-xl">
              Hierarchical presentation of real-world software systems, intelligent applications, and backend architectures built with rigorous engineering standards.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-[#131417] p-1.5 rounded-lg border border-[#222326]">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all ${
                  activeFilter === cat
                    ? 'bg-[#1c1d21] text-[#ededed] shadow-sm border border-[#2d2e33]'
                    : 'text-[#9a9b9f] hover:text-[#ededed]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative bg-[#131417] hover:bg-[#16171a] border border-[#222326] hover:border-[#323338] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between ${
                project.tier === 1 ? 'md:col-span-2 lg:col-span-1 bg-gradient-to-b from-[#15161a] to-[#121316]' : ''
              }`}
            >
              <div>
                {/* Top Meta: Tier & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono text-[#9a9b9f] uppercase tracking-wider">
                    {project.category} · {project.year}
                  </span>
                  <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${getStatusBadgeClass(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Name & Tagline */}
                <h3 
                  onClick={() => onSelectProject(project)}
                  className="text-xl font-semibold text-[#ededed] group-hover:text-white transition-colors cursor-pointer flex items-center justify-between mb-2"
                >
                  <span>{project.name}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#9a9b9f] group-hover:text-[#c29b38] transition-colors" />
                </h3>
                
                <p className="text-xs font-mono text-[#c29b38]/90 mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-[#9a9b9f] line-clamp-2 mb-6 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono bg-[#18191c] text-[#9a9b9f] border border-[#222326] rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[11px] font-mono text-[#9a9b9f]">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#222326]">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-medium text-[#f4e8c1] hover:text-white underline underline-offset-4 decoration-[#c29b38]/50 hover:decoration-[#c29b38] transition-colors"
                  >
                    View Case Study →
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#9a9b9f] hover:text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-[#9a9b9f] hover:text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded transition-colors"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedProjects.length === 0 && (
          <div className="text-center py-16 bg-[#131417] border border-[#222326] rounded-xl">
            <p className="text-sm text-[#9a9b9f]">No projects found matching status "{activeFilter}".</p>
          </div>
        )}

      </div>
    </section>
  );
}
