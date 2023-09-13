import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";
import { ReactComponent as Search } from "../blogAssets/BlogCardImages/search-status.svg";

export default function SearchBar() {
    return (
        <Box sx={{
            maxWidth: '409px',
            gap: '32px',
            height: 'auto',
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
        }}>
            <Box sx={{
                maxWidth: '400px',
                width: '100%',
                height: '28px',
                display: 'flex',
            }}>
                <Typography sx={{
                    paddingLeft: '5px',
                    fontFamily: 'Work Sans',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: '#4B4B5F'
                }}>
                    Search Content
                </Typography>
            </Box>

            <Paper
                sx={{
                    
                    marginLeft: '5px',
                    display: 'flex',
                    alignItems: 'center',
                    maxWidth: '409px',
                    width: '100%',
                    height: '42px',
                    border: '1.5px solid #E8E8EC',
                    boxShadow: 'none',
                    '@media only screen and (max-width: 420px)': {
                        width: '300px',
                    }
                }}>
                <InputBase
                    sx={{ color: '#A0A3BD', ml: 1, flex: 1, fontFamily: 'Work Sans', fontWeight: 400, fontSize: '16px', lineHeight: '22px' }}
                    placeholder="Write here"
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <Search />
                </IconButton>
            </Paper>
        </Box>
    )
}