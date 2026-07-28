import AdmissionsHero from "@/components/admissions/AdmissionsHero";
import AdmissionProcess from "@/components/admissions/AdmissionProcess";
import AdmissionPrograms from "@/components/admissions/AdmissionPrograms";
import AdmissionRequirements from "@/components/admissions/AdmissionRequirements";
import AdmissionFees from "@/components/admissions/AdmissionFees";
import AdmissionCta from "@/components/admissions/AdmissionCta";

export const metadata = {
  title: "Admissions | HLS KIDS",
  description:
    "Admissions open for Play Group to Senior KG at HLS KIDS. Apply now for 2024-25 session. Easy admission process, affordable fees, and world-class facilities.",
};

export default function AdmissionsPage() {
  return (
    <main className="w-full">
      <AdmissionsHero />
      <AdmissionPrograms />
      <AdmissionProcess />
      <AdmissionRequirements />
      <AdmissionFees />
      <AdmissionCta />
    </main>
  );
}