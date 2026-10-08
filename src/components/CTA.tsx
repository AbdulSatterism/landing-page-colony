import React from 'react';
import Image from 'next/image';

export const CTA = () => {
  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div 
          className="relative rounded-[32px] overflow-hidden p-12 lg:p-24 text-center"
          style={{ background: 'linear-gradient(135deg, #408E1A 0%, #17B85F 100%)' }}
        >
          {/* Background Texture Circles */}
          <div className="absolute -top-[120px] -left-[120px] w-[350px] h-[350px] border-[35px] border-white/10 rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-[150px] -right-[150px] w-[450px] h-[450px] border-[45px] border-white/10 rounded-full pointer-events-none"></div>
          
          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-white/90 font-bold tracking-[0.15em] text-[12px] uppercase mb-6">
              Your Smarter Field Day Starts Here
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-white tracking-tight mb-8 leading-[1.1]">
              Spend Less Time Driving.<br className="hidden md:block" /> More Time Selling.
            </h2>
            <p className="text-[17px] md:text-[18px] text-white/95 font-medium leading-[1.6] mb-12 max-w-2xl mx-auto">
              Plan better routes, remember every detail, and keep your entire sales day organized from one app.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              
              {/* Apple App Store Button */}
              <button className="flex items-center gap-3.5 bg-white px-7 py-3.5 rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center group">
                <Image src="/app-store.png" alt="App Store" width={30} height={30} className="object-contain" quality={100} />
                <div className="text-left">
                  <div className="text-[11px] text-gray-500 font-bold leading-[1.1]">Download on the</div>
                  <div className="text-[18px] font-extrabold text-brand-black leading-[1.1] tracking-tight">App Store</div>
                </div>
              </button>

              {/* Google Play Button */}
              <button className="flex items-center gap-3.5 bg-white px-7 py-3.5 rounded-[14px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                <Image src="/play-store.png" alt="Google Play Store" width={28} height={28} className="object-contain" quality={100} />
                <div className="text-left">
                  <div className="text-[11px] text-gray-500 font-bold leading-[1.1]">GET IT ON</div>
                  <div className="text-[18px] font-extrabold text-brand-black leading-[1.1] tracking-tight">Google Play</div>
                </div>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
