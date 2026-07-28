import AboutHero from "@/components/home/AboutHero";
import Hero from "@/components/home/Hero";
import LearningSection from "@/components/home/LearningSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export default function Home() {
  return (
    <main className="w-full ">
      <Hero />
      <AboutHero />
      <LearningSection />
      <ProgramsSection />
      <WhyChooseSection />
    </main>
  );
}