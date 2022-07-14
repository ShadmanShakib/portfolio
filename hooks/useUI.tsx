import { UiContext } from "context";
import React from "react";

const useUI = () => {
  const context = React.useContext(UiContext);
  if (context === undefined) {
    throw new Error("useUI must be used within a UiProvider");
  } else return context;
};
export default useUI;
