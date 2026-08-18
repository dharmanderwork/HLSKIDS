import AboutHero from "@/components/about/AboutHero";
import LeadershipSection from "@/components/about/LeadershipSection";
import MissionVision from "@/components/about/MissionVision";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import CtaBanner from "@/components/about/CtaBanner";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";
import TeacherTrainingSection from "@/components/about/TeacherTrainingSection";

export const metadata = {
  title: "About Us | HLS KIDS",
  description:
    "HLS KIDS is run by HLS Education Pvt Ltd, facilitated by renowned HLS Intercollege DEVMANPUR Ghatampur Kanpur Nagar Uttar Pradesh.",
};

export default function AboutPage() {
  return (
    <main className="w-full pt-10">
      <AboutHero />
      <MissionVision />
      <JourneyTimeline />
      <AdvisoryBoard />
      <LeadershipSection />
      <TeacherTrainingSection />
      <CtaBanner />
    </main>
  );
}