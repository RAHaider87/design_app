import { Box, Typography } from "@mui/material";
import { BlogBadgeData } from '../data/index';

export default function Badge() {
    return (
        <>
            <Box sx={{ flexWrap: 'wrap',display: 'flex'}}>
                {BlogBadgeData?.map((blog, index) => (

                    <Box key={index} backgroundColor={blog.textBackColor} color={blog.textColor}
                        sx={{
                            width: 'auto',
                            height: '28px',
                            borderRadius: '6px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingTop: '2px',
                            paddingLeft: '10px',
                            paddingRight: '10px',
                            paddingBottom: '2px',
                            marginRight: '10px',
                            marginBottom: '10px'
                        }}
                    >
                        <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 500, fontSize: '14px', lineHeight: '23px', alignItems: 'center' }}>
                            {blog.text}
                        </Typography>
                    </Box>

                ))}
            </Box>
        </>

    )
}