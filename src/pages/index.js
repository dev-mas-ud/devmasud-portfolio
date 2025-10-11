import Hero from "@/components/app/landing/Hero";
import WhyMe from "@/components/app/landing/WhyMe";
import Faqs from "@/components/app/landing/Faqs";
import CTASection from "@/components/app/landing/CallToAction";
import Portfolio from "@/components/app/landing/Portfolio";
import Testimonials from "@/components/app/landing/Testimonials";
import AboutMe from "@/components/app/landing/AboutMe";
import WhatIOffer from "@/components/app/landing/WhatIOffer";
import Achivements from "@/components/app/landing/Achivements";

export default function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <WhatIOffer />
      <WhyMe />
      <Portfolio />
      <Testimonials />
      <Achivements />
      <Faqs />
      <CTASection />
    </>
  );
}
