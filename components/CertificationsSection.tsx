
import React, { useState } from 'react';
import type { Certification } from '../types';

interface CertificationsSectionProps {
  certifications: Certification[];
}

const CertificationsSection: React.FC<CertificationsSectionProps> = ({ certifications }) => {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <section id="certifications" className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-indigo-100 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">{cert.name}</h3>
                  <p className="text-xs sm:text-sm text-indigo-600 font-medium">{cert.year}</p>
                </div>
                {cert.image && (
                  <button onClick={() => setSelectedCert(cert.image!)} className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-xs font-medium whitespace-nowrap flex-shrink-0">View Certificate</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedCert && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8" onClick={() => setSelectedCert(null)}>
          <div className="relative w-full h-full max-w-6xl max-h-[90vh] flex flex-col">
            <button onClick={() => setSelectedCert(null)} className="absolute -top-2 right-0 sm:-top-12 sm:right-0 text-white hover:text-gray-300 text-3xl sm:text-4xl font-bold w-10 h-10 flex items-center justify-center z-10 bg-black/50 sm:bg-transparent rounded-full">&times;</button>
            <div className="flex-1 flex items-center justify-center overflow-auto">
              <img src={selectedCert} alt="Certificate" className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg shadow-2xl select-none pointer-events-none" onContextMenu={(e) => e.preventDefault()} draggable="false" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
