import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

interface IFormData {
  name: string;
  company: string;
  email: string;
  phoneNumber: string;
  message: string;
  selectedServices: string[];
}

export async function POST(request: NextRequest) {
  const formData: IFormData = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const getSelectedServices = () => {
    let str = "";
    formData.selectedServices.forEach(service => {
      str += service + " | "
    })
    return str;
  }

  const html = `
  <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: left;
        }
        h1 {
          text-align: center;
          background-color: #775FFF;
          color: #FFFFFF;
          font-weight: bold;
          padding: 10px;
        }
        .info-label {
          font-weight: bold;
          font-size: 14px;
        }
        .info-text {
          font-size: 18px;
        }
      </style>
    </head>
    <body>
      <h1>Novo email de contato!</h1>
      <p class="info-label">Nome:</p>
      <p class="info-text">${formData.name}</p>
      <p class="info-label">Empresa:</p>
      <p class="info-text">${formData.company}</p>
      <p class="info-label">Email:</p>
      <p class="info-text">${formData.email}</p>
      <p class="info-label">Número de telefone:</p>
      <p class="info-text">(${formData.phoneNumber}</p>
      <p class="info-label">Serviços de interesse:</p>
      <p class="info-text">(${getSelectedServices()})</p>
      <p class="info-label">Mensagem:</p>
      <p class="info-text">${formData.message}</p>
    </body>
  </html>
`;

  const mailOptions: Mail.Options = {
    from: formData.email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `LP - Mensagem de (${formData.email})`,
    html: html,
  };

  try {
    await transport.sendMail(mailOptions);
    console.log('Erro ao enviar email')
    return NextResponse.json({ message: "Success!", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}
