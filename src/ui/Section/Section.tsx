import styles from "./Section.module.css";

import React from "react";
import clsx from "clsx";

const VERTICAL_PADDING_CLASSES = {
  base: "py-8",
  lg: "py-12",
};

interface ISectionProps {
  className?: string;
  children?: React.ReactNode;
  as: "article" | "section";
  theme?: "default" | "contrast";
  verticalPadding?: keyof typeof VERTICAL_PADDING_CLASSES;
}

export const Section: React.VFC<ISectionProps> = React.memo((props) => {
  const {
    className,
    as: RootComponent,
    theme = "default",
    verticalPadding = "base",
    children,
  } = props;

  return (
    <RootComponent
      className={clsx(
        className,
        styles.root,
        VERTICAL_PADDING_CLASSES[verticalPadding],
        styles[`theme-${theme}`]
      )}
    >
      {children}
    </RootComponent>
  );
});
