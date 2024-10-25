import { binanceSpotUrlFragment } from "../../constants/exchangeBaseUrls";
import { ExchangeInformation } from "../../types/exchange.types";
import { filterExchangeTradeSymbolList } from "../../utils/exchange.utils";
import { binanceApiSlice } from "../binanceApiSlice";

const binanceApiInjectsSlice = binanceApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBinanceSpotExchangeInfo: builder.query<ExchangeInformation, void>({
      query: () => ({
        url: `${binanceSpotUrlFragment}/exchangeInfo`,
        method: "GET",
      }),

      transformResponse: (data: ExchangeInformation): ExchangeInformation =>
        filterExchangeTradeSymbolList(data),
    }),
  }),
});

export const { useGetBinanceSpotExchangeInfoQuery } = binanceApiInjectsSlice;
