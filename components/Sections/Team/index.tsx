import LPBuilder from "@/components/LPBuilder";
import Image from "next/image";

export const TeamSection = () => {
  return (
    <LPBuilder.Section id="team" dark>
      <LPBuilder.Content>
        <LPBuilder.Column>
          <LPBuilder.Text type="title" lightText>
            MOKAP.design
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text" lightText>
            Criatividade e entusiasmo é o nosso compromisso, nosso time de
            design trará as melhores soluções para sua empresa, seja por uma
            página web, logos, identidade visuais, banners, folders, posts,
            conte com a gente!
          </LPBuilder.Text>
        </LPBuilder.Column>
        <LPBuilder.ImageContainer>
          <Image
            src="/design-team.svg"
            alt="home"
            width={600}
            height={600}
            layout="responsive"
          />
        </LPBuilder.ImageContainer>
      </LPBuilder.Content>

      <LPBuilder.Separator withLine />

      <LPBuilder.Content>
        <LPBuilder.ImageContainer>
          <Image
            src="/dev-team.svg"
            alt="home"
            width={600}
            height={600}
            layout="responsive"
          />
        </LPBuilder.ImageContainer>
        <LPBuilder.Column>
          <LPBuilder.Text type="title" lightText>
            MOKAP.dev
          </LPBuilder.Text>
          <LPBuilder.Separator />
          <LPBuilder.Text type="text" lightText>
            Soluções de desenvolvimento para o seu negócio, nosso time de
            desenvolvedores full-stack está pronto para te ajudar a alcançar seu
            objetivo através da programação.
          </LPBuilder.Text>
        </LPBuilder.Column>
      </LPBuilder.Content>
    </LPBuilder.Section>
  );
};
