import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ExchangeNamesEnum } from "../constants/enums";
import { EntityWithExchange } from "../types/common.types";
import { TradeSymbol } from "../types/exchange.types";
import { RootState } from "./store";

interface SymbolChartSlice extends EntityWithExchange {
  tradeSymbol: Nullable<TradeSymbol>;
}

const initialState: SymbolChartSlice = {
  exchange: ExchangeNamesEnum.binance,
  tradeSymbol: null,
};

export const symbolChartSlice = createSlice({
  name: "symbolChart",
  initialState,
  reducers: {
    setExchange(state, action: PayloadAction<ExchangeNamesEnum>) {
      state.exchange = action.payload;
    },
    setTradeSymbol(state, action: PayloadAction<Nullable<TradeSymbol>>) {
      state.tradeSymbol = action.payload;
    },
    resetTradeSymbol(state) {
      state.tradeSymbol = initialState.tradeSymbol;
    },
  },
});

export const { setExchange, setTradeSymbol, resetTradeSymbol } =
  symbolChartSlice.actions;

export const selectExchange = (state: RootState) => state.symbolChart.exchange;

export default symbolChartSlice.reducer;
