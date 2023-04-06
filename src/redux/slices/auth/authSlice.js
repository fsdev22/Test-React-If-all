//Responsible for handleing and storing authentication token

import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  token: "",
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth slice",
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, action) => {
      console.log(action.payload);
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = "";
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
