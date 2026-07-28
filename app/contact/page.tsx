import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import ContactCta from "@/components/contact/ContactCta";

export const metadata = {
  title: "Contact Us | HLS KIDS",
  description:
    "Get in touch with HLS KIDS for admissions, inquiries, or to schedule a campus tour. We're here to help!",
};

export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <ContactMap />
      <ContactCta />
    </main>
  );
}