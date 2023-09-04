import { AppBar, Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, List, ListItemText, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import logoImage from '../../naveBarLogo/NavLogo.png';
import { Colors } from '../../data/index';
import { heroListing } from '../../data';
import { activityLog } from '../../data';
import { articles } from '../../data';
import { FooterTitle, SubscribeTf} from '../../style/home';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendIcon from '@mui/icons-material/Send';


export default function Home() {

    return (
        <>
            <AppBar sx={{ backgroundColor: '#FFFFFF', position: 'static', width: '100%' }}>
                {/* <Container> */}
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '87%', ml: '6%' }}>
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

            <Box sx={{ justifyContent: 'center', alignItems: 'center', height: '100%', width: '78%', ml: '10%', mt: '50px', mb: '50px' }}>
                <Grid container>
                    <Grid xs={5} sm={5} md={5} lg={5} xl={5} width='623px' height='614px' sx={{ backgroundColor: Colors.green }}>
                        <Box  >
                            <img src={heroListing[0].image} alt="Logo" style={{width: '100%' ,height: '614px'}}  />
                            {/* <Typography>{heroListing[0].image}</Typography> */}

                        </Box >
                    </Grid>
                    <Grid xs={3} sm={3} md={3} lg={3} xl={3} sx={{ width: '360px', height: '614px', backgroundColor: Colors.jay_Blue }}>

                        <Box sx={{ flexDirection: 'column', display: 'flex', justifyContent: 'center', color: Colors.white, p: 1, backgroundColor: Colors.denim_Blue, width: '97%', height: '598px' }}>

                            <Typography variant="title" sx={{ width: '50%', mb: 2, height: '5%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.white, color: Colors.black, }} >{heroListing[0].category}</Typography>
                            <Typography variant="h5" sx={{ mb: 2 }}>{heroListing[0].title}</Typography>
                            <Typography variant="body" >{heroListing[0].description}</Typography>
                            <Typography variant="body" sx={{ border: 1, width: '40%', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>{heroListing[0].buttonText}</Typography>

                        </Box >
                    </Grid>
                    <Grid xs={4} sm={4} md={4} lg={4} xl={4} sx={{}}>
                        <Box sx={{ display: 'flex', justifyContent: 'right' }} >
                            <img src={heroListing[1].image} alt="Logo" style={{ width: '95%', height: '294px' }} />
                        </Box >
                        <Box sx={{ display: 'flex', justifyContent: 'right', mt: 3 }}>
                            <img src={heroListing[2].image} alt="Logo" style={{ width: '95%', height: '294px' }} />
                        </Box >
                    </Grid>
                </Grid>

                <Grid container sx={{ width: '78.5%', ml: '10%', mt: '5%', mb: '5%' }}>
                    <Grid xs={12} sm={12} md={12} lg={12} xl={12} sx={{}}>
                        <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                            <Typography variant="h4" sx={{ color: Colors.denim_Blue }}>Activity Log</Typography>
                        </Box >
                    </Grid>
                    {activityLog?.map((activity) => (
                        <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
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

                {/* <Grid container sx={{backgroundColor: Colors.light_Blue, pt: '96px', pl: '100px', pb: '96px', pr: '100px'}}>
                    <Grid xs={6} sm={6} md={6} lg={6} xl={6} sx={{backgroundColor: Colors.Blue}} >
                         <Box  >
                            <img src={articles[0].image} alt="Logo"  />

                         </Box >

                        </Grid>
                    <Grid xs={6} sm={6} md={6} lg={6} xl={6} sx={{backgroundColor: Colors.dim_grey}}>

                        <Box  >


                        </Box >
                    </Grid>

                </Grid> */}

                <Container sx={{ backgroundColor: Colors.light_Blue, width: '100%', maxWidth: 1720, gap: '64px', borderRadius: '16px', paddingTop:'5%', paddingBottom: '5%' }}>

                    <Typography sx={{marginLeft: '7%', fontSize: 24, fontWeight: 'bold' }}>Latest Articles</Typography>

                    <Box sx={{ width: '100%', maxWidth: 1512, height: 'auto', gap: '50px', }}>
                        <Box sx={{ width: '100%', maxWidth: 1448, height: 'auto', gap: '50px', }}>
                            <Grid container spacing={2}>
                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                                    <Box style={{ padding: '10px' }}>
                                        <img src={articles[0].image} alt="Logo"  style={{marginLeft: '12%', width: '90%'}}  />
                                        <Typography sx={{ color: Colors.denim_Blue, mt: 3, mb: 1 ,marginLeft: '12%'}}>
                                            {articles[0].category}
                                        </Typography>
                                        <Typography sx={{marginLeft: '12%'}}>
                                            {articles[0].title}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                        <Box>
                                            <img src={articles[1].image} alt="Logo" width='175px' height='100px' />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                {articles[1].category}
                                            </Typography>
                                            <Typography sx={{ ml: 3 ,marginRight: '15%'}}>
                                                {articles[1].title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                        <Box>
                                            <img src={articles[2].image} alt="Logo" width='175px' height='100px' />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                {articles[2].category}
                                            </Typography>
                                            <Typography sx={{ ml: 3 ,marginRight: '15%'}}>
                                                {articles[2].title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                                        <Box>
                                            <img src={articles[3].image} alt="Logo" width='175px' height='100px' />
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: Colors.denim_Blue, ml: 3, mb: 1 }}>
                                                {articles[3].category}
                                            </Typography>
                                            <Typography sx={{ ml: 3 ,marginRight: '15%'}}>
                                                {articles[3].title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>

            </Box >

            <Box sx={{ background: Colors.black, color: Colors.white, p: { xs: 4, md: 10 }, pt: 12, pb: 12, fontSize: { xs: "12px", md: "14px" } }}>
                <Grid container spacing={2} justifyContent='center' >

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1} >
                        <FooterTitle variant="body1">HEALTH</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    About Us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Order traking
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Privacy &amp; Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Term &amp; Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">ABOUT US</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Wishlist
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">CAREER & FINANCE</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    About Us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Order traking
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Privacy &amp; Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Term &amp; Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1} >
                        <FooterTitle variant="body1">FAMILY</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Wishlist
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1} >
                        <FooterTitle variant="body1">FOOD</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    About Us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Order traking
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Privacy &amp; Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Term &amp; Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">WELLNESS/FITNESS</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Wishlist
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                    
                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">SEX & RELATIONSHIP</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Wishlist
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">LIFESTYLE</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    About Us
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Order traking
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Privacy &amp; Policy
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Term &amp; Conditions
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">BEAUTY AND STYLE</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Login
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Cart
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    My Account
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    Wishlist
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                </Grid>
            </Box>
        </>
    )
}