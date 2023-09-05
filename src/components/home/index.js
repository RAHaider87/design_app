import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Colors } from '../../data/index';
import { heroListing } from '../../data';
import { activityLog } from '../../data';
import { articles } from '../../data';
import Container from '@mui/material/Container';
import Footer from "../footer";
import Header from "../header/header";
import '../home/home.css'

export default function Home() {

    return (
        <Container maxWidth='1920px' sx={{ margin: '0 auto', textAlign: 'center' }}>
            <Header />
            <Box sx={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', maxWidth: '1720px', margin: '50px auto' }}>

                <Box sx={{ display: 'flex', height: '612px', width: '100%', maxWidth: '1720px', margin: '0px auto', color: '#FFFFFF' }}>
                    {/* <Grid container>
    <Grid xs={12} sm={12} md={5} lg={5} xl={5}  sx={{ backgroundColor: Colors.green }}> */}
                    <Box sx={{ maxWidth: '736px', width: '100%', height: '612px', backgroundColor: Colors.green }} >
                        <img src={heroListing[0].image} alt="Logo" style={{ maxWidth: '736px', width: '100%', height: '612px' }} />
                        {/* <Typography>{heroListing[0].image}</Typography> */}
                    </Box >
                    {/* </Grid>
    <Grid xs={12} sm={12} md={3} lg={3} xl={3} sx={{ backgroundColor: Colors.jay_Blue }}> */}

                    <Box className='outerbox' sx={{ backgroundColor: Colors.denim_Blue }} >
                        <Box className='innerbox' >
                            <Typography className="heroListingCategory" variant="title" >{heroListing[0].category}</Typography>
                            <Typography variant="h5" sx={{ mb: 2, fontFamily: "Roboto" }}>{heroListing[0].title}</Typography>
                            <Typography variant="body" sx={{ fontFamily: "Roboto" }}>{heroListing[0].description}</Typography>
                            <Typography className="heroListingButtonText" variant="body">{heroListing[0].buttonText}</Typography>
                        </Box>
                    </Box >
                    {/* </Grid>
    <Grid xs={12} sm={12} md={4} lg={4} xl={4} > */}
                    <Box>

                        <Box sx={{ display: 'flex', justifyContent: 'right', maxWidth: '478px', width: '100%', height: '294px', left: '1242px' }} >
                            <img src={heroListing[1].image} alt="Logo" style={{ maxWidth: '478px', width: '96%', height: '294px' }} />
                        </Box >
                        <Box sx={{ display: 'flex', justifyContent: 'right', maxWidth: '478px', width: '100%', height: '294px', left: '1242px', marginTop: '23px' }}>
                            <img src={heroListing[2].image} alt="Logo" style={{ maxWidth: '478px', width: '96%', height: '294px' }} />
                        </Box >
                    </Box>
                    {/* </Grid>
</Grid> */}
                </Box>

                <Grid container sx={{ maxWidth: '1430px', width: '100%', ml: '10%', mt: '5%', mb: '5%' }}>
                    <Grid xs={12} sm={12} md={12} lg={12} xl={12} sx={{}}>
                        <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Typography variant="h4" sx={{ color: Colors.denim_Blue }}>Activity Log</Typography>
                        </Box >
                    </Grid>
                    {activityLog?.map((activity) => (
                        <Grid xs={12} sm={6} md={4} lg={4} xl={3}>
                            <Card sx={{ maxWidth: 345, m: 5, pt: 2, pl: 2, pr: 2, borderRadius: 2, backgroundColor: Colors.light_Blue }} spacing={{ xs: 2, md: 3 }} justifyContent={"center"} columns={{ xs: 4, sm: 8, md: 12 }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="170"
                                        image={activity.image}
                                        alt="green iguana"
                                        sx={{ borderRadius: 2 }}
                                    />
                                    <CardContent>
                                        <Typography variant="title" alignItems='center' justifyContent='center' display='flex' >
                                            {activity.title}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ backgroundColor: Colors.light_Blue, width: '100%', maxWidth: '1720px', height: '803px', gap: '64px', Padding: '96px, 100px, 96px, 100px' }}>
                    <Box sx={{ maxWidth: '1512px', width: '100%', height: '611px', padding: '0px, 32px, 0px, 32px', gap: '50px' }}>
                        <Box sx={{maxWidth:'1448px' , width: '100px', height: '47px'}}>

                            <Typography sx={{ fontSize: '40px', fontWeight: 700, fontFamily: 'Roboto', lineHeight: '46.88px', color: "black" }}>Latest Articles</Typography>
                        </Box>

                        <Box sx={{ width: '100%', maxWidth: '1448px', height: '514px', gap: '50px'}}>
                            <Box sx={{maxWidth: '699px', width: '100%', height:'514px', gap: '32px'}}>
                            <img src={articles[0].image} alt="Logo" style={{ marginLeft: '12%', width: '90%' }} />
                                            <Typography sx={{ color: Colors.denim_Blue, mt: 3, mb: 1, marginLeft: '12%' }}>
                                                {articles[0].category}
                                            </Typography>
                                            <Typography sx={{ marginLeft: '12%' }}>
                                                {articles[0].title}
                                            </Typography>

                            </Box>
                            <Box sx={{maxWidth: '699px', width: '100%', height:'514px', gap: '32px'}}>
                            <Box>
                                                <img src={articles[1].image} alt="Logo" width='100%' height='100%' />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                    {articles[1].category}
                                                </Typography>
                                                <Typography sx={{ ml: 3, marginRight: '15%' }}>
                                                    {articles[1].title}
                                                </Typography>
                                            </Box>
                                
                            </Box>

                            {/* <Box sx={{ width: '100%', maxWidth: '1448px', height: 'auto', gap: '50px', }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                                        <Box style={{ padding: '10px' }}>
                                            <img src={articles[0].image} alt="Logo" style={{ marginLeft: '12%', width: '90%' }} />
                                            <Typography sx={{ color: Colors.denim_Blue, mt: 3, mb: 1, marginLeft: '12%' }}>
                                                {articles[0].category}
                                            </Typography>
                                            <Typography sx={{ marginLeft: '12%' }}>
                                                {articles[0].title}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6} >
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                            <Box>
                                                <img src={articles[1].image} alt="Logo" width='100%' height='100%' />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                    {articles[1].category}
                                                </Typography>
                                                <Typography sx={{ ml: 3, marginRight: '15%' }}>
                                                    {articles[1].title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                            <Box>
                                                <img src={articles[2].image} alt="Logo" width='100%' height='100%' />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                    {articles[2].category}
                                                </Typography>
                                                <Typography sx={{ ml: 3, marginRight: '15%' }}>
                                                    {articles[2].title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                            <Box>
                                                <img src={articles[3].image} alt="Logo" width='100%' height='100%' />
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                    {articles[3].category}
                                                </Typography>
                                                <Typography sx={{ ml: 3, marginRight: '15%' }}>
                                                    {articles[3].title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box> */}

                        </Box>
                    </Box>
                </Box>

            </Box >
            <Footer />
        </Container>
    )
}