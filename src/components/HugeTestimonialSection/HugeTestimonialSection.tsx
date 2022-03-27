import React from "react";
import clsx from "clsx";

import { Section, Container } from "@ui";
import { HugeQuoteIcon } from "./HugeQuoteIcon";

interface IHugeTestimonialSectionProps {
  className?: string;
  author?: string;
  text: string;
}

export const HugeTestimonialSection: React.VFC<IHugeTestimonialSectionProps> = React.memo(
  (props) => {
    const { className, text, author } = props;

    return (
      <Section className={clsx(className)} as="article" theme="contrast">
        <Container>
          <h2 className="sr-only">Testimonial</h2> {/* Invisible text for SEO */}
          <HugeQuoteIcon className="mb-4" />
          <p className="text-xl text-on-contrast-surface-1 md:text-2xl">{text}</p>
          {author && (
            <p className="text-xl text-on-contrast-surface-2 md:text-2xl mt-6">{author}</p>
          )}
        </Container>
      </Section>
    );
  }
);
