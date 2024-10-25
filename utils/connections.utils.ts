import { ConnectionTypesEnum } from "../constants/enums";
import { binanceBaseUrlsEntities } from "../constants/exchangeBaseUrls";
import { ExchangeNamesEnum } from "./../constants/enums";

export const getExchangeBaseUrl = (
  exchange: ExchangeNamesEnum,
  connectionType: ConnectionTypesEnum
) => {
  switch (exchange) {
    case ExchangeNamesEnum.binance:
      return binanceBaseUrlsEntities[connectionType].baseUrl;
  }
};

export const getAxiosExchangeBaseConfig = () => {
  return {
    timeout: 300 * 1000,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
};
