import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Footer from '../components/Profile/Footer';
import bg from '../assets/images/696.jpg';
import Hero from '../components/Profile/Hero';
import resumeData from '../data/khairunisa-resume.json';
import { dataRouter } from '../data/router';

const PortfolioLayout: React.FC = () => {
    return (
        <Box
            sx={{
                px: 2,
                py: 2,
                my: { xs: 3, lg: 9 },
                mx: { xs: 3, lg: 7 },
                boxShadow: 9,
                borderRadius: 5,
                overflow: 'hidden',
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: { xs: 4, md: '100px 0 0 0' },
                    p: { xs: 2, sm: 4 },
                }}
            >
                <Hero data={resumeData} router={dataRouter} />
                <Outlet />
                <Footer data={resumeData} />
            </Box>
        </Box>
    );
};

export default PortfolioLayout;
