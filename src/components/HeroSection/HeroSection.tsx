import React from "react";
import clsx from "clsx";

import { Section, Container } from "@ui";

interface IHeroSectionProps {
  className?: string;
  text: string;
  img: string;
}

export const HeroSection: React.VFC<IHeroSectionProps> = React.memo((props) => {
  const { className, text, img } = props;

  return (
    <Section className={clsx(className)} as="article">
      <Container className="grid grid-cols-1 items-center md:grid-cols-2 gap-2">
        <h1 className="lg:text-left text-4xl lg:text-5xl max-w-[500px] font-medium">{text}</h1>
        <div className="h-[330px] max-w-[500px]">
          {/*
            Endpoint doesn't provide info about width/height so Next/Image can't be used.
          */}
          <img
            className="ml-auto w-full h-full object-cover shadow-md"
            src={img}
            alt="Landing page image"
          />
        </div>
      </Container>
    </Section>
  );
});
