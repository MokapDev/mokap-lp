"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Input, Switch, Textarea } from "@nextui-org/react";
import { RevealList } from "next-reveal";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const ContactSection = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Entre em contato agora e comece a mudança que sua empresa precisa!
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Nosso time está pronto para te atender e sanar todas suas dúvidas, o
          primeiro passo depende de você, seja a transformação que seu negócio
          pede, torcemos para que sua mudança comece!
        </p>
      </div>
      <form
        action="#"
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <RevealList interval={100} delay={200} origin="left" className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <div className="mt-2.5">
              <Input type="text" label="Nome" name="first-name" />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input type="text" label="Sobrenome" name="last-name" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="text" label="Empresa" name="company" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input type="email" label="Email" name="email" />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input type="numeric" label="DDD" name="country" />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input type="numeric" label="Número" name="phone-number" />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea
                label="Mensagem"
                className="max-w"
                maxRows={4}
                maxLength={200}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <Switch isSelected={agreed} onValueChange={setAgreed}>
              Aceita compartilhar os dados acima
            </Switch>
          </div>
        </RevealList>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Vamos conversar!
          </button>
        </div>
      </form>
    </div>
  );
};
