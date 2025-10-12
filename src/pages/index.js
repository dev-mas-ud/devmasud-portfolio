import Hero from "@/components/app/landing/Hero";
import CTASection from "@/components/app/landing/CallToAction";
import Portfolio from "@/components/app/landing/Portfolio";
import TechStack from "@/components/app/landing/TechStack";
import AboutMe from "@/components/app/landing/AboutMe";
import Achivements from "@/components/app/landing/Achivements";

export default function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Portfolio />
      <TechStack />
      <Achivements />
      <CTASection />
    </>
  );
}
