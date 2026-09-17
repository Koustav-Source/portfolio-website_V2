import { useEffect } from 'react';
import { ProfileData } from '../types';
import { X, Download, ExternalLink, FileText, GraduationCap, Briefcase, Code, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export function ResumeModal({ isOpen, onClose, profile }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121316] border border-[#2d2e33] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121316]/95 backdrop-blur border-b border-[#222326]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-xs font-mono rounded bg-[#c29b38]/10 text-[#f4e8c1] border border-[#c29b38]/30">
              {profile.resume.version}
            </span>
            <span className="text-xs font-mono text-[#9a9b9f]">
              Updated: {profile.resume.updatedDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={profile.resume.pdfPath}
              download={profile.resume.filename}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-md transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-2 text-[#9a9b9f] hover:text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 font-['Plus_Jakarta_Sans',sans-serif] bg-[#0c0d0e]">
          
          {/* Resume Header Document Style */}
          <div className="text-center pb-8 border-b border-[#222326]">
            <h1 className="text-3xl font-bold text-[#ededed] tracking-tight mb-1">
              {profile.name}
            </h1>
            <p className="text-base font-semibold text-[#c29b38] mb-3">
              {profile.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#9a9b9f]">
              <span>{profile.phone}</span>
              <span>•</span>
              <span>{profile.email}</span>
              <span>•</span>
              <span>Kolkata, India</span>
            </div>
          </div>

          {/* About Me */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#c29b38] uppercase tracking-widest flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>About Me</span>
            </h2>
            <p className="text-sm text-[#9a9b9f] leading-relaxed">
              {profile.bio[0]} {profile.bio[1]}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#c29b38] uppercase tracking-widest flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            <div className="p-4 bg-[#131417] border border-[#222326] rounded-xl flex flex-col sm:flex-row justify-between gap-2">
              <div>
                <h3 className="text-sm font-semibold text-[#ededed]">Bachelor of Technology, CSE (Core)</h3>
                <p className="text-xs font-mono text-[#c29b38]">Sister Nivedita University</p>
              </div>
              <div className="text-right sm:text-right text-xs font-mono text-[#9a9b9f]">
                <p>2024–2028</p>
                <p className="text-[#f4e8c1]">GPA - 8.79</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#c29b38] uppercase tracking-widest flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Experience</span>
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-[#131417] border border-[#222326] rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[#ededed]">Founder & Lead Software Developer</h3>
                    <p className="text-xs font-mono text-[#c29b38]">The TechGen (Student Tech Initiative)</p>
                  </div>
                  <span className="text-xs font-mono text-[#9a9b9f]">2025 – Present</span>
                </div>
                <p className="text-xs text-[#9a9b9f]">Spearheaded an open-source technical initiative focused on collaborative, real-world project development and agile workflows.</p>
              </div>

              <div className="p-4 bg-[#131417] border border-[#222326] rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[#ededed]">Software Developer</h3>
                    <p className="text-xs font-mono text-[#c29b38]">AI Wallah Internship</p>
                  </div>
                  <span className="text-xs font-mono text-[#9a9b9f]">2025</span>
                </div>
                <p className="text-xs text-[#9a9b9f]">Engineered and optimized backend data pipelines, integrating machine learning tools and automated workflows to improve script performance.</p>
              </div>

              <div className="p-4 bg-[#131417] border border-[#222326] rounded-xl">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-sm font-semibold text-[#ededed]">Full Stack Developer Intern</h3>
                    <p className="text-xs font-mono text-[#c29b38]">InAmigos Foundation Internship</p>
                  </div>
                  <span className="text-xs font-mono text-[#9a9b9f]">2025</span>
                </div>
                <p className="text-xs text-[#9a9b9f]">Developed client-facing UI modules and server-side components using JavaScript frameworks to enhance end-to-end responsiveness.</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-[#c29b38] uppercase tracking-widest flex items-center gap-2">
              <Code className="w-4 h-4" />
              <span>Skills & Competencies</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
              <div className="p-3 bg-[#131417] border border-[#222326] rounded-lg text-[#ededed]">Java Core & OOPs</div>
              <div className="p-3 bg-[#131417] border border-[#222326] rounded-lg text-[#ededed]">React JS & Node.js</div>
              <div className="p-3 bg-[#131417] border border-[#222326] rounded-lg text-[#ededed]">JS + HTML + CSS</div>
              <div className="p-3 bg-[#131417] border border-[#222326] rounded-lg text-[#ededed]">Prompt Engineering</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
