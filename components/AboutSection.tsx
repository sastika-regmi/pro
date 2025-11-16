import React from 'react';

interface AboutSectionProps {
    profile: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
    return (
        <section id="about" className="py-16 sm:py-20">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">About Me</span>
                </h2>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-10 border border-indigo-100">
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">{profile}</p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;