import React from "react";

export default function useDarkMode() {
  const [currentMode, setCurrentMode] = React.useState("dark");
  const mode = currentMode === "dark" ? "light" : "dark";
  React.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(currentMode);
    root.classList.add(mode);
  }, [mode, currentMode]);
  return { mode, currentMode, setCurrentMode };
}
