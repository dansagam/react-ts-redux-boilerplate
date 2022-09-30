import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const StyledSignWrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100vh",
  backgroundColor: theme.palette.primary.main,
}));

export const StyledSignContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "& .login-container": {
    borderRadius: "4px 4px 4px 4px",
    backgroundColor: theme.palette.common.white,
    "& .top-header": {
      boxShadow: "inset 0px -1px 0px #E5E5EA",
    },
    "& .page-main-container": {
      padding: "16px 24px",
    },
  },
}));
