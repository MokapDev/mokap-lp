/**
 * @fileoverview This file contains the code for the Landing Page Builder component.
 *
 * The Landing Page Builder component is a collection of components that can be used to create a landing page.
 * It includes components for sections, columns, content, text, and images.
 */

import { Column } from "./Column/column";
import { Content } from "./Content/content";
import { Image } from "./Image/image";
import { Section } from "./Section/section";
import { Text } from "./Text/text";
import { Separator } from "./Separator/separator";
import { ImageContainer } from "./ImageContainer/imagecontainer";
import { Header } from "./Header/header";
import { LetterBanner } from "./LetterBanner/letterbanner";
import { Row } from "./Row/row";
import { Footer } from "./Footer/footer";
import { CardGrid } from "./CardGrid/cardgrid";

/**
 * This is the Landing Page Builder component.
 *
 * @param {object} props - The props passed to the component.
 * @param {object} props.children - The child components of the Landing Page Builder.
 */
const LPBuilder = (props: any) => {
  const { children } = props;

  return (
    <div>
      {children}
    </div>
  );
};

/**
 * This is a collection of components that can be used to create a landing page.
 * It includes components for sections, columns, content, text, and images.
 */
LPBuilder.Section = Section;
LPBuilder.Content = Content;
LPBuilder.Column = Column;
LPBuilder.Text = Text;
LPBuilder.Image = Image;
LPBuilder.Separator = Separator;
LPBuilder.ImageContainer = ImageContainer;
LPBuilder.Header = Header;
LPBuilder.LetterBanner = LetterBanner;
LPBuilder.Row = Row;
LPBuilder.Footer = Footer;
LPBuilder.CardGrid = CardGrid;

export default LPBuilder;

// import { Column } from "./Column/column";
// import { Content } from "./Content/content";
// import { Image } from "./Image/image";
// import { Section } from "./Section/section";
// import { Text } from "./Text/text";

// const LPBuilder = {
//   Section,
//   Content,
//   Column,
//   Text,
//   Image
// };

// export default LPBuilder;

/*
Exemplo de uso:

const LandingPageHomeSection = () => {
  return (
    <LPBuilder.Section id="Home">
      <LPBuilder.Content>
        <LPBuilder.Column>
          <LPBuilder.Text type="title">Title</LPBuilder.Text>
          <LPBuilder.Text type="subtitle">Subtitle</LPBuilder.Text>
          <LPBuilder.Text type="text">Text</LPBuilder.Text>
        </LPBuilder.Column>
        <LPBuilder.Column>
          <LPBuilder.Text type="title">Image</LPBuilder.Text>
        </LPBuilder.Column>
      </LPBuilder.Content>
    </LPBuilder.Section>
  );
};
*/
