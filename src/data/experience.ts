import { Experience } from '../types';

export const initialExperience: Experience[] = [
  {
    id: 'techgen',
    role: 'Founder & Lead Software Developer',
    company: 'The TechGen (Student Tech Initiative)',
    location: 'Kolkata, India',
    period: '2025 – Present',
    isInternship: false,
    highlights: [
      'Spearheaded an open-source technical initiative focused on collaborative, real-world project development and agile workflows.',
      'Directed architecture design, code review standards, and repository management for student developer cohorts.',
      'Mentored contributors on clean code principles, version control best practices, and systematic debugging.'
    ]
  },
  {
    id: 'ai-wallah',
    role: 'Software Developer',
    company: 'AI Wallah Internship',
    location: 'Remote',
    period: '2025',
    isInternship: true,
    highlights: [
      'Engineered and optimized backend data pipelines, integrating machine learning tools and automated workflows to improve script performance.',
      'Collaborated cross-functionally within an Agile infrastructure to execute unit testing, debugging, and code refactoring, reducing application errors.',
      'Streamlined data ingestion routines and improved query execution response times.'
    ]
  },
  {
    id: 'inamigos',
    role: 'Full Stack Developer Intern',
    company: 'InAmigos Foundation Internship',
    location: 'Remote',
    period: '2025',
    isInternship: true,
    highlights: [
      'Developed client-facing UI modules and server-side components using JavaScript frameworks to enhance end-to-end responsiveness.',
      'Optimized relational database queries to reduce API latency, following robust engineering standards for high-availability systems.',
      'Integrated RESTful APIs and ensured cross-browser layout consistency.'
    ]
  },
  {
    id: 'collegetips',
    role: 'Content Creator',
    company: 'CollegeTips.in Internship',
    location: 'Remote',
    period: '2025',
    isInternship: true,
    highlights: [
      'Successfully completed an internship at CollegeTips, contributing to campaign execution, content creation, and audience engagement initiatives.',
      'Collaborated with marketing and editorial teams to deliver structured technical and educational outreach content.'
    ]
  }
];
