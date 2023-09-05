import { Box, Grid, List, ListItemText, Typography } from "@mui/material";
import { FooterTitle } from "../../style/home";
import {navlinks} from '../../data/index';
import { Colors } from "../../data/index";

export default function Footer(){
    return(
        <Box sx={{ maxWidth: '1920px', margin: '0 auto', background: Colors.black, color: Colors.white, pt: 12, pb: 12,fontFamily: "Roboto", fontSize: { xs: "12px", md: "14px" } }}>
                <Grid container spacing={2} justifyContent='center' >

                    <Grid item xs={4} sm={4} md={3} lg={3} xl={1.5} >
                        <FooterTitle variant="body1">{navlinks[1].title}</FooterTitle>
                        <List>
                            <ListItemText>
                                <Typography lineHeight={2} variant="caption2">
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
                        <FooterTitle variant="body1">{navlinks[2].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[3].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[4].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[5].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[6].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[7].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[8].title}</FooterTitle>
                        <List>
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
                        <FooterTitle variant="body1">{navlinks[8].title}</FooterTitle>
                        <List>
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
    )
}