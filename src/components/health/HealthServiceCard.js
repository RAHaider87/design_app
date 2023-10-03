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

export default function HealthServiceCard({ card }) {
  return (
    <Card sx={{ maxWidth: "500px", width: "100%", height: "450px",boxShadow: "none", '&:hover':{ transform: 'scale(1.05)'} }}>
      <CardActionArea>
        <CardMedia
          style={{ width: "100%", height: "260px" }}
          component="img"
          image={card.image}
          alt="green iguana"
        />
        <CardContent>
          <Box sx={{height: "90px" }}>
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
            {/* <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
               

              <Button
                size="small"
                sx={{
                  color: "#FFFFFF",
                  backgroundColor: "#FD6288",
                  "&:hover": { color: "#FD6288", border: "1px solid #FD6288" },
                }}
              >
                Read More
              </Button>
                
            </Box> */}
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button size="small" sx={{color:'#FFFFFF', backgroundColor:'#FD6288', '&:hover':{color:'#FD6288', border:'1px solid #FD6288'}}}>
        Read More
      </Button>
    </CardActions>
    </Card>
  );
}
