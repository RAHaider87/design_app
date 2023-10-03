import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import bgImg from "../../assets/health/head_BG.png";
import headImg from "../../assets/health/head_img.png";
import cliImg from "../../assets/health/cil_badge.png";
import backImg from "../../assets/health/transparentBack.png";

export default function HealthBanner() {
  return (
    <Grid
      container
      sx={{
        width: "100%",
        height: "100%",
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* xs={12} sm={12} md={12} lg={7} xl={7} */}
      <Grid item sx={{ display: "flex" }}>
        <Box sx={{ padding: "50px", margin: "auto" }}>
          <Box
            sx={{
              maxWidth: "226px",
              width: "100%",
              height: "47px",
              borderRadius: "10px",
              display: "flex",
              color: "#FFFFFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${backImg})`,
            }}
          >
            <img
              src={cliImg}
              alt="Logo"
              style={{ width: "24px", height: "24px" }}
            />
            <Typography>certificated doctors </Typography>
          </Box>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "50px",
              lineHeight: "50px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginRight: "-120px",
              marginTop: "24px",
              marginBottom: "32px",
              "@media screen and (max-width: 950px)": {
                marginRight: "0px",
              },
            }}
          >
            We Are Ready To Help You Access Quick Medical Care At Your
            Convenience
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              lineHeight: "28px",
              fontWeight: 500,
              color: "#FFFFFF",
              marginRight: "-60px",
              "@media screen and (max-width: 950px)": {
                marginRight: "0px",
              },
            }}
          >
            Privacy and waiting lines have always been a problem when it comes
            to health care, especially with the increasing rate of Health and
            other medical Issues and so Gender Help Squad was designed to cut
            the waiting line and provide ease of service.
          </Typography>
          <Box sx={{ marginTop: "32px" }}>
            <Button
              sx={{
                marginRight: "15px",
                border: "1px solid #FFFFFF",
                backgroundColor: "#FFFFFF",
                color: "#000000",
                "&:hover": {
                  color: "#FFFFFF",
                },
              }}
            >
              Subscribe
            </Button>
            <Button
              sx={{
                border: "1px solid #FFFFFF",
                color: "#FFFFFF",
              }}
            >
              Learn More
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            marginTop: "70px",
            paddingRight: "20px",
            "@media screen and (max-width: 950px)": {
              display: "none",
            },
          }}
        >
          <img
            src={headImg}
            alt="Logo"
            style={{ width: "500px", height: "600px" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
