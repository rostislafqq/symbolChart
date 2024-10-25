import { MouseEvent } from "react";

import { ExchangeNamesEnum } from "../../constants/enums";
import { selectExchange, setExchange } from "../../features/symbolChartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { localSaved } from "../../utils/localSaved";
import { CustomToggleButtonGroup } from "../shared/CustomToggleButtonGroup";

export const ToggleExchangeButtonGroup = () => {
  const exchange = useAppSelector(selectExchange);

  const dispatch = useAppDispatch();

  const onChangeExchange = (
    _: MouseEvent<HTMLElement>,
    buttonValue: string
  ) => {
    if (buttonValue) {
      const exchangeName = buttonValue as ExchangeNamesEnum;

      dispatch(setExchange(exchangeName));

      localSaved.savedExchange.set(exchangeName);
    }
  };

  return (
    <CustomToggleButtonGroup
      buttonLabelList={Object.values(ExchangeNamesEnum)}
      buttonWidth="80px"
      onChange={onChangeExchange}
      value={exchange}
    />
  );
};
