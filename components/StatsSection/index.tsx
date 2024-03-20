"use client";
import { useState } from "react";
import AnimatedNumber from "react-animated-numbers";
import { Slide } from "react-awesome-reveal";

const stats = [
  { id: 1, name: "De aumento na conversão de novos clientes", value: 70 },
  { id: 2, name: "Clientes de sucesso", value: 7 },
  { id: 3, name: "De aumento da satisfação dos clientes", value: 80 },
];

export const StatsSection = () => {
  const [stat, setStat] = useState(0);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="justify-center items-center mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <AnimatedNumber
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                animateToNumber={stat.value}
                fontStyle={{
                  fontSize: 40,
                  color: 'black',
                  justifyContent: 'center'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
