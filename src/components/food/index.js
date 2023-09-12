import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import Footer from "../footer";
import Header from "../header/header";
import { Colors } from "../../data";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import { HealthyFood } from '../../data/food'

import middle1 from "../../assets/food/middlesection/1.png";
import middle2 from "../../assets/food/middlesection/2.png";
import middle3 from "../../assets/food/middlesection/3.png";
import middle4 from "../../assets/food/middlesection/4.png";
import { FoodStyle } from '../../style/food/index';


export default function Food() {

    return (
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <Box sx={FoodStyle.Parent_Box}>
                <Box sx={FoodStyle.BackgroundImage_Box}>
                    <Box sx={FoodStyle.BackgroundContent_Box}>
                        <Typography sx={FoodStyle.BackgroundContent_Typography1}>Food</Typography>
                        <Typography sx={FoodStyle.BackgroundContent_Typography2}>5 Best Summer Dishes That would Keep You feeling Good</Typography>
                        <Button variant="outlined" sx={FoodStyle.BackgroundContent_Button}>Read More</Button>
                    </Box>
                </Box>

                <Box sx={{ maxWidth: '1920px', width: '100%', height: 'auto', gap: '120px', mt: 15 }}>

                    <Box sx={FoodStyle.Content_Box}>

                        <Box sx={FoodStyle.Categories1}>
                            <Box sx={FoodStyle.CategoriImage1_Box}>
                                <img src={middle1} alt="Logo" style={FoodStyle.CategoriImage1} />
                            </Box>
                            <Box sx={FoodStyle.CategoriContent1_Box}>
                                <Typography sx={FoodStyle.CategoriContent_Typography}>5  Meals And Recipes For Meals That Are Best For Your Cold/Flu</Typography>
                                <Box sx={FoodStyle.CategoriContent_Button}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '3px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={FoodStyle.Categories2}>
                            <Box sx={FoodStyle.CategoriContent2_Box}>
                                <Typography sx={FoodStyle.CategoriContent_Typography}>3  Latest Recipes For Meals That Would Help Your Pregnancy Journey </Typography>
                                <Box sx={FoodStyle.CategoriContent_Button}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '4px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                            <Box sx={FoodStyle.CategoriImage2_Box}>
                                <img src={middle2} alt="Logo" style={FoodStyle.CategoriImage2} />
                            </Box>

                        </Box>

                        <Box sx={FoodStyle.Categories2}>
                            <Box sx={FoodStyle.CategoriImage1_Box}>
                                <img src={middle3} alt="Logo" style={FoodStyle.CategoriImage1} />
                            </Box>
                            <Box sx={FoodStyle.CategoriContent1_Box}>
                                <Typography sx={FoodStyle.CategoriContent_Typography}>Vegan Meals That Would Keep You Away From Meat</Typography>
                                <Box sx={FoodStyle.CategoriContent_Button}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '4px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={FoodStyle.Categories2}>
                            <Box sx={FoodStyle.CategoriContent2_Box}>
                                <Typography sx={FoodStyle.CategoriContent_Typography}>10 Cheat Meals That will Blow Your Mind</Typography>
                                <Box sx={FoodStyle.CategoriContent_Button}>
                                    <Typography sx={{ color: '#FD6288', fontFamily: 'Inter', fontWeight: 500, fontSize: '20px', lineHeight: '20px', mt: '4px' }}>Read more</Typography>
                                    <KeyboardArrowRightIcon sx={{ color: '#FD6288', mt: '3px' }} />
                                </Box>
                            </Box>
                            <Box sx={FoodStyle.CategoriImage2_Box}>
                                <img src={middle4} alt="Logo" style={FoodStyle.CategoriImage2} />
                            </Box>
                        </Box>
                    </Box>

                    <Container style={FoodStyle.HF_Container}>
                        <Typography sx={FoodStyle.HF_Typography}>
                            Healthy Food
                        </Typography>

                        <Grid container style={FoodStyle.HF_GridContainer}>
                            {HealthyFood?.map((healthy) => (
                                <Grid item xs={12} sm={6} md={4} lg={4} xl={4} style={{display: 'flex', justifyContent: 'center'}}>
                                    <Card
                                        sx={{
                                            gap: '32px',
                                            mr: '12px',
                                            ml: '12px',
                                            mb: '12px',
                                            p: '24px',
                                            maxWidth: "384px",
                                            height: '356px',
                                            width: '100%',
                                            justifyContent: 'center',
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

                                            />
                                            <CardContent>
                                                <Typography variant="title" sx={{
                                                    float: 'left',
                                                    fontSize: '16px',
                                                    fontWeight: 600,
                                                    fontFamily: 'Roboto',
                                                    lineHeight: '26px',
                                                    mt: '35px',

                                                }} >
                                                    {healthy.title}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>

                </Box>
            </Box>
            <Footer />
        </Container>
    )
}