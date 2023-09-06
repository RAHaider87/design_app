import { Box, Divider, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../style/home";
import { navlinks } from '../../data/index';
import { Colors } from "../../data/index";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
    return (
        <Box sx={{ maxWidth: '1920px', margin: '0 auto', background: Colors.black, color: Colors.white, pt: 12, pb: 12, fontFamily: "Roboto", fontSize: { xs: "12px", md: "14px" } }}>
            <Box sx={{ maxWidth: '1720px', margin: '0 auto', height: '263px', gap: '40px', width: '100%' }}>

                <Grid container  >

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[1].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography  >
                                    {navlinks[1].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[4].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[5].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[6].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[1].subLinks[7].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[2].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[4].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[5].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[2].subLinks[6].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[3].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[3].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[3].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[3].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[3].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[3].subLinks[4].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[4].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[4].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[4].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[4].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[4].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[4].subLinks[4].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[4].subLinks[5].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[5].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[5].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[5].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[5].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[5].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[5].subLinks[4].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[6].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[6].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[6].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[6].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[6].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[7].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[7].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[7].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[7].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[7].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[8].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[8].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[8].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[8].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[8].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[8].subLinks[4].title}
                                </Typography>
                            </ListItemText>

                        </List>
                    </Grid>

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1" sx={{ textAlign: 'left' }}>{navlinks[8].title}</FooterTitle>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[9].subLinks[0].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[9].subLinks[1].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[9].subLinks[2].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[9].subLinks[3].title}
                                </Typography>
                            </ListItemText>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
                                    {navlinks[9].subLinks[4].title}
                                </Typography>
                            </ListItemText>
                        </List>
                    </Grid>
                </Grid>
            </Box>
            <Divider style={{ backgroundColor: Colors.white, maxWidth: '1720px', margin: '0 auto', width: '100%', marginTop: '50px', marginBottom: '50px' }}></Divider>
            <Box sx={{ maxWidth: '1620px',ml:'100px',  gap: '944px', width: '100%',  height: '39px', display: 'flex'}}>

                <Box  sx={{ maxWidth: '482px',  gap: '944px', width: '100%',  height: '39px'}}>
                    <Typography sx={{fontFamily: 'Lato', fontWeight: 400, fontSize: '24px', lineHeight: '33.6px', letterSpacing: '2%'}}>© 2023 WSH woman help squad</Typography>
                </Box>
                <Box sx={{maxWidth: '194px',  gap: '28px', width: '100%', height: '39px'}}>
                    <InstagramIcon/>
             
                    <TwitterIcon/>
                    <FacebookIcon/>
                    <YouTubeIcon/>
                </Box>
               
            </Box>
        </Box>
    )
}