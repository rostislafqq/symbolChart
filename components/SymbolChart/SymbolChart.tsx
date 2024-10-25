import { Grid } from "@mui/material";

import { ToggleExchangeButtonGroup } from "../common/ToggleExchangeButtonGroup";

export const SymbolChart = () => {
  return (
    <Grid container>
      <Grid item>
        <ToggleExchangeButtonGroup />
      </Grid>
    </Grid>
  );
};
