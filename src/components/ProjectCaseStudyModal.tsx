import { useEffect } from 'react';
import { Project } from '../types';
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Cpu, FileText, Layers } from 'lucide-react';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectCaseStudyModal({ project, onClose }: ProjectCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121316] border border-[#2d2e33] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#121316]/95 backdrop-blur border-b border-[#222326]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono rounded bg-[#c29b38]/10 text-[#f4e8c1] border border-[#c29b38]/30">
              {project.status}
            </span>
            <span className="text-xs font-mono text-[#9a9b9f]">
              {project.category} · {project.year}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9a9b9f] hover:text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded-lg transition-colors"
            title="Close (Esc)"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content Scrollable */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-['Plus_Jakarta_Sans',sans-serif]">
          
          {/* Title & Tagline */}
          <div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#ededed] mb-2">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base font-mono text-[#c29b38]">
              {project.tagline}
            </p>
          </div>

          {/* Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-6 border-b border-[#222326]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-md transition-all shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-semibold bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-all"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Repository</span>
              </a>
            )}
          </div>

          {/* Technical Stack */}
          <div>
            <h3 className="text-xs font-mono text-[#9a9b9f] uppercase tracking-wider mb-3">
              Technologies Utilized
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-[#18191c] text-[#ededed] border border-[#2d2e33] rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-3 p-5 bg-[#16171a] border border-[#222326] rounded-xl">
            <h3 className="text-sm font-semibold text-[#f4e8c1] uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#c29b38]" />
              <span>System Overview</span>
            </h3>
            <p className="text-sm sm:text-base text-[#9a9b9f] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="space-y-3 p-5 bg-[#16171a] border border-[#222326] rounded-xl">
            <h3 className="text-sm font-semibold text-[#f4e8c1] uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>The Engineering Problem</span>
            </h3>
            <p className="text-sm sm:text-base text-[#9a9b9f] leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Engineering Approach */}
          <div className="space-y-3 p-5 bg-[#16171a] border border-[#222326] rounded-xl">
            <h3 className="text-sm font-semibold text-[#f4e8c1] uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#c29b38]" />
              <span>Engineering Implementation</span>
            </h3>
            <p className="text-sm sm:text-base text-[#9a9b9f] leading-relaxed">
              {project.engineering}
            </p>
          </div>

          {/* Architecture Diagram Box */}
          {project.architectureDetails && (
            <div className="space-y-3 p-5 bg-[#0f1013] border border-[#2d2e33] rounded-xl font-mono">
              <h3 className="text-xs text-[#c29b38] uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4" />
                <span>Technical Architecture Pipeline</span>
              </h3>
              <div className="p-4 bg-[#18191c] border border-[#222326] rounded-lg text-xs text-[#ededed] overflow-x-auto whitespace-nowrap">
                {project.architectureDetails}
              </div>
            </div>
          )}

          {/* Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono text-[#9a9b9f] uppercase tracking-wider">
              Key Verified Features
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 bg-[#16171a] border border-[#222326] rounded-lg text-sm text-[#ededed]">
                  <CheckCircle2 className="w-4 h-4 text-[#c29b38] shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Engineering Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-[#9a9b9f] uppercase tracking-wider">
                Engineering Challenges & Solutions
              </h3>
              <div className="space-y-3">
                {project.challenges.map((chal, idx) => (
                  <div key={idx} className="p-4 bg-[#16171a] border border-[#222326] rounded-xl text-sm text-[#9a9b9f] leading-relaxed">
                    <span className="font-mono text-[#c29b38] block mb-1">Challenge #{idx + 1}</span>
                    {chal}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 px-6 py-4 bg-[#121316]/95 backdrop-blur border-t border-[#222326] flex items-center justify-between">
          <span className="text-xs font-mono text-[#9a9b9f]">
            Status: <span className="text-[#f4e8c1]">{project.status}</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-colors"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
