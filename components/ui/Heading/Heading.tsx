import React from "react";
import s from "./Heading.module.css";
import cn from "classnames";
interface HeadingProps {
  children: React.ReactNode;
}
export default function Heading(props: HeadingProps) {
  return (
    <div>
      <h1 className={s.heading}>{props.children}</h1>
    </div>
  );
}
