import React from "react";
import { ButtonProps } from "./Button.types";
import cn from "classnames";
function Button(props: ButtonProps) {
  const { children, variant, onClick } = props;
  const classes = cn(
    "bg-gray-900 text-white rounded-sm p-2",
    variant === "primary" && "bg-blue-500",
    variant === "secondary" && "bg-gray-900",
    variant === "tertiary" && "bg-gray-700"
  );
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
