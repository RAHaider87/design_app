import { Container } from "@mui/material";
import Header from "../header/header";
import Footer from "../footer";

export default function AboutUs(){
    return(
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <Footer />
        </Container>
    )
}