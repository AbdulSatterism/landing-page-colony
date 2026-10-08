import React from 'react';
import Image from 'next/image';

export const SalesTeam = () => {
  const features = [
    'Team overview',
    'Customer database',
    'Location management',
    'Visit activity',
    'Reports & insights'
  ];

  return (
    <section className="bg-[#F8F9FA] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-[13px] font-bold mb-6 bg-brand-green/10 text-brand-green">
              <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
              </svg>
              For Companies & Sales Teams
            </div>
            
            <h2 className="text-4xl lg:text-[46px] font-extrabold text-brand-black tracking-tight mb-6 leading-[1.12]">
              Give Your Company<br className="hidden lg:block" /> a Complete View of<br className="hidden lg:block" /> Field Sales Activity
            </h2>
            
            <p className="text-[17px] text-gray-500 font-medium mb-10 leading-[1.6] pr-4">
              A centralized way for managers to support sales representatives, customers, locations, and field activity—without slowing down the team.
            </p>
            
            {/* Features List */}
            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <svg className="flex-shrink-0 text-brand-green mr-3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="text-[15px] font-bold text-brand-black/85">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Button */}
            <button className="inline-flex items-center justify-center rounded-[14px] px-8 py-4 text-[15px] font-bold border border-gray-200 bg-white text-brand-black hover:bg-gray-50 shadow-sm transition-colors duration-200">
              Explore Company Dashboard
              <svg className="ml-2.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-[600px] lg:max-w-none lg:w-[125%] xl:w-[130%] lg:translate-x-12 z-0">
              <Image 
                src="/sales-team.png" 
                alt="Sales Team Dashboard on Tablet" 
                width={1000} 
                height={800} 
                className="w-full h-auto object-contain drop-shadow-2xl animate-float"
                quality={100}
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
