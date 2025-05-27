import React from 'react';
import {Box, Typography} from "@mui/material";

const Language = () => {
        return (
            <Box sx={{backgroundColor: 'rgba(0,0,0,.5)', padding: '10px', borderRadius: '10px', mt: '10px'}}>
                    <Typography color="white" variant="h6">Language</Typography>
                    <Typography color="white" variant="body2">English ( Fluent )</Typography>
                    <Typography color="white" variant="body2">Bahasa Melayu ( Fluent )</Typography>
                    <Typography color="white" variant="body2">Bahasa Indonesia ( Fluent )</Typography>
            </Box>

        )
}

export default Language;
