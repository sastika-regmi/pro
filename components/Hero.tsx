import React from 'react';

interface HeroProps {
    name: string;
}

const Hero: React.FC<HeroProps> = ({ name }) => {
    return (
        <section id="hero" className="min-h-[70vh] flex items-center justify-center text-center px-4 py-20" itemScope itemType="https://schema.org/Person">
            <div className="space-y-6">
                <div className="inline-block animate-bounce mb-4">
                    <img src="https://olivedrab-scorpion-763715.hostingersite.com/wp-content/uploads/2025/11/pp.png" alt="Sastika Regmi - Web and Software Developer Profile Picture" title="Sastika Regmi" className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl mx-auto shadow-2xl object-cover border-4 border-white select-none" onContextMenu={(e) => e.preventDefault()} draggable="false" loading="eager" width="128" height="128" />
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" itemProp="name">
                    <span className="block text-gray-800 mb-2">Hi, I'm</span>
                    <span className="block bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-3">{name}</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto" itemProp="jobTitle">Web, App & Software Designer | UI/UX Designer</p>
                <div className="flex gap-4 justify-center pt-4">
                    <a href="#projects" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-xl transition-all font-medium">View Projects</a>
                    <a href="#contact" className="px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all font-medium">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;