import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    totalPrice: 0,
  },
  reducers: {
    add: (state, action) => {
      const updatedCartList = state.cartList.concat(action.payload);
      const totalPrice = state.totalPrice + Number(action.payload.price);
      return { ...state, cartList: updatedCartList, totalPrice: totalPrice };
    },

    remove: (state, action) => {
      const updatedCartList = state.cartList.filter(product=>product.id !== action.payload.id) 
      const totalPrice = state.totalPrice - Number(action.payload.price);
      return { ...state, cartList: updatedCartList, totalPrice: totalPrice };
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
