import React from 'react';
import Image from 'next/image';
import { Button } from './ui/Button';

export const ConnectedPlatform = () => {
  const mobileFeatures = [
    'Plan daily routes',
    'Find nearby colonies',
    'Manage customer info',
    'Record visits',
    'Add notes',
    'Track machinery',
    'Follow up with customers'
  ];

  const dashboardFeatures = [
    'Support sales teams',
    'Manage territories',
    'Organize customers',
    'Review visit activity',
    'Track team progress',
    'Centralize records'
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-green font-bold tracking-[0.15em] text-[12px] uppercase mb-4">
            One Connected Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-brand-black tracking-tight mb-5 leading-[1.2]">
            Built for Sales Representatives.<br className="hidden md:block" /> Designed for Companies.
          </h2>
          <p className="text-[17px] text-gray-500 font-medium">
            Two purpose-built experiences that keep everyone aligned and every customer<br className="hidden lg:block" /> interaction connected.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* Left Card - Mobile App */}
          <div 
            className="relative rounded-[32px] overflow-hidden p-10 lg:p-14" 
            style={{ background: 'linear-gradient(135deg, #408E1A 0%, #17B85F 100%)' }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-grow">
                <p className="text-white/80 font-bold tracking-[0.1em] text-[12px] uppercase mb-3">
                  Sales Representative
                </p>
                <h3 className="text-3xl lg:text-[34px] font-bold text-white mb-10">
                  Mobile App
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-4 mb-14">
                  {mobileFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-white/20 text-white mr-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-[14px] lg:text-[14.5px] font-medium text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Button variant="ghost" className="bg-white !text-brand-black hover:bg-gray-50 rounded-[14px] px-8 py-5 text-[15px] font-bold border-0 shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-all hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)]">
                  Download App
                  <svg className="ml-2.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </Button>
              </div>
            </div>
            
            {/* Background Icon Image */}
            <div className="absolute -bottom-10 -right-6 w-[280px] h-[280px] pointer-events-none">
              <Image 
                src="/mobile-icon.png" 
                alt="Mobile Icon Background" 
                fill
                className="object-contain object-bottom right-0"
                quality={100}
              />
            </div>
          </div>

          {/* Right Card - Dashboard */}
          <div 
            className="relative rounded-[32px] overflow-hidden p-10 lg:p-14"
            style={{ backgroundColor: '#252525' }}
          >
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex-grow">
                <p className="text-brand-green font-bold tracking-[0.1em] text-[12px] uppercase mb-3">
                  Managers & Administrators
                </p>
                <h3 className="text-3xl lg:text-[34px] font-bold text-white mb-10">
                  Company Dashboard
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-4 mb-14">
                  {dashboardFeatures.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="flex-shrink-0 flex items-center justify-center w-[20px] h-[20px] rounded-full bg-[#354737] text-brand-green mr-3">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <span className="text-[14px] lg:text-[14.5px] font-medium text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-auto">
                <Button className="bg-brand-green text-white hover:bg-brand-green-dark rounded-[14px] px-8 py-5 text-[15px] font-bold border-0 shadow-[0_8px_30px_rgba(23,184,95,0.4)] transition-all">
                  Explore Dashboard
                  <svg className="ml-2.5" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                </Button>
              </div>
            </div>

            {/* Background Icon Image */}
            <div className="absolute -bottom-10 -right-6 w-[280px] h-[280px] pointer-events-none">
              <Image 
                src="/dashboard-icon.png" 
                alt="Dashboard Icon Background" 
                fill
                className="object-contain object-bottom right-0"
                quality={100}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
