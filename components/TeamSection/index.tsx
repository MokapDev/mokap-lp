import { RevealList, RevealWrapper } from "next-reveal";

const people = [
  {
    name: "Álef S. Rosa",
    role: "Líder Técnico / Desenvolvedor",
    imageUrl:
      "./alef.png",
  },
  {
    name: "Luana S. Chan",
    role: "Designer de Interface",
    imageUrl:
      "./luana.png",
  },
  {
    name: "Luísa R. Faria",
    role: "Designer gráfica / Ilustradora Digital",
    imageUrl:
      "./luisa.png",
  },
  {
    name: "Igor Zimerman",
    role: "Designer de Experiências / Marketing",
    imageUrl:
      "./igor.png",
  },
];

export const TeamSection = () => {
  return (
    <div  className="bg-white py-24 sm:py-32">
      <RevealWrapper delay={100} duration={2000} origin="bottom" className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <RevealList interval={100} delay={250} className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Conheça nossa equipe
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Criatividade e entusiasmo é o nosso compromisso, nosso time de
            design trará as melhores soluções pra sua empresa, seja por uma
            página web, um banner, folders, posts, conte com a gente!
          </p>
        </RevealList>
        <RevealList
          interval={200}
          delay={500}
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <div key={person.name}>
              <div className="flex items-center gap-x-6">
                <img
                  className="h-48 w-48"
                  src={person.imageUrl}
                  alt=""
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealList>
      </RevealWrapper>
    </div>
  );
};