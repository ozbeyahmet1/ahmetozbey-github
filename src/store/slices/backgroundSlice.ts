import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BackgroundProperties } from "@/helpers/interfaces/common";
import { backgroundData } from "../../datas/backgroundData";

/**
 * Represents the state of the background slice.
 */
export interface BackgroundState {
  value: BackgroundProperties; // The currently selected theme.
}

/**
 * Represents the initial state of the background slice.
 */
const initialState: BackgroundState = {
  value: backgroundData[0], // Set the initial theme to the first theme in the themes array.
};

/**
 * Represents the background slice of the Redux store.
 */
export const backgroundSlice = createSlice({
  name: "background",
  initialState,
  reducers: {
    /**
     * Sets the background theme.
     * @param state - The current state.
     * @param action - The action containing the payload.
     */
    setBackground: (state, action: PayloadAction<number>) => {
      const selectedBackground = backgroundData.find((theme) => theme.id === action.payload);
      if (selectedBackground) {
        state.value = selectedBackground;
      }
    },
  },
});

export const { setBackground } = backgroundSlice.actions;
export default backgroundSlice.reducer;
