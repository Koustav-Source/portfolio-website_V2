import { useState, useEffect } from 'react';
import { initialProfile } from './data/profile';
import { initialProjects } from './data/projects';
import { initialExperience } from './data/experience';
import { initialEducation } from './data/education';
import { initialSkills } from './data/skills';
import { initialCertifications } from './data/certifications';
import { Project, ProfileData } from './types';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeaturedWork } from './components/FeaturedWork';
import { ProjectCaseStudyModal } from './components/ProjectCaseStudyModal';
import { EngineeringProfile } from './components/EngineeringProfile';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EducationSection } from './components/EducationSection';
import { AboutSection } from './components/AboutSection';
import { ResumeSection } from './components/ResumeSection';
import { ContactSection } from './components/ContactSection';
import { AdminPanel } from './components/AdminPanel';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  // Load state from localStorage if available, or fall back to initial data
  const [profile, setProfile] = useState<ProfileData>(() => {
    const saved = localStorage.getItem('koustav_profile');
    return saved ? JSON.parse(saved) : initialProfile;
  });

  const [projects, setProjects] = useState<Project[]>(() => {
    const saved = localStorage.getItem('koustav_projects');
    return saved ? JSON.parse(saved) : initialProjects;
  });

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [adminOpen, setAdminOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('koustav_profile', JSON.stringify(profile));
  }, [profile]);

  useEffect(() => {
    localStorage.setItem('koustav_projects', JSON.stringify(projects));
  }, [projects]);

  const handleResetDefaults = () => {
    localStorage.removeItem('koustav_profile');
    localStorage.removeItem('koustav_projects');
    setProfile(initialProfile);
    setProjects(initialProjects);
    setAdminOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0d0e] text-[#ededed] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#c29b38]/30 selection:text-[#f4e8c1]">
      <Navbar 
        onOpenAdmin={() => setAdminOpen(true)} 
        onOpenResume={() => setResumeModalOpen(true)} 
      />

      <main>
        <Hero 
          profile={profile} 
          onOpenResume={() => setResumeModalOpen(true)} 
        />
        
        <FeaturedWork 
          projects={projects} 
          onSelectProject={(proj) => setSelectedProject(proj)} 
        />

        <EngineeringProfile 
          skillCategories={initialSkills} 
        />

        <ExperienceTimeline 
          experiences={initialExperience} 
        />

        <EducationSection 
          education={initialEducation} 
          certifications={initialCertifications} 
        />

        <AboutSection 
          profile={profile} 
        />

        <ResumeSection 
          profile={profile} 
          onOpenResume={() => setResumeModalOpen(true)} 
        />

        <ContactSection 
          profile={profile} 
        />
      </main>

      <Footer />

      {/* Modals */}
      <ProjectCaseStudyModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      <ResumeModal 
        isOpen={resumeModalOpen} 
        onClose={() => setResumeModalOpen(false)} 
        profile={profile} 
      />

      <AdminPanel 
        isOpen={adminOpen} 
        onClose={() => setAdminOpen(false)} 
        profile={profile} 
        onUpdateProfile={setProfile} 
        projects={projects} 
        onUpdateProjects={setProjects} 
        onResetDefaults={handleResetDefaults} 
      />
    </div>
  );
}
