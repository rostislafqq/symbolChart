import { Grid } from "@mui/material";

import { ToggleExchangeButtonGroup } from "../common/ToggleExchangeButtonGroup";
import { TradingSymbolSelector } from "../common/TradingSymbolSelector";

export const SymbolChart = () => {
  return (
    <Grid container>
      <Grid item>
        <Grid flexDirection="column" spacing={1} container>
          <Grid item>
            <ToggleExchangeButtonGroup />
          </Grid>
          <Grid width="320px" item>
            <TradingSymbolSelector />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
