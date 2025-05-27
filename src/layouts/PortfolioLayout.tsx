import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../components/Navbar";
import {Box} from "@mui/material";
import Footer from "../components/Footer";

const bodyStyle = {
    px: 5,
    py: 5,
    my: { xs:3, lg: 9 },
    mx: { xs:3, lg: 7 },
    boxShadow: 9,
    borderRadius: 5,
}
const PortofolioLayout:React.FC = () => {

    return(
        <>
            <Navbar />
            <Box sx={bodyStyle}>
                <Outlet />
            </Box>
            <Footer/>
        </>
    )
}

export default PortofolioLayout;
