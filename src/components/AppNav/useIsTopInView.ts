import { useEffect, useState } from "react";

export const useIsTopInView = (): boolean => {
  // Initially assume that user is at the top.
  const [isTopInView, setIsTopInView] = useState<boolean>(true);

  useEffect(() => {
    const checkIfTopIsInView = () => {
      setIsTopInView(window.scrollY === 0);
    };

    const handleWindowScroll = () => {
      checkIfTopIsInView();
    };

    // Adding 'throttle' here is something worth considering
    window.document.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.document.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return isTopInView;
};
