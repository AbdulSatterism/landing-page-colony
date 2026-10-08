import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export const SalesApp = () => {
  const features = [
    'Smart Route Planning',
    'Customer Information',
    'Visit History',
    'Machinery Records',
    'Follow-Up Reminders'
  ];

  return (
    <section className="relative overflow-hidden bg-[#181818] pt-16 sm:pt-24 lg:pt-24">
      {/* Middle Blurry Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[900px] md:h-[900px] rounded-full blur-[80px] md:blur-[140px] pointer-events-none opacity-[0.25] lg:opacity-[0.15]"
        style={{ backgroundColor: '#65B745' }}
      ></div>
      
      <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch">
          
          {/* Left Column - Content */}
          <div className="w-full lg:w-[50%] xl:w-[55%] max-w-xl pb-6 sm:pb-16 lg:pb-32 lg:pt-12 flex flex-col justify-center text-center lg:text-left mx-auto lg:mx-0">
            <p className="text-brand-green font-bold tracking-[0.15em] text-[11px] sm:text-[12px] uppercase mb-4 sm:mb-5">
              For Sales Representatives
            </p>
            
            <h2 className="text-4xl sm:text-[42px] lg:text-[48px] font-extrabold text-white tracking-tight mb-5 sm:mb-6 leading-[1.15] lg:leading-[1.12]">
              A Powerful Field<br className="hidden sm:block" /> Sales App, Built for<br className="hidden sm:block" /> the Road
            </h2>
            
            <p className="text-[16px] sm:text-[17px] text-gray-400 font-medium mb-10 sm:mb-12 leading-[1.6] lg:pr-4">
              Manage your entire day from your phone—from discovering nearby colonies and planning routes to recording conversations and reviewing completed visits.
            </p>
            
            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-10 sm:mb-12 text-left">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-brand-green/20 text-brand-green mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[14px] sm:text-[14.5px] font-bold text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col items-center lg:items-start mt-2 sm:mt-4">
              <Button size="lg" className="w-full sm:w-auto rounded-[16px] px-8 py-5 sm:py-6 text-[15px] sm:text-[16px] shadow-[0_8px_20px_rgba(23,184,95,0.2)] mb-3 transition-shadow hover:shadow-[0_10px_25px_rgba(23,184,95,0.3)]">
                Download the Mobile App
                <svg className="ml-2.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              </Button>
              <p className="text-[12px] text-gray-500 font-medium">
                Available on the App Store & Google Play 
              </p>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="w-full lg:w-[50%] xl:w-[45%] relative mt-8 sm:mt-12 lg:mt-0 flex justify-center lg:justify-end items-end">
            <div className="relative w-[100%] sm:w-[85%] md:w-[70%] lg:w-[135%] xl:w-[145%] aspect-[1/1] sm:aspect-[4/5] lg:aspect-auto lg:h-[800px] xl:h-[900px]">
              
              {/* Top Image: sale1.png (Profile View - Left/Behind) */}
              <div className="absolute top-[5%] lg:top-[12%] left-0 lg:left-[2%] w-[52%] lg:w-[48%] z-10 animate-float" style={{ animationDelay: '0.5s' }}>
                <Image 
                  src="/sale1.png" 
                  alt="Sales App - Profile View" 
                  width={500} 
                  height={1000} 
                  className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)] object-contain"
                  quality={100}
                />
              </div>

              {/* Bottom Image: sale2.png (Map View - Right/Front) */}
              <div className="absolute bottom-[-2%] sm:bottom-[-5%] lg:bottom-[-10%] right-0 lg:-right-[8%] w-[68%] lg:w-[68%] z-20">
                <Image 
                  src="/sale2.png" 
                  alt="Sales App - Map View" 
                  width={600} 
                  height={1200} 
                  className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.7)] object-contain object-bottom"
                  quality={100}
                  priority
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
