import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MOKAP - Soluções em Design e Desenvolvimento",
  description:
    "Transforme sua presença online com as melhores landing pages. MOKAP oferece soluções de design e desenvolvimento personalizadas para o seu negócio.",
  keywords: [
    "mokap",
    "design",
    "desenvolvimento",
    "landing page",
    "site profissional",
    "design de website",
    "landing page personalizada",
    "desenvolvimento web",
    "web design responsivo",
    "experiência do usuário",
    "landing pages persuasivas",
    "design inovador",
    "desenvolvimento web personalizado",
    "soluções de design",
  ],
  authors: [{ name: "Equipe MOKAP", url: "https://mokap.com.br" }],
  openGraph: {
    type: "website",
    url: "https://mokap.com.br",
    title: "MOKAP - Soluções em Design e Desenvolvimento",
    description:
      "Transforme sua presença online com as melhores landing pages. MOKAP oferece soluções de design e desenvolvimento personalizadas para o seu negócio.",
    siteName: "MOKAP",
    images: [{ url: "https://mokap.com.br/about.svg" }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@mokap.com.br",
    creator: "@mokapdesign",
    title: "MOKAP - Soluções em Design e Desenvolvimento",
    description:
      "Transforme sua presença online com as melhores landing pages. MOKAP oferece soluções de design e desenvolvimento personalizadas para o seu negócio.",
    images: "https://mokap.com.br/about.svg",
  },
  alternates: {
    canonical: "https://www.mokap.com.br",
  },
  icons: [
    { rel: "icon", url: "https://mokap.com.br/favicon.ico" }, //CONFIGURAR
    {
      rel: "apple-touch-icon", //CONFIGURAR
      url: "https://example.com/apple-touch-icon.png", //CONFIGURAR
    },
  ],
  verification: {
    google: "1234567890",
    yandex: "1234567890",
    me: "1234567890",
  },
  appleWebApp: {
    capable: true,
    title: "MOKAP - Soluções em Design e Desenvolvimento",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  abstract:
    "Transforme sua presença online com as melhores landing pages. MOKAP oferece soluções de design e desenvolvimento personalizadas para o seu negócio.",
  archives: "https://mokap.com.br/",
  assets: "https://mokap.com.br/",
  bookmarks: "https://mokap.com.br/",
  category: "Technology",
  classification: "Web Development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
