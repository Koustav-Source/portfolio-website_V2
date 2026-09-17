export type ProjectStatus = 'Featured' | 'Active' | 'Prototype' | 'Research' | 'Completed';

export type ProjectTier = 1 | 2 | 3;

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: string;
  tier: ProjectTier;
  status: ProjectStatus;
  year: string;
  stack: string[];
  description: string;
  overview: string;
  problem: string;
  engineering: string;
  architectureDetails: string;
  keyFeatures: string[];
  challenges: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  isInternship: boolean;
  highlights: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  gpa: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  type: 'Technical' | 'Job Simulation' | 'Professional Competency';
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  secondaryPositioning: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  currentPortfolio: string;
  currentStatus: string;
  avatarUrl?: string;
  bio: string[];
  resume: {
    filename: string;
    version: string;
    updatedDate: string;
    pdfPath: string;
  };
}
