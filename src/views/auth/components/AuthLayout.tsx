import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as BgPeopleImage } from "assets/svg/landing-bg-illustration.svg";
import Button from "@mui/material/Button";
import { StyledSignContainer, StyledSignWrapper } from "./style";
import { IAuthLayout } from "../interface/authInterface";

const AuthLayout = ({
  title,
  subtile,
  mainTitle,
  children,
  btnText,
  footerNode,
  loading,
  onAction,
}: IAuthLayout) => {
  return (
    <StyledSignWrapper>
      <StyledSignContainer>
        <Box maxWidth="400px">
          <Box>
            <Typography
              variant="h2"
              sx={{
                color: "common.white",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "common.white",
              }}
            >
              {subtile}
            </Typography>
          </Box>
          <Box className="login-container">
            <Box py={2} px={3} className="top-header">
              <Typography variant="body2" color="text.primary">
                {mainTitle}
              </Typography>
            </Box>
            <Box className="page-main-container">
              <Box component="form" onSubmit={onAction}>
                <Box>{children}</Box>
                <Box mt={1}>
                  <Button color="primary" type="submit" fullWidth disabled={loading}>
                    {btnText}
                  </Button>
                </Box>
              </Box>
              {footerNode && <Box>{footerNode}</Box>}
            </Box>
          </Box>
        </Box>
      </StyledSignContainer>
      <BgPeopleImage
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          height: "411px",
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
    </StyledSignWrapper>
  );
};

export default AuthLayout;
