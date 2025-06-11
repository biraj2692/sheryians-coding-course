import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    loadProducts: (state, action) => {
        // console.log(action);
        state.data = action.payload;       
    },
  },
});

export const { loadProducts } = productsSlice.actions;
export default productsSlice.reducer;
