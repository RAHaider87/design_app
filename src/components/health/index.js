import { Box, Container } from "@mui/material";
import Header from "../header/header";
import Footer from "../footer";
import HealthBanner from "./healthBanner";
import HealthServices from "./healthServices";
import HealthDoctors from "./healthDoctors";
import HealthNote from "./healthNote";

export default function Health(){
    return(
        <Container sx={{ margin: 'auto' }}>
            {/* <Header /> */}
            <HealthBanner/>
            <Box sx={{marginTop:'80px', marginBottom:'80px'}}>
            <HealthServices/>
            </Box>
            <HealthDoctors/>
            <Box sx={{marginTop:'80px', marginBottom:'100px'}}>

            <HealthNote/>
            </Box>
            {/* <Footer /> */}
        </Container>
    )
}