import { Box, Grid } from "@mui/material";
import { Typography } from "antd";

export default function MessageChefs() {
    return (

        <Grid container sx={{
            maxWidth: '732px',
            width: '100%',
            height: '54px'
        }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Box sx={{
                    maxWidth: '100%',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#FF611D',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '10px 0 10px 0',
                }}>
                    <Typography style={{
                        maxWidth: '109px',
                        width: '100%',
                        height: '29px',
                        fontFamily: 'Work Sans',
                        fontWeight: 500,
                        fontSize: '16px',
                        lineHeight: '29px',
                        color: '#FFFFFF',
                    }}>
                        Message Chef
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    )
}