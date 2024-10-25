import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { makeStyles } from "tss-react/mui";

import { setCartItem } from "../../features/cartSlice";
import { useGetCurrentGoodQuery } from "../../features/catalogApiSlice";
import { useAppDispatch } from "../../hooks/redux";

const useStyles = makeStyles()(() => ({
  modalSize: {
    width: "30%",
  },
  boxContainer: {
    backgroundColor: grey[50],
    borderRadius: "5px",
    color: grey[900],
    width: "200px",
  },
  iconButton: {
    backgroundColor: grey[300],
    borderRadius: 0,
  },
}));

export default function GoodPage() {
  const { classes } = useStyles();
  const route = useRouter();
  const dispatch = useAppDispatch();

  const { data: currentGood, isLoading: isLoadingCurrentGood } =
    useGetCurrentGoodQuery(route.query.id as string);

  const [goodCount, setGoodCount] = useState(12);
  const totalCost = currentGood
    ? +(goodCount * currentGood.cost).toFixed(2)
    : 0;

  const handleSetGoodCount = (variant: "+" | "-") => () => {
    const setResult = variant === "+" ? goodCount + 1 : goodCount - 1;

    setGoodCount(setResult < 12 ? 12 : setResult);
  };
  const handleSetCartItem = () => {
    if (currentGood) {
      dispatch(setCartItem({ ...currentGood, count: goodCount, totalCost }));
    }
  };

  return (
    <Grid spacing={2} flexDirection="column" container>
      {isLoadingCurrentGood || !currentGood ? (
        <CircularProgress size={300} />
      ) : (
        <>
          <Grid item>
            <Typography variant="h5">
              {currentGood.name} ({currentGood.cost}руб)
            </Typography>
          </Grid>
          <Grid item>
            <Image src={currentGood.img} alt="good" width={500} height={500} />
          </Grid>
          <Grid item>
            <Typography>Состав: {currentGood.compound}</Typography>
          </Grid>

          <Grid item>
            <Grid flexDirection="column" spacing={2} container>
              <Grid item>
                <Box className={classes.boxContainer}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <IconButton
                        className={classes.iconButton}
                        onClick={handleSetGoodCount("-")}
                      >
                        <MinusIcon color={grey[900]} width={30} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="subtitle1"
                        sx={{ fontWeight: 700, fontSize: "20px" }}
                      >
                        {goodCount}
                      </Typography>
                    </Grid>
                    <IconButton
                      className={classes.iconButton}
                      onClick={handleSetGoodCount("+")}
                    >
                      <PlusIcon color={grey[900]} width={30} />
                    </IconButton>
                  </Grid>
                </Box>
              </Grid>
              <Grid item>
                <Grid alignItems="center" spacing={2} container>
                  <Grid item>{totalCost} руб</Grid>
                  <Grid item>
                    <Button onClick={handleSetCartItem} variant="contained">
                      Добавить в корзину
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}
