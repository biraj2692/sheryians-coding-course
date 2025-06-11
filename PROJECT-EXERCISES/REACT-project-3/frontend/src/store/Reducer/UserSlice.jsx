import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser: (state, action) => {
        // console.log(action);
        state.data = action.payload;       
    },
    removeUser: (state, action) => {
      state.data = null
    }
  },
});

export const { loadUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
