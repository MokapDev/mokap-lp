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
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";

// const HeaderNavBar = () => {
//   return (
//     <Navbar shouldHideOnScroll>
//       <NavbarBrand>
//         <Image src="./vercel.svg" alt="logo" width={40} height={40} />
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// };

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
      <TeamSection />
      <LogoCloudsSection />
      <StickyServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
