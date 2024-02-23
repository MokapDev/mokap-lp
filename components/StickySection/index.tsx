import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

const Services = [
  {
    title: "Logo e Identidade Visual",
    text: "Destaque a singularidade da sua marca com nosso serviço de Logo e Identidade Visual da Mokap. Criamos designs exclusivos que refletem a essência da sua empresa, transmitindo confiança e profissionalismo.",
  },
  {
    title: "Landing Pages Personalizadas",
    text: "Transforme visitantes em clientes com nossas Landing Pages Personalizadas. Desenvolvidas sob medida para atender às necessidades da sua empresa, oferecemos uma experiência envolvente que impulsiona conversões e destaca sua mensagem de forma impactante.",
  },
  {
    title: "Websites institucionais",
    text: "Construa uma presença online sólida com nossos Websites Institucionais. Desde a navegação intuitiva até o design responsivo, criamos plataformas que não apenas impressionam visualmente, mas também proporcionam uma experiência de usuário excepcional.",
  },
  {
    title: "Design de posts para redes sociais",
    text: "Maximize o alcance e o engajamento nas redes sociais com nosso serviço de Design de Posts. Criamos conteúdo visual envolvente e alinhado à identidade da sua marca, aumentando a visibilidade e fortalecendo a conexão com seu público.",
  },
  {
    title: "Design de banners, folders, panfletos, cartões de visita",
    text: "Destaque-se em qualquer material promocional com nossos designs exclusivos. Do impresso ao digital, oferecemos soluções visuais que comunicam efetivamente sua mensagem e deixam uma impressão duradoura nos seus clientes.",
  },
];

const ItemCard = ({ title, text }: { title: string; text: string }) => {
  return (
    <Card className="flex">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-3xl font-bold">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{text}</p>
      </CardBody>
    </Card>
  );
};

export const StickyServicesSection = () => {
  const isMobile = typeof window !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <div className="bg-white">
      <div className="flex mx-auto max-w-7xl py-24 md:px-8 md:py-32 sm:px-6 sm:py-32 lg:px-8 bg-white">
        {!isMobile && (
          <div className="flex items-center justify-center sticky h-[300px] top-[30%] width-[50%] mr-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Conheça nossos serviços
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Na MOKAP, oferecemos uma gama completa de serviços de design e
                desenvolvimento que abragem desde a criação de logos exclusivos
                até o desenvolvimento de interfaces envolventes para seu
                aplicativos e sites. Com nossa expertise, transformamos sua
                visão em projetos impactantes, cativando seu público-alvo e
                impulsionando o sucesso do seu negócio.
              </p>
            </div>
          </div>
        )}
        <div
          className={`flex-1 flex items-center justify-evenly bg-white ${
            isMobile ? "gap-16" : "h-[300vh]"
          } bg-current flex-col`}
        >
          {Services.map((item, index) => {
            return <ItemCard title={item.title} text={item.text} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};
