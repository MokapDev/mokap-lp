import LPBuilder from "@/components/LPBuilder";
import Image from "next/image";

export const ProjectsSection = () => {
  return (
    <LPBuilder.Section id="projects" dark>
      <LPBuilder.Content>
        <LPBuilder.Column>
          <LPBuilder.Text type="title" lightText>
            Design em ação, veja nosso portfólio
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text" lightText>
            Nosso portfólio é o reflexo da nossa dedicação ao design e
            desenvolvimento de soluções.
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text" lightText>
            Explore casos de sucesso onde transformamos ideias em realidade,
            impulsionando a presença e impacto de nossos clientes.
          </LPBuilder.Text>
        </LPBuilder.Column>
        <LPBuilder.ImageContainer>
          <Image
            src="/portfolio.svg"
            alt="home"
            width={600}
            height={600}
            layout="responsive"
          />
        </LPBuilder.ImageContainer>
      </LPBuilder.Content>
    </LPBuilder.Section>
  );
};
