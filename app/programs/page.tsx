import ProgramsHero from "@/components/programs/ProgramsHero";
import ProgramsOverview from "@/components/programs/ProgramsOverview";
import ProgramsCurriculum from "@/components/programs/ProgramsCurriculum";
import ProgramsSchedule from "@/components/programs/ProgramsSchedule";
import LearningEnvironment from "@/components/programs/LearningEnvironment";
import Testimonials from "@/components/programs/Testimonials";
import AdmissionCTA from "@/components/programs/AdmissionCTA";
import ProgramsComparison from "@/components/programs/ProgramsComparison";
import ProgramsActivities from "@/components/programs/ProgramsActivities";
import ProgramsOutcomes from "@/components/programs/ProgramsOutcomes";
// import ProgramsActivities from "@/components/programs/ProgramsActivities";
// import ProgramsOutcomes from "@/components/programs/ProgramsOutcomes";
// import ProgramsComparison from "@/components/programs/ProgramsComparison";
// import ProgramsCta from "@/components/programs/ProgramsCta";

export const metadata = {
  title: "Our Programs | HLS KIDS",
  description:
    "Discover NEP 2020 aligned programs at HLS KIDS: Play Group, Nursery, Junior KG & Senior KG. Age-appropriate curriculum for holistic child development.",
};

export default function ProgramsPage() {
  return (
    <main className="w-full">
      <ProgramsHero />
      <ProgramsOverview />
      <ProgramsComparison /> 
      <ProgramsCurriculum />
       <ProgramsActivities /> 
     <ProgramsSchedule />
      <LearningEnvironment />
        <ProgramsOutcomes />   
      <Testimonials />
      <AdmissionCTA />
      {/*
      <ProgramsActivities />
      <ProgramsOutcomes />
      <ProgramsComparison />
      <ProgramsCta /> */}
    </main>
  );
}