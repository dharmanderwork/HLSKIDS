import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseWhy from "@/components/franchise/FranchiseWhy";
import FranchiseBenefits from "@/components/franchise/FranchiseBenefits";
import FranchiseSupport from "@/components/franchise/FranchiseSupport";
import FranchiseInvestment from "@/components/franchise/FranchiseInvestment";
import FranchiseForm from "@/components/franchise/FranchiseForm";
import FranchiseCta from "@/components/franchise/FranchiseCta";

export const metadata = {
  title: "Franchise Opportunity | HLS KIDS",
  description:
    "Start your own HLS KIDS preschool franchise. Low investment, high returns, complete support. Join India's fastest-growing preschool network.",
};

export default function FranchisePage() {
  return (
    <main className="w-full">
      <FranchiseHero />
      <FranchiseWhy />
      <FranchiseBenefits />
      <FranchiseSupport />
      {/* <FranchiseInvestment /> */}
      <FranchiseForm />
      <FranchiseCta />
    </main>
  );
}