import React from 'react';

export const Comparison = () => {
  const beforeItems = [
    'Planning multiple visits manually',
    'Spending unnecessary time on the road',
    'Forgetting important customer details',
    'Scattered notes and visit information',
    'Difficulty tracking machinery records',
    'Missing follow-up opportunities',
  ];

  const afterItems = [
    'Optimized daily routes',
    'Nearby colony discovery',
    'Centralized customer information',
    'Organized visit history',
    'Structured machinery records',
    'Easy follow-up reminders',
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[1100px]">
        <div className="flex flex-col lg:flex-row rounded-[32px] overflow-hidden shadow-sm border border-gray-100">
          
          {/* Left Side: Before */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center" style={{ backgroundColor: '#FBF8F3' }}>
            <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full text-[13px] font-bold mb-8 bg-[#FDECD8] text-[#D48924]">
              Before
            </div>
            
            <h2 className="text-3xl lg:text-[36px] font-bold text-brand-black mb-4 leading-[1.2] tracking-tight">
              Field Sales Can Get Complicated
            </h2>
            
            <p className="text-[15px] text-gray-500 mb-12 leading-[1.6] font-medium pr-4">
              Manual processes create friction that costs your team time and opportunities.
            </p>
            
            <ul className="space-y-5">
              {beforeItems.map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-[#FFEAEA] text-[#F85A5A] mr-4">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </div>
                  <span className="text-[15px] font-semibold text-brand-black/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: After */}
          <div className="lg:w-1/2 p-10 lg:p-16 relative overflow-hidden bg-brand-black flex flex-col justify-center">
            {/* Top Right Glow */}
            <div 
              className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" 
              style={{ backgroundColor: '#65B7451A' }}
            ></div>
            
            <div className="inline-flex self-start items-center px-4 py-1.5 rounded-full text-[13px] font-bold mb-8 relative z-10 bg-[#65B74526] text-brand-green border border-brand-green/10">
              With Sales Route
            </div>
            
            <h2 className="text-3xl lg:text-[36px] font-bold text-white mb-4 leading-[1.2] tracking-tight relative z-10">
              A Smarter Way to Work
            </h2>
            
            <p className="text-[15px] text-gray-400 mb-12 leading-[1.6] font-medium relative z-10 pr-4">
              Everything stays connected, so your team can focus on customers—not admin.
            </p>
            
            <ul className="space-y-5 relative z-10">
              {afterItems.map((item, i) => (
                <li key={i} className="flex items-center">
                  <div className="flex-shrink-0 flex items-center justify-center w-[22px] h-[22px] rounded-full bg-brand-green text-white mr-4 shadow-[0_0_10px_rgba(23,184,95,0.3)]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-[15px] font-semibold text-gray-100">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};
