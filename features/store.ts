import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { binanceApiSlice } from "./binanceApiSlice";
import symbolChartReducer from "./symbolChartSlice";

export const store = configureStore({
  reducer: {
    [binanceApiSlice.reducerPath]: binanceApiSlice.reducer,
    symbolChart: symbolChartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      binanceApiSlice.middleware
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
