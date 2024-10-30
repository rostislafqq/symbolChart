import { Autocomplete, Skeleton, TextField } from "@mui/material";
import { SyntheticEvent } from "react";

import { useGetBinanceSpotExchangeInfoQuery } from "../../features/exchangeApiInjects/binanceApiInjectsSlice";
import {
  resetTradeSymbol,
  setTradeSymbol,
} from "../../features/symbolChartSlice";
import { useAppDispatch } from "../../hooks/redux";
import { TradeSymbol } from "../../types/exchange.types";

export const TradingSymbolSelector = () => {
  const dispatch = useAppDispatch();

  const { data: exchangeInfo, isLoading: isLoadingExchangeInfo } =
    useGetBinanceSpotExchangeInfoQuery();

  const tradeSymbolList = exchangeInfo?.symbols ?? [];

  const selectTradeSymbol = (
    _: SyntheticEvent<Element, Event>,
    selectedTradeSymbol: Nullable<TradeSymbol>
  ) => {
    if (selectedTradeSymbol) {
      dispatch(setTradeSymbol(selectedTradeSymbol));
    } else {
      dispatch(resetTradeSymbol());
    }
  };

  return isLoadingExchangeInfo ? (
    <Skeleton variant="rounded" height={40} />
  ) : (
    <Autocomplete
      options={tradeSymbolList}
      autoComplete
      getOptionLabel={(option) => option.symbol}
      onChange={selectTradeSymbol}
      renderInput={(params) => (
        <TextField {...params} variant="outlined" size="small" />
      )}
    />
  );
};
