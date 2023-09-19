import { Box, Typography } from "@mui/material";

export default function ChefTitle({card,singleChef}){
    return(
        <Box sx={{
            maxWidth: '196.44',
            width: '100%',
            height: 'auto'
        }}>
            <Typography  style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                fontFamily: 'Work Sans',
                fontWeight: 500,
                fontSize: '20.95px',
                lineHeight: '25.14px',
                color: '#292D32',
                textAlign: (singleChef === true) ? 'left' : 'center',
                // : 'center'
            }}>
                {card.title}
            </Typography>

            <Typography  style={{
                maxWidth: '100%',
                width: '100%',
                height: 'auto',
                fontFamily: 'Work Sans',
                fontWeight: 300,
                fontSize: '13.95px',
                lineHeight: '20.95px',
                color: '#FF611D',
               // textAlign: 'center'
            }}>
                <span style={{ color: '#292D32' }}>From </span>
                {card.subTitle}
            </Typography>

        </Box>
    )
}