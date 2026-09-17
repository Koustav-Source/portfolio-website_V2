import { useState, FormEvent } from 'react';
import { ProfileData, Project } from '../types';
import { X, Shield, Lock, Save, RotateCcw, Check, FileText, Database } from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onUpdateProfile: (newProfile: ProfileData) => void;
  projects: Project[];
  onUpdateProjects: (newProjects: Project[]) => void;
  onResetDefaults: () => void;
}

export function AdminPanel({
  isOpen,
  onClose,
  profile,
  onUpdateProfile,
  projects,
  onUpdateProjects,
  onResetDefaults,
}: AdminPanelProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'resume'>('profile');

  // Form states
  const [currentStatus, setCurrentStatus] = useState(profile.currentStatus);
  const [resumeVersion, setResumeVersion] = useState(profile.resume.version);
  const [resumeDate, setResumeDate] = useState(profile.resume.updatedDate);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (pin === '2026' || pin === 'admin123') {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleSaveProfile = (e: FormEvent) => {
    e.preventDefault();
    const updated: ProfileData = {
      ...profile,
      currentStatus,
      resume: {
        ...profile.resume,
        version: resumeVersion,
        updatedDate: resumeDate,
      }
    };
    onUpdateProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleToggleProjectStatus = (projectId: string, newStatus: Project['status']) => {
    const updated = projects.map(p => p.id === projectId ? { ...p, status: newStatus } : p);
    onUpdateProjects(updated);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] bg-[#121316] border border-[#2d2e33] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#121316] border-b border-[#222326]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#18191c] border border-[#2d2e33] rounded-lg text-[#c29b38]">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#ededed]">
                Private Engineering Admin
              </h2>
              <p className="text-[10px] font-mono text-[#9a9b9f]">
                Secure portfolio configuration & state manager
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#9a9b9f] hover:text-[#ededed] bg-[#18191c] hover:bg-[#222326] border border-[#2d2e33] rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Authentication Gate */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <div className="p-4 bg-[#18191c] border border-[#2d2e33] rounded-2xl text-[#c29b38] mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#ededed] mb-2">
              Authentication Required
            </h3>
            <p className="text-sm text-[#9a9b9f] max-w-sm mb-6">
              Enter the secure engineering admin PIN to modify portfolio configuration and project metadata. <br />
              <span className="text-[11px] font-mono text-[#c29b38] mt-1 block">(Default PIN: <code className="bg-[#18191c] px-1.5 py-0.5 rounded border border-[#2d2e33]">2026</code>)</span>
            </p>

            <form onSubmit={handleLogin} className="w-full max-w-xs space-y-4">
              <input
                type="password"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                placeholder="Enter PIN..."
                className="w-full px-4 py-2.5 text-center font-mono text-lg bg-[#18191c] border border-[#2d2e33] focus:border-[#c29b38] rounded-xl text-[#ededed] outline-none transition-colors"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-rose-400 font-mono">Invalid PIN. Try '2026'.</p>
              )}
              <button
                type="submit"
                className="w-full py-2.5 text-xs font-semibold tracking-wider uppercase bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-xl transition-all shadow-sm"
              >
                Authenticate Session
              </button>
            </form>
          </div>
        ) : (
          /* Admin Dashboard */
          <div className="flex flex-col flex-1 overflow-hidden">
            
            {/* Tabs */}
            <div className="flex items-center gap-2 px-6 pt-4 bg-[#16171a] border-b border-[#222326]">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors ${
                  activeTab === 'profile'
                    ? 'border-[#c29b38] text-[#f4e8c1]'
                    : 'border-transparent text-[#9a9b9f] hover:text-[#ededed]'
                }`}
              >
                Profile & Status
              </button>
              <button
                onClick={() => setActiveTab('resume')}
                className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors ${
                  activeTab === 'resume'
                    ? 'border-[#c29b38] text-[#f4e8c1]'
                    : 'border-transparent text-[#9a9b9f] hover:text-[#ededed]'
                }`}
              >
                Resume Version
              </button>
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 text-xs font-medium border-b-2 transition-colors ${
                  activeTab === 'projects'
                    ? 'border-[#c29b38] text-[#f4e8c1]'
                    : 'border-transparent text-[#9a9b9f] hover:text-[#ededed]'
                }`}
              >
                Project Statuses
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              
              {activeTab === 'profile' && (
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-[#9a9b9f] uppercase tracking-wider mb-2">
                      Current Status (Hero Indicator)
                    </label>
                    <input
                      type="text"
                      value={currentStatus}
                      onChange={(e) => setCurrentStatus(e.target.value)}
                      className="w-full px-4 py-2.5 text-sm bg-[#18191c] border border-[#2d2e33] focus:border-[#c29b38] rounded-xl text-[#ededed] outline-none transition-colors"
                    />
                    <p className="text-[11px] font-mono text-[#9a9b9f] mt-1.5">
                      Updates the live badge displayed at the top of the hero section.
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#222326]">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-xl transition-all shadow-sm"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                    {savedSuccess && (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <Check className="w-4 h-4" /> Changes saved successfully!
                      </span>
                    )}
                  </div>
                </form>
              )}

              {activeTab === 'resume' && (
                <form onSubmit={handleSaveProfile} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[#9a9b9f] uppercase tracking-wider mb-2">
                        Resume Version
                      </label>
                      <input
                        type="text"
                        value={resumeVersion}
                        onChange={(e) => setResumeVersion(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm font-mono bg-[#18191c] border border-[#2d2e33] focus:border-[#c29b38] rounded-xl text-[#ededed] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#9a9b9f] uppercase tracking-wider mb-2">
                        Last Updated Date
                      </label>
                      <input
                        type="text"
                        value={resumeDate}
                        onChange={(e) => setResumeDate(e.target.value)}
                        className="w-full px-4 py-2.5 text-sm font-mono bg-[#18191c] border border-[#2d2e33] focus:border-[#c29b38] rounded-xl text-[#ededed] outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[#222326]">
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold bg-[#ededed] text-[#0c0d0e] hover:bg-white rounded-xl transition-all shadow-sm"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Update Resume Metadata</span>
                    </button>
                    {savedSuccess && (
                      <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
                        <Check className="w-4 h-4" /> Updated successfully!
                      </span>
                    )}
                  </div>
                </form>
              )}

              {activeTab === 'projects' && (
                <div className="space-y-4">
                  <h3 className="text-xs font-mono text-[#9a9b9f] uppercase tracking-wider">
                    Quick Project Status Manager
                  </h3>
                  <div className="space-y-3">
                    {projects.map((proj) => (
                      <div key={proj.id} className="flex items-center justify-between p-3 bg-[#18191c] border border-[#2d2e33] rounded-xl">
                        <div>
                          <h4 className="text-sm font-semibold text-[#ededed]">{proj.name}</h4>
                          <span className="text-[10px] font-mono text-[#9a9b9f]">{proj.category}</span>
                        </div>
                        <select
                          value={proj.status}
                          onChange={(e) => handleToggleProjectStatus(proj.id, e.target.value as Project['status'])}
                          className="px-3 py-1.5 text-xs font-mono bg-[#131417] border border-[#222326] text-[#ededed] rounded-lg outline-none"
                        >
                          <option value="Featured">Featured</option>
                          <option value="Active">Active</option>
                          <option value="Prototype">Prototype</option>
                          <option value="Research">Research</option>
                          <option value="Completed">Completed</option>
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Footer */}
            <div className="px-6 py-4 bg-[#16171a] border-t border-[#222326] flex items-center justify-between">
              <button
                onClick={onResetDefaults}
                className="flex items-center gap-1.5 text-xs font-mono text-rose-400 hover:text-rose-300 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset to Defaults</span>
              </button>
              <button
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold bg-[#18191c] hover:bg-[#222326] text-[#ededed] border border-[#2d2e33] rounded-lg transition-colors"
              >
                Close Admin
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
