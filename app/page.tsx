"use client"
import LPBuilder from "@/components/LPBuilder";
import { AboutSection } from "@/components/Sections/About";
import { HomeSection } from "@/components/Sections/Home";
import { ProjectsSection } from "@/components/Sections/Projects";
import { ExperienceSection } from "@/components/Sections/Experience";
import { TeamSection } from "@/components/Sections/Team";
import { ServicesSection } from "@/components/Sections/Services";
import SmoothScroll from "@/components/SmoothSection";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const ParallaxSection = ({ children }: any) => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      controls.start({ y: -scrollY * 0.5 });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  return <motion.div initial={{ y: 0 }} animate={controls}>{children}</motion.div>;
};

export default function Home() {
  const data = [
    {
      title: "Card1",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
    {
      title: "Card2",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
    {
      title: "Card3",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
    {
      title: "Card4",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
    {
      title: "Card5",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
    {
      title: "Card6",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
    {
      title: "Card7",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, quaerat. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit autem sequi accusantium vel sapiente? Soluta beatae eveniet officia blanditiis ab quo molestiae rerum, voluptates explicabo doloribus, pariatur tenetur. Cupiditate magnam dolorem odio dignissimos esse distinctio explicabo. Facilis voluptates a repudiandae.",
    },
  ];
  return (
    <main>
      <SmoothScroll>
        <LPBuilder.Header
          links={[
            { title: "Home", href: "#home" },
            { title: "Sobre", href: "#about" },
            { title: "Projetos", href: "#projects" },
            { title: "Experiência", href: "#experience" },
            { title: "Time", href: "#team" },
            { title: "Serviços", href: "#services" },
            { title: "Clientes", href: "#clients" },
            { title: "Contato", href: "#contact" },
          ]}
          logoSrc="/logo-white.svg"
          logoAlt=""
        />
        <HomeSection />

        <LPBuilder.LetterBanner />

        <AboutSection />

        <ProjectsSection />

        <ExperienceSection />

        <TeamSection />

        <ServicesSection />

        <LPBuilder.Section id="cards">
          <LPBuilder.Content>
            <LPBuilder.CardGrid data={data} />
          </LPBuilder.Content>
        </LPBuilder.Section>

        <LPBuilder.Footer
          links={[
            { title: "Instagram", href: "https://www.instagram.com" },
            { title: "Facebook", href: "https://www.facebook.com" },
            { title: "Behance", href: "https://www.behance.com" },
            { title: "Dribble", href: "https://dribbble.com" },
          ]}
          logoSrc="/logo-white.svg"
          logoAlt=""
        />
      </SmoothScroll>
    </main>
  );
}
