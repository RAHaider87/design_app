import { Box, Typography } from "@mui/material";
import SearchBar from "./blogSearchBar";
import BlogCard from "./blogCard";


export default function Blog() {

    return (
        <Box sx={{
            maxWidth:'100%',
            width:'100%',
            height:'auto',
            gap:'29px',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

        }}>
            <Box>

            <Box sx={{
                maxWidth: '400px',
                width: '100%',
                height: '28px',
                display: 'flex',
                marginBottom:'12px',
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
            <SearchBar/>
            </Box>
            <BlogCard/>
            
        </Box>
    )
}