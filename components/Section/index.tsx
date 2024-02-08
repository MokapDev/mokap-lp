import React from "react";
import LPBuilder from "../LPBuilder";
import Image from "next/image";

type IImageComponent = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

interface ISection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  inverted?: boolean;
  imageProps: IImageComponent;
}

export const Section = ({
  id,
  title,
  subtitle,
  description,
  inverted,
  imageProps,
}: ISection) => {
  const ImageComponent = () => (
    <LPBuilder.Column>
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        width={imageProps.width}
        height={imageProps.height}
        priority
      />
    </LPBuilder.Column>
  );

  return (
    <LPBuilder.Section id={id}>
      <LPBuilder.Content>
        {inverted && <ImageComponent />}
        <LPBuilder.Column>
          <LPBuilder.Text type="title">{title}</LPBuilder.Text>
          {subtitle && (
            <LPBuilder.Text type="subtitle">{subtitle}</LPBuilder.Text>
          )}
          <LPBuilder.Text type="text">{description}</LPBuilder.Text>
        </LPBuilder.Column>
        {!inverted && <ImageComponent />}
      </LPBuilder.Content>
    </LPBuilder.Section>
  );
};
/*
SectionWithImage
SectionTextRight
Section.WithImage
*/