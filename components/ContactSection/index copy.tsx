"use client";
import { useState } from "react";
import { Button, Input, Switch, Textarea } from "@nextui-org/react";
import { RevealList } from "next-reveal";

interface IFormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  country: string;
  phoneNumber: string;
  message: string;
}

export const ContactSection = () => {
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (name: string, value: string) => {
    if (name === "country") {
      value = value.replace(/\D/g, "");
      value = value.slice(0, 3);
    } else if (name === "phoneNumber") {
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{5})(\d{4})/, "$1-$2");
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors: Record<string, string> = {};

    if (!formData.firstName) {
      errors.firstName = "Nome é obrigatório";
    }
    if (!formData.lastName) {
      errors.lastName = "Sobrenome é obrigatório";
    }
    if (!formData.email) {
      errors.email = "Email é obrigatório";
    }
    if (!formData.country) {
      errors.country = "DDD é obrigatório";
    }
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Número de telefone é obrigatório";
    }
    if (!formData.message) {
      errors.message = "Mensagem é obrigatória";
    }

    setErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then(() => {
        alert("Email enviado com sucesso! Em breve nós te retornaremos.");
      })
      .catch((e) => {
        alert("Erro" + e + ".");
      });
  };

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
        onSubmit={handleSubmit}
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <RevealList
          interval={100}
          delay={200}
          origin="left"
          className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2"
        >
          <div>
            <div className="mt-2.5">
              <Input
                type="text"
                label="Nome *"
                name="first-name"
                value={formData.firstName}
                onValueChange={(text) => handleChange("firstName", text)}
                isInvalid={!!errors.firstName}
                errorMessage={errors.firstName}
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input
                type="text"
                label="Sobrenome *"
                name="last-name"
                value={formData.lastName}
                onValueChange={(text) => handleChange("lastName", text)}
                isInvalid={!!errors.lastName}
                errorMessage={errors.lastName}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="text"
                label="Empresa (Opcional)"
                name="company"
                value={formData.company}
                onValueChange={(text) => handleChange("company", text)}
                isInvalid={!!errors.company}
                errorMessage={errors.company}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="email"
                label="Email *"
                name="email"
                value={formData.email}
                onValueChange={(text) => handleChange("email", text)}
                isInvalid={!!errors.email}
                errorMessage={errors.email}
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input
                type="numeric"
                label="DDD *"
                name="country"
                value={formData.country}
                onValueChange={(text) => handleChange("country", text)}
                isInvalid={!!errors.country}
                errorMessage={errors.country}
              />
            </div>
          </div>
          <div>
            <div className="mt-2.5">
              <Input
                type="numeric"
                label="Número *"
                name="phone-number"
                value={formData.phoneNumber}
                onValueChange={(text) => handleChange("phoneNumber", text)}
                isInvalid={!!errors.phoneNumber}
                errorMessage={errors.phoneNumber}
                maxLength={10}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea
                label="Mensagem *"
                className="max-w"
                maxRows={4}
                maxLength={200}
                name="message"
                value={formData.message}
                onValueChange={(text) => handleChange("message", text)}
                isInvalid={!!errors.message}
                errorMessage={errors.message}
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
          <Button
          isDisabled={!agreed}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Vamos conversar!
          </Button>
        </div>
      </form>
    </div>
  );
};
