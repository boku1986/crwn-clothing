import { USER_ACTION_TYPES } from "./user.types";
import {createSlice} from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      // this is equivalent to the switch statement below (in the old reducer)
      // under the hood, redux toolkit uses immer, which allows us to write code that looks like we are mutating the state
      // but it actually handles the immutability for us
      state.currentUser = action.payload;
    }
  }
})

export const {setCurrentUser} = userSlice.actions;
export const userReducer = userSlice.reducer;