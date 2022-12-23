import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalPrice: 0,
    items: []
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.totalPrice = state.items.reduce(
        (sum, obj) => (sum += obj.price),
        0
      );
    },
    removeItem(state, action) {
      state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, clearItems } = cartSlice.actions;
export default cartSlice.reducer;
