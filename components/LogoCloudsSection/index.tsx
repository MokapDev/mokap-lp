import { RevealList } from "next-reveal";

export const LogoCloudsSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Alguns de nossos clientes
        </h2>
        <RevealList
          interval={200}
          delay={200}
          origin="left"
          className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./logos/client3.png"
            alt="rds"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./logos/client4.png"
            alt="brainstorm"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./logos/client1.png"
            alt="amor em patas"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./logos/client5.png"
            alt="dona rita"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="./logos/client2.png"
            alt="loot"
            width={120}
            height={32}
            style={{ maxWidth: 120 }}
          />
        </RevealList>
      </div>
    </div>
  );
};
