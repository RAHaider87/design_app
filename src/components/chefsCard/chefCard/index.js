import { Box, Grid , Typography} from "@mui/material";
import icon from '../chefAssets/icon.svg'

export default function ChefCard({ card, index }) {
    return (
        <Grid container sx={{
            maxWidth: '100%',
            width: '100%',
            height: '301.21px',
            borderRadius: '10.41px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: (index % 2 === 0) ? '2px' : '79.75px',
            '@media screen and (max-width: 1200px)': {
                marginTop: '2px'
            },
            '&:hover': {
                transform: 'scale(1.05)',
                cursor:'pointer',
            },
        }}>
            <Grid item sx={{
                maxWidth: '100%',
                width: '100%',
                height: '287.24px',
                borderRadius: '8.73px',
                backgroundColor: '#DDE7FF26',

            }}>
                <Box sx={{
                    maxWidth: '15.62px',
                    width: '100%',
                    height: '14.54px',
                    marginLeft: '8.63px',
                    marginTop: '6.56px'
                }}>
                    <img src={icon} alt="Logo" style={{ width: '100%', height: '100%' }} />
                </Box>
                <Box sx={{
                    maxWidth: '124.95px',
                    width: '100%',
                    height: '124.95px',
                    borderRadius: '5.21px',
                    margin: 'auto'
                }}>
                    <img src={card.image} alt="Log" style={{ width: '100%', height: '100%' }} />
                </Box>

                <Box sx={{
                    maxWidth: '196.44',
                    width: '100%',
                    height: 'auto',
                    // marginTop: '23.37px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '23.37px auto'
                }}>
                    <Typography style={{
                        maxWidth: '100%',
                        width: '100%',
                        height: 'auto',
                        fontFamily: 'Work Sans',
                        fontWeight: 500,
                        fontSize: '20.95px',
                        lineHeight: '25.14px',
                        color: '#292D32',
                        textAlign: 'center'
                    }}>
                        {card.title}
                    </Typography>

                    <Typography style={{
                        maxWidth: '100%',
                        width: '100%',
                        height: 'auto',
                        fontFamily: 'Work Sans',
                        fontWeight: 300,
                        fontSize: '13.95px',
                        lineHeight: '20.95px',
                        color: '#FF611D',
                        textAlign: 'center'
                    }}>
                        <span style={{ color: '#292D32' }}>From </span>
                        {card.subTitle}
                    </Typography>

                    <Typography style={{
                        marginTop: '6.07px',
                        maxWidth: '196.44px',
                        width: '100%',
                        height: 'auto',
                        fontFamily: 'Work Sans',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20.95px',
                        color: '#292D32',
                        textAlign: 'center'
                    }}>
                        {card.discription}
                    </Typography>

                </Box>

            </Grid>

        </Grid>
    )
}