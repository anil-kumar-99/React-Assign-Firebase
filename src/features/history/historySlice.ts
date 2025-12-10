import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // type-only import


interface HistoryItem {
  id: string;
  text: string;
  summary: string;
  timestamp: string;
}

interface HistoryState {
  items: HistoryItem[];
}

const initialState: HistoryState = {
  items: [],
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setHistory: (state, action: PayloadAction<HistoryItem[]>) => {
      state.items = action.payload;
    },
    addHistoryItem: (state, action: PayloadAction<HistoryItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { setHistory, addHistoryItem } = historySlice.actions;
export default historySlice.reducer;
