import React from "react";
import s from "./Button.module.css";
import cn from "classnames";
interface Props {
  children?: React.ReactNode;
}
function Button(props: Props): JSX.Element {
  const { children } = props;
  const mainClass = cn(s.main, {
    [s.primary]: false,
    [s.secondary]: true,
  });
  return <button className={mainClass}>{children}</button>;
}

export default Button;
