import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ExchangeNamesEnum } from "../constants/enums";
import { EntityWithExchange } from "../types/common.types";
import { RootState } from "./store";

interface SymbolChartSlice extends EntityWithExchange {}

const initialState: SymbolChartSlice = {
  exchange: ExchangeNamesEnum.binance,
};

export const symbolChartSlice = createSlice({
  name: "symbolChart",
  initialState,
  reducers: {
    setExchange(state, action: PayloadAction<ExchangeNamesEnum>) {
      state.exchange = action.payload;
    },
  },
});

export const { setExchange } = symbolChartSlice.actions;

export const selectExchange = (state: RootState) => state.symbolChart.exchange;

export default symbolChartSlice.reducer;
