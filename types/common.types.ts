import { ExchangeNamesEnum } from "../constants/enums";

export interface EntityWithSymbol {
  symbol: string;
}

export interface EntityWithExchange {
  exchange: ExchangeNamesEnum;
}
