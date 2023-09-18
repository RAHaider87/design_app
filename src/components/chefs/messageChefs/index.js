import { Grid, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function MessageChefs() {
    const navigate = useNavigate();

    return (
        <Grid container onClick={() => navigate('/home')} sx={{
            maxWidth: '732px',
            width: '100%',
            height: '54px',
            backgroundColor: '#FF611D',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px 0 10px 0',
            cursor: 'pointer',
        }}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography style={{
                    maxWidth: '100%',
                    width: '100%',
                    height: '27px',
                    fontFamily: 'Work Sans',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '29px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                }} >
                    Message Chef
                </Typography>
            </Grid>
        </Grid>
    )
}