import { TradeSymbolStatusEnum } from "../constants/enums";
import { ExchangeInformation } from "../types/exchange.types";

export const filterExchangeTradeSymbolList = (
  exchangeInfo: ExchangeInformation
): ExchangeInformation => ({
  ...exchangeInfo,
  symbols: exchangeInfo.symbols.filter((tradeSymbol) => {
    const { symbol } = tradeSymbol;

    return (
      tradeSymbol.status.toUpperCase() === TradeSymbolStatusEnum.TRADING &&
      symbol.includes("USDT") &&
      !symbol.endsWith("UPUSDT") &&
      !symbol.endsWith("DOWNUSDT")
    );
  }),
});
