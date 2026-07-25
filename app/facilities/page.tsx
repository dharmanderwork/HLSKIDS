import FacilitiesHero from "@/components/facilities/FacilitiesHero";
import FacilitiesGrid from "@/components/facilities/FacilitiesGrid";
import FacilitiesFeatures from "@/components/facilities/FacilitiesFeatures";
import FacilitiesSafety from "@/components/facilities/FacilitiesSafety";
import FacilitiesCta from "@/components/facilities/FacilitiesCta";

export const metadata = {
  title: "Our Facilities | HLS KIDS",
  description:
    "Explore world-class facilities at HLS KIDS - safe classrooms, modern play areas, hygienic environment, and more for your child's growth.",
};

export default function FacilitiesPage() {
  return (
    <main className="w-full">
      <FacilitiesHero />
      <FacilitiesGrid />
      <FacilitiesFeatures />
      <FacilitiesSafety />
      <FacilitiesCta />
    </main>
  );
}