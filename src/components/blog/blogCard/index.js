import { Box, Grid, Typography } from "@mui/material";
import { Colors } from "../../../data";
import { BlogCardData } from '../data';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function BlogCard() {
    return (
        <>
            {BlogCardData?.map((blog, index) => (
                <Grid container style={{
                    maxWidth: '1440.75px',
                    height: 'auto',
                    width: '100%',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    border: '1px solid #E6E6E6',
                    
                }}>


                    <Grid item key={index} xs={12} sm={12} md={4} lg={3} xl={3} sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        

                        
                    }}>
                        <Grid sx={{
                            maxWidth: '268.58px',
                            height: '100%',
                            width: '100%',
                            borderRadius: '8px',
                           
                            '@media only screen and (max-width: 900px)': {
                                maxWidth: '850px',
                            }

                        }}>
                            <img src={blog.image} alt="Logo" />

                        </Grid>

                    </Grid>


                    <Grid item key={index} xs={12} sm={12} md={8} lg={9} xl={9} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Grid sx={{
                            maxWidth: '1060px',
                            height: '173px',
                            width: '100%',
                       
                            mt: '20px',
                            
                        }}>
                            <Box sx={{ display: 'flex',justifyContent: 'space-between',
                             }}>

                                <Box sx={{
                                    maxWidth: '739px',
                                    height: '92pxpx',
                                    width: '100%',
                                }}>
                                    <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 500, fontSize: '24px', lineHeight: '32px', color: '#292D32' }}>{blog.title}</Typography>
                                    <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 400, fontSize: '16px', lineHeight: '24px', color: '#6B7280' }}>{blog.discription}</Typography>
                                </Box>
                                <Box >
                                    <FavoriteIcon sx={{color:'#FF611D',mr:'15px',
                                     '@media only screen and (max-width: 900px)': {
                                        mr:'30px'},
                                        '@media only screen and (max-width: 370px)': {
                                            mr:'5px'}
                                     }}/>
                                </Box>
                            </Box>

                        </Grid>

                    </Grid>


                </Grid>
            ))}
        </>
    )
}