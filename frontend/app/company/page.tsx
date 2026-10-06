import CompanyHero from "@/components/company/CompanyHero";
import RegistrationForm from "@/components/company/RegistrationForm";
import RegistrationSteps from "@/components/company/RegistrationSteps";

export default function CompanyPage() {
  return (
    <>
      <CompanyHero />
      <RegistrationForm />
      <RegistrationSteps />
    </>
  );
}