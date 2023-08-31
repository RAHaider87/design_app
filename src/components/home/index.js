import { AppBar, Box, Button, Container, Grid, Tooltip, Typography, makeStyles } from "@mui/material";
import { NavLink } from "react-router-dom";
import logoImage from '../../naveBarLogo/NavLogo.png'

import {Colors} from '../../data/index'

import { heroListing } from '../../data'



export default function Home() {


    return (
        <>
            <AppBar sx={{ backgroundColor: '#FFFFFF', position: 'static', width: '100%' }}>
                {/* <Container> */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '88%', ml: '6%' }}>
                    <Grid container alignItems="center">
                        <Grid item xs={12} sm={1} md={1} lg={1} xl={1}>
                            <img src={logoImage} alt="Logo" style={{ width: '100%', maxWidth: 100, height: 'auto' }} />
                        </Grid>

                        <Grid item xs={12} sm={9} md={9} lg={9} xl={9} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Home
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Health
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                About Us
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Career & Finance
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Family
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Food
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Wellness
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Sex & Relationship
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'black' }}>
                                Beauty
                            </Typography>
                            {/* Other navigation items */}
                        </Grid>

                        <Grid item xs={12} sm={2} md={2} lg={2} xl={2}>
                            <Button variant="contained" sx={{ mr: '5%', ml: '30%' }}>
                                Login
                            </Button>
                            <Button variant="outlined">SignUp</Button>
                        </Grid>
                    </Grid>
                </Box>
                {/* </Container> */}
            </AppBar>

            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '78.5%', ml: '10%', pt: '50px' }}>
                <Grid container>
                    <Grid xs={8} sm={8} md={8} lg={8} xl={8} sx={{ backgroundColor: Colors.denim_Blue, display: 'flex'}}>
                        <Box sx={{ }}>
                        <img src={heroListing[0].image} alt="Logo" style={{  }} />
                            {/* <Typography>{heroListing[0].image}</Typography> */}

                        </Box>
                        <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center',  color: Colors.white, p: 1 }}>
                       
                            <Typography variant="title" sx={{ width: '50%',height: '5%',display: 'flex',alignItems: 'center',justifyContent: 'center', backgroundColor: Colors.white, color: Colors.black, }} >{heroListing[0].category}</Typography>
                            <Typography variant="h5" >{heroListing[0].title}</Typography>
                            <Typography variant="body" >{heroListing[0].description}</Typography>

                            <Typography variant="body" >{heroListing[0].description}</Typography>




                        </Box>


                    </Grid>
                    <Grid xs={4} sm={4} md={4} lg={4} xl={4} sx={{  }}>
                        <Box sx={{ display: 'flex', justifyContent: 'right'}} >
                        <img src={heroListing[1].image} alt="Logo" style={{ width: '478px', height: '294px' }} />

                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'right', mt: 3}}>
                        <img src={heroListing[2].image} alt="Logo" style={{ width: '478px', height: '294px'  }} />

                        </Box>

                    </Grid>
                </Grid>
            </Box>
        </>

    )
}