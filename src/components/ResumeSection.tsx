import { ProfileData } from '../types';
import { FileText, Download, ExternalLink, Calendar, ShieldCheck } from 'lucide-react';

interface ResumeSectionProps {
  profile: ProfileData;
  onOpenResume: () => void;
}

export function ResumeSection({ profile, onOpenResume }: ResumeSectionProps) {
  return (
    <section id="resume" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Canonical Asset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
            Resume & Documentation
          </h2>
          <p className="text-sm text-[#9a9b9f] mt-3 leading-relaxed">
            The entire portfolio references a single canonical resume asset ensuring synchronized version control and up-to-date credential representation.
          </p>
        </div>

        {/* Resume Card */}
        <div className="bg-[#131417] border border-[#222326] rounded-2xl p-8 sm:p-10 max-w-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c29b38]/5 blur-3xl pointer-events-none rounded-full" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 pb-8 border-b border-[#222326]">
            <div className="flex items-start gap-4">
              <div className="p-3.5 bg-[#18191c] border border-[#2d2e33] rounded-xl text-[#c29b38] shrink-0">
                <FileText className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#ededed] mb-1">
                  {profile.name} — Resume
                </h3>
                <p className="text-xs font-mono text-[#9a9b9f]">
                  Canonical PDF Document · Version {profile.resume.version}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#18191c] border border-[#2d2e33] text-xs font-mono text-[#f4e8c1]">
              <Calendar className="w-3.5 h-3.5 text-[#c29b38]" />
              <span>Resume updated: {profile.resume.updatedDate}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="p-4 bg-[#16171a] border border-[#222326] rounded-xl">
              <span className="text-xs font-mono text-[#9a9b9f] block mb-1">File Format</span>
              <span className="text-sm font-semibold text-[#ededed]">PDF (Standardized Document)</span>
            </div>
            <div className="p-4 bg-[#16171a] border border-[#222326] rounded-xl">
              <span className="text-xs font-mono text-[#9a9b9f] block mb-1">Verification</span>
              <span className="text-sm font-semibold text-[#ededed] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Factual Data</span>
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-md transition-all shadow-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Resume Preview</span>
            </button>

            <a
              href={profile.resume.pdfPath}
              download={profile.resume.filename}
              className="flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-all"
            >
              <Download className="w-4 h-4 text-[#c29b38]" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
