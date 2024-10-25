import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import cartReducer from "./cartSlice";
import { goodsApiSlice } from "./catalogApiSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
    [goodsApiSlice.reducerPath]: goodsApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(goodsApiSlice.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
