import React from 'react';

export const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      title: 'Find',
      desc: 'Open the map and discover colonies near your location.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Select',
      desc: 'Choose the colonies you want to visit.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Optimize',
      desc: 'Generate the most efficient route for your day.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="18" r="2.5"></circle>
          <circle cx="18" cy="6" r="2.5"></circle>
          <path d="M7.5 16C11 12 13 12 16.5 8"></path>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Record',
      desc: 'Complete visits and save notes, contacts, and customer information.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-brand-green font-bold tracking-[0.15em] text-[12px] uppercase mb-4">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-brand-black tracking-tight mb-5 leading-[1.2]">
            Plan Your Day in Four Simple Steps
          </h2>
          <p className="text-[17px] text-gray-500 font-medium">
            Go from a blank schedule to a complete, optimized field day in minutes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Dashed Line (Visible on Desktop) */}
          <div className="hidden lg:block absolute top-[68px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-brand-green/30 z-0 opacity-70"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-[24px] p-8 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative z-10 flex flex-col items-center text-center hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] transition-all duration-300 transform hover:-translate-y-1"
              >
                
                {/* Elevated Icon Wrapper */}
                <div className="w-[72px] h-[72px] bg-white rounded-[20px] shadow-[0_0_0_1px_rgba(0,0,0,0.03),0_6px_16px_rgba(0,0,0,0.06)] flex items-center justify-center mb-7">
                  <div className="w-[56px] h-[56px] bg-brand-green/10 rounded-[14px] flex items-center justify-center text-brand-green">
                    {step.icon}
                  </div>
                </div>
                
                <span className="text-brand-green font-extrabold text-[12px] tracking-[0.15em] mb-2">{step.num}</span>
                <h3 className="text-[20px] font-bold text-brand-black mb-3">{step.title}</h3>
                <p className="text-[14px] text-gray-500 font-medium leading-[1.6]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};
