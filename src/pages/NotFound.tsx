import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import bg from "../assets/images/bg3.jpg";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            height="100vh"
            textAlign="center"
            p={2}
            sx={{
                position: 'relative',
                display: 'flex',
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    position: "absolute",
                    opacity: 0.7,
                    background: "#d7d9dd",
                    width: "100%",
                    height: '100%',
                    zIndex: 1,
                    objectFit: 'cover',
                }}
            />
            <Box sx={{zIndex: 2}}>
                <Typography variant="h1" fontWeight="bold" color="error">
                    404
                </Typography>
                <Typography variant="h4" mb={2}>
                    Page Not Found
                </Typography>
                <Typography variant="body1" mb={4}>
                    Sorry, the page you're looking for doesn't exist.
                </Typography>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Go to Home
                </Button>
            </Box>

        </Box>
    );
};

export default NotFound;
