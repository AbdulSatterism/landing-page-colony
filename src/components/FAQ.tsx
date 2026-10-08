'use client';

import React, { useState } from 'react';

const faqs = [
  {
    question: 'Who is Sales Route Optimization for?',
    answer: 'Sales Route Optimization is designed for field sales representatives, managers, and companies looking to streamline their daily routes and customer interactions.'
  },
  {
    question: 'Can I manually reorder my route?',
    answer: 'Yes, while the app automatically generates the most efficient route, you have full control to manually reorder stops based on your preferences.'
  },
  {
    question: 'Does the app store customer visit history?',
    answer: 'Absolutely. The app centralizes all customer information, allowing you to easily access and review complete visit histories and notes directly from your mobile device.'
  },
  {
    question: 'Is there a dashboard for managers?',
    answer: 'Yes, we provide a comprehensive company dashboard for managers to support their sales teams, organize territories, track overall progress, and review activity.'
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F9FAFB] py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-[850px]">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-green font-bold tracking-[0.15em] text-[12px] uppercase mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-brand-black tracking-tight mb-5 leading-[1.2]">
            Everything You Need to Know
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[20px] border border-gray-100 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'shadow-[0_8px_30px_rgba(0,0,0,0.04)]' : 'shadow-sm hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]'
              }`}
            >
              <button
                className="w-full text-left px-8 py-7 flex items-center justify-between focus:outline-none group"
                onClick={() => toggle(index)}
              >
                <span className="text-[17px] font-bold text-brand-black/90 group-hover:text-brand-black transition-colors">
                  {faq.question}
                </span>
                
                {/* Icon Wrapper */}
                <div 
                  className={`flex-shrink-0 ml-4 flex items-center justify-center w-[30px] h-[30px] rounded-full transition-colors duration-300 ${
                    openIndex === index 
                      ? 'bg-brand-green text-white' 
                      : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green/20'
                  }`}
                >
                  {openIndex === index ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  )}
                </div>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[200px] pb-7 opacity-100' : 'max-h-0 pb-0 opacity-0'
                }`}
              >
                <p className="text-[15px] text-gray-500 leading-[1.6] font-medium pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
