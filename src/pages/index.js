import Hero from "@/components/app/landing/Hero";
import CTASection from "@/components/app/landing/CallToAction";
import Portfolio from "@/components/app/landing/Portfolio";
import TechStack from "@/components/app/landing/TechStack";
import AboutMe from "@/components/app/landing/AboutMe";
import Achivements from "@/components/app/landing/Achivements";
import WorkExperience from "@/components/app/landing/WorkExperience";

export default function App() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />
      <WorkExperience />
      <Portfolio />
      <Achivements />
      <CTASection />
    </>
  );
}
