import React from 'react';
import type { Achievement, Certification, Experience, Project, SkillCategory } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import AchievementsSection from './components/AchievementsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const resumeData = {
    name: "Sastika Regmi",
    contact: {
      phone: "+977-9841069945",
      email: "sastikaregmi746@gmail.com",
      portfolio: "https://sastikaregmi.com.np",
      github: "https://github.com/sastika-regmi", 
      linkedin: "https://www.linkedin.com/in/sastika-regmi-471023341/",
    },
    profile: "Highly motivated BIT graduating with a strong foundation in web-app and software development, database management, and network administration. Eager to apply technical skills to innovative projects.",
    education: {
      institution: "NCMT College Affiliated to Lincoln University (currently pursuing)",
      degree: "Bachelor Of Information Technology (BIT)",
      location: "Kathmandu, Nepal",
      period: "2023 – 2028",
      details: [
        "Among the top 50% of the batch",
        "Relevant coursework in DSA, Digital Logic, Network, SAD, AI, DBMS, Technopreneurship/Business."
      ],
    },
    skills: [
      {
        title: "Technical",
        skills: ["PHP", "WordPress", "SQL", "NoSQL", "React.js", "Node.js", "C/C++", "Java", "Python", "GitHub", "Git", "AI Prompting"],
      },
      {
        title: "Tools",
        skills: ["Azure", "MongoDB", "Firebase", "AI", "VS Code", "MS Office", "Canva", "Figma", "AutoCAD", "Adobe Apps"],
      },
    ] as SkillCategory[],
    certifications: [
      { name: "SEO & Digital Marketing", year: 2023, image: "https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/SEO.png" },
      { name: "HamroBazar Student Partnership", year: 2024, image: "https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/Hamrobazar-scaled.jpg" },
      { name: "Hackathon Runner-up as Team Coder", year: 2025, image: "https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/Ncmt-hackathon.png" },
    ] as Certification[],
    experience: [
      {
        role: "SEO & Digital Marketing",
        company: "Skippy Education/Visa",
        period: "2025 – ongoing",
        location: "Kathmandu, Nepal",
        description: [
          "Conducted comprehensive website audits and SEO analysis, identifying and resolving technical issues, content gaps, and user experience bottlenecks, to improve website performance and search engine crawlability, resulting in a 20% increase in user satisfaction.",
        ],
      },
    ] as Experience[],
    projects: [
      {
        title: "Durable Dress (E-Shop)",
        period: "Jan 2025 – Ongoing",
        description: ["An E-commerce Website for clothing brand as Durable Dress."],
        stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "Cloudinary", "MongoDB", "Resend", "VS Code", "GitHub", "AI"],
        link: "https://github.com/ssblucky7/e-shop",
      },
      {
        title: "SmartPDF Analyzer",
        period: "Jan 2025 – Mar 2025",
        description: ["AI tool to analyze PDFs and images, giving quick insights and answers."],
        stack: ["Python", "Flask", "Gemini API", "Standard Dev Tools"],
        link: "https://github.com/ssblucky7/Smart-PDF-Web-App",
      },
      {
        title: "Coffee Shop GitHub",
        period: "Oct 2024 – Nov 2024",
        description: [
          "Built a mobile-responsive landing site for a coffee cafe, increasing online orders by 40 percent.",
          "Added a simple menu and feedback form to improve the overall user experience."
        ],
        stack: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/ssblucky7/coffee-shop-ssblucky7",
      },
    ] as Project[],
    achievements: [
        { name: "SEO & Digital Marketing – 2023" },
        { name: "HamroBazar Student Partnership – 2024" },
        { name: "Runner-up as Team Coder in NCMT College Hackathon event among 10+ teams participants." }
    ] as Achievement[]
  };

  return (
    <div className="min-h-screen">
      <Header contact={resumeData.contact} name={resumeData.name} />
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Hero name={resumeData.name} />
          <AboutSection profile={resumeData.profile} />
          <EducationSection education={resumeData.education} />
          <SkillsSection skills={resumeData.skills} />
          <ExperienceSection experience={resumeData.experience} />
          <ProjectsSection projects={resumeData.projects} />
          <CertificationsSection certifications={resumeData.certifications} />
          <AchievementsSection achievements={resumeData.achievements} />
        </div>
      </main>
      <Footer name={resumeData.name} contact={resumeData.contact} />
    </div>
  );
};

export default App;