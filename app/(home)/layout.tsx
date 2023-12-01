import React from "react";
import { Header } from "@components/common";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default layout;
