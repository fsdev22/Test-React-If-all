//Responsible for handleing and storing user data
import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  username: "",
  email: "",
  id: "",
};
const userSlice = createSlice({
  name: "user details",
  initialState: INITIAL_STATE,
  reducers: {
    storeUser: (state, action) => {
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.id = action.payload.id;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
