import { AppBar, Box, Button, Grid, Typography } from "@mui/material";
import logoImage from '../../naveBarLogo/NavLogo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Colors } from "../../data";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();


    const isRouteActive = (path) => {
        console.log('location.pathname', location.pathname)
        console.log('path', path)

        return location.pathname === path;
    };

    return (
        <AppBar 
        sx={{ 
            backgroundColor: '#FFFFFF', 
            position: 'static', 
            width: '100%', 
            maxWidth: '1920px', 
            margin: '0 auto',
            height: '100px',
             
            }}>
            {/* <Container> */}
            <Box 
            sx={{ 
            backgroundColor: Colors.dove_gray,
            marginTop: '10.07px',
            marginLeft: '120px',
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center', 
                height: '79.85px', 
                width: '100%', 
                maxWidth: '1680px', 
                gap: '100px',
               
                }}>
                {/* <Grid container alignItems="center"> */}
                    <Box sx={{maxWidth: '124px', width: '100%', height: '79.85px', backgroundColor: Colors.denim_Blue, float:'left'}}>
                        <img src={logoImage} alt="Logo" style={{ width: '100%', maxWidth: 100, height: 'auto' }} />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/')} underline="none" color="inherit">
                                Home
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/health') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/health')} underline="none" color="inherit">
                                Health
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/aboutUs') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/aboutUs')} underline="none" color="inherit">
                                About Us
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/career&finance') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/career&finance')} underline="none" color="inherit">
                                Career & Finance
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/family') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/family')} underline="none" color="inherit">
                                Family
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/food') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/food')} underline="none" color="inherit">
                                Food
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/wellness') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/wellness')} underline="none" color="inherit">
                                Wellness
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/sex&relationship') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/sex&relationship')} underline="none" color="inherit">
                                Sex & Relationship
                            </Link>
                        </Typography>

                        <Typography variant="body1"
                            sx={{
                                color: isRouteActive('/beauty') ? '#FD6288' : 'black',
                                '&:hover': {
                                    cursor: 'pointer'
                                }
                            }}>
                            <Link onClick={() => navigate('/beauty')} underline="none" color="inherit">
                                Beauty
                            </Link>
                        </Typography>
                        {/* Other navigation items */}
                    </Box>

                    <Box>
                        <Button variant="contained" sx={{ mr: '5%', ml: '30%' }}>
                            Login
                        </Button>
                        <Button variant="outlined">SignUp</Button>
                    </Box>
                {/* </Grid> */}
            </Box >
            {/* </Container> */}
        </AppBar>
    )
}