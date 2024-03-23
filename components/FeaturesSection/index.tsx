import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { Image } from "@nextui-org/react";
import { Fade, Zoom } from "react-awesome-reveal";

const features = [
  {
    name: "Reflita",
    description:
      "Nossa equipe está pronta para te ajudar a entender os desafios de seu negócio.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Planeje",
    description:
      "Após uma análise, estaremos prontos para planejar a mudança que sua empresa merece.",
    icon: LockClosedIcon,
  },
  {
    name: "Faça",
    description:
      "Com tudo definido, nossa equipe irá implementar nossas soluções e você poderá acompanhar essa magia.",
    icon: ServerIcon,
  },
];

export const FeaturesSection = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <Fade direction="right">
                <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Agilidade, criatividade e performance
                </h2>
              </Fade>
              <Fade direction="right">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  “Paixão pelo design, compromisso com a excelência.”
                </p>
              </Fade>
              <Fade direction="right">
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Na MOKAP, não somos apenas designers, somos contadores de
                  histórias visuais. Combinamos a essência de seu negócio com
                  nossa paixão pelo design, criando uma identidade visual única
                  que destaca você no mercado.
                </p>
              </Fade>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <Fade direction="right" delay={100 + 100 * index} key={feature.name}>
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  </Fade>
                ))}
              </dl>
            </div>
          </div>
          <Zoom>
            <Image className="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0" src="/Front.png" />
          </Zoom>
        </div>
      </div>
    </div>
  );
};
