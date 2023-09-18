import { Box, Button, Grid, Typography } from "@mui/material";
import logoImage from '../../naveBarLogo/NavLogo.png';
import { useNavigate, useLocation } from 'react-router-dom';
import Link from '@mui/material/Link';
import "../header/head.css";

export default function Header() {
    const navigate = useNavigate();
    const location = useLocation();
    const isRouteActive = (path) => {
        return location.pathname === path;
    };

    return (

        // '@media only screen and (max-width: 1820px)': {
        //     maxWidth: '1800px',
        // },
        // '@media only screen and (max-width: 1680px)': {
        //     maxWidth: '1680px',
        // },
        // '@media only screen and (max-width: 1550px)': {
        //     maxWidth: '1560px',
        // },
        // '@media only screen and (max-width: 1410px)': {
        //     maxWidth: '1440px',
        // }

        <Grid container sx={{
            position: 'static',
            maxWidth: '1920px',
            width: '100%',
            height: '100px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 'auto'
        }}>
            <Grid item sx={{
                maxWidth: '1680px',
                width: '100%',
                height: '79.80px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Grid item xs={2} sm={2} md={2} lg={2} xl={2} sx={{
                    maxWidth: '124px',
                    width: '100%',
                    height: '79.80px',
                    display: 'flex',
                    justifyContent: 'left'
                }}>
                    <img src={logoImage} alt="Logo" style={{ width: '154px', height: '100%' }} />
                </Grid>
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10} sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    '&:hover': {
                        cursor: 'pointer',
                    },
                }} >
                    
                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/')} underline="none" color="inherit">
                            Home
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/health') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/health')} underline="none" color="inherit">
                            Health
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/aboutUs') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/aboutUs')} underline="none" color="inherit">
                            About Us
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/career&finance') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/career&finance')} underline="none" color="inherit">
                            Career & Finance
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/family') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/family')} underline="none" color="inherit">
                            Family
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/food') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/food')} underline="none" color="inherit">
                            Food
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/wellness') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/wellness')} underline="none" color="inherit">
                            Wellness
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/sex&relationship') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/sex&relationship')} underline="none" color="inherit">
                            Sex & Relationship
                        </Link>
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            color: isRouteActive('/beauty') ? '#FD6288' : 'black'
                        }}>
                        <Link onClick={() => navigate('/beauty')} underline="none" color="inherit">
                            Beauty
                        </Link>
                    </Typography>

                    <Box sx={{
                        maxWidth: '284px',
                        width: '100%',
                        height: '40px',
                        alignItems: 'end',
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center',
                        gap: '16px',
                    }}>
                        <Button variant="contained">Login</Button>
                        <Button variant="outlined">SignUp</Button>
                    </Box>

                </Grid>
            </Grid>
        </Grid >
    )
}