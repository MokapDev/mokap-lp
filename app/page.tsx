import LPBuilder from "@/components/LPBuilder";
import SmoothScroll from "@/components/SmoothSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <SmoothScroll>
        <LPBuilder.Header
          links={[
            { title: "Home", href: "#home" },
            { title: "Sobre", href: "#about" },
            { title: "Projetos", href: "#projects" },
            { title: "Serviços", href: "#services" },
            { title: "Clientes", href: "#testimonials" },
            { title: "Contato", href: "#contact" },
          ]}
          logoSrc="/logo.svg"
          logoAlt=""
        />
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
              <Image src="/home.svg" alt="home" width={600} height={600} />
            </LPBuilder.ImageContainer>
          </LPBuilder.Content>
        </LPBuilder.Section>

        <LPBuilder.LetterBanner />

        <LPBuilder.Section id="about">
          <LPBuilder.Content>
            <LPBuilder.ImageContainer>
              <Image src="/about.svg" alt="about" width={600} height={600} />
            </LPBuilder.ImageContainer>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                "Paixão pelo design, compromisso com a excelência"
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text">
                Na MOKAP, não somos apenas designers, somos contadores de
                histórias visuais.
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text">
                Combinamos a essência de seu negócio com nossa paixão pelo
                design, criando uma identidade visual única que destaca você no
                mercado.
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text">
                Nossa missão é ir além do convencional, tranformando ideias em
                designs marcante que deixam uma impressão duradoura.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>
        </LPBuilder.Section>

        {/* <ParallaxSection>
        <LPBuilder.Section id="projects">
          <LPBuilder.Content>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                Design em ação, veja nosso portfólio
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text" lightText>
                Nosso portfólio é o reflexo da nossa dedicação ao design e
                desenvolvimento de soluções.
              </LPBuilder.Text>
            </LPBuilder.Column>
            <LPBuilder.ImageContainer>
              <Image src="/portfolio.svg" alt="home" width={600} height={600} />
            </LPBuilder.ImageContainer>
          </LPBuilder.Content>
        </LPBuilder.Section>
      </ParallaxSection> */}

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
              <Image src="/portfolio.svg" alt="home" width={600} height={600} />
            </LPBuilder.ImageContainer>
          </LPBuilder.Content>
        </LPBuilder.Section>

        <LPBuilder.Section id="services">
          <LPBuilder.Content>
            <LPBuilder.ImageContainer>
              <Image src="/services.svg" alt="about" width={600} height={600} />
            </LPBuilder.ImageContainer>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                "Desenvolva sua marca, domine o seu espaço."
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites.
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text">
                Com nossa expertise, transformamos sua visão em projetos
                impactantes, cativando seu público-alvo e impulsionando o
                sucesso do seu negócio
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>
        </LPBuilder.Section>

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
              />
            </LPBuilder.ImageContainer>
          </LPBuilder.Content>

          <LPBuilder.Content>
            <LPBuilder.ImageContainer>
              <Image src="/dev-team.svg" alt="home" width={600} height={600} />
            </LPBuilder.ImageContainer>
            <LPBuilder.Column>
              <LPBuilder.Text type="title" lightText>
                MOKAP.dev
              </LPBuilder.Text>
              <LPBuilder.Separator />
              <LPBuilder.Text type="text" lightText>
                Soluções de desenvolvimento para o seu negócio, nosso time de
                desenvolvedores full-stack está pronto para te ajudar a alcançar
                seu objetivo através da programação.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>
        </LPBuilder.Section>

        <LPBuilder.Section id="services2">
          <LPBuilder.Content>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                Logo e Identidade Visual
              </LPBuilder.Text>
            </LPBuilder.Column>
            <LPBuilder.Column>
              <LPBuilder.Text type="text">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>

          <LPBuilder.Separator withLine />

          <LPBuilder.Content>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                Landing Pages Personalizadas
              </LPBuilder.Text>
            </LPBuilder.Column>
            <LPBuilder.Column>
              <LPBuilder.Text type="text">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>

          <LPBuilder.Separator withLine />

          <LPBuilder.Content>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                Websites institucionais
              </LPBuilder.Text>
            </LPBuilder.Column>
            <LPBuilder.Column>
              <LPBuilder.Text type="text">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>

          <LPBuilder.Separator withLine />

          <LPBuilder.Content>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                Design de posts para redes sociais
              </LPBuilder.Text>
            </LPBuilder.Column>
            <LPBuilder.Column>
              <LPBuilder.Text type="text">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>

          <LPBuilder.Separator withLine />

          <LPBuilder.Content>
            <LPBuilder.Column>
              <LPBuilder.Text type="title">
                Design de banners, folders, panfletos, cartões de visita
              </LPBuilder.Text>
            </LPBuilder.Column>
            <LPBuilder.Column>
              <LPBuilder.Text type="text">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites.
              </LPBuilder.Text>
            </LPBuilder.Column>
          </LPBuilder.Content>
        </LPBuilder.Section>

        <LPBuilder.Footer
          links={[
            { title: "Home", href: "#home" },
            { title: "Sobre", href: "#about" },
            { title: "Projetos", href: "#projects" },
            { title: "Serviços", href: "#services" },
            { title: "Clientes", href: "#testimonials" },
            { title: "Contato", href: "#contact" },
          ]}
          logoSrc="/logo-white.svg"
          logoAlt=""
        />
      </SmoothScroll>
    </main>
  );
}
