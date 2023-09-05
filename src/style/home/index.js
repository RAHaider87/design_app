import styled from "@emotion/styled";
import { TextField, Typography } from "@mui/material";
import { Colors } from "../../data/index";

export const FooterTitle = styled(Typography)(() => ({
  textTransform: "uppercase",
  marginBottom: "1em",
}));

export const SubscribeTf = styled(TextField)(() => ({
  ".MuiInputLabel-root": {
    color: Colors.denim_Blue,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.denim_Blue}`,
  },
}));

