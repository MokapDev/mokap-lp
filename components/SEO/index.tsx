import { NextSeo } from "next-seo";

interface ISeo {
  title: string;
  description: string;
}

export const SEO = ({ title, description }: ISeo) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical="https://www.mokap.com.br/"
      openGraph={{
        url: "https://www.mokap.com.br/",
        title: `${title}`,
        description: `${description}`,
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
      }}
      // twitter={{
      //   handle: "@handle",
      //   site: "@site",
      //   cardType: "summary_large_image",
      // }}
    />
  );
};
