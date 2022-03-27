import styles from "./Input.module.css";

import React from "react";
import clsx from "clsx";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: "text" | "email";
  error?: boolean;
}

export const Input: React.VFC<IInputProps> = React.memo((props) => {
  const { className, error = false, ...inputProps } = props;

  return <input {...inputProps} className={clsx(className, styles.root, error && styles.error)} />;
});
