export interface UiState {
  isLoading: boolean;
  isMenuOpen: boolean;
}

export type UiActions = {
  type: "TOGGLE_MENU";
};
