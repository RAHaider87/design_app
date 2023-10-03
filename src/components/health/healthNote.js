import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function HealthNote() {
  return (
    <Grid container>
      <Grid
        item
        sx={{
          width: "100%",
          height: "300px",
          //textAlign: "center",
          alignItems:'center',
          display:'flex',
          flexDirection:'column',
          justifyContent:'center',
          backgroundColor: "#FFD1DA33",
          padding: "32px",
        }}
      >
        <Typography
          sx={{
            color: "#28293D",
            fontSize: "24px",
            lineHeight: "25px",
          }}
        >
          Get Started With Gender Help Squad
        </Typography>
        <Typography
          sx={{
            marginBottom: "32px",
            marginTop: "16px",
            color: "#475467",
          }}
        >
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </Typography>

        <Button
          sx={{
            width: "200px",
            height: "45px",
            color: "#FFFFFF",

            backgroundColor: "#FD6288",

            "&:hover": { color: "#FD6288", border: "1px solid #FD6288" },
          }}
        >
          Lets Get Started
        </Button>
      </Grid>
    </Grid>
  );
}

export default HealthNote;
