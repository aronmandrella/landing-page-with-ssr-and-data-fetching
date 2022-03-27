import { useState, useEffect, useCallback } from "react";

import { postNewsletterEmail } from "@api";

export const usePostNewsletterEmail = () => {
  /* ---------------------------------- STATE --------------------------------- */

  const [isPostingEmail, setIsPostingEmail] = useState(false);

  /*
    Information about success could be stored in cookies if user
    should not see this input in the future.
  */
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  /* -------------------------------- REDUCERS -------------------------------- */

  const submitEmail = useCallback((email: string) => {
    setIsPostingEmail(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    const job = async () => {
      const response = await postNewsletterEmail(email);

      if (response.success) {
        setSuccessMessage(response.data.message);
      } else {
        setErrorMessage(response.error.message);
      }

      setIsPostingEmail(false);
    };

    job();
  }, []);

  return {
    isPostingEmail,
    successMessage,
    errorMessage,
    submitEmail,
  };
};
