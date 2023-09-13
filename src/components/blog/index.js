import { Box } from "@mui/material";
import SearchBar from "./blogSearchBar";
import BlogCard from "./blogCard";


export default function Blog() {

    return (
        <Box sx={{
            maxWidth:'1440.75px',
            width:'100%',
            height:'auto',
            gap:'29px',
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'flex-start',

        }}>
            <SearchBar/>
            <BlogCard/>
            
        </Box>
    )
}