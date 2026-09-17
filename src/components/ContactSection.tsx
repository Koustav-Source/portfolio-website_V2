import { useState } from 'react';
import { ProfileData } from '../types';
import { Mail, Github, Linkedin, Copy, Check, Send } from 'lucide-react';

interface ContactSectionProps {
  profile: ProfileData;
}

export function ContactSection({ profile }: ContactSectionProps) {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-[#222326]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-[#c29b38] uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ededed]">
            Get in Touch
          </h2>
          <p className="text-sm text-[#9a9b9f] mt-3 leading-relaxed">
            For software engineering opportunities, technical discussions, or systems architecture collaborations, connect directly via email or professional networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          
          {/* Email Card */}
          <div className="bg-[#131417] border border-[#222326] hover:border-[#323338] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="p-3 bg-[#18191c] border border-[#2d2e33] rounded-lg w-fit text-[#c29b38] mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#ededed] mb-1">
                Email
              </h3>
              <p className="text-xs font-mono text-[#9a9b9f] mb-4 break-all">
                {profile.email}
              </p>
            </div>

            <button
              onClick={handleCopyEmail}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#c29b38]" />
                  <span>Copy Email Address</span>
                </>
              )}
            </button>
          </div>

          {/* GitHub Card */}
          <div className="bg-[#131417] border border-[#222326] hover:border-[#323338] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="p-3 bg-[#18191c] border border-[#2d2e33] rounded-lg w-fit text-[#c29b38] mb-4">
                <Github className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#ededed] mb-1">
                GitHub
              </h3>
              <p className="text-xs font-mono text-[#9a9b9f] mb-4 truncate">
                {profile.github}
              </p>
            </div>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-all"
            >
              <span>View Profile</span>
              <Send className="w-3.5 h-3.5 text-[#c29b38]" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#131417] border border-[#222326] hover:border-[#323338] rounded-xl p-6 transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="p-3 bg-[#18191c] border border-[#2d2e33] rounded-lg w-fit text-[#c29b38] mb-4">
                <Linkedin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-[#ededed] mb-1">
                LinkedIn
              </h3>
              <p className="text-xs font-mono text-[#9a9b9f] mb-4 truncate">
                {profile.linkedin}
              </p>
            </div>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-md transition-all"
            >
              <span>Connect on LinkedIn</span>
              <Send className="w-3.5 h-3.5 text-[#c29b38]" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
