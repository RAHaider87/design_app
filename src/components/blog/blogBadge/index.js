import { Box, Typography } from "@mui/material";

export default function Badge({ blog }) {
    return (
        <Box backgroundColor={blog.textBackColor} color={blog.textColor} borderRadius={blog.badgeRadius}
            sx={{
                width: 'auto',
                height: '28px',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: '2px',
                paddingLeft: '10px',
                paddingRight: '10px',
                paddingBottom: '2px',
                marginRight: '5px',
                marginBottom: '12px'
            }}>
            <Typography sx={{ fontFamily: 'Work Sans', fontWeight: 500, fontSize: '14px', lineHeight: '23px', alignItems: 'center' }}>
                {blog.text}
            </Typography>
        </Box>
    )
}