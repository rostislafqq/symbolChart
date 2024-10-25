import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { GoodItem } from "../types/Goods.types";
import { setGoods } from "./catalogSlice";

export const goodsApiSlice = createApi({
  reducerPath: "goodsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "api/firebase",
  }),

  endpoints: (builder) => ({
    getAllGoods: builder.query<GoodItem[], void>({
      query: () => ({
        url: "",
      }),

      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;

          dispatch(setGoods(result.data));
        } catch (error) {
          console.error(error);
        }
      },
    }),

    getCurrentGood: builder.query<GoodItem, string>({
      query: (id) => ({
        url: "",
        method: "POST",
        body: {
          id,
        },
      }),
    }),
  }),
});

export const { useGetAllGoodsQuery, useGetCurrentGoodQuery } = goodsApiSlice;
