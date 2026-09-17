import { Education, Certification } from '../types';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationSectionProps {
  education: Education;
  certifications: Certification[];
}

export function EducationSection({ education, certifications }: EducationSectionProps) {
  return (
    <section id="education" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
            Education & Certifications
          </h2>
          <p className="text-sm text-[#9a9b9f] mt-3 leading-relaxed">
            Strong academic foundation in Computer Science & Engineering principles paired with specialized professional certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Education Card (2 Cols) */}
          <div className="lg:col-span-2 bg-[#131417] border border-[#222326] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-6 border-b border-[#222326]">
                <div>
                  <h3 className="text-xl font-bold text-[#ededed] mb-1">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-mono text-[#c29b38]">
                    {education.institution}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded bg-[#18191c] border border-[#2d2e33] text-xs font-mono text-[#ededed]">
                    GPA: <strong className="text-[#f4e8c1]">{education.gpa}</strong>
                  </span>
                  <span className="px-3 py-1 rounded bg-[#18191c] border border-[#2d2e33] text-xs font-mono text-[#9a9b9f]">
                    {education.period}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-[#9a9b9f] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#c29b38]" />
                  <span>Relevant Coursework</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 text-xs font-mono bg-[#18191c] text-[#ededed] border border-[#222326] rounded-md"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#222326] text-xs font-mono text-[#9a9b9f]">
              Sister Nivedita University · B.Tech CSE (Core)
            </div>
          </div>

          {/* Certifications Card (1 Col) */}
          <div className="bg-[#131417] border border-[#222326] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-6 border-b border-[#222326]">
                <div className="p-2 bg-[#18191c] border border-[#2d2e33] rounded-lg text-[#c29b38]">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-[#ededed]">
                  Certifications
                </h3>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="pb-3 border-b border-[#222326] last:border-0 last:pb-0">
                    <h4 className="text-sm font-medium text-[#ededed] mb-1">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs font-mono text-[#9a9b9f]">
                      <span>{cert.issuer}</span>
                      <span className="text-[#c29b38]">{cert.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#222326] text-[11px] font-mono text-[#9a9b9f]">
              Verified technical credentials
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
