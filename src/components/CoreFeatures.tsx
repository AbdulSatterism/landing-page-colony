import React from 'react';
import Image from 'next/image';

export const CoreFeatures = () => {
  return (
    <section className="bg-[#F8F9FA] pt-24 pb-16 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <p className="text-brand-green font-bold tracking-[0.15em] text-[12px] sm:text-[13px] uppercase mb-4">
            Core Features
          </p>
          
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-brand-black tracking-tight mb-5 leading-[1.15]">
            Everything You Need for Smarter<br className="hidden md:block" /> Field Visits
          </h2>
          
          <p className="text-[16px] md:text-[17px] text-gray-500 font-medium max-w-[620px] mx-auto leading-relaxed">
            From planning your first stop to recording the final visit of the day, everything stays connected.
          </p>
        </div>

        {/* Devices Image Showcase */}
        <div className="relative mx-auto max-w-[1050px] flex justify-center px-2 sm:px-0">
          <Image 
            src="/features.png" 
            alt="Colone Connection Core Features across laptop and mobile devices" 
            width={1200} 
            height={900} 
            className="w-full h-auto object-contain animate-float drop-shadow-xl"
            quality={95}
          />
        </div>

      </div>
    </section>
  );
};
