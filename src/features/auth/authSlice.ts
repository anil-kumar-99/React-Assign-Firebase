import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit"; // Use type-only import


interface UserState {
  uid: string | null;
  email: string | null;
}

interface AuthState {
  user: UserState | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState | null>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { setUser, setLoading, logout } = authSlice.actions;
export default authSlice.reducer;
