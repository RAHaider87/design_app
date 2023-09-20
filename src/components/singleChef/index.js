import { Box, Grid, Typography } from "@mui/material";
import { ChefCardData } from '../chefsCard/cardData/index';
import ChefBadge from "./chefBadge";
import MessageChefs from "../chefs/messageChefs";
import ChefAlbum from "./chefAlbum";

export default function SingleChef() {
    return (
        <>
            <Grid container sx={{
                maxWidth: '1390px',
                width: '100%',
                height: '896px',
                borderRadius: '12px',
                border: 'solid 1px #C4C4C47A',
                display: 'flex',
                '@media screen and (max-width: 1380px)': {
                    height: 'auto',
                },
            }}>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                    <Box sx={{
                        maxWidth: '516px',
                        width: '100%',
                        height: '712px',
                        marginTop: '26px',
                        marginLeft: '26px',
                        '@media screen and (max-width: 1000px)': {
                            maxWidth: '90%',
                            width: '100%',
                            height: '600px',
                            marginTop: '26px',
                            marginLeft: '26px',
                        },
                        '@media screen and (max-width: 900px)': {
                            maxWidth: '60%',
                            width: '100%',
                            height: '400px',
                            margin: 'auto',
                        },
                    }}>
                        <img src={ChefCardData[0].profileimage} alt="Log" style={{
                            maxWidth: '100%',
                            width: '100%',
                            height: '100%',
                        }} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} >
                    <Box sx={{
                        maxWidth: '349px',
                        width: '100%',
                        height: '70px',
                        borderRadius: '0 12px 0 12px',
                        backgroundColor: '#D2FF3A',
                        display: 'flex',
                        marginLeft: 'auto',
                        '@media screen and (max-width: 900px)': {
                            marginTop: '10px',
                        },
                    }}>
                        <Typography sx={{
                            maxWidth: '100%',
                            width: '100%',
                            height: '100%',
                            fontFamily: 'Work Sans',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '32px',
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            {ChefCardData[0].price}
                        </Typography>
                    </Box>
                    <Box sx={{
                        marginLeft: '30px',
                        '@media screen and (max-width: 900px)': {
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: '10px',
                            marginTop: '50px',
                        },
                    }}>
                        <ChefBadge badge={ChefCardData[0]} />
                    </Box>
                    <Box sx={{
                        marginTop: '62px',
                        marginLeft: '30px',

                        '@media screen and (max-width: 1350px)': {
                            marginRight: '30px',
                        },
                        '@media screen and (max-width: 900px)': {
                            paddingLeft: '25px',
                            paddingRight: '25px',
                        },
                    }}>
                        <MessageChefs />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '-400px',
                        marginLeft: '-400px',
                        '@media screen and (max-width: 1380px)': {
                            marginBottom: '0px',
                            marginTop: '50px',
                            marginLeft: '0px',
                            flexWrap: 'wrap',
                        },
                    }}>
                        {ChefCardData[0]?.album?.map((e) => (
                            <ChefAlbum image={e} />
                        ))}
                    </Box>

                </Grid>
            </Grid>
        </>
    )
}