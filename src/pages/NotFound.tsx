import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
        >
            <Typography variant="h1" fontWeight="bold" color="error">
                404
            </Typography>
            <Typography variant="h5" mb={2}>
                Page Not Found
            </Typography>
            <Typography variant="body1" mb={4}>
                Sorry, the page you're looking for doesn't exist.
            </Typography>
            <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;
