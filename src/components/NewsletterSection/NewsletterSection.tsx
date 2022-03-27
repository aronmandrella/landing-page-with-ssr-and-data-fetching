import React, { useState } from "react";
import clsx from "clsx";

import { Section, Container, Input, Button } from "@ui";

import { usePostNewsletterEmail } from "./usePostNewsletterEmail";

interface INewsletterSectionProps {
  className?: string;
}

export const NewsletterSection: React.VFC<INewsletterSectionProps> = React.memo((props) => {
  const { className } = props;

  const { isPostingEmail, successMessage, errorMessage, submitEmail } = usePostNewsletterEmail();

  const [email, setEmail] = useState("");

  /*
    Performance cold be improved by using onSubmit of <form>,
    or by using uncontrolled mode, or with refs, or with many other approaches
    but for a small component like this it's probably not worth it.
  */
  const handleSubmit = () => submitEmail(email);
  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => setEmail(e.target.value);

  return (
    <Section className={clsx(className)} as="article">
      <Container maxWidth="sm">
        <h2 className="text-center text-3xl sm:text-4xl font-medium mb-4">
          Sign up for Newsletter
        </h2>

        {successMessage ? (
          <p className="text-center text-sm text-success font-medium">
            Thank you for signing up for the Breally newsletter.
          </p>
        ) : (
          <div className="flex flex-row items-center space-x-1">
            <Input
              className="flex-grow"
              error={Boolean(errorMessage)}
              type="email"
              placeholder="Type your email"
              value={email}
              onChange={handleInput}
            />

            <Button
              className="hidden sm:block flex-grow-0 flex-shrink-0"
              loading={isPostingEmail}
              onClick={handleSubmit}
            >
              Submit
            </Button>
            <Button
              className="flex-grow-0 flex-shrink-1 min-w-0 sm:hidden"
              style={{ minWidth: 0 }}
              loading={isPostingEmail}
              onClick={handleSubmit}
            >
              ↳
            </Button>
          </div>
        )}

        {errorMessage && <p className="text-center text-sm text-error mt-2">{errorMessage}</p>}
      </Container>
    </Section>
  );
});
