import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { ServiceCardData } from "../health/HealthData";
import HealthServiceCard from "./HealthServiceCard";

function HealthServices() {
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px",
        backgroundColor: "#FFD1DA33",
      }}
    >
      <Grid item sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            color: "#28293D",
            fontSize: "40px",
            lineHeight: "45px",
            alignItems: "center",
            fontWeight: 700,
          }}
        >
          Our Services and Categories
        </Typography>
        <Typography
          sx={{
            marginTop: "16px",
            color: "#555770",
            fontSize: "16px",
            lineHeight: "28px",
            fontWeight: 400,
            alignItems: "center",
          }}
        >
          Cronavirus disease 2019 is a contagious disease caused by severe acute
          respiratory syndrome coronavirus
          <br />
          2. The first case was identified in Wuhan, China, in December
          2019.Symptoms of COVID-19 are variable,
        </Typography>
      </Grid>
      {ServiceCardData.map((e) => (
        <Grid
          item
          spacing={2}
          xs={10}
          sm={8}
          md={5.5}
          lg={3.5}
          xl={3.5}
          sx={{
            display: "flex",
            padding: "10px",
            marginTop: "40px",
            justifyContent: "center",
          }}
        >
          <HealthServiceCard card={e} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HealthServices;
