'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = ['Features', 'How It Works', 'For Sales Reps', 'For Companies', 'FAQ'];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-xl border-b border-gray-100/60 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex h-[84px] items-center justify-between">
            
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer z-50 relative">
              <Image 
                src="/logo.png" 
                alt="Colone Connection Logo" 
                width={46} 
                height={46} 
                className="object-contain" 
              />
              <span className="text-[20px] sm:text-[22px] font-extrabold text-brand-black tracking-tight">
                Colone Connection
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {navLinks.map((item) => (
                <Link key={item} href="#" className="text-[15px] font-bold text-gray-500 hover:text-brand-black transition-colors">
                  {item}
                </Link>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" className="rounded-[14px] border-gray-200 text-brand-black font-bold px-6 py-2.5 hover:bg-gray-50 shadow-sm">
                Company Dashboard
              </Button>
              <Button className="rounded-[14px] px-6 py-2.5 shadow-[0_4px_14px_rgba(23,184,95,0.25)] hover:shadow-[0_6px_20px_rgba(23,184,95,0.3)] transition-shadow" icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              }>
                Download App
              </Button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden relative z-50 p-2.5 -mr-2 rounded-full hover:bg-gray-50 transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-black">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-brand-black">
                  <line x1="4" y1="12" x2="20" y2="12"></line>
                  <line x1="4" y1="6" x2="20" y2="6"></line>
                  <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-xl transform transition-all duration-500 ease-in-out lg:hidden ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col h-full pt-[100px] pb-10 px-6 sm:px-8 overflow-y-auto">
          <nav className="flex flex-col space-y-6 flex-grow pt-4">
            {navLinks.map((item, i) => (
              <div 
                key={item} 
                className={`transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${i * 75 + 100}ms` }}
              >
                <Link 
                  href="#" 
                  className="block text-[26px] font-extrabold text-brand-black tracking-tight hover:text-brand-green transition-colors border-b border-gray-100/50 pb-5"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </div>
            ))}
          </nav>
          
          <div 
            className={`flex flex-col space-y-4 mt-10 transform transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <Button variant="outline" className="w-full rounded-[16px] py-5 text-[17px] font-bold border-2 border-gray-200 hover:bg-gray-50">
              Company Dashboard
            </Button>
            <Button className="w-full rounded-[16px] py-5 text-[17px] font-bold shadow-[0_4px_20px_rgba(23,184,95,0.3)]" icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
            }>
              Download App
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
