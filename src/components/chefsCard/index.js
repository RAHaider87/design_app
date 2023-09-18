import { Box, Grid } from "@mui/material";
import ChefCard from "./chefCard";
import { ChefCardData } from "./cardData";

export default function ChefsCard() {
    return (
        <Grid container spacing={2}>
            {ChefCardData.map((e, i) => (
                <Grid item xs={6} sm={4} md={3} lg={1.7} xl={1.7} >
                    <ChefCard card={e} index={i} />
                </Grid>
            ))}
        </Grid>
    )
}