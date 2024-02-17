import LPBuilder from "@/components/LPBuilder";
import Image from "next/image";

export const HomeSection = () => {
  return (
    <LPBuilder.Section id="home">
      <LPBuilder.Content>
        <LPBuilder.Column>
          <LPBuilder.Text type="title">
            "Transforme sua VISÃO em REALIDADE com um design excepcional."
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text">
            Bem vindo à MOKAP, onde ideias ganham vida através do poder do
            design. Seja a mudança que seus clientes desejam ver no mundo.
          </LPBuilder.Text>
        </LPBuilder.Column>
        <LPBuilder.ImageContainer>
          <Image
            src="/home.svg"
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
