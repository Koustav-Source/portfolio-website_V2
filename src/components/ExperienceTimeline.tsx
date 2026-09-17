import { Experience } from '../types';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Career</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
            Experience & Internships
          </h2>
          <p className="text-sm text-[#9a9b9f] mt-3 leading-relaxed">
            Achievement-oriented experience spanning software development, full-stack engineering, and technical leadership initiatives.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#222326] ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#18191c] border-2 border-[#c29b38] group-hover:bg-[#c29b38] transition-colors" />

              <div className="bg-[#131417] border border-[#222326] hover:border-[#323338] rounded-xl p-6 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-[#ededed] group-hover:text-white transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-mono text-[#c29b38]">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-mono text-[#9a9b9f]">
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    )}
                    <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#18191c] border border-[#2d2e33]">
                      <Calendar className="w-3.5 h-3.5 text-[#c29b38]" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#222326]">
                  <ul className="space-y-2.5">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#9a9b9f] leading-relaxed">
                        <span className="text-[#c29b38] mt-1">▪</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
