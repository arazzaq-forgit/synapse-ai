"use client";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/lib/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <FeaturesSection />
        <SocialProof />
        <PricingSection />
      </main>
      <Footer />
    </>
  );
}
