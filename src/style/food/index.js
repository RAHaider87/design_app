import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";


export const Product = styled(Box)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      position: "relative",
    },
    
  });