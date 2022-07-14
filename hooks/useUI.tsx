import { UiContext } from "context";
import React from "react";

const useUI = () => {
  const context = React.useContext(UiContext);
  return context;
};
export default useUI;
