import { RevealList } from "next-reveal";

const stats = [
  { id: 1, name: "De aumento na conversão de novos clientes", value: "70%" },
  { id: 2, name: "Clientes de sucesso", value: "7" },
  { id: 3, name: "De aumento da satisfação dos clientes", value: "80%" },
];

export const StatsSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <RevealList interval={200} delay={100} origin="right" className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </RevealList>
      </div>
    </div>
  );
};
