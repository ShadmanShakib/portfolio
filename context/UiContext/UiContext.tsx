import React, { useEffect, useMemo, useReducer, useCallback } from "react";
import { UiState } from "./UiContext.types";
const UiContext = React.createContext<UiState | any>({});

const UiReducer = (state: UiState, action: any) => {
  switch (action.type) {
    case "SET_IS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_IS_MENU_OPEN":
      return { ...state, isMenuOpen: action.payload };
    default:
      return state;
  }
};
