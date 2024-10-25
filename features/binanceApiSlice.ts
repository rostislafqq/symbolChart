import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { ExchangeNamesEnum } from "../constants/enums";

export const binanceApiSlice = createApi({
  reducerPath: "binanceApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "api/exchanges/",
    timeout: 300 * 1000,

    prepareHeaders: (headers) => {
      headers.set("x-exchange", ExchangeNamesEnum.binance);
    },
  }),
  endpoints: () => ({}),
});
