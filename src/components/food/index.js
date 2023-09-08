import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Footer from "../footer";
import Header from "../header/header";
import { Colors } from "../../data";
import foodBackground from '../../assets/food/background/backgroundFood.png';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { HealthyFood } from '../../data/food'

import middle1 from "../../assets/food/middlesection/1.png";
import middle2 from "../../assets/food/middlesection/2.png";
import middle3 from "../../assets/food/middlesection/3.png";
import middle4 from "../../assets/food/middlesection/4.png";


export default function Food() {
    return (
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <Box sx={{ maxWidth: '1920px', width: '100%', height: '4001px', gap: '120px', top: '100px', margin: 'auto' }}>
                <Box sx={{ backgroundImage: `url(${foodBackground})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', maxWidth: '1920px', width: '100%', height: '900px', gap: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Box sx={{ maxWidth: '1024px', height: '231px', top: '334px', left: '448px', paddingLeft: '32px', paddingRight: '32px', gap: '32px' }}>
                        <Typography sx={{ color: Colors.white, fontFamily: 'Inter', fontWeight: 700, fontSize: '70px', lineHeight: '84.72px', alignItems: 'center' }}>Food</Typography>
                        <Typography sx={{ color: Colors.white, fontFamily: 'Roboto', fontWeight: 600, fontSize: '32px', lineHeight: '37.5px', alignItems: 'center' }}>5 Best Summer Dishes That would Keep You feeling Good</Typography>
                        <Button variant="outlined" sx={{ color: '#A5C8FF', gap: '10px', borderRadius: '10px', border: 0, }}>Read More</Button>
                    </Box>
                </Box>

                <Box sx={{ maxWidth: '1920px', width: '100%', height: '2981px', gap: '120px', mt: 15 }}>

                    <Box sx={{ maxWidth: '1646px', width: '100%', height: '2300px', gap: '120px', margin: 'auto', padding: '10px', mb: 12 }}>

                        <Box sx={{ maxWidth: '1646px', width: '100%', height: '480px', gap: '83px', display: 'flex' }}>
                            <Box sx={{ width: '458px', height: '480px', borderRadius: '10px', backgroundColor: Colors.secondary }}>
                                <img src={middle1} alt="Logo" style={{ width: '745px', height: '420px', marginTop: '30px', marginLeft: '30px', borderRadius: '10px' }} />
                            </Box>
                            <Box sx={{ maxWidth: '767.59px', width: '100%', height: '168px', gap: '40px', marginTop: '156px', marginLeft: '337px' }}>
                                <Typography sx={{ textAlign: 'start', color: Colors.black, fontFamily: 'Roboto', fontWeight: 700, fontSize: '40px', lineHeight: '46.88px' }}>5  Meals And Recipes For Meals That Are Best For Your Cold/Flu</Typography>
                                <Box sx={{ display: 'flex', maxWidth: '120px', width: '100%', height: '28px', borderRadius: '50px', pl: '20px', pr: '20px', pt: '5px', pb: '5px', mt: '35px', backgroundColor: '#FCBFCB33' }}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '3px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ maxWidth: '1646px', width: '100%', height: '480px', gap: '83px', mt: 16, display: 'flex' }}>
                            <Box sx={{ maxWidth: '767.59px', width: '100%', height: '168px', gap: '40px', marginTop: '156px', marginRight: '337px' }}>
                                <Typography sx={{ textAlign: 'start', color: Colors.black, fontFamily: 'Roboto', fontWeight: 700, fontSize: '40px', lineHeight: '46.88px' }}>3  Latest Recipes For Meals That Would Help Your Pregnancy Journey </Typography>
                                <Box sx={{ display: 'flex', maxWidth: '120px', width: '100%', height: '28px', borderRadius: '50px', pl: '20px', pr: '20px', pt: '5px', pb: '5px', mt: '35px', backgroundColor: '#FCBFCB33' }}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '4px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                            <Box sx={{ width: '458px', height: '480px', borderRadius: '10px', backgroundColor: Colors.secondary, display: 'flex', justifyContent: 'right' }}>
                                <img src={middle2} alt="Logo" style={{ width: '745px', height: '420px', marginTop: '30px', marginRight: '30px', borderRadius: '10px' }} />
                            </Box>

                        </Box>

                        <Box sx={{ maxWidth: '1646px', width: '100%', height: '480px', gap: '83px', mt: 16, display: 'flex' }}>
                            <Box sx={{ width: '458px', height: '480px', borderRadius: '10px', backgroundColor: Colors.secondary }}>
                                <img src={middle3} alt="Logo" style={{ width: '745px', height: '420px', marginTop: '30px', marginLeft: '30px', borderRadius: '10px' }} />
                            </Box>
                            <Box sx={{ maxWidth: '767.59px', width: '100%', height: '168px', gap: '40px', marginTop: '156px', marginLeft: '337px' }}>
                                <Typography sx={{ alignSelf: 'right', textAlign: 'start', color: Colors.black, fontFamily: 'Roboto', fontWeight: 700, fontSize: '40px', lineHeight: '46.88px' }}>Vegan Meals That Would Keep You Away From Meat</Typography>
                                <Box sx={{ display: 'flex', maxWidth: '120px', width: '100%', height: '28px', borderRadius: '50px', pl: '20px', pr: '20px', pt: '5px', pb: '5px', mt: '35px', backgroundColor: '#FCBFCB33' }}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '4px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{ maxWidth: '1646px', width: '100%', height: '480px', gap: '83px', mt: 16, display: 'flex' }}>
                            <Box sx={{ maxWidth: '767.59px', width: '100%', height: '168px', gap: '40px', marginTop: '156px', marginRight: '337px' }}>
                                <Typography sx={{ textAlign: 'start', color: Colors.black, fontFamily: 'Roboto', fontWeight: 700, fontSize: '40px', lineHeight: '46.88px' }}>10 Cheat Meals That will Blow Your Mind</Typography>
                                <Box sx={{ display: 'flex', maxWidth: '120px', width: '100%', height: '28px', borderRadius: '50px', pl: '20px', pr: '20px', pt: '5px', pb: '5px', mt: '35px', backgroundColor: '#FCBFCB33' }}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '4px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                            <Box sx={{ width: '458px', height: '480px', borderRadius: '10px', backgroundColor: Colors.secondary, display: 'flex', justifyContent: 'right' }}>
                                <img src={middle4} alt="Logo" style={{ width: '745px', height: '420px', marginTop: '30px', marginRight: '30px', borderRadius: '10px' }} />
                            </Box>
                        </Box>
                    </Box>

                    <Box sx={{
                        maxWidth: '1920px',
                        width: '100%',
                        height: '561px',
                        gap: '50px',
                        // '@media only screen and (max-width: 1300px)': {
                        //     maxWidth: '1300px',
                        //     width: '100%',
                        //     height: '500px',
                        // }
                    }}>
                        <Typography sx={{
                            color: Colors.black,
                            fontFamily: 'Roboto',
                            paddingBottom: '50px',
                            fontWeight: 700,
                            fontSize: '40px',
                            lineHeight: '59px',
                            // '@media screen and (max-width: 1300px)': {
                            //     paddingBottom: '40px',
                            //     fontWeight: 600,
                            //     fontSize: '30px',
                            //     lineHeight: '45px',
                            // }
                        }}>
                            Healthy Food
                        </Typography>

                        <Box sx={{
                            maxWidth: '1920px',
                            width: '100%',
                            height: '452px',
                            display: 'flex',
                            justifyContent: 'center',
                            // '@media screen and (max-width: 1300px)': {
                            //     maxWidth: '1300px',
                            //     width: '100%',
                            //     height: '352px',
                            // }
                        }}>
                            {HealthyFood?.map((healthy) => (
                                <Card
                                    sx={{
                                        gap: '32px',
                                        mr: '12px',
                                        ml: '12px',
                                        p: '24px',
                                        maxWidth: "384px",
                                        height: '356px',
                                        width: '100%',
                                        justifyContent: 'center',
                                        // '@media screen and (max-width: 1300px)': {
                                        //     gap: '25px',
                                        //     mr: '8px',
                                        //     ml: '8px',
                                        //     p: '18px',
                                        //     maxWidth: "200px",
                                        //     height: '230px',
                                        //     width: '100%',
                                        // }
                                    }}
                                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={healthy.image}
                                            alt="green iguana"
                                            maxWidth="336px"
                                            width="100%"
                                            height="240px"
                                            // sx={{
                                            //     '@media screen and (max-width: 1300px)': {
                                            //         maxWidth: "200px",
                                            //         height: '170px',
                                            //         width: '100%',
                                            //     }
                                            // }}

                                        // sx={{ borderRadius: 2 }}
                                        />
                                        <CardContent>
                                            <Typography variant="title" sx={{
                                                float: 'left',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                fontFamily: 'Roboto',
                                                lineHeight: '26px',
                                                mt: '35px',
                                                // '@media screen and (max-width: 1300px)': {
                                                //     fontSize: '14px',
                                                //     fontWeight: 550,
                                                //     lineHeight: '20px',
                                                //     mt: '10px',
                                                // }
                                            }} >
                                                {healthy.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </Container>
    )
}