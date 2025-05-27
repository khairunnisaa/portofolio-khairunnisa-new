import React from 'react';
import { Outlet } from 'react-router-dom';
import {Box} from "@mui/material";
import Footer from "../components/Profile/Footer";
import bg from "../assets/images/696.jpg";
import Hero from "../components/Profile/Hero";
import data from "../data/khairunisa-resume.json";
const bodyStyle = {
    px: 2,
    py: 2,
    my: { xs:3, lg: 9 },
    mx: { xs:3, lg: 7 },
    boxShadow: 9,
    borderRadius: 5,
}


const PortfolioLayout:React.FC = () => {

    return(
        <Box sx={bodyStyle}>
            <Box sx={{
                backgroundImage: `url(${bg})`,
                borderRadius: { xs: 4, md: '100px 0 0 0' },
            }}>
                <Hero data={data}/>
                <Outlet />
                <Footer data={data}/>
            </Box>
        </Box>
    )
}

export default PortfolioLayout;
