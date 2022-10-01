import React from "react";
import { useTheme, styled } from "@mui/material/styles";
import { ThemedComponentProps } from "@mui/styles";

import CheckIcon from "assets/svg/CheckIcon";

export interface IPasswordCheck {
  isValid: boolean;
  label: string;
}

interface StyledThemeProps extends ThemedComponentProps {
  isValid?: boolean;
}

const StyledCheckIcon = styled("span", {
  shouldForwardProp: (prop) => prop !== "isValid",
})<StyledThemeProps>(({ isValid, theme }) => ({
  color: isValid ? theme.palette.success.dark : theme.palette.text.secondary,
  display: "flex",
  fontSize: 14,

  "& > *": {
    display: "inline-block",
    margin: "auto 0",
  },
  "& > :first-of-type": {
    marginRight: 5,
  },
}));

const PasswordCheck = ({ isValid = false, label }: IPasswordCheck) => {
  const theme = useTheme();
  const color = isValid ? theme.palette.success.dark : theme.palette.text.secondary;
  return (
    <StyledCheckIcon isValid={isValid}>
      <CheckIcon color={color} /> {label}
    </StyledCheckIcon>
  );
};

export default PasswordCheck;
