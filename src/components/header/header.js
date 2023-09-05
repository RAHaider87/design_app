import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import logoImage from '../../naveBarLogo/NavLogo.png';


export default function Header() {
    return (
        <AppBar sx={{ backgroundColor: '#FFFFFF', position: 'static', width: '100%', maxWidth: '1920px', margin: '0 auto' }}>
            {/* <Container> */}
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', maxWidth: '1680px', margin: '0 auto' }}>
                <Grid container alignItems="center" >
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
            </Box >
            {/* </Container> */}
        </AppBar>
    )
}