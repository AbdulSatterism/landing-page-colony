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
        <Features />
        <Comparison />
        <CoreFeatures />
        <SalesApp />
        <HowItWorks />
        <SalesTeam />
        <ConnectedPlatform />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
