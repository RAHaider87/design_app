import { Box, Container, IconButton, InputAdornment, InputBase, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Colors } from "../../../data";



export default function SearchBar() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <Box sx={{
            maxWidth: '409px',
            height: '82px',
            gap: '32px',
            width: '100%',


        }}>
            <Box sx={{
                maxWidth: '400px',
                width: '100%',
                height: '28px',
                display:'flex',
            }}>

                <Typography sx={{
                    pl:'5px',
                    
                    font: 'Work Sans',
                    fontWeight: 400,
                    fontSize: '18px',
                    lineHeight: '28px',
                    color: '#4B4B5F'
                }}>
                    Search Content
                </Typography>
            </Box>

            <Paper
                component="form"
                sx={{ mt:'5px',ml:'5px', display: 'flex', alignItems: 'center', width: '409px', height:'42px',
                '@media only screen and (max-width: 420px)': {
                    width: '300px',
                } }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Write here"
                    
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

        </Box>
    )
}