import { Container } from "@mui/material";
import Header from "../header/header";
import Footer from "../footer";
import HealthBanner from "./healthBanner";
// import {healthBanner} from '../health/healthBanner'

export default function Health(){
    return(
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <HealthBanner/>
            <Footer />
        </Container>
    )
}