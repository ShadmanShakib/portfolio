import React from "react";
import { UiProvider } from "./UiContext";
function MainProvider({ children }: { children: React.ReactNode }) {
  return <UiProvider>{children}</UiProvider>;
}

export default MainProvider;
