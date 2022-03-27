import styles from "./Button.module.css";
import clsx from "clsx";

import React from "react";

import { Spinner } from "../Spinner";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "filled";
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.VFC<IButtonProps> = (props) => {
  const {
    className,
    theme = "filled",
    children,
    loading = false,
    disabled = false,
    ...buttonProps
  } = props;

  return (
    <button
      {...buttonProps}
      className={clsx(
        className,
        styles.root,
        styles[`theme-${theme}`],
        (loading || disabled) && styles.disabled
      )}
      disabled={disabled}
    >
      <div className="relative">
        {loading && (
          <div className="absolute w-full h-full flex items-center justify-center">
            <Spinner className="flex-shrink-0" size={16} />
          </div>
        )}
        <div className={loading ? "opacity-0" : undefined}>{children}</div>
      </div>
    </button>
  );
};
