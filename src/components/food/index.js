import { Container } from "@mui/material";
import Footer from "../footer";
import Header from "../header/header";

export default function Food(){
    return(
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <Footer />
        </Container>
    )
}