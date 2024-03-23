import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Mokap - Soluções em Design e Desenvolvimento",
  description: "Transforme sua presença online com nossas soluções!",
  keywords: [
    "design",
    "desenvolvimento",
    "agência",
    "landing page",
    "site",
    "araraquara",
    "banner",
    "folder",
    "website",
    'mokap'
  ],
  openGraph: {
    url: "https://www.mokap.com.br/",
    title: "Mokap - Soluções em Design e Desenvolvimento",
    description: "Transforme sua presença online com nossas soluções!",
    images: [
      {
        url: "https://www.mokap.com.br/lightbackground.jpg",
        width: 800,
        height: 600,
        alt: "Og Image Alt",
        type: "image/jpeg",
      },
      {
        url: "https://www.mokap.com.br/lightbackground.jpg",
        width: 900,
        height: 800,
        alt: "Og Image Alt Second",
        type: "image/jpeg",
      },
      { url: "https://www.mokap.com.br/lightlogowithtext.svg" },
      { url: "https://www.mokap.com.br/logowithtext.svg" },
    ],
    siteName: "Mokap",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <body className={poppins.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
