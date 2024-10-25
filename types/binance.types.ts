import { RateLimitersEnum, RateLimitIntervalsEnum } from "../constants/enums";

export interface BinanceRateLimit {
  rateLimitType: RateLimitersEnum;
  interval: RateLimitIntervalsEnum;
  intervalNum: number;
  limit: number;
}
