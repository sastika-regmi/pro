
export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string[];
  stack: string[];
  link?: string;
}

export interface SkillCategory {
    title: string;
    skills: string[];
}

export interface Certification {
    name: string;
    year: number;
    image?: string;
}

export interface Achievement {
    name: string;
}
