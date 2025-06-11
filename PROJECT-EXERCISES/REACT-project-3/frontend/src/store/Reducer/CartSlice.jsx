import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    loadCarts: (state, action) => {
        // console.log(action);
        state.carts = action.payload;       
    },
  },
});

export const { loadUser } = cartSlice.actions;
export default cartSlice.reducer;
