import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import bgImg from '../../assets/health/head_BG.png'
import headImg from '../../assets/health/head_img.png'
import cliImg from '../../assets/health/cil_badge.png'



export default function HealthBanner() {
    return (
        <Grid container sx={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${bgImg})`,
            display: 'flex',
        }}>
            <Grid item xs={12} sm={12} md={12} lg={7} xl={7}>
                <Box >
<Box sx={{maxWidth:'226px', width:'100%', borderRadius:'10px',display:'flex',color:'#FFFFFF'}}>
<img src={cliImg} alt="Logo" />
<Typography>certificated doctors </Typography>
</Box>
                <Typography sx={{
                    fontFamily:'Inter',
                    fontSize:'70px',
                    lineHeight:'84px',
                    fontWeight:700,
                    color:'#FFFFFF'
                }}>
                    We Are Ready To Help You Access Quick Medical Care At Your Convenience
                </Typography>
                <Typography sx={{
                    fontFamily:'Inter',
                    fontSize:'16px',
                    lineHeight:'28px',
                    fontWeight:500,
                    color:'#FFFFFF'
                }}>
                    Privacy and waiting lines have always been a problem when it comes to health care,
                    especially with the increasing rate of Health and other medical Issues and so
                    Gender Help Squad was designed to cut the waiting line and provide ease of service.
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={5} xl={5} sx={{ border: '1px solid red' }}>
                <img src={headImg} alt="Logo" />
            </Grid>
        </Grid>
    )
}

