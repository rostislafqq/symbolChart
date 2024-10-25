import {
  FilterTypesEnum,
  OrderTypesEnum,
  TradePermissonEnum,
  TradeSymbolStatusEnum,
} from "../constants/exchangeEnums";
import { BinanceRateLimit } from "./binance.types";
import { EntityWithSymbol } from "./common.types";

export interface TradeSymbolFilter {
  filterType: FilterTypesEnum;
  minPrice?: string;
  maxPrice?: string;
  tickSize?: string;
  avgPriceMins?: number;
  multiplierDown?: string;
  multiplierUp?: string;
  maxQty?: string;
  minQty?: string;
  stepSize?: string;
  applyToMarket?: boolean;
  minNotional?: string;
  applyMinToMarket?: boolean;
  maxNotional?: string;
  applyMaxToMarket?: boolean;
  limit?: number;
  maxNumOrders?: number;
  maxNumAlgoOrders?: number;
  notional?: string;
}

export interface TradeSymbol extends EntityWithSymbol {
  status: TradeSymbolStatusEnum;
  baseAsset: string;
  baseAssetPrecision: number;
  quoteAsset: string;
  quotePrecision: number;
  quoteAssetPrecision?: number;
  baseCommissionPrecision?: number;
  quoteCommissionPrecision?: number;
  orderTypes?: OrderTypesEnum[];
  icebergAllowed?: boolean;
  ocoAllowed?: boolean;
  quoteOrderQtyMarketAllowed?: boolean;
  allowTrailingStop?: boolean;
  isSpotTradingAllowed?: boolean;
  isMarginTradingAllowed?: boolean;
  cancelReplaceAllowed?: boolean;
  filters: TradeSymbolFilter[];
  permissions?: TradePermissonEnum[];
}

export interface ExchangeInformation {
  timezone: string;
  serverTime: number;
  rateLimits: BinanceRateLimit[];
  exchangeFilters: string[];
  symbols: TradeSymbol[];
}
