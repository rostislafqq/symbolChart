import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
} from "@mui/material";
import { MouseEvent, useMemo } from "react";

interface CustomToggleButtonGroupProps extends ToggleButtonGroupProps {
  value: string;
  buttonLabelList: string[];
  onChange: (event: MouseEvent<HTMLElement>, value: Nullable<string>) => void;
  buttonWidth?: string;
}

export const CustomToggleButtonGroup: React.FC<
  CustomToggleButtonGroupProps
> = ({ value, buttonLabelList, onChange, buttonWidth, ...restProps }) => {
  const RenderedToggleButtonList = useMemo(
    () =>
      buttonLabelList.map((buttonLabel) => (
        <ToggleButton
          sx={{ width: buttonWidth }}
          key={buttonLabel}
          value={buttonLabel}
        >
          {buttonLabel}
        </ToggleButton>
      )),
    [buttonLabelList, buttonWidth]
  );

  return (
    <ToggleButtonGroup
      size="small"
      color="primary"
      value={value}
      exclusive
      onChange={onChange}
      {...restProps}
    >
      {RenderedToggleButtonList}
    </ToggleButtonGroup>
  );
};
