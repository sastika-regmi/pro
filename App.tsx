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
      linkedin: "https://www.linkedin.com/in/sastika-regmi",
    },
    profile: "BIT student and UI/UX Designer with a strong foundation in user-centered design, information architecture, and interaction design. Experienced in creating intuitive, responsive interfaces guided by research, usability principles, and accessibility best practices.",
    education: {
      institution: "NCMT College Affiliated to Lincoln University (currently pursuing)",
      degree: "Bachelor of Information Technology (BIT)",
      location: "Kathmandu, Nepal",
      period: "2023 – 2028",
      details: [
        "Coursework: DSA, Networking, DBMS, AI, SAD, Digital Logic"
      ],
    },
    skills: [
      {
        title: "Programming",
        skills: ["C", "C++", "Java", "Python", "JavaScript", "PHP"],
      },
      {
        title: "Web",
        skills: ["React.js", "Node.js", "Express.js", "Tailwind", "WordPress"],
      },
      {
        title: "Database",
        skills: ["SQL", "NoSQL"],
      },
      {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "Cloudinary", "AI", "MS Office", "Canva", "Figma", "AutoCAD", "Adobe Apps"],
      },
      {
        title: "Soft Skills",
        skills: ["Problem Solving", "Communication", "Collaboration", "Time Management", "Adaptability", "Quick Learner"],
      },
      {
        title: "Languages",
        skills: ["English", "Nepali", "Hindi"],
      },
    ] as SkillCategory[],
    certifications: [
      { name: "SEO & Digital Marketing", year: 2023, image: "https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/SEO.png" },
      { name: "HamroBazar Student Partnership", year: 2024, image: "https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/Hamrobazar-scaled.jpg" },
      { name: "NCMT College Hackathon", year: 2025, image: "https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/Ncmt-hackathon.png" },
    ] as Certification[],
    experience: [
      {
        role: "SEO & Digital Marketing (Remote Job)",
        company: "Skippy Education/Visa",
        period: "2025 – ongoing",
        location: "Remote",
        description: [
          "Conducted comprehensive website audits and SEO analysis, identifying and resolving technical issues, content gaps, and user experience bottlenecks, to improve website performance and search engine crawlability, resulting in a 20% increase in user satisfaction.",
        ],
      },
    ] as Experience[],
    projects: [
      {
        title: "Durable Dress – E-Commerce",
        period: "2025",
        description: ["Full-stack clothing store with product management, secure API, and Cloudinary media storage."],
        stack: ["React", "Node", "MongoDB"],
        link: "https://github.com/ssblucky7/e-shop",
      },
      {
        title: "SmartPDF Analyzer",
        period: "2025",
        description: ["AI tool for PDF and image text extraction, summaries, and insights."],
        stack: ["Python", "Flask", "Gemini API"],
        link: "https://github.com/ssblucky7/Smart-PDF-Web-App",
      },
      {
        title: "Coffee Shop Website",
        period: "2024",
        description: ["Responsive landing site that increased online orders by 40%."],
        stack: ["HTML", "CSS", "JS"],
        link: "https://github.com/ssblucky7/coffee-shop-ssblucky7",
      },
    ] as Project[],
    achievements: [
        { name: "SEO & Digital Marketing – 2023" },
        { name: "HamroBazar Student Partnership – 2024" },
        { name: "NCMT College Hackathon – 2025" }
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