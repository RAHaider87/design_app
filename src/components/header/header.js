import { AppBar, Box, Button, Grid, Typography } from "@mui/material";
import logoImage from '../../naveBarLogo/NavLogo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import { Colors } from "../../data";
import "../header/head.css";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();

    const isRouteActive = (path) => {
        return location.pathname === path;
    };

    return (
        <AppBar sx={{
            backgroundColor: '#ffffff',
            position: 'static',
            width: '100%',
            maxWidth: '1920px',
            margin: '0 auto',
            height: '100px',
            '@media only screen and (max-width: 1820px)': {
                maxWidth: '1800px',
            },
            '@media only screen and (max-width: 1680px)': {
                maxWidth: '1680px',
            },
            '@media only screen and (max-width: 1550px)': {
                maxWidth: '1560px',
            },
            '@media only screen and (max-width: 1410px)': {
                maxWidth: '1440px',
            }
        }}>
            {/* <Container> */}
            <Box className="contentBox">
                {/* <Grid container alignItems="center"> */}
                <Box className='logoBox'>
                    <img src={logoImage} alt="Logo" style={{ width: '100%', maxWidth: '124px', height: '80px' }} />
                </Box>

                <Box className='linksBox' >
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
                    <Box className='buttonBox'>
                        <Button variant="contained"  >
                            Login
                        </Button>
                        <Button variant="outlined" sx={{ ml: '18px' }}>SignUp</Button>
                    </Box>
                </Box>
                {/* </Grid> */}
            </Box >
            {/* </Container> */}
        </AppBar>
    )
}