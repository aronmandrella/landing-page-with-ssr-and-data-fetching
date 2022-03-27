import React from "react";
import clsx from "clsx";

/*
  <Container/> Limits width of content and centers it in parent
*/

const MAX_WIDTHS_CLASSES = {
  sm: "max-w-39",
  base: "max-w-59",
  lg: "max-w-6xl",
};

interface IContainerProps {
  className?: string;
  maxWidth?: keyof typeof MAX_WIDTHS_CLASSES;
  children?: React.ReactNode;
}

export const Container: React.VFC<IContainerProps> = React.memo((props) => {
  const { className, maxWidth = "base", children } = props;

  return (
    <div
      className={clsx(
        className,
        MAX_WIDTHS_CLASSES[maxWidth],
        "mx-auto px-1.5 md:px-4 box-content"
      )}
    >
      {children}
    </div>
  );
});
