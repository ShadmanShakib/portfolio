import React from "react";
import { IPrimaryButton } from "./types";

function PrimaryButton(props: IPrimaryButton): JSX.Element {
  const { title } = props;
  return <button>{title}</button>;
}

export default PrimaryButton;
