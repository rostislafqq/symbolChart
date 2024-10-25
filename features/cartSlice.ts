import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { RootState } from "./store";

const cartSliceAdapter = createEntityAdapter<CartItem>({
  selectId: ({ id }) => id,
});

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: cartSliceAdapter.getInitialState(),
  reducers: {
    setCartItem(state, action: PayloadAction<CartItem>) {
      cartSliceAdapter.setOne(state, action.payload);
    },
  },
});

export const { setCartItem } = cartSlice.actions;

export default cartSlice.reducer;

export const { selectAll: selectAllCartItems } =
  cartSliceAdapter.getSelectors<RootState>((state) => state.cartSlice);
