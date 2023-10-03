import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
  } from "@mui/material";
  import React from "react";

function HealthDoctoreCard({card}) {
  return (
    <Card sx={{borderRadius:'10px', maxWidth: "320px", width: "100%", height: "390px",boxShadow: "none", '&:hover':{ transform: 'scale(1.05)'} }}>
      <CardActionArea>
        <Box sx={{display:'flex',justifyContent:'center', backgroundColor:'#AEB4AF0D'}}>

        <CardMedia
          style={{ maxWidth:'200px',width: "100%", height: "290px",  }}
          component="img"
          image={card.image}
          alt="green iguana"
        />
        </Box>
        <CardContent>
          <Box sx={{height: "90px", textAlign:'center' }}>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 700,
                fontSize: "20px",
                lineHeight: "30px",
                color: "#28293D",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "15px",
                color: "#555770",
              }}
            >
              {card.subtitle}
            </Typography>

          </Box>
        </CardContent>
      </CardActionArea>

    </Card>
  )
}

export default HealthDoctoreCard