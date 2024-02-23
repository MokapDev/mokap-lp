"use client";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HomeSection } from "@/components/HomeSection";
import { LogoCloudsSection } from "@/components/LogoCloudsSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SEO } from "@/components/SEO";
import { StatsSection } from "@/components/StatsSection";
import { StickyServicesSection } from "@/components/StickySection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <SEO
        title="Mokap - Soluções em Design e Desenvolvimento"
        description="Transforme sua presença online com nossas soluções!"
      />
      <HomeSection />
      <FeaturesSection />
      <CTASection />
      <StatsSection />
      <ParallaxSection></ParallaxSection>
      <LogoCloudsSection />
      <TeamSection />
      <StickyServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
