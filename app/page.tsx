import Hero from '@/components/Hero';
import WhatIDo from '@/components/WhatIDo';
import Stats from '@/components/Stats';
import Comparison from '@/components/Comparison';
import HowItWorks from '@/components/HowItWorks';
import TechStackScroll from '@/components/TechStackScroll';
import WhyMe from '@/components/WhyMe';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import InlineLeadCapture from '@/components/InlineLeadCapture';

export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStackScroll />
      <WhatIDo />
      <Stats />
      <Comparison />
      <InlineLeadCapture />
      <HowItWorks />
      <WhyMe />
      <FAQ />
      <FinalCTA />
    </>
  );
}
