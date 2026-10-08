import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-[#0A1108] text-white py-16 px-4 sm:px-6 lg:px-8 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto max-w-[1300px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-0">
          
          {/* Left Column - Logo & Tagline */}
          <div className="lg:w-[26%] lg:pr-12 lg:border-r lg:border-white/10 flex flex-col items-start shrink-0">
            <Image 
              src="/footer-logo.png" 
              alt="Dar Dar Logo" 
              width={76} 
              height={76} 
              className="mb-6 rounded-[18px] object-contain"
              quality={100}
            />
            <p className="text-[14px] text-gray-300 leading-[1.6] max-w-[280px]">
              Smarter <span className="text-[#17B85F]">Routes.</span> Stronger Customer Relationships.
            </p>
          </div>

          {/* Right Columns - Links & Copyright */}
          <div className="lg:w-[74%] lg:pl-16 flex flex-col flex-grow">
            
            {/* Links Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10 mb-12">
              
              {/* Company */}
              <div>
                <h4 className="text-[14px] font-bold text-white mb-5">Company</h4>
                <ul className="space-y-4 text-[13px] text-gray-400 font-medium">
                  <li><Link href="#" className="hover:text-brand-green transition-colors">About Dar Dar</Link></li>
                  <li><Link href="#" className="hover:text-brand-green transition-colors">How It Works</Link></li>
                  <li><Link href="#" className="hover:text-brand-green transition-colors">Contact Us</Link></li>
                </ul>
              </div>
              
              {/* For Representative */}
              <div>
                <h4 className="text-[14px] font-bold text-white mb-5">For Representative</h4>
                <ul className="space-y-4 text-[13px] text-gray-400 font-medium">
                  <li><Link href="#" className="hover:text-brand-green transition-colors">Become a Sales Representative</Link></li>
                  <li><Link href="#" className="hover:text-brand-green transition-colors">Download App</Link></li>
                </ul>
              </div>

              {/* For Company */}
              <div>
                <h4 className="text-[14px] font-bold text-white mb-5">For Company</h4>
                <ul className="space-y-4 text-[13px] text-gray-400 font-medium">
                  <li><Link href="#" className="hover:text-brand-green transition-colors">Become a Company</Link></li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-[14px] font-bold text-white mb-5">Legal</h4>
                <ul className="space-y-4 text-[13px] text-gray-400 font-medium">
                  <li><Link href="#" className="hover:text-brand-green transition-colors">Privacy Policy</Link></li>
                  <li><Link href="#" className="hover:text-brand-green transition-colors">Terms & Conditions</Link></li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h4 className="text-[14px] font-bold text-white mb-5">Social</h4>
                <div className="flex gap-3">
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-[11px] font-medium hover:border-brand-green hover:text-brand-green transition-colors">
                    f
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-[11px] font-medium hover:border-brand-green hover:text-brand-green transition-colors">
                    ig
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full border border-gray-500 flex items-center justify-center text-[11px] font-medium hover:border-brand-green hover:text-brand-green transition-colors">
                    in
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright Line */}
            <div className="pt-8 border-t border-white/10 text-center flex justify-center w-full mt-auto">
              <span className="text-[12px] text-gray-400 font-medium">
                © 2026 Dar Dar. All rights reserved. Colone Connection
              </span>
            </div>
            
          </div>

        </div>
      </div>
    </footer>
  );
};
