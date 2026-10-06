import VerifyHero from "@/components/verify/VerifyHero";
import SearchType from "@/components/verify/SearchType";
import VerificationForm from "@/components/verify/VerificationForm";
import VerificationResult from "@/components/verify/VerificationResult";

export default function VerifyPage() {
  return (
    <main className="min-h-screen bg-[#05091d]">
      <VerifyHero />
      <SearchType />
      <VerificationForm />
      <VerificationResult />
    </main>
  );
}