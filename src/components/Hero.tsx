import { ArrowDown, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import { ProfileData } from '../types';
import { ThreeSystemsCanvas } from './ThreeSystemsCanvas';

interface HeroProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export function Hero({ profile, onOpenResume }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-[#222326]">
      {/* 3D Interactive Systems Mesh Canvas */}
      <ThreeSystemsCanvas />

      {/* Subtle grid background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f202415_1px,transparent_1px),linear-gradient(to_bottom,#1f202415_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#c29b38]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18191c] border border-[#2d2e33] text-xs font-mono text-[#c29b38] mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#c29b38] animate-pulse" />
            <span className="tracking-tight text-[#c29b38]/90">Currently building: {profile.currentStatus}</span>
          </div>

          {/* WHO & WHAT */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#ededed]">
              {profile.name}
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-[#9a9b9f] tracking-tight">
              {profile.title}
            </p>
          </div>

          {/* WHY - Positioning Statement */}
          <div className="mb-8 p-6 rounded-xl bg-[#131417]/80 border border-[#222326] shadow-sm">
            <h2 className="text-xl sm:text-2xl font-semibold text-[#f4e8c1] tracking-tight mb-3">
              {profile.secondaryPositioning}
            </h2>
            <p className="text-sm sm:text-base text-[#9a9b9f] leading-relaxed">
              Computer Science & Engineering undergraduate at Sister Nivedita University focusing on robust full-stack architecture, backend systems, and practical AI integrations. Prioritizing engineering rigor and clean design over decorative complexity.
            </p>
          </div>

          {/* WORK & Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#work"
              className="flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-md transition-all shadow-sm group"
            >
              <span>View Work</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-all shadow-sm"
            >
              <span>Download Resume</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#c29b38]" />
            </button>

            <div className="flex items-center gap-3 ml-0 sm:ml-auto pt-4 sm:pt-0">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#18191c] hover:bg-[#222326] text-[#9a9b9f] hover:text-[#ededed] border border-[#2d2e33] rounded-md transition-colors"
                title="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#18191c] hover:bg-[#222326] text-[#9a9b9f] hover:text-[#ededed] border border-[#2d2e33] rounded-md transition-colors"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Core Principles Footnote */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-[#222326] text-xs font-mono text-[#9a9b9f]">
            <div><span className="text-[#c29b38]">01.</span> Engineering &gt; Decoration</div>
            <div><span className="text-[#c29b38]">02.</span> Projects &gt; Claims</div>
            <div><span className="text-[#c29b38]">03.</span> Systems &gt; Buzzwords</div>
            <div><span className="text-[#c29b38]">04.</span> Evidence &gt; Proficiency</div>
          </div>

        </div>
      </div>
    </section>
  );
}
