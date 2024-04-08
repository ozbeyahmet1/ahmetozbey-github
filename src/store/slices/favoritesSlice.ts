import { PayloadAction, createSlice } from "@reduxjs/toolkit";

/**
 * Represents the state of the issue URLs in the favorites slice.
 */
export interface IssueUrlState {
  value: Array<string>;
}

/**
 * Represents the initial state of the favorites slice.
 */
const initialState: IssueUrlState = {
  value: [],
};

/**
 * Represents the favorites slice of the Redux store.
 */
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    /**
     * Adds a new URL to the favorites list if it doesn't already exist.
     * @param state - The current state of the favorites slice.
     * @param action - The action containing the URL to be added.
     */
    addToFavorites: (state, action: PayloadAction<string>) => {
      const newUrl = action.payload;
      if (!state.value.includes(newUrl)) {
        state.value = [...state.value, newUrl];
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
