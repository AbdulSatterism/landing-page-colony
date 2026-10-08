import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Comparison } from '@/components/Comparison';
import { CoreFeatures } from '@/components/CoreFeatures';
import { SalesApp } from '@/components/SalesApp';
import { HowItWorks } from '@/components/HowItWorks';
import { SalesTeam } from '@/components/SalesTeam';
import { ConnectedPlatform } from '@/components/ConnectedPlatform';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <div id="features" className="scroll-mt-28"><Features /></div>
        <Comparison />
        <CoreFeatures />
        <SalesApp />
        <div id="how-it-works" className="scroll-mt-28"><HowItWorks /></div>
        <div id="for-sales-reps" className="scroll-mt-28"><SalesTeam /></div>
        <div id="for-companies" className="scroll-mt-28"><ConnectedPlatform /></div>
        <div id="faq" className="scroll-mt-28"><FAQ /></div>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
