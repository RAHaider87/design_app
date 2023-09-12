import styled from "@emotion/styled";
import { Box, Container } from "@mui/material";
import { Colors } from "../../data";
import foodBackground from '../../assets/food/background/backgroundFood.png';


// export const Product = styled(Box)({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//     [theme.breakpoints.up("md")]: {
//       position: "relative",
//     },

//   });



export const FoodStyle = {

  HF_Container:
  {
    maxWidth: '1920px',
    width: '100%',
    height: 'auto',
    gap: '50px',
  },

  HF_Typography:
  {
    color: Colors.black,
    fontFamily: 'Roboto',
    paddingBottom: '50px',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '59px',
  },

  HF_GridContainer:
  {
    maxWidth: '1280px',
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingBottom: '96px',
  },

  Parent_Box:
  {
    maxWidth: '1920px', 
    width: '100%', 
    height: 'auto', 
    gap: '120px', 
    top: '100px', 
    margin: 'auto'
  },

  BackgroundImage_Box:
  {
    backgroundImage: `url(${foodBackground})`, 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat', 
    maxWidth: '1920px', 
    width: '100%', 
    height: '900px', 
    gap: '100px', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  BackgroundContent_Box:
  {
    maxWidth: '1024px', 
    height: '231px', 
    top: '334px', 
    left: '448px', 
    paddingLeft: '32px', 
    paddingRight: '32px', 
    gap: '32px'  
  },

  BackgroundContent_Typography1:
  {
    color: Colors.white, 
    fontFamily: 'Inter', 
    fontWeight: 700, 
    fontSize: '70px', 
    lineHeight: '84.72px', 
    alignItems: 'center'  
  },

  BackgroundContent_Typography2:
  {
    color: Colors.white, 
    fontFamily: 'Roboto', 
    fontWeight: 600, 
    fontSize: '32px', 
    lineHeight: '37.5px', 
    alignItems: 'center'  
  },

  BackgroundContent_Button:
  {
    color: '#A5C8FF', 
    gap: '10px', 
    borderRadius: '10px', 
    border: 0
  },

  Content_Box:
  {
    maxWidth: '1646px', 
    width: '100%', 
    height: '2300px', 
    gap: '120px', 
    margin: 'auto', 
    padding: '10px', 
    mb: 12
  },

  Categories1:
  {
    maxWidth: '1646px', 
    width: '100%', 
    height: '480px', 
    gap: '83px', 
    display: 'flex'
  },

  Categories2:
  {
    maxWidth: '1646px', 
    width: '100%', 
    height: '480px', 
    gap: '83px', 
    mt: 16, 
    display: 'flex'
  },

  CategoriImage1_Box:
  {
    width: '458px', 
    height: '480px', 
    borderRadius: '10px', 
    backgroundColor: Colors.secondary
  },

  CategoriImage2_Box:
  {
    width: '458px', 
    height: '480px', 
    borderRadius: '10px', 
    backgroundColor: Colors.secondary, 
    display: 'flex', 
    justifyContent: 'right'
  },

  CategoriImage1:
  {
    width: '745px', 
    height: '420px', 
    marginTop: '30px', 
    marginLeft: '30px', 
    borderRadius: '10px'
  },

  CategoriImage2:
  {
    width: '745px', 
    height: '420px', 
    marginTop: '30px', 
    marginRight: '30px', 
    borderRadius: '10px'
  },

  CategoriContent1_Box:
  {
    maxWidth: '767.59px', 
    width: '100%', 
    height: '168px', 
    gap: '40px', 
    marginTop: '156px', 
    marginLeft: '337px'
  },

  CategoriContent2_Box:
  {
    maxWidth: '767.59px', 
    width: '100%', 
    height: '168px', 
    gap: '40px', 
    marginTop: '156px', 
    marginRight: '337px'
  },

  CategoriContent_Typography:
  {
    textAlign: 'start', 
    color: Colors.black, 
    fontFamily: 'Roboto', 
    fontWeight: 700, 
    fontSize: '40px', 
    lineHeight: '46.88px'
  },

  CategoriContent_Button:
  {
    display: 'flex', 
    maxWidth: '120px', 
    width: '100%', 
    height: '28px', 
    borderRadius: '50px', 
    pl: '20px', 
    pr: '20px', 
    pt: '5px', 
    pb: '5px', 
    mt: '35px', 
    backgroundColor: '#FCBFCB33'
  },

}



































{/* <Box sx={{
                            maxWidth: '1920px',
                            width: '100%',
                            height: '452px',
                            display: 'flex',
                            justifyContent: 'center',
                            '@media screen and (max-width: 1230px)': {
                                maxWidth: '1150px',
                                width: '100%',
                                height: '422px',
                            }
                        }}> 
                       
                            {HealthyFood?.map((healthy) => (
                                <Card
                                    sx={{
                                        gap: '32px',
                                        mr: '12px',
                                        ml: '12px',
                                        p: '24px',
                                        maxWidth: "384px",
                                        height: '356px',
                                        width: '100%',
                                        justifyContent: 'center',
                                        '@media screen and (max-width: 1230px)': {
                                            gap: '26px',
                                            mr: '9px',
                                            ml: '9px',
                                            p: '20px',
                                            maxWidth: "270px",
                                            height: '326px',
                                            width: '100%',
                                        }
                                    }}
                                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image={healthy.image}
                                            alt="green iguana"
                                            maxWidth="336px"
                                            width="100%"
                                            height="240px"
                                            sx={{
                                                '@media screen and (max-width: 1230px)': {
                                                    maxWidth: "300px",
                                                    height: '220px',
                                                    width: '100%',
                                                }
                                            }}
                                        />
                                        <CardContent>
                                            <Typography variant="title" sx={{
                                                float: 'left',
                                                fontSize: '16px',
                                                fontWeight: 600,
                                                fontFamily: 'Roboto',
                                                lineHeight: '26px',
                                                mt: '35px',
                                                '@media screen and (max-width: 1230px)': {
                                                    fontSize: '15px',
                                                    fontWeight: 570,
                                                    lineHeight: '23px',
                                                    mt: '25px',
                                                }
                                            }} >
                                                {healthy.title}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            ))}
                         </Box>  */}


