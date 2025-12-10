import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // type-only import


interface SummaryState {
  inputText: string;
  summaryText: string;
  loading: boolean;
}

const initialState: SummaryState = {
  inputText: "",
  summaryText: "",
  loading: false,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setInputText: (state, action: PayloadAction<string>) => {
      state.inputText = action.payload;
    },
    setSummaryText: (state, action: PayloadAction<string>) => {
      state.summaryText = action.payload;
    },
    setSummaryLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  },
});

export const { setInputText, setSummaryText, setSummaryLoading } = summarySlice.actions;
export default summarySlice.reducer;
