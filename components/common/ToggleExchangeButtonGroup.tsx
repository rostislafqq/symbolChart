import { MouseEvent, useCallback, useEffect } from "react";

import { ExchangeNamesEnum } from "../../constants/enums";
import { selectExchange, setExchange } from "../../features/symbolChartSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { localSaved } from "../../utils/localSaved";
import { CustomToggleButtonGroup } from "../shared/CustomToggleButtonGroup";

export const ToggleExchangeButtonGroup = () => {
  const exchange = useAppSelector(selectExchange);

  const dispatch = useAppDispatch();

  const handleSetExchange = useCallback(
    (exchange: ExchangeNamesEnum) => {
      dispatch(setExchange(exchange));
    },
    [dispatch]
  );

  const onChangeExchange = (
    _: MouseEvent<HTMLElement>,
    buttonValue: Nullable<string>
  ) => {
    if (buttonValue) {
      const exchange = buttonValue as ExchangeNamesEnum;

      handleSetExchange(exchange);
      localSaved.savedExchange.set(exchange);
    }
  };

  useEffect(() => {
    const savedExchange = localSaved.savedExchange.get();

    if (savedExchange) {
      handleSetExchange(savedExchange);
    }
  }, [handleSetExchange]);

  return (
    <CustomToggleButtonGroup
      buttonLabelList={Object.values(ExchangeNamesEnum)}
      buttonWidth="80px"
      onChange={onChangeExchange}
      value={exchange}
    />
  );
};
