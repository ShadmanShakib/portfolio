import React, { useEffect, useMemo, useReducer, useCallback } from "react";
import { UiState, UiActions } from "./UiContext.types";
const initialState: UiState = {
  isMenuOpen: false,
  isLoading: false,
};
const UiContext = React.createContext<UiState | any>({});

const UiReducer = (state: UiState, action: UiActions) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return { ...state, isMenuOpen: !state.isMenuOpen };
    default:
      return state;
  }
};

export const UiProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(UiReducer, initialState);

  const setIsMenuOpen = useCallback(() => {
    dispatch({ type: "TOGGLE_MENU" });
  }, [dispatch]);
  const value = useMemo(() => ({ ...state, setIsMenuOpen }), [state]);
  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

export default UiContext;
