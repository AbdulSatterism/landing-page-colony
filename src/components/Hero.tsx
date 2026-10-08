import Image from 'next/image';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-10 sm:pt-16 lg:pt-24 pb-20 lg:pb-32">
      {/* Background radial gradients for the soft green glow */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] lg:w-[800px] h-[600px] lg:h-[800px] rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-brand-green/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <div className="max-w-2xl relative z-10 w-full mt-2 sm:mt-6 lg:mt-0 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center justify-center rounded-full border border-brand-green/20 bg-brand-green/10 backdrop-blur-sm px-3.5 py-1.5 text-[13px] sm:text-sm font-semibold text-brand-green-dark mb-6 lg:mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-green mr-2.5 shadow-[0_0_8px_rgba(23,184,95,0.8)]"></span>
              Built for modern field sales teams
            </div>
            
            <h1 className="text-[44px] sm:text-5xl lg:text-[72px] font-extrabold tracking-tight text-brand-black mb-5 lg:mb-8 leading-[1.1] lg:leading-[1.05]">
              Smarter <span className="text-brand-green">Routes.</span><br />
              Stronger<br />
              Customer<br />
              Relationships.
            </h1>
            
            <p className="text-[17px] sm:text-lg lg:text-xl text-gray-500 mb-8 lg:mb-10 max-w-[540px] leading-[1.6] lg:leading-relaxed font-medium px-2 sm:px-4 lg:px-0">
              The all-in-one platform for field sales teams to plan efficient routes, discover nearby colonies, manage customer information, and stay organized.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto px-4 sm:px-0 mb-10 lg:mb-12">
              <Button size="lg" className="rounded-[16px] text-[16px] px-8 py-5 sm:py-7 shadow-[0_8px_20px_rgba(23,184,95,0.25)] hover:shadow-[0_10px_25px_rgba(23,184,95,0.35)] w-full sm:w-auto transition-shadow">
                Download the App <span className="ml-2 font-bold">→</span>
              </Button>
              <Button size="lg" variant="outline" className="rounded-[16px] text-[16px] px-8 py-5 sm:py-7 border-2 border-gray-200 bg-white hover:bg-gray-50 w-full sm:w-auto">
                Become a Company
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="flex -space-x-3">
                {['JL', 'AP', 'LF'].map((initials, i) => (
                  <div key={i} className="flex h-[42px] w-[42px] lg:h-11 lg:w-11 items-center justify-center rounded-full border-[3px] border-white bg-[#EAF7F0] text-[11px] lg:text-xs font-bold text-brand-green shadow-sm relative z-10 hover:z-20 transition-transform hover:scale-110 cursor-pointer">
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-[14px] lg:text-[15px] font-medium text-gray-500 mt-2 sm:mt-0">
                <strong className="text-brand-black">Trusted by field teams</strong> on the road every day
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative mx-auto w-full max-w-[480px] sm:max-w-[550px] lg:max-w-none lg:pl-10 flex items-center justify-center">
            <div className="relative w-full">
              {/* Added a decorative blur circle behind the image for mobile pop */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-brand-green/10 blur-3xl lg:hidden"></div>
              
              <Image 
                src="/hero.png" 
                alt="Colone Connection Platform" 
                width={800} 
                height={800} 
                className="relative z-10 w-full h-auto object-contain animate-float drop-shadow-2xl"
                priority
                quality={100}
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
