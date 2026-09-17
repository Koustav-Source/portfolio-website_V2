import { ProfileData } from '../types';
import { User, Target, Compass } from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileData;
}

export function AboutSection({ profile }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
            <User className="w-3.5 h-3.5" />
            <span>Background & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
            About Koustav Dey
          </h2>
          <p className="text-sm text-[#9a9b9f] mt-3 leading-relaxed">
            A focused look at the engineering philosophy, background, and technical direction guiding Koustav's software development work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Bio (2 Cols) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Photo & Bio Card */}
            <div className="bg-[#131417] border border-[#222326] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {profile.avatarUrl && (
                <div className="shrink-0">
                  <div className="w-36 h-44 sm:w-44 sm:h-52 rounded-xl overflow-hidden border-2 border-[#c29b38]/40 shadow-xl bg-[#18191c]">
                    <img
                      src={profile.avatarUrl}
                      alt={profile.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <p className="text-[10px] font-mono text-[#9a9b9f] text-center mt-2">
                    Koustav Dey · CSE Undergraduate
                  </p>
                </div>
              )}

              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-semibold text-[#ededed]">
                  Engineering Philosophy & Focus
                </h3>
                {profile.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-sm text-[#9a9b9f] leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-[#131417] border border-[#222326] rounded-xl">
                <h4 className="text-xs font-mono text-[#c29b38] uppercase tracking-wider mb-1">
                  Primary Domain
                </h4>
                <p className="text-sm text-[#ededed]">
                  Full-stack architecture, distributed backend services, and practical AI applications.
                </p>
              </div>
              <div className="p-5 bg-[#131417] border border-[#222326] rounded-xl">
                <h4 className="text-xs font-mono text-[#c29b38] uppercase tracking-wider mb-1">
                  Core Mandates
                </h4>
                <p className="text-sm text-[#ededed]">
                  Engineering &gt; decoration. Systems &gt; buzzwords. Evidence &gt; claims.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Facts Sidebar (1 Col) */}
          <div className="bg-[#131417] border border-[#222326] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2 pb-4 border-b border-[#222326]">
                <div className="p-2 bg-[#18191c] border border-[#2d2e33] rounded-lg text-[#c29b38]">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-semibold text-[#ededed]">
                  Quick Profile
                </h3>
              </div>

              <div className="space-y-4 text-sm font-mono">
                <div>
                  <span className="text-[#9a9b9f] block text-xs uppercase">Role</span>
                  <span className="text-[#ededed]">{profile.title}</span>
                </div>
                <div>
                  <span className="text-[#9a9b9f] block text-xs uppercase">Institution</span>
                  <span className="text-[#ededed]">Sister Nivedita University</span>
                </div>
                <div>
                  <span className="text-[#9a9b9f] block text-xs uppercase">Graduation Year</span>
                  <span className="text-[#ededed]">2028 (B.Tech CSE)</span>
                </div>
                <div>
                  <span className="text-[#9a9b9f] block text-xs uppercase">Location</span>
                  <span className="text-[#ededed]">Kolkata, India</span>
                </div>
                <div>
                  <span className="text-[#9a9b9f] block text-xs uppercase">Contact Email</span>
                  <span className="text-[#c29b38] break-all">{profile.email}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#222326] text-[11px] font-mono text-[#9a9b9f]">
              Ready for high-impact software engineering roles.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
