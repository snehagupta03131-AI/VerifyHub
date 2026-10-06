import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import Stats from "../components/home/Stats";
import HowItWorks from "../components/home/HowItWorks";
import Companies from "../components/home/Companies";
import Testimonials from "../components/home/Testimonials";
import Footer from "@/components/layout/Footer";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <HowItWorks />

      <Companies />

      <Testimonials />

      <Faq />

      <Footer />
    </main>
  );
}