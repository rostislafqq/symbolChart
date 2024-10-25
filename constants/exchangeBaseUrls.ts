import { ConnectionTypesEnum } from "./enums";

interface ExchangeBaseUrls {
  baseFuturesUrl?: string;
  baseUrl?: string;
}

type ExchangeBaseUrlsEntities = {
  [key in keyof typeof ConnectionTypesEnum]: ExchangeBaseUrls;
};

export const binanceBaseUrlsEntities: ExchangeBaseUrlsEntities = {
  api: {
    baseUrl: "https://api.binance.com/",
    baseFuturesUrl: "https://fapi.binance.com/",
  },
  wsApi: {
    baseUrl: "wss://ws-api.binance.com:443/ws-api/v3",
    baseFuturesUrl: undefined,
  },
  wsStream: {
    baseUrl: `wss://stream.binance.com:9443/stream`,
    baseFuturesUrl: "wss://fstream.binance.com/stream",
  },
};

export const binanceFuturesUrlFragment = "fapi";
export const binanceSpotUrlFragment = "api/v3";

export const bybitBaseUrlsEntities: ExchangeBaseUrlsEntities = {
  api: {
    baseUrl: "https://api.bybit.com/",
    baseFuturesUrl: "https://api.bybit.com/",
  },
  wsApi: {
    baseUrl: "wss://stream.bybit.com/v5/public/spot",
    baseFuturesUrl: "wss://stream.bybit.com/v5/public/linear",
  },
  wsStream: {
    baseUrl: "wss://stream.bybit.com/v5/public/spot",
    baseFuturesUrl: "wss://stream.bybit.com/v5/public/linear",
  },
};
