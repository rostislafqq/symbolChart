import {
  RateLimitersEnum,
  RateLimitIntervalsEnum,
} from "../constants/exchangeEnums";

export interface BinanceRateLimit {
  rateLimitType: RateLimitersEnum;
  interval: RateLimitIntervalsEnum;
  intervalNum: number;
  limit: number;
}
