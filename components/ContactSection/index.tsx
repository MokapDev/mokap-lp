"use client";
import { useEffect, useState } from "react";
import {
  Button,
  Input,
  Link,
  Select,
  SelectItem,
  Selection,
  Switch,
  Textarea,
} from "@nextui-org/react";
import { RevealList } from "next-reveal";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/20/solid";

interface IFormData {
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
  selectedServices: string[];
}

const options = [
  {
    label: "Landing Pages",
    value: "Landing Pages",
  },
  {
    label: "Redes sociais",
    value: "Redes sociais",
  },
  {
    label: "Banners, folders e panfletos",
    value: "Banners, folders e panfletos",
  },
  {
    label: "Cartões de visita",
    value: "Cartões de visita",
  },
  {
    label: "Identidade visual",
    value: "Identidade visual",
  },
  {
    label: "Designs personalizados",
    value: "Designs personalizados",
  },
];

export const ContactSection = () => {
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState<IFormData>({
    name: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
    selectedServices: [],
  });

  const handleChange = (name: string, value: string) => {
    if (name === "phoneNumber") {
      // Remover todos os não dígitos
      const numericValue = value.replace(/\D/g, "");

      // Aplicar máscara de telefone
      let formattedValue = "";
      for (let i = 0; i < numericValue.length; i++) {
        if (i === 0) {
          formattedValue += "(";
        } else if (i === 2) {
          formattedValue += ") ";
        } else if (i === 7) {
          formattedValue += "-";
        }
        formattedValue += numericValue[i];
      }

      // Atualizar o valor do campo
      value = formattedValue;
    }

    if (name === "name") {
      value = value.replace(/\b\w/g, (char) => char.toUpperCase());
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

    if (!formData.name) {
      errors.name = "Nome é obrigatório";
    }
    if (!formData.email) {
      errors.email = "Email é obrigatório";
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

    const body = formData;

    setFormData({
      name: "",
      company: "",
      email: "",
      phoneNumber: "",
      message: "",
      selectedServices: [],
    });

    alert("Email enviado com sucesso!");

    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify(body),
    })
      .then(() => {
        console.log("Email enviado");
      })
      .catch((e) => {
        alert("Erro" + e + ".");
      });
  };

  const handleSelectionChange = (selection: Selection) => {
    const selectedValues = Array.from(selection).map((item) => item.toString());
    setFormData((prevState) => ({
      ...prevState,
      selectedServices: selectedValues,
    }));
  };

  useEffect(() => {
    console.log("formdata", formData);
  }, [formData]);

  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8" id="contact">
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
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="text"
                label="Nome *"
                name="first-name"
                value={formData.name}
                onValueChange={(text) => handleChange("name", text)}
                isInvalid={!!errors.name}
                errorMessage={errors.name}
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
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Input
                type="numeric"
                label="Celular (Whatsapp) *"
                name="phone-number"
                value={formData.phoneNumber}
                onValueChange={(text) => handleChange("phoneNumber", text)}
                isInvalid={!!errors.phoneNumber}
                errorMessage={errors.phoneNumber}
                maxLength={15}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Textarea
                label="Mensagem *"
                className="max-w"
                maxRows={4}
                maxLength={500}
                name="message"
                value={formData.message}
                onValueChange={(text) => handleChange("message", text)}
                isInvalid={!!errors.message}
                errorMessage={errors.message}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="mt-2.5">
              <Select
                label="Selecione os serviços de interesse"
                selectionMode="multiple"
                className="max-w"
                onSelectionChange={handleSelectionChange}
              >
                {options.map((option) => (
                  <SelectItem
                    key={option.value}
                    value={option.value}
                    className="text-black"
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </div>
          <div className="sm:col-span-2">
            <Switch isSelected={agreed} onValueChange={setAgreed}>
              Aceita compartilhar os dados acima
            </Switch>
          </div>
        </RevealList>
        <div className="mt-10 flex flex-col gap-8">
          <Button
            isDisabled={!agreed}
            type="submit"
            className="block w-full min-h-12 rounded-xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Vamos conversar!
          </Button>
          <p className="text-black text-center">Ou nos chame pelo Whatsapp</p>
          <Button
            as={Link}
            href="https://w.app/mokap"
            startContent={
              <ChatBubbleOvalLeftEllipsisIcon width={30} height={30} />
            }
            type="submit"
            className="w-full min-h-12 rounded-xl bg-[#00D95F] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Whatsapp
          </Button>
        </div>
      </form>
    </div>
  );
};
