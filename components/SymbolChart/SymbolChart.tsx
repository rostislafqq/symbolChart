import { Grid } from "@mui/material";

import { useGetBinanceSpotExchangeInfoQuery } from "../../features/exchangeApiInjects/binanceApiInjectsSlice";
import { ToggleExchangeButtonGroup } from "../common/ToggleExchangeButtonGroup";

export const SymbolChart = () => {
  useGetBinanceSpotExchangeInfoQuery();

  return (
    <Grid container>
      <Grid item>
        <ToggleExchangeButtonGroup />
      </Grid>
    </Grid>
  );
};
