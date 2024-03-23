import {
  ComputerDesktopIcon,
  IdentificationIcon,
  PhotoIcon,
  NewspaperIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/20/solid";
import { Fade, Zoom } from "react-awesome-reveal";

const features = [
  {
    name: "Landing Pages",
    description: "Sites incríveis para potencializar seu negócio",
    icon: <ComputerDesktopIcon width={32} color="black" />,
  },
  {
    name: "Redes sociais",
    description:
      "Criativos, posts e carrosséis para enfatizar sua presença online",
    icon: <PhotoIcon width={32} color="black" />,
  },
  {
    name: "Banners, folders e panfletos",
    description: "Uma equipe de designers pronta para elevar suas propagandas",
    icon: <NewspaperIcon width={32} color="black" />,
  },
  {
    name: "Cartões de visita",
    description: "Deixe sua visita marcante e realce ainda mais sua presença",
    icon: <IdentificationIcon width={32} color="black" />,
  },
  {
    name: "Identidade visual",
    description:
      "Desde a sua paleta de cores até sua logo, nós fazemos acontecer!",
    icon: <PuzzlePieceIcon width={32} color="black" />,
  },
  {
    name: "Designs personalizados",
    description:
      "Precisa de uma arte para caneca, um design de caderno ou seja qual for sua ideia, estamos aqui para concretizá-la",
    icon: <PaintBrushIcon width={32} color="black" />,
  },
];

export const ServicesSection = () => {
  return (
    <div className="bg-white" id="services">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <Fade direction="left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nossos serviços
            </h2>
          </Fade>
          <Fade direction="left">
            <p className="mt-4 text-gray-500">
              Na MOKAP, oferecemos uma gama completa de serviços de design e
              desenvolvimento que abragem desde a criação de logos exclusivos
              até o desenvolvimento de interfaces envolventes para seu
              aplicativos e sites. Com nossa expertise, transformamos sua visão
              em projetos impactantes, cativando seu público-alvo e
              impulsionando o sucesso do seu negócio.
            </p>
          </Fade>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature, index) => (
              <Fade direction="left" delay={100 + 100 * index} key={feature.name}>
                <div
                  key={feature.name}
                  className="border-t border-gray-200 pt-4"
                >
                  <div className="flex-row flex items-center gap-2">
                    {feature.icon && feature.icon}
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                  </div>
                  <dd className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </dd>
                </div>
              </Fade>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <Zoom>
            <img
              src="/frame1.png"
              className="rounded-lg bg-gray-100"
            />
          </Zoom>
          <Zoom>
            <img
              src="/frame2.png"
              className="rounded-lg bg-gray-100"
            />
          </Zoom>
          <Zoom>
            <img
              src="/frame3.png"
              className="rounded-lg bg-gray-100"
            />
          </Zoom>
          <Zoom>
            <img
              src="/frame4.png"
              className="rounded-lg bg-gray-100"
            />
          </Zoom>
        </div>
      </div>
    </div>
  );
};
