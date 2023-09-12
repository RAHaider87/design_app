import { Box, Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchBar from "./searchBar";
import { Colors } from "../../data";
import BlogCard from "./blogCard";


export default function Blog() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <Box sx={{
            maxWidth:'1440.75px',
            width:'100%',
            height:'auto',
            margin:'100px',
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