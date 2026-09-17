import { SkillCategory } from '../types';
import { Terminal, Cpu, Database, Layout, Code2, Sparkles } from 'lucide-react';

interface EngineeringProfileProps {
  skillCategories: SkillCategory[];
}

export function EngineeringProfile({ skillCategories }: EngineeringProfileProps) {
  const getCategoryIcon = (categoryName: string) => {
    switch (categoryName) {
      case 'Languages':
        return <Code2 className="w-4 h-4 text-[#c29b38]" />;
      case 'Frontend':
        return <Layout className="w-4 h-4 text-[#c29b38]" />;
      case 'Backend':
        return <Cpu className="w-4 h-4 text-[#c29b38]" />;
      case 'Data':
        return <Database className="w-4 h-4 text-[#c29b38]" />;
      case 'Engineering':
        return <Terminal className="w-4 h-4 text-[#c29b38]" />;
      case 'AI / Intelligent Systems':
        return <Sparkles className="w-4 h-4 text-[#c29b38]" />;
      default:
        return <Terminal className="w-4 h-4 text-[#c29b38]" />;
    }
  };

  return (
    <section id="engineering" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
            Engineering Profile
          </h2>
          <p className="text-sm text-[#9a9b9f] mt-3 leading-relaxed">
            A comprehensive breakdown of technical competencies, languages, frameworks, and system design paradigms. Grounded strictly in actual project implementations and rigorous academic foundations. No percentage bars or exaggerated claims.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-[#131417] border border-[#222326] hover:border-[#323338] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#222326]">
                  <div className="p-2 bg-[#18191c] border border-[#2d2e33] rounded-lg">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-base font-semibold text-[#ededed]">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs font-mono bg-[#18191c] text-[#ededed] border border-[#222326] hover:border-[#323338] rounded transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#222326] text-[11px] font-mono text-[#9a9b9f]">
                Verified proficiency
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
