"use client";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HomeSection } from "@/components/HomeSection";
import { LogoCloudsSection } from "@/components/LogoCloudsSection";
import { ParallaxSection } from "@/components/ParallaxSection";
import { SEO } from "@/components/SEO";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";

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
      <ParallaxSection></ParallaxSection>
      {/* <StatsSection /> */}
      <LogoCloudsSection />
      <TeamSection />
      {/* <StickyServicesSection /> */}
      {/* <TestimonialsSection /> */}
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
