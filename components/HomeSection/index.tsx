"use client";
import { Button } from "@nextui-org/react";
import { SEO } from "../SEO";
import { Fade, JackInTheBox, Slide } from "react-awesome-reveal";

const navigation = [
  { name: "Product", href: "" },
  { name: "Features", href: "" },
  { name: "Marketplace", href: "" },
  { name: "Company", href: "" },
];

export const HomeSection = () => {
  return (
    <>
      <SEO
        title="Mokap - Soluções em Design e Desenvolvimento"
        description="Transforme sua presença online com nossas soluções!"
      />
      <div className="bg-gray-950 h-screen" id="home">
        <header className="absolute inset-x-0 top-0 z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1 w-full justify-center lg:justify-normal">
              <a href="#" className="-m-1.5 p-1.5">
                <img
                  className="h-8 w-auto"
                  src="./lightlogowithtext.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {/* {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold leading-6 text-gray-100"
                >
                  {item.name}
                </a>
              ))} */}
            </div>
          </nav>
        </header>

        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <Fade direction="up" cascade>
                <JackInTheBox>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-6xl">
                    Transforme sua VISÃO em REALIDADE com um design excepcional.
                  </h1>
                </JackInTheBox>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Bem vindo à MOKAP, onde ideias ganham vida através do poder do
                  design. Seja a mudança que seus clientes desejam ver no mundo.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Button color="secondary" variant="shadow">
                    <a href="https://w.app/mokap">Comece hoje!</a>
                  </Button>
                  <Button color="secondary" variant="bordered">
                    Saiba mais
                  </Button>
                </div>
              </Fade>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};
