import LPBuilder from "@/components/LPBuilder";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <LPBuilder.Section id="about">
      <LPBuilder.Content>
        <LPBuilder.ImageContainer>
          <Image
            src="/about.svg"
            alt="about"
            width={600}
            height={600}
            layout="responsive"
          />
        </LPBuilder.ImageContainer>
        <LPBuilder.Column>
          <LPBuilder.Text type="title">
            "Paixão pelo design, compromisso com a excelência"
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text">
            Na MOKAP, não somos apenas designers, somos contadores de histórias
            visuais.
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text">
            Combinamos a essência de seu negócio com nossa paixão pelo design,
            criando uma identidade visual única que destaca você no mercado.
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text">
            Nossa missão é ir além do convencional, tranformando ideias em
            designs marcante que deixam uma impressão duradoura.
          </LPBuilder.Text>
        </LPBuilder.Column>
      </LPBuilder.Content>
    </LPBuilder.Section>
  );
};
