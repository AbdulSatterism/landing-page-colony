import React from 'react';

export const Features = () => {
  const features = [
    {
      title: 'Plan',
      description: 'Plan daily customer visits efficiently.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2.5" ry="2.5"></rect>
          <line x1="16" y1="2" x2="16" y2="6"></line>
          <line x1="8" y1="2" x2="8" y2="6"></line>
          <line x1="3" y1="10" x2="21" y2="10"></line>
          <path d="M8 14h8"></path>
          <path d="M8 18h4"></path>
        </svg>
      )
    },
    {
      title: 'Navigate',
      description: 'Find nearby colonies and optimize travel routes.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="18" r="2.5"></circle>
          <circle cx="18" cy="6" r="2.5"></circle>
          <path d="M7.5 16C11 12 13 12 16.5 8"></path>
        </svg>
      )
    },
    {
      title: 'Manage',
      description: 'Keep contacts, notes, visits, and machinery organized.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
          <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path>
        </svg>
      )
    },
    {
      title: 'Follow Up',
      description: 'Never lose customer details or follow-up opportunities.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"></circle>
          <polyline points="12 7 12 12 15 14.5"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#F6F8F7] py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-brand-black tracking-tight mb-5 leading-[1.2]">
            Everything Your Field Sales Team<br className="hidden md:block" /> Needs, In One Place
          </h2>
          <p className="text-[17px] text-gray-500 font-medium">
            A single, connected toolkit for every mile and every customer conversation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-brand-green/10 rounded-[14px] flex items-center justify-center text-brand-green mb-8 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-[14px] text-gray-500 leading-[1.6] font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
