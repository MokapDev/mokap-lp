import LPBuilder from "@/components/LPBuilder";
import Image from "next/image";

export const ExperienceSection = () => {
  return (
    <LPBuilder.Section id="experience">
      <LPBuilder.Content>
        <LPBuilder.ImageContainer>
          <Image
            src="/services.svg"
            alt="about"
            width={600}
            height={600}
            layout="responsive"
          />
        </LPBuilder.ImageContainer>
        <LPBuilder.Column>
          <LPBuilder.Text type="title">
            "Desenvolva sua marca, domine o seu espaço."
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text">
            Na MOKAP, oferecemos uma gama completa de serviços de design e
            desenvolvimento que abragem desde a criação de logos exclusivos até
            o desenvolvimento de interfaces envolventes para seu aplicativos e
            sites.
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text">
            Com nossa expertise, transformamos sua visão em projetos
            impactantes, cativando seu público-alvo e impulsionando o sucesso do
            seu negócio
          </LPBuilder.Text>
        </LPBuilder.Column>
      </LPBuilder.Content>
    </LPBuilder.Section>
  );
};
