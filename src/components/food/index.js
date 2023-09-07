import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Footer from "../footer";
import Header from "../header/header";
import { Colors } from "../../data";
import foodBackground from '../../assets/food/background/backgroundFood.png';

import {HealthyFood} from '../../data/food'

import middle1 from "../../assets/food/middlesection/1.png";
import middle2 from "../../assets/food/middlesection/2.png";
import middle3 from "../../assets/food/middlesection/3.png";
import middle4 from "../../assets/food/middlesection/4.png";


export default function Food() {
    return (
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <Box sx={{ maxWidth: '1920px', width: '100%', height: '4001px', gap: '120px', top: '100px', margin: 'auto' }}>
                <Box sx={{ backgroundImage: `url(${foodBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '1920px', width: '100%', height: '900px', gap: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Box sx={{ maxWidth: '1024px', height: '231px', top: '334px', left: '448px', paddingLeft: '32px', paddingRight: '32px', gap: '32px' }}>
                        <Typography sx={{ color: Colors.white, fontFamily: 'Inter', fontWeight: 700, fontSize: '70px', lineHeight: '84.72px', alignItems: 'center' }}>Food</Typography>
                        <Typography sx={{ color: Colors.white, fontFamily: 'Roboto', fontWeight: 600, fontSize: '32px', lineHeight: '37.5px', alignItems: 'center' }}>5 Best Summer Dishes That would Keep You feeling Good</Typography>
                        <Button variant="outlined" sx={{ color: '#A5C8FF', gap: '10px', borderRadius: '10px', border: 0, }}>Read More</Button>
                    </Box>
                </Box>

                <Box sx={{ maxWidth: '1920px', width: '100%', height: '2981px', gap: '120px',  backgroundColor: Colors.dim_grey, mt: 15 }}>

                    <Box sx={{ maxWidth: '1646px', width: '100%', height: '2300px', gap: '120px',margin: 'auto', padding: '10px', backgroundColor: Colors.denim_Blue, mb: 12  }}>

                        <Box sx={{maxWidth: '1646px', width: '100%', height: '480px', gap: '83px',  backgroundColor: Colors.green }}>

                        </Box>
                        <Box sx={{maxWidth: '1646px', width: '100%', height: '480px', gap: '83px',  backgroundColor: Colors.jay_Blue, mt: 16}}>
                            
                        </Box>
                        <Box sx={{maxWidth: '1646px', width: '100%', height: '480px', gap: '83px',  backgroundColor: Colors.purple_Blue, mt: 16}}>
                            
                        </Box>
                        <Box sx={{maxWidth: '1646px', width: '100%', height: '480px', gap: '83px',  backgroundColor: Colors.russian_green, mt: 16}}>
                            
                        </Box>
                    </Box>

                    <Box sx={{ maxWidth: '1920px', width: '100%', height: '561px', gap: '50px', backgroundColor: Colors.dove_gray  }}>
                        <Typography sx={{color: Colors.black,fontFamily: 'Roboto',paddingBottom: '50px', fontWeight: 700, fontSize: '40px', lineHeight: '59px'}}>Healthy Food</Typography>
                        <Box sx={{ maxWidth: '1920px', width: '100%', height: '452px',  backgroundColor: Colors.inverse, display: 'flex', justifyContent: 'center'  }}>
                        {HealthyFood?.map((healthy) => (
                        <Grid xs={12} sm={6} md={4} lg={4} xl={4}>
                            <Card sx={{ maxWidth: "384px",height:'356px',width:'100%',  backgroundColor: Colors.light_Blue }} spacing={{ xs: 2, md: 3 }} justifyContent={"center"} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="170"
                                        image={healthy.image}
                                        alt="green iguana"
                                        sx={{ borderRadius: 2 }}
                                    />
                                    <CardContent>
                                        <Typography variant="title" alignItems='center' justifyContent='center' display='flex' >
                                            {healthy.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}

                        </Box>

                    </Box>

                </Box>
            </Box>
            <Footer />
        </Container>
    )
}